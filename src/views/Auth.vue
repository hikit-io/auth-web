<script lang="ts" setup>
import {GithubFilled} from "@ant-design/icons-vue";
import {useRouteQuery} from "@vueuse/router";
import {reactive} from "vue";

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

const onLogin = (val:any) => {
  // if (!form.email){
  //
  // }
  // if (!form.password){
  //
  // }
  console.log(val)
}

</script>

<template>
  <a-card class="card">
    <h2>HiAuth</h2>
    <div v-if="from" style="display: flex;flex-direction: row;align-items: center;">
      <a-typography-text>
        你将要登录至
      </a-typography-text>
      <a-button style="padding: 0;" type="link" @click="toUrl(from)">{{ from }}</a-button>
    </div>
    <a-form :model="form" @finish="onLogin">
      <a-form-item name="email" :required="true">
        <a-input v-model:value="form.email" placeholder="Email" addon-after="@hikit.io"></a-input>
      </a-form-item>
      <a-form-item name="password" :required="true">
        <a-input-password v-model:value="form.password" placeholder="Password"></a-input-password>
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit" type="primary" block>Login</a-button>
      </a-form-item>
      <a-divider></a-divider>
      <a-button @click="toUrl(buildGithubUrl(buildRedirectUrl('https://auth.hikit.io/login')))" size="middle" block>
        <div style="display: flex; align-items: center; ">
          <GithubFilled></GithubFilled>
          <div style="width: 100%;">Sign in with Github</div>
        </div>
      </a-button>
    </a-form>
    <span>@Hikit</span>
  </a-card>
</template>

<style scoped>
.card {
  min-width: 300px;
}
</style>