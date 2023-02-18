<script lang="ts" setup>
import {useAppBar} from "../compose/useAppBar";
import {useService} from "../compose/useService";
import {ref} from "vue";

const {showRight, toggleRight} = useAppBar()

const cli = useService()

const account = ref('')

cli.profile().then(value => {
  account.value = value.account
  toggleRight(true)
})

</script>

<template>
  <var-menu v-if="showRight" placement="bottom" trigger="hover" :same-width="true">
    <var-button text>
      {{ account }}
      <var-icon name="chevron-down"></var-icon>
    </var-button>
    <template #menu>
      <var-link :to="{ path:'/profile' }">Profile</var-link>
      <var-button :text="true">Exit</var-button>
    </template>
  </var-menu>
</template>

<style scoped>

</style>