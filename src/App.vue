<script setup lang="ts">
import Layout from "./views/Layout.vue";
import {useCookies} from "@vueuse/integrations/useCookies";
import {useRouter} from "vue-router";
import {useDebug} from "./compose/useDebug";

// useDebug()

const {push} = useRouter()
const cookies = useCookies()

const token = cookies.get("HIKIT")

if (token) {
  push('/profile')
} else {
  push('/')
}

cookies.removeChangeListener((options) => {
  console.log(options)
  if (options.name == "HIKIT") {
    push('/')
  }
})

cookies.addChangeListener((options) => {
  if (options.name == "HIKIT") {
    push('/profile')
  }
})

</script>

<template>
  <suspense>
    <layout></layout>
  </suspense>
</template>

<style scoped>

</style>
