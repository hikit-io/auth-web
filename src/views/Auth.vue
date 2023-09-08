<script lang="ts" setup>
import { useRouteQuery } from '@vueuse/router'
import { computed, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAccessToken } from '@/compose/useAccessToken'
import { useBase64 } from '@vueuse/core'

const from = useRouteQuery('from', '')

const form = reactive({
  email: '',
  password: '',
})

const emailSuffix = ref('@hikit.io')

const toUrl = (url: string) => {
  window.location.href = url
}

const buildGithubUrl = (redirectUrl: string): string => {
  console.log(`[auth] redirectUrl: ${redirectUrl}`)
  return `https://github.com/login/oauth/authorize?client_id=7bf3cf55fcc4a2c315d0&scope=read:user,read:org&redirect_uri=${redirectUrl}`
}
const buildRedirectUrl = (url: string, method: 'github' | 'email'): string => {
  if (from.value) {
    return `${url}?method=${method}%26from=${from.value}`
  }
  return `${url}?method=${method}`
}

// let { base64: base64Code } = useBase64(() => new TextEncoder().encode(`${form.email}${emailSuffix.value}:${form.password}`).buffer)

const onLogin = () => {
  const base64Code = window.btoa(`${form.email}${emailSuffix.value}:${form.password}`)
  toUrl(`${buildRedirectUrl(`${import.meta.env.VITE_URL}/login`, 'email')}&code=${base64Code}`)
}

const onLoginWithGithub = () => {
  toUrl(buildGithubUrl(buildRedirectUrl(`${import.meta.env.VITE_URL}/login`, 'github')))
}

const { push } = useRouter()

const token = useAccessToken()

if (token.get()) {
  const { query } = useRoute()
  push({
    path: '/login',
    query: query,
  })
}

// const plaintext = computed(() => window.atob(base64Code.value))
</script>

<template>
  <div style="width: 100%; text-align: center">
    <div class="card">
      <var-space v-if="from" :size="'small'">
        <span style="font-size: 20px"> 你将要登录至 </span>
        <var-link text-size="20" type="primary" :href="from" target="_blank">{{ from }}</var-link>
      </var-space>
      <var-form ref="formRef">
        <var-space direction="column" :size="[14, 0]" :wrap="false">
          <var-row justify="center">
            <var-col :span="16">
              <var-input v-model="form.email" placeholder="Email" style="width: 100%" autofocus></var-input>
            </var-col>
            <var-col :span="8">
              <var-select v-model="emailSuffix" style="min-width: 100px">
                <var-option label="@hikit.io"></var-option>
              </var-select>
            </var-col>
          </var-row>
          <var-input v-model="form.password" placeholder="Password" type="password"></var-input>
          <var-button type="primary" @click="onLogin" ripple block> Login</var-button>
          <var-divider></var-divider>
          <var-button text outline @click="onLoginWithGithub" size="normal" block>
            <var-space direction="row" align="center">
              <var-icon name="github"></var-icon>
              <div style="width: 100%">Sign in with Github</div>
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
  min-width: 300px;
  padding: 1rem;
  text-align: start;
}
</style>
