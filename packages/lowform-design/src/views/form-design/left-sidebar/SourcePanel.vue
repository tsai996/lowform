<script setup lang="ts">
import CodemirrorEditor from '@/components/CodemirrorEditor/index.vue'
import { jsonLanguage } from '@codemirror/lang-json'
import type { Ref } from 'vue'
import type { FormField } from '@xfc/vue3-form-render'

defineProps<{
  formConf: FormField
}>()
const { activeData } = inject<{
  activeData: Ref<FormField>
}>('formDesign')!
const extensions = ref([jsonLanguage])
const setCode = computed({
  get() {
    return JSON.stringify(activeData.value, null, 2)
  },
  set(val) {
    try {
      const data = JSON.parse(val)
      Object.assign(activeData.value, data)
    } catch (e) {
      console.error(e)
    }
  }
})
</script>

<template>
  <CodemirrorEditor v-model="setCode" class="source-panel" :extensions="extensions" height="93%">
  </CodemirrorEditor>
</template>

<style scoped lang="scss">
:deep(.cm-editor) {
  outline: none;
}
</style>
