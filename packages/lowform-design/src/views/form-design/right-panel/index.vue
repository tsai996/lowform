<script setup lang="ts">
import Props from './props/index.vue'
import Event from './event/index.vue'

const activeName = ref('form')
</script>
<template>
  <el-tabs v-model="activeName" stretch class="h-full">
    <el-tab-pane label="属性" name="form" class="h-full">
      <el-scrollbar>
        <Props />
      </el-scrollbar>
    </el-tab-pane>
    <el-tab-pane label="事件" name="event" class="h-full">
      <el-scrollbar>
        <Event />
      </el-scrollbar>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
:deep(.el-tabs__header) {
  margin: 0;
}
</style>
