<script lang="ts" setup>
import {computed, ref} from "vue";
import Loading from "../components/Loading.vue";
import Icon from "../components/Icon.vue"
import {useGetProfileQuery} from "../composable/useService";


const {loading, result} = useGetProfileQuery()

const profile = computed(() => result.value?.profile)

</script>

<template>
  <div class="card">
    <loading v-if="loading" :loading="loading"></loading>
    <div v-else>
      <var-space direction="column">
        <h1>Hi, {{ profile?.name }} </h1>
        <var-list>
          <var-cell title="ID" :description="profile?.id" border>
            <template #icon>
              <var-icon name="email-outlined" :size="34"></var-icon>
            </template>
          </var-cell>
          <var-cell title="Name" :description="profile?.name ? profile.name:'Not setting'" border>
            <template #extra>
              <var-icon name="information-outline" :size="30"></var-icon>
            </template>
          </var-cell>
          <var-cell title="Email" :description="profile?.email ? profile.email:'Not setting'" border>
            <template #extra>
              <var-icon name="information-outline" :size="30"></var-icon>
            </template>
          </var-cell>
          <var-cell title="Account" description="nieaowei" border>
            <template #extra>
              <var-icon name="information-outline" :size="30"></var-icon>
            </template>
          </var-cell>
          <var-cell title="OTP" description="Bind" border>
            <template #extra>
              <icon name="qrcode" :size="30"></icon>
            </template>
          </var-cell>
          <var-cell title="Github" description="nieaowei" border>
            <template #icon>
              <icon name="github" :size="30"></icon>
            </template>
          </var-cell>
        </var-list>
        <var-space>
          <var-button type="primary">
            Change Password
          </var-button>
          <var-button type="danger">
            Delete Account
          </var-button>
        </var-space>
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