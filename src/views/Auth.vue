<script lang="ts" setup>
import {GithubFilled} from "@ant-design/icons-vue";
import {useRouteQuery} from "@vueuse/router";
import {reactive, ref} from "vue";

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

const onLogin = (val: any) => {
  console.log(val)
}

const emailSuffix = ref('@hikit.io')
</script>

<template>
  <div style="width: 100%; text-align: -webkit-center;">
    <div class="card">
      <div v-if="from" style="display: flex;flex-direction: row;align-items: center;">
      <span style="font-size: 20px;">
        你将要登录至
      </span>
        <var-link text-size="20" type="primary" :href="from" target="_blank">{{ from }}</var-link>
      </div>
      <var-form ref="form">
        <var-space direction="column" :size="[14, 0]">
          <var-space :size="[0,0]">
            <var-input v-model="form.email" placeholder="Email" autofocus>
            </var-input>
            <var-select v-model="emailSuffix" style="width: 100px;">
              <var-option label="@hikit.io"></var-option>
            </var-select>
          </var-space>
          <var-input v-model="form.password" placeholder="Password" type="password"></var-input>
          <var-button type="primary" ripple block> Login</var-button>
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
  max-width: 300px;
  padding: 1rem;
  text-align: start;
}
</style>