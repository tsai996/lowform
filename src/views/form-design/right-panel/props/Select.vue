<script setup lang="ts">
import type { Ref } from 'vue'
import DataOptions from '@/views/form-design/right-panel/props/DataOptions.vue'
import { type FormField, JsonRender } from '@xfc/vue3-form-render'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
const multipleChange = () => {
  if (activeData.value) {
    activeData.value.value = null
    activeData.value.props.key = Date.now()
  }
}
</script>

<template>
  <el-form-item prop="value" label="默认值" v-if="activeData?.value !== undefined">
    <JsonRender
      :model-value="activeData.value"
      @update:model-value="
        (val) => {
          if (activeData) {
            if (val === undefined) {
              activeData.value = null
            } else {
              activeData.value = val
            }
          }
        }
      "
      :field="{
        ...activeData,
        ...{ readonly: false },
        props: {
          ...activeData.props,
          ...{ placeholder: '请输入默认值', clearable: true, disabled: false }
        }
      }"
    />
  </el-form-item>
  <el-form-item
    prop="placeholder"
    label="占位提示"
    v-if="activeData?.props.placeholder !== undefined"
  >
    <el-input v-model="activeData.props.placeholder" clearable placeholder="请输入占位提示" />
  </el-form-item>
  <el-form-item prop="multiple" label="是否多选" v-if="activeData?.props.multiple !== undefined">
    <el-switch v-model="activeData.props.multiple" @change="multipleChange" />
  </el-form-item>
  <el-form-item prop="clearable" label="是否清空" v-if="activeData?.props.clearable !== undefined">
    <el-switch v-model="activeData.props.clearable" />
  </el-form-item>
  <DataOptions />
</template>

<style scoped lang="scss"></style>
