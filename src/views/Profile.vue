<script lang="ts" setup>
import {useService} from "../compose/useService";
import {provide, reactive, ref} from "vue";
import {ProfileResp} from "@hikit/auth-service";

const client = useService()

const profile = ref<ProfileResp>()

client.profile().then(value => {
  profile.value = value
}).catch(reason => {
  console.log(reason)
})
</script>

<template>
  <a-card>
    <a-typography-title>Hi, {{ profile?.id}}</a-typography-title>
  </a-card>
</template>›

<style scoped>

</style>