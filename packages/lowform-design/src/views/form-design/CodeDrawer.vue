<script setup lang="ts">
import CodemirrorEditor from '@/components/CodemirrorEditor/index.vue'
import { htmlLanguage } from '@codemirror/lang-html'
import type { FormField } from '@xfc/vue3-form-render'
import FileSaver from 'file-saver'

const props = defineProps<{
  field: FormField
}>()
const drawerVisible = ref(false)
const codeTemplate = ref(``)
const extensions = ref([htmlLanguage])
const open = () => {
  codeTemplate.value = `<template>
  <FormParser
    ref="formParserRef"
    :formData="formData"
    :field="field"
  >
    <template #append>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button type="info" @click="resetForm">重置</el-button>
      </el-form-item>
    </template>
  </FormParser>
</template>
<script setup>
  import { ref } from 'vue'
  import  { type FormField } from '@xfc/vue3-form-render'
  import FormParser from '@/components/FormParser/index.vue'

  const formParserRef = ref<InstanceType<typeof FormParser>>()
  const field = ref<FormField>(${JSON.stringify(props.field)})
  // 提交
  const submitForm = () => {
    formParserRef.value?.submitForm().then((formData) => {
      console.log(formData)
    })
  }
  // 重置
  const resetForm = () => {
    formParserRef.value?.resetForm()
  }
<${'/'}script>
<style scoped lang="scss">

<${'/'}style>`
  drawerVisible.value = true
}
const download = () => {
  const blob = new Blob([codeTemplate.value], { type: 'text/plain' })
  FileSaver.saveAs(blob, `${props.field.id}.vue`)
}
defineExpose({
  open
})
</script>

<template>
  <el-drawer v-model="drawerVisible" title="导出代码" size="70%">
    <CodemirrorEditor v-model="codeTemplate" :extensions="extensions" height="100%">
    </CodemirrorEditor>
    <template #footer>
      <el-button type="primary" @click="download"> 下载代码 </el-button>
      <el-button type="info" @click="drawerVisible = false"> 关闭 </el-button>
    </template>
  </el-drawer>
</template>

<style scoped lang="scss">
:deep(.cm-editor) {
  outline: none;
}
</style>
