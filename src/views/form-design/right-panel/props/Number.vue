<script setup lang="ts">
import type { Ref } from 'vue'
import { type FormField, JsonRender } from '@xfc/vue3-form-render'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
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
  <el-form-item prop="min" label="最小值" v-if="activeData">
    <el-input-number
      v-model="activeData.props.min"
      :style="{ width: '100%' }"
      :max="activeData.props.max"
      placeholder="最小值"
    />
  </el-form-item>
  <el-form-item prop="max" label="最大值" v-if="activeData">
    <el-input-number
      v-model="activeData.props.max"
      :style="{ width: '100%' }"
      :min="activeData.props.min"
      placeholder="最大值"
    />
  </el-form-item>
  <el-form-item prop="step" label="步长" v-if="activeData">
    <el-input-number
      v-model="activeData.props.step"
      :style="{ width: '100%' }"
      placeholder="步数"
    />
  </el-form-item>
  <el-form-item prop="precision" label="精度" v-if="activeData">
    <el-input-number
      v-model="activeData.props.precision"
      :style="{ width: '100%' }"
      :min="0"
      placeholder="精度"
    />
  </el-form-item>
</template>

<style scoped lang="scss"></style>
