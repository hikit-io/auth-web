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
  <div class="card">
    <div style="min-width: 50%;">
      <h1>Hi, Nekilc </h1>
      <var-list>
        <var-cell title="Name" description="Nekilc"></var-cell>
        <var-cell title="Email" description="nieaowei@hikit.io" ></var-cell>
        <var-cell title="Account" description="nieaowei" ></var-cell>
        <var-cell title="Github" description="nieaowei" ></var-cell>
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