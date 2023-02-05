<script lang="ts" setup>
import {GithubFilled} from "@ant-design/icons-vue";
import {useRouteQuery} from "@vueuse/router";

const from = useRouteQuery('from', '')

const toUrl = (url: string) => {
  window.location.href = url
}

const buildGithubUrl = (url: string): string => {
  return `https://github.com/login/oauth/authorize?client_id=7bf3cf55fcc4a2c315d0&scope=read:user&redirect_uri=${url}`
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
    <a-form>
      <a-form-item>
        <a-input placeholder="Email"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input placeholder="Password"></a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" block>Login</a-button>
      </a-form-item>
      <a-divider></a-divider>
      <a-button @click="toUrl(buildGithubUrl('https://oauth.hikit.io/login'))" size="middle" block>
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