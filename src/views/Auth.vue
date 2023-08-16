<script lang="ts" setup>
import {useRouteQuery} from "@vueuse/router";
import {reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useAccessToken} from "../compose/useAccessToken";

const from = useRouteQuery('from', '')

const form = reactive({
  email: '',
  password: ''
})

const toUrl = (url: string) => {
  window.location.href = url
}

const buildGithubUrl = (redirectUrl: string): string => {
  console.log(`[auth] redirectUrl: ${redirectUrl}`)
  return `https://github.com/login/oauth/authorize?client_id=7bf3cf55fcc4a2c315d0&scope=read:user,read:org&redirect_uri=${redirectUrl}`
}
const buildRedirectUrl = (url: string): string => {
  if (from.value) {
    return `${url}?method=1%26from=${from.value}`
  }
  return `${url}?method=1`
}


const onLogin = () => {

}

const emailSuffix = ref('@hikit.io')

const {push} = useRouter()

const token = useAccessToken()

if (token.get()) {
  const {query} = useRoute()
  push({
    path: '/login',
    query: query
  })
}

</script>

<template>
  <div style="width: 100%; text-align: center;">
    <div class="card">
      <var-space v-if="from" :size="'small'">
        <span style="font-size: 20px;">
          你将要登录至
        </span>
        <var-link text-size="20" type="primary" :href="from" target="_blank">{{ from }}</var-link>
      </var-space>
      <var-form ref="form">
        <var-space direction="column" :size="[14, 0]" :wrap="false">
          <var-row justify="center">
            <var-col :span="16">
              <var-input v-model="form.email" placeholder="Email" autofocus>
              </var-input>
            </var-col>
            <var-col :span="8">
              <var-select v-model="emailSuffix" style="min-width: 100px;">
                <var-option label="@hikit.io"></var-option>
              </var-select>
            </var-col>
          </var-row>
          <var-input v-model="form.password" placeholder="Password" type="password"></var-input>
          <var-button type="primary" @click="onLogin" ripple block> Login</var-button>
          <var-divider></var-divider>
          <var-button text outline @click="toUrl(buildGithubUrl(buildRedirectUrl('https://auth.hikit.io/login')))"
                      size="normal"
                      block>
            <var-space direction="row" align="center">
              <var-icon name="github"></var-icon>
              <div style="width: 100%;">Sign in with Github</div>
            </var-space>
          </var-button>
        </var-space>
      </var-form>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: inline-block;
  max-width: 300px;
  padding: 1rem;
  text-align: start;
}
</style>