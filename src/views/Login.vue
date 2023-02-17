<script lang="ts" setup>
import {useRouteQuery} from "@vueuse/router";
import {reactive} from "vue";
import {useRouter} from "vue-router";
import init, {Client, EmailLogin, GithubLogin, LoginParams} from '@hikit/auth-service'
import {useService} from "../compose/useService";
import {useCookies} from "@vueuse/integrations/useCookies";
import {LoadingBar} from "@varlet/ui";
import {useToggle} from "@vueuse/core";

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

LoadingBar.start()

if (method.value === "1") {
  client.login(new LoginParams(undefined, new GithubLogin(code.value))).then(value => {
    console.log(value)
    routeTo(false, "")

    cookies.set('HIKIT', value.access_token, {
      domain: '.hikit.io'
    })
  }).catch(reason => {
    console.log(reason)
  })
} else {
  client.login(new LoginParams(new EmailLogin("", ""))).then(value => {
    console.log(value)
  }).catch(reason => {
    console.log(reason)
  })
}


const [loading, toggle] = useToggle(false)


const onClick = () => {
  LoadingBar.start()
  // toggle()
}
</script>

<template>
  <var-skeleton fullscreen :loading="loading"/>
  <div class="card" :loading="loading">
    <var-loading type="wave"></var-loading>
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
  </div>
</template>

<style scoped>
.card {
  text-align: center;
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>