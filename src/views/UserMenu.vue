<script lang="ts" setup>
import {useAppBar} from "../compose/useAppBar";
import {computed, watch} from "vue";
import {useGetNameLazyQuery} from "../composable/useService";

const {showRight, toggleRight, onProfile, logout} = useAppBar()


const {result, load, onResult} = useGetNameLazyQuery()

const account = computed(() => result.value?.profile.name)

onResult(param => {
  if (param.data.profile) {
    toggleRight(true)
  }
})

watch(showRight, (value) => {
  if (value) {
    load()
  }
})

</script>

<template>
  <var-menu v-if="showRight" placement="bottom" trigger="hover" :same-width="true">
    <var-button text>
      {{ account }}
      <var-icon name="chevron-down"></var-icon>
    </var-button>
    <template #menu>
      <var-cell @click="onProfile" :ripple="true">Profile</var-cell>
      <var-cell @click="logout" :ripple="true">Exit</var-cell>
    </template>
  </var-menu>
</template>

<style scoped>

</style>