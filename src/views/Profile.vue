<script lang="ts" setup>
import {useService} from "../compose/useService";
import {ref} from "vue";
import {ProfileResp} from "@hikit/auth-service";
import Loading from "../components/Loading.vue";
import {useToggle} from "@vueuse/core";

const client = useService()

const profile = ref<ProfileResp>()

const [loading, toggle] = useToggle(true)

client.profile().then(value => {
  profile.value = value
  toggle()
}).catch(reason => {
  console.log(reason)
})

</script>

<template>
  <div class="card">
    <loading v-if="loading" :loading="loading"></loading>
    <div v-else>
      <h1>Hi, {{ profile?.account }} </h1>
      <var-list>
        <var-cell title="Name" description="Nekilc"></var-cell>
        <var-cell title="Email" description="nieaowei@hikit.io"></var-cell>
        <var-cell title="Account" description="nieaowei"></var-cell>
        <var-cell title="Github" description="nieaowei"></var-cell>
      </var-list>
      <var-space>
        <var-button type="primary">
          Change Password
        </var-button>
        <var-button type="primary">
          Change Password
        </var-button>
      </var-space>
    </div>
  </div>
</template>›

<style scoped>
.card {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>