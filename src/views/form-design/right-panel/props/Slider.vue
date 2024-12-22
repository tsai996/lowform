<script setup lang="ts">
import type { Ref } from 'vue'
import { type FormField, JsonRender } from '@xfc/vue3-form-render'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
const rangeChange = (val: boolean) => {
  if (activeData.value) {
    activeData.value.value = val
      ? [activeData.value.props.min, activeData.value.props.max]
      : activeData.value.props.min
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
          ...{ disabled: false }
        }
      }"
    />
  </el-form-item>
  <el-form-item prop="min" label="最小值" v-if="activeData?.props.min !== undefined">
    <el-input-number
      v-model="activeData.props.min"
      :style="{ width: '100%' }"
      :min="0"
      placeholder="最小值"
    />
  </el-form-item>
  <el-form-item prop="max" label="最大值" v-if="activeData?.props.max !== undefined">
    <el-input-number
      v-model="activeData.props.max"
      :style="{ width: '100%' }"
      :min="0"
      placeholder="最大值"
    />
  </el-form-item>
  <el-form-item prop="step" label="步长" v-if="activeData?.props.step !== undefined">
    <el-input-number
      v-model="activeData.props.step"
      :style="{ width: '100%' }"
      :min="0"
      placeholder="步长"
    />
  </el-form-item>
  <el-form-item prop="range" label="范围选择" v-if="activeData?.props.range !== undefined">
    <el-switch @change="rangeChange(!!$event)" v-model="activeData.props.range" />
  </el-form-item>
</template>

<style scoped lang="scss"></style>
