<script setup lang="ts">
import Layout from "./views/Layout.vue";
import {useCookies} from "@vueuse/integrations/useCookies";
import {useRouter} from "vue-router";

const {push} = useRouter()
const cookies = useCookies()

const token = cookies.get("HIKIT")

if (token) {
  push('/profile')
}
</script>

<template>
  <suspense>
    <layout></layout>
  </suspense>
</template>

<style scoped>

</style>
