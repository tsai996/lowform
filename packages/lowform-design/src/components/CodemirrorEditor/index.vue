<script setup lang="ts">
import { Codemirror } from 'vue-codemirror'
import { EditorView } from 'codemirror'
import { oneDark } from '@codemirror/theme-one-dark'
import { useGlobalStore } from '@/stores/global'
import { storeToRefs } from 'pinia'

const props = withDefaults(
  defineProps<{
    placeholder?: string
    extensions?: any[]
    tabSize?: number
    indentWithTab?: boolean
    autofocus?: boolean
    disabled?: boolean
    height?: string | number
  }>(),
  {
    tabSize: 2,
    indentWithTab: true,
    autofocus: true,
    disabled: false,
    extensions: () => []
  }
)
const globalStore = useGlobalStore()
const { isDark } = storeToRefs(globalStore)
const extensionsEx = computed(() => {
  if (isDark.value) {
    return [...props.extensions, oneDark]
  } else {
    return props.extensions
  }
})
const emits = defineEmits<{
  (e: 'ready', payload: { view: EditorView }): void
}>()
const code = defineModel<string>()
const codeHeight = computed(() =>
  typeof props.height === 'number' ? `${props.height}px` : props.height
)
const view = shallowRef<EditorView>()
const handleReady = (payload: { view: EditorView }) => {
  view.value = payload.view
  emits('ready', payload)
}
defineExpose({
  getView: () => view.value
})
</script>

<template>
  <Codemirror
    v-bind="$attrs"
    @ready="handleReady"
    :autofocus="autofocus"
    :indent-with-tab="indentWithTab"
    :tab-size="tabSize"
    v-model="code"
    :placeholder="placeholder"
    :extensions="extensionsEx"
    :disabled="disabled"
    :style="{ height: codeHeight }"
  />
</template>

<style scoped lang="scss"></style>
