<script lang="ts" setup>

import {onMounted, provide} from "vue";
import {Service, useServiceProvide} from "../compose/useService";
import {AppBar, useAppBarProvide, AppBarContext} from "../compose/useAppBar";
import UserMenu from "./UserMenu.vue";
import {useAccessToken} from "../compose/useAccessToken";
import {useRoute, useRouter} from "vue-router";


// Api Service
const svc = await useServiceProvide('https://api.hikit.io')
provide(Service, svc)

// App bar state manage
const appBarContext = useAppBarProvide()
provide(AppBar, appBarContext as AppBarContext)

// Check Login
const router = useRouter()
const token = useAccessToken()
const {push} = useRouter()

router.beforeResolve((to, from) => {
  if (token.get()) {
    svc.profile().then(value => {
      appBarContext.toggleRight(true)
    }).catch(reason => {
      push('/')
    })
  } else if (to.path === '/login') {

  }
})


</script>

<template>
  <var-app-bar>
    HiAuth
    <template #right>
      <user-menu></user-menu>
    </template>
  </var-app-bar>
  <router-view></router-view>
  <var-divider></var-divider>
  <div style="width: 100%;text-align: center;">
    <h3>@Hikit</h3>
  </div>
</template>

<style scoped>

</style>