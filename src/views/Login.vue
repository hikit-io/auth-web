<script lang="ts" setup>
import {useRouteQuery} from "@vueuse/router";
import {reactive} from "vue";
import {useRouter} from "vue-router";
import init, {Client, EmailLogin, GithubLogin, LoginParams} from '@hikit/auth-service'
import {useService} from "../compose/useService";
import {useCookies} from "@vueuse/integrations/useCookies";
import {LoadingBar} from "@varlet/ui";
import {useToggle} from "@vueuse/core";
import {useAppBar} from "../compose/useAppBar";

const {push} = useRouter()

const code = useRouteQuery('code', '')
const from = useRouteQuery('from')
const method = useRouteQuery('method')

const form = reactive({
  code: code.value,
})

const routeTo = (firstLogin: boolean, from: string) => {
  push({
    path: '/profile'
  })
  // if (from) {
  // window.location.href = from
  // }
  // if (firstLogin) {
  //   push({
  //     path: '/profile'
  //   })
  // }
}

const cookies = useCookies()

const client = useService()

const onSuccess = () => {
  const {toggleRight} = useAppBar()
  toggleRight(true)
}

if (method.value === "1") {
  client.login(new LoginParams(undefined, new GithubLogin(code.value))).then(value => {
    console.log(value)
    routeTo(false, "")

    cookies.set('HIKIT', value.access_token, {
      domain: '.hikit.io'
    })
    onSuccess()
  }).catch(reason => {
    console.log(reason)
  })
} else {
  client.login(new LoginParams(new EmailLogin("", ""))).then(value => {
    console.log(value)
    onSuccess()
  }).catch(reason => {
    console.log(reason)
  })
}


const [loading, toggle] = useToggle(false)


</script>

<template>
  <div class="card">
    <var-loading :loading="loading" type="wave" size="large">
      <template #description>
        <var-space direction="column">
          <var-space v-if="from" justify="center">
            <h3>
              正在登录至
            </h3>
            <h3>
              <var-link type="info" :href="from.toString()"> {{ from }}</var-link>
            </h3>
          </var-space>
          <h3 v-else>
            正在登录
          </h3>
        </var-space>
      </template>
    </var-loading>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>