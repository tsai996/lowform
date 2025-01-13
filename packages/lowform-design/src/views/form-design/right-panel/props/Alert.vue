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
      <el-option label="成功（success）" value="success"></el-option>
      <el-option label="警告（warning）" value="warning"></el-option>
      <el-option label="危险（error）" value="error"></el-option>
      <el-option label="提示（info）" value="info"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item prop="title" label="标题" v-if="activeData !== undefined">
    <el-input v-model="activeData.props.title" placeholder="请输入标题"></el-input>
  </el-form-item>
  <el-form-item prop="description" label="描述" v-if="activeData !== undefined">
    <el-input
      v-model="activeData.props.description"
      :rows="2"
      type="textarea"
      placeholder="请输入描述"
    />
  </el-form-item>
  <el-form-item prop="effect" label="主题" v-if="activeData !== undefined">
    <el-radio-group v-model="activeData.props.effect">
      <el-radio-button label="light">light</el-radio-button>
      <el-radio-button label="dark">dark</el-radio-button>
    </el-radio-group>
  </el-form-item>
  <el-form-item prop="other" label="其他" v-if="activeData !== undefined">
    <el-checkbox v-model="activeData.props.closable" label="可关闭" />
    <el-checkbox v-model="activeData.props.center" label="居中" />
    <el-checkbox v-model="activeData.props.showIcon" label="显示图标" />
  </el-form-item>
</template>

<style scoped lang="scss"></style>
