<script setup lang="ts">
import type { Ref } from 'vue'
import type { FormField } from '@xfc/vue3-form-render'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
</script>

<template>
  <el-form-item prop="type" label="主题" v-if="activeData?.props.type !== undefined">
    <el-select v-model="activeData.props.type" placeholder="请选择类型">
      <el-option label="默认（default）" value="default"></el-option>
      <el-option label="重要（primary）" value="primary"></el-option>
      <el-option label="成功（success）" value="success"></el-option>
      <el-option label="警告（warning）" value="warning"></el-option>
      <el-option label="危险（danger）" value="danger"></el-option>
      <el-option label="提示（info）" value="info"></el-option>
      <el-option label="文本（text）" value="text"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item prop="other" label="其他" v-if="activeData !== undefined">
    <el-checkbox v-model="activeData.props.plain" label="朴素" />
    <el-checkbox v-model="activeData.props.round" label="圆角" />
    <el-checkbox v-model="activeData.props.circle" label="圆形" />
    <el-checkbox v-model="activeData.props.text" label="文字" />
    <el-checkbox v-model="activeData.props.link" label="链接" />
    <el-checkbox v-model="activeData.props.loading" label="加载中" />
  </el-form-item>
</template>

<style scoped lang="scss"></style>
