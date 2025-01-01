<script setup lang="ts">
import type { Ref } from 'vue'
import { type FormField } from '@xfc/vue3-form-render'
import { Render } from '@/components/FormParser/context'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
const timeFormatOptions = [
  {
    label: '时:分',
    format: 'HH:mm'
  },
  {
    label: '时:分:秒',
    format: 'HH:mm:ss'
  }
]
const changeFormatChange = (val: string) => {
  if (activeData.value) {
    activeData.value.value = null
    activeData.value.props.format = val
    activeData.value.props.valueFormat = val
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
          ...{ placeholder: '请选择默认值', clearable: true, disabled: false }
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
  <el-form-item prop="format" label="时间格式" v-if="activeData?.props.format !== undefined">
    <el-select
      v-model="activeData.props.format"
      @change="changeFormatChange"
      :style="{ width: '100%' }"
      placeholder="请选择时间格式"
    >
      <el-option
        v-for="item in timeFormatOptions"
        :key="item.format"
        :label="item.label"
        :value="item.format"
      />
    </el-select>
  </el-form-item>
</template>

<style scoped lang="scss"></style>
