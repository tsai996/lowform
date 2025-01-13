<script setup lang="ts">
import type { Ref } from 'vue'
import type { FormField } from '@xfc/vue3-form-render'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
</script>

<template>
  <el-form-item prop="header" label="标题" v-if="activeData?.props.header !== undefined">
    <el-input v-model="activeData.props.header" clearable placeholder="请输入标题" />
  </el-form-item>
  <el-form-item prop="shadow" label="卡片阴影" v-if="activeData?.props.shadow !== undefined">
    <el-radio-group v-model="activeData.props.shadow">
      <el-radio-button label="always">常规</el-radio-button>
      <el-radio-button label="never">不显示</el-radio-button>
      <el-radio-button label="hover">悬停</el-radio-button>
    </el-radio-group>
  </el-form-item>
</template>

<style scoped lang="scss"></style>
