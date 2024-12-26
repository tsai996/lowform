<script setup lang="ts">
import type { Ref } from 'vue'
import CodeEditorDialog from './CodeEditorDialog.vue'
import type { FormField } from '@xfc/vue3-form-render'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
const codeEditorDialogRef = ref<InstanceType<typeof CodeEditorDialog>>()
const events = computed(() => Object.keys(activeData.value?.on || {}))
const addEvent = (eventName: string) => {
  codeEditorDialogRef.value?.open(eventName)
}
</script>

<template>
  <div class="event-container">
    <CodeEditorDialog ref="codeEditorDialogRef" />
    <div v-for="(item, index) in events" :key="index" class="event-item">
      <el-text>
        {{ item }}
      </el-text>
      <el-badge :isDot="!!(activeData?.on || {})[item]">
        <el-button type="primary" plain round @click="addEvent(item)"> 编写代码 </el-button>
      </el-badge>
    </div>
  </div>
</template>

<style scoped lang="scss">
.event-container {
  padding: 8px;

  .event-item {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
