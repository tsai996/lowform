<script setup lang="ts">
import type { Ref } from 'vue'
import type { FormField } from '@xfc/vue3-form-render'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
</script>

<template>
  <el-form-item prop="content" label="内容" v-if="activeData?.props.content !== undefined">
    <el-input
      v-model="activeData.props.content"
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
    />
  </el-form-item>
  <el-form-item
    prop="contentPosition"
    label="内容位置"
    v-if="activeData?.props.contentPosition !== undefined"
  >
    <el-radio-group v-model="activeData.props.contentPosition" :style="{ width: '100%' }">
      <el-radio-button value="left">左边</el-radio-button>
      <el-radio-button value="center">居中</el-radio-button>
      <el-radio-button value="right">右边</el-radio-button>
    </el-radio-group>
  </el-form-item>
</template>

<style scoped lang="scss"></style>
