<script lang="ts" setup>
import {computed} from "vue";
import Icon from "../components/Icon.vue"
import {useDeleteAccountMutation, useGetProfileQuery} from "../composable/useService";
import {Dialog, Snackbar} from "@varlet/ui";
import '@varlet/ui/es/dialog/style'

const {loading, result} = useGetProfileQuery()

const profile = computed(() => result.value?.profile)

const {mutate: deleteAccount, loading: deleteLoading} = useDeleteAccountMutation()

const actions = {
  confirm: () => {
    deleteAccount().then(value => {
      Snackbar.success("Delete success")
    }).catch(reason => {
      Snackbar.error("Delete failed")
    })
  },
  cancel: () => {
  },
  close: () => {
  }
}

const onDeleteAccount = async () => {
  actions[await Dialog({
    message: "After deleting the account, you will not be able to use the .hikit.io website.",
    title: 'Are you sure?'
  })]();
}

</script>

<template>
  <div class="card">
    <Loading v-if="loading||deleteLoading" :loading="loading||deleteLoading"></Loading>
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
          <var-button type="danger" @click="onDeleteAccount">
            Delete Account
          </var-button>
        </var-space>
      </var-space>
    </div>
  </div>
</template>›

<style scoped>
.card {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>