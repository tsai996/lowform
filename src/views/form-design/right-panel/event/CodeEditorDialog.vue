<script setup lang="ts">
import { javascriptLanguage } from '@codemirror/lang-javascript'
import type { Ref } from 'vue'
import type { FormField } from '@xfc/vue3-form-render'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
const eventName = ref('')
const eventCode = ref('')
const dialogVisible = ref(false)
const handleConfirm = () => {
  if (activeData.value?.on) {
    activeData.value.on[eventName.value] = eventCode.value
  }
  dialogVisible.value = false
}
const open = (event: string) => {
  eventName.value = event
  const on = activeData.value?.on
  if (on) {
    const code = on[event]
    if (typeof code === 'string') {
      eventCode.value = code
    }
  }
  dialogVisible.value = true
}
const onClose = () => {
  eventCode.value = ''
}
defineExpose({
  open
})
</script>

<template>
  <el-dialog
    :title="`${eventName} -事件处理`"
    v-model="dialogVisible"
    @close="onClose"
    align-center
    draggable
    width="55%"
  >
    <el-alert :closable="false">function(event ,$inject ,ref ,field) {</el-alert>
    <CodemirrorEditor v-model="eventCode" height="350px" :extensions="[javascriptLanguage]" />
    <el-alert :closable="false">}</el-alert>
    <template #footer>
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleConfirm">确 认</el-button>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
:deep(.cm-editor) {
  outline: none;
}
</style>
