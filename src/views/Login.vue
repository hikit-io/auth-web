<script lang="ts" setup>
import { useRouteQuery } from '@vueuse/router'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { EmailLoginParams, GithubLoginParams, LoginParams, useLoginMutation } from '@/composable/useService'
import { useAccessToken } from '@/composable/useAccessToken'

const { push } = useRouter()
const token = useAccessToken()

const code = useRouteQuery('code', '')
const from = useRouteQuery('from')
const method = useRouteQuery('method')

const routeTo = (firstLogin: boolean, from: string) => {
  if (from) {
    window.location.href = from
  } else {
    push('/profile')
  }
}

const genLoginParams = () => {
  if (method.value === 'github') {
    return {
      github: {
        code: code.value,
      } as GithubLoginParams,
    } as LoginParams
  }
  const unAndPass = window.atob(code.value).split(':')
  return {
    email: {
      email: unAndPass[0] ?? '',
      password: unAndPass[1] ?? '',
    } as EmailLoginParams,
  } as LoginParams
}

const {
  mutate: login,
  loading,
  onError: onLoginError,
  onDone: onLoginSuccess,
} = useLoginMutation({
  variables: {
    by: genLoginParams(),
  },
})

onLoginSuccess((param) => {
  console.log(`[onLoginSuccess] ${param.data}`)
  if (param.data) {
    routeTo(false, from.value as string)
  }
  console.log(param.errors)
})

onLoginError((param) => {
  console.log('[onLoginError] ')
  console.log(param.message)
  push('/')
})

onMounted(() => {
  if (token.get()) {
    routeTo(false, from.value as string)
  } else if (method.value) {
    login()
  }
})
</script>

<template>
  <div class="card">
    <var-loading :loading="loading" type="wave" size="large">
      <template #description>
        <var-space direction="column">
          <var-space v-if="from" justify="center">
            <h3>正在登录至</h3>
            <h3>
              <var-link type="info" :href="from.toString()"> {{ from }}</var-link>
            </h3>
          </var-space>
          <h3 v-else>正在登录</h3>
        </var-space>
      </template>
    </var-loading>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  min-height: 300px;
}
</style>
@/composable/useAccessToken
