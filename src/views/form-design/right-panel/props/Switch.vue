<script setup lang="ts">
import type { Ref } from 'vue'
import { type FormField } from '@xfc/vue3-form-render'
import { Render } from '@/components/FormParser/context'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
const colorOptions = [
  '#409eff',
  '#67c23a',
  '#e6a23c',
  '#f56c6c',
  '#909399',
  '#daa96e',
  '#0c819f',
  '#27ae60',
  '#ff5c93',
  '#e74c3c',
  '#fd726d',
  '#f39c12',
  '#9b59b6'
]
const setModelValue = (val: any) => {
  if (Array.isArray(val)) {
    return val.join(',')
  }
  if (typeof val === 'boolean') {
    return `${val}`
  }
  return val
}
const onSwitchModelValue = (val: string, name: string) => {
  if (activeData.value) {
    if (['true', 'false'].includes(val)) {
      activeData.value.props[name] = JSON.parse(val)
    } else {
      activeData.value.props[name] = /^[+-]?(0|([1-9]\d*))(\.\d+)?$/g.test(val) ? +val : val
    }
  }
}
</script>

<template>
  <el-form-item prop="value" label="默认值" v-if="activeData?.value !== undefined">
    <Render
      v-model="activeData.value"
      :field="{
        ...activeData,
        ...{ readonly: false },
        props: {
          ...activeData.props,
          ...{ disabled: false }
        }
      }"
    />
  </el-form-item>
  <el-form-item
    prop="activeValue"
    label="开启值"
    v-if="activeData?.props.activeValue !== undefined"
  >
    <el-input
      :model-value="setModelValue(activeData.props.activeValue)"
      placeholder="请输入开启值"
      @update:modelValue="onSwitchModelValue($event, 'activeValue')"
    />
  </el-form-item>
  <el-form-item
    prop="inactiveValue"
    label="关闭值"
    v-if="activeData?.props.inactiveValue !== undefined"
  >
    <el-input
      :model-value="setModelValue(activeData.props.inactiveValue)"
      placeholder="请输入关闭值"
      @update:modelValue="onSwitchModelValue($event, 'inactiveValue')"
    />
  </el-form-item>
  <el-form-item
    prop="activeColor"
    label="开启颜色"
    v-if="activeData?.props.activeColor !== undefined"
  >
    <el-color-picker v-model="activeData.props.activeColor" :predefine="colorOptions" />
  </el-form-item>
  <el-form-item
    prop="inactiveColor"
    label="关闭颜色"
    v-if="activeData?.props.inactiveColor !== undefined"
  >
    <el-color-picker v-model="activeData.props.inactiveColor" :predefine="colorOptions" />
  </el-form-item>
</template>

<style scoped lang="scss"></style>
