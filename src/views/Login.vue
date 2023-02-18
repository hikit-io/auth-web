<script lang="ts" setup>
import {useRouteQuery} from "@vueuse/router";
import {reactive} from "vue";
import {useRouter} from "vue-router";
import {EmailLogin, GithubLogin, LoginParams} from '@hikit/auth-service'
import {useService} from "../compose/useService";
import {useToggle} from "@vueuse/core";
import {useAccessToken} from "../compose/useAccessToken";

const {push} = useRouter()

const code = useRouteQuery('code', '')
const from = useRouteQuery('from')
const method = useRouteQuery('method')

const form = reactive({
  code: code.value,
})

const token = useAccessToken()

const routeTo = (firstLogin: boolean, from: string) => {
  if (from) {
    window.location.href = from
  } else {
    push('/profile')
  }
}

if (token.get()) {
  routeTo(false, from.value as string)
}

const client = useService()

if (method.value === "1") {
  client.login(new LoginParams(undefined, new GithubLogin(code.value))).then(value => {
    token.set(value.access_token)
    routeTo(false, from.value as string)
  }).catch(reason => {
    console.log(reason)
  })
} else if (method.value === "2") {
  client.login(new LoginParams(new EmailLogin("", ""))).then(value => {
    console.log(value)
  }).catch(reason => {
    console.log(reason)
  })
}

const [loading] = useToggle(false)

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