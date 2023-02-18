<script lang="ts" setup>
import {useAppBar} from "../compose/useAppBar";
import {useService} from "../compose/useService";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useCookies} from "@vueuse/integrations/useCookies";

const {push} = useRouter()

const {showRight, toggleRight} = useAppBar()

const cli = useService()

const account = ref('account')

cli.profile().then(value => {
  account.value = value.account
  toggleRight(true)
})

const logout = () => {
  const cookies = useCookies()
  cookies.remove("HIKIT")
  push('/')
}
</script>

<template>
  <var-menu v-if="showRight" placement="bottom" trigger="hover" :same-width="true">
    <var-button text>
      {{ account }}
      <var-icon name="chevron-down"></var-icon>
    </var-button>
    <template #menu>
      <var-cell @click="push({path:'profile'})" ripple>Profile</var-cell>
      <var-cell @click="logout" ripple>Exit</var-cell>
    </template>
  </var-menu>
</template>

<style scoped>

</style>