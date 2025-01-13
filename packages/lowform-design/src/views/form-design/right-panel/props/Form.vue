<script setup lang="ts">
import type { Ref } from 'vue'
import type { FormField } from '@xfc/vue3-form-render'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
</script>

<template>
  <el-form-item
    prop="labelPosition"
    label="标签对齐"
    v-if="activeData?.props.labelPosition !== undefined"
  >
    <el-radio-group v-model="activeData.props.labelPosition">
      <el-radio-button value="left"> 左边</el-radio-button>
      <el-radio-button value="right"> 右边</el-radio-button>
      <el-radio-button value="top"> 顶部</el-radio-button>
    </el-radio-group>
  </el-form-item>
  <el-form-item prop="size" label="尺寸" v-if="activeData?.props.size !== undefined">
    <el-radio-group v-model="activeData.props.size">
      <el-radio-button value="large">中等</el-radio-button>
      <el-radio-button value="default"> 默认</el-radio-button>
      <el-radio-button value="small">迷你</el-radio-button>
    </el-radio-group>
  </el-form-item>
  <el-form-item
    prop="labelWidth"
    label="标签宽度"
    v-if="activeData?.props.labelWidth !== undefined"
  >
    <el-input-number v-model="activeData.props.labelWidth" :min="0" placeholder="标签宽度" />
  </el-form-item>
</template>

<style scoped lang="scss"></style>
