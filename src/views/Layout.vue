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
  console.log('[checkLogin]')

  if (token.get()) {
    svc.profile().then(value => {
      console.log(`[checkLogin] ${value}`)
      appBarContext.toggleRight(true)
    }).catch(reason => {
      console.log(`[checkLogin] ${reason}`)
      token.del()
      push('/')
    })
  } else if (to.path === '/login' || to.path === '/') {

  } else {
    push('/')
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
  <div style="flex: 1;"></div>
  <div class="footer">
    <var-divider></var-divider>
    <h4>@HiKit</h4>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  text-align: center;
}
</style>