<script setup lang="ts">
import type { Ref } from 'vue'
import { type FormField, JsonRender } from '@xfc/vue3-form-render'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
const dateFormatOptions = [
  {
    label: '年',
    type: 'year',
    format: 'YYYY'
  },
  {
    label: '年-月',
    type: 'month',
    format: 'YYYY-MM'
  },
  {
    label: '年-月-日',
    type: 'date',
    format: 'YYYY-MM-DD'
  },
  {
    label: '年-月-日 时:分',
    type: 'datetime',
    format: 'YYYY-MM-DD HH:mm'
  },
  {
    label: '年-月-日 时:分:秒',
    type: 'datetime',
    format: 'YYYY-MM-DD HH:mm:ss'
  }
]
const dateRangeFormatOptions = [
  {
    label: '年',
    type: 'monthrange',
    format: 'YYYY'
  },
  {
    label: '年-月',
    type: 'monthrange',
    format: 'YYYY-MM'
  },
  {
    label: '年-月-日',
    type: 'daterange',
    format: 'YYYY-MM-DD'
  },
  {
    label: '年-月-日 时:分',
    type: 'datetimerange',
    format: 'YYYY-MM-DD HH:mm'
  },
  {
    label: '年-月-日 时:分:秒',
    type: 'datetimerange',
    format: 'YYYY-MM-DD HH:mm:ss'
  }
]
const dateOptions = computed<{ label: string; type: string; format: string }[]>(() => {
  if (activeData.value?.props.type !== undefined) {
    if (activeData.value?.props.startPlaceholder !== undefined) {
      return dateRangeFormatOptions
    } else {
      return dateFormatOptions
    }
  }
  return []
})
const changeFormatChange = (val: string) => {
  if (dateOptions.value.length > 0 && activeData.value) {
    const data = dateOptions.value.find((e) => e.format === val)
    activeData.value.value = null
    activeData.value.props.type = data?.type
    activeData.value.props.valueFormat = data?.format
    activeData.value.props.key = new Date().getTime()
  }
}
</script>

<template>
  <el-form-item prop="value" label="默认值" v-if="activeData?.value !== undefined">
    <JsonRender
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
      :style="{ width: '100%' }"
      @change="changeFormatChange"
      placeholder="请选择时间格式"
    >
      <el-option
        v-for="item in dateOptions"
        :key="item.format"
        :label="item.label"
        :value="item.format"
      />
    </el-select>
  </el-form-item>
</template>

<style scoped lang="scss"></style>
