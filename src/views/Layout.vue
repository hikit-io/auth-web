<script lang="ts" setup>

import {provide} from "vue";
import {Service, useServiceProvide} from "../compose/useService";

const client = await useServiceProvide('https://api.hikit.io')

provide(Service, client)
</script>

<template>
<router-view></router-view>
</template>

<style scoped>

</style>