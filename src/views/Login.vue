<script lang="ts" setup>
import {useRouteQuery} from "@vueuse/router";
import {reactive} from "vue";
import axios from "axios";
import {useRoute, useRouter} from "vue-router";

const code = useRouteQuery('code')
const from = useRouteQuery('from')

const form = reactive({
  code: code.value,
})

const {push} = useRouter()

axios.post("https://api.hikit.io/auth/login", form).then(value => {
  if (from.value) {
    window.location.href = from.value as string
  } else {
    push({path:'/profile'})
  }
}).catch(reason => {

})


</script>

<template>
  <a-space direction="vertical">
    <a-spin size="large"></a-spin>
    <a-typography-text v-if="from" strong>
      正在登录至 {{ from }}
    </a-typography-text>
    <a-typography-text v-else strong>
      正在登录
    </a-typography-text>
  </a-space>
</template>

<style scoped>

</style>