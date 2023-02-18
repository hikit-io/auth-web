<script lang="ts" setup>

import {provide} from "vue";
import {Service, useServiceProvide} from "../compose/useService";
import {AppBar, useAppBarProvide, AppBarContext} from "../compose/useAppBar";
import UserMenu from "./UserMenu.vue";

// Api Service
const client = await useServiceProvide('https://api.hikit.io')
provide(Service, client)

// App bar state manage
const {showRight, toggleRight} = useAppBarProvide()
provide(AppBar, {showRight, toggleRight} as AppBarContext)

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