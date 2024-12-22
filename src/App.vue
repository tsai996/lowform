<script setup lang="ts">
import { useGlobalStore } from '@/stores/global'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const globalStore = useGlobalStore()
globalStore.switchMode()
</script>

<template>
  <el-config-provider namespace="el" :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped lang="scss">
#app {
  color: var(--el-text-color-primary);
}
</style>
