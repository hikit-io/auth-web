<script lang="ts" setup>
import {useRouteQuery} from "@vueuse/router";
import {reactive} from "vue";
import {useRouter} from "vue-router";
import init, {Client, EmailLogin, GithubLogin, LoginParams} from '@hikit/auth-service'
import {useService} from "../compose/useService";

const {push} = useRouter()

const code = useRouteQuery('code', '')
const from = useRouteQuery('from')
const method = useRouteQuery('method')

const form = reactive({
  code: code.value,
})

const routeTo = (firstLogin: boolean, from: string) => {
  if (from) {
    window.location.href = from
  }
  if (firstLogin) {
    push({
      path: 'profile'
    })
  }
}

const client = useService()
if (method.value === "1") {
  client.login(new LoginParams(undefined, new GithubLogin(code.value))).then(value => {
    console.log(value)
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


</script>

<template>
  <a-space direction="vertical">
    <a-spin size="large"></a-spin>
    <a-typography-text v-if="from" strong>
      正在登录至 {{ from }}
    </a-typography-text>
    <a-typography-text v-else strong>
      正在登录
    </a-typography-text>
  </a-space>
</template>

<style scoped>

</style>