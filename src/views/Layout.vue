<script lang="ts" setup>

import {provide} from "vue";
import {Service, useServiceProvide} from "../compose/useService";

const client = await useServiceProvide('https://api.hikit.io')

provide(Service, client)
</script>

<template>
  <var-app-bar>HiAuth</var-app-bar>
  <router-view></router-view>
  <var-divider></var-divider>
  <div style="width: 100%;text-align: center;">
    <h3>@Hikit</h3>
  </div>
</template>

<style scoped>

</style>