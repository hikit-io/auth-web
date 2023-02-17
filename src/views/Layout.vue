<script lang="ts" setup>

import {provide} from "vue";
import {Service, useServiceProvide} from "../compose/useService";
import {AppBar, useAppBar, useAppBarProvide} from "../compose/useAppBar";

const client = await useServiceProvide('https://api.hikit.io')

provide(Service, client)

const {showRight, toggleRight} = useAppBarProvide()
provide(AppBar, {showRight, toggleRight})

</script>

<template>
  <var-app-bar>
    HiAuth
    <template #right>
      <var-menu v-if="showRight" placement="bottom" trigger="hover" :same-width="true">
        <var-button text>
          nieaowei
          <var-icon name="chevron-down"></var-icon>
        </var-button>
        <template #menu>
          <var-cell ripple>Profile</var-cell>
        </template>
      </var-menu>
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