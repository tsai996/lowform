<script setup lang="ts">
import TimeAttrs from './Time.vue'
import type { Ref } from 'vue'
import type { FormField } from '@xfc/vue3-form-render'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
</script>

<template>
  <TimeAttrs :active-data="activeData" />
  <el-form-item
    prop="startPlaceholder"
    label="开始占位"
    v-if="activeData?.props.startPlaceholder !== undefined"
  >
    <el-input v-model="activeData.props.startPlaceholder" clearable placeholder="请输入占位提示" />
  </el-form-item>
  <el-form-item
    prop="endPlaceholder"
    label="结束占位"
    v-if="activeData?.props.endPlaceholder !== undefined"
  >
    <el-input v-model="activeData.props.endPlaceholder" clearable placeholder="请输入占位提示" />
  </el-form-item>
</template>

<style scoped lang="scss"></style>
