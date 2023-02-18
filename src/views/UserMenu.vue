<script lang="ts" setup>
import {useAppBar} from "../compose/useAppBar";
import {useService} from "../compose/useService";
import {ref} from "vue";

const {showRight, toggleRight, onProfile, logout} = useAppBar()

const cli = useService()

const account = ref('account')

if (showRight.value) {
  cli.profile().then(value => {
    account.value = value.account
    toggleRight(true)
  })
}

</script>

<template>
  <var-menu v-if="showRight" placement="bottom" trigger="hover" :same-width="true">
    <var-button text>
      {{ account }}
      <var-icon name="chevron-down"></var-icon>
    </var-button>
    <template #menu>
      <var-cell @click="onProfile" :ripple="true">Profile</var-cell>
      <var-cell @click="[logout]" :ripple="true">Exit</var-cell>
    </template>
  </var-menu>
</template>

<style scoped>

</style>