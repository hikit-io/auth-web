<script lang="ts" setup>

import {provide} from "vue";
import {AppBar, useAppBarProvide, AppBarContext} from "../compose/useAppBar";
import UserMenu from "./UserMenu.vue";
import {useAccessToken} from "../compose/useAccessToken";
import {useRoute, useRouter} from "vue-router";
import {useGetNameLazyQuery} from "../composable/useService";


// App bar state manage
const appBarContext = useAppBarProvide()
provide(AppBar, appBarContext as AppBarContext)

// Check Login
const router = useRouter()
const route = useRoute()
const token = useAccessToken()
const {push} = useRouter()

const {result, load, onResult, onError} = useGetNameLazyQuery()

onResult(param => {
  if (param.data.profile) {
    appBarContext.toggleRight(true)
  }
})

onError(param => {
  token.del()
  push('/')
})


router.beforeResolve((to, from) => {
  if (to.path === '/login' || to.path === '/'){

  }else {
    load()
  }
  // console.log('[checkLogin]')
  //
  // if (token.get()) {
  //   svc.profile().then(value => {
  //     console.log(`[checkLogin] ${value}`)
  //     appBarContext.toggleRight(true)
  //   }).catch(reason => {
  //     console.log(`[checkLogin] ${reason}`)
  //     token.del()
  //     push('/')
  //   })
  // } else if (to.path === '/login' || to.path === '/') {
  //
  // } else {
  //   push('/')
  // }
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