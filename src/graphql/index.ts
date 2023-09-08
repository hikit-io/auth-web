import { onError } from '@apollo/client/link/error'
import { Snackbar } from '@varlet/ui'
import '@varlet/ui/es/snackbar/snackbar.css'
import { ApolloClient, createHttpLink, from, InMemoryCache, split } from '@apollo/client/core'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { App } from 'vue'
import { ApolloClients } from '@vue/apollo-composable'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      const extension = extensions as {
        code: number
        error: { kind: number; source: string }
      }
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, Source: ${extension.error.source}`)
      if (extension.code == 2) {
        Snackbar({
          type: 'error',
          content: extension.error.source,
          onClose: () => {
            window.location.href = import.meta.env.VITE_URL
          },
        })
        return
      }
      Snackbar({
        type: 'error',
        content: extension.error.source,
      })
    })
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
    Snackbar({
      type: 'error',
      content: `[Network error]${networkError.message}, Please try again later.`,
    })
  }
})

// Cache implementation
const cache = new InMemoryCache()

const authLink = from([
  errorLink,
  createHttpLink({
    uri: 'https://api.hikit.io/auth/',
    credentials: 'include',
  }),
])

const authClient = new ApolloClient({
  link: authLink,
  cache,
})

export const install: (app: App) => void = (app) => {
  app.provide(ApolloClients, {
    default: authClient,
  })
}

export default install
