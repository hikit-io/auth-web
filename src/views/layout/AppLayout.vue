<script lang="ts" setup>
import { useAppBarProvide } from '@/composable/useAppBar'
import { useAccessToken } from '@/composable/useAccessToken'
import { useRoute, useRouter } from 'vue-router'
import { useGetNameLazyQuery } from '@/composable/useService'
import AppBarRight from '@/views/layout/AppBarRight.vue'
import AppBarLeft from '@/views/layout/AppBarLeft.vue'
import useEnv from '@/composable/useEnv'

// Base
const { title, ignoreCheckPaths } = useEnv()
const router = useRouter()

// App bar state manage
const appBarContext = useAppBarProvide()

// Check Login
const token = useAccessToken()

const { load, onResult, onError } = useGetNameLazyQuery()

onResult((param) => {
  if (param?.data?.profile) {
    appBarContext.toggleRight(true)
  }
})

onError((param) => {
  token.del()
  const { query } = useRoute()

  router.push({
    path: '/',
    query: query,
  })
})

router.beforeResolve((to, from) => {
  if (to.path === '/login' || to.path === '/') {
    console.log(1213)
  } else {
    load()
  }
})
</script>

<template>
  <var-app-bar>
    <app-bar-left></app-bar-left>
    <template #right>
      <app-bar-right></app-bar-right>
    </template>
  </var-app-bar>
  <router-view />
  <div style="flex: 1" />
  <div class="footer">
    <var-divider />
    <h4>@HiKit</h4>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  text-align: center;
}
</style>
