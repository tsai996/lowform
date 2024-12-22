<script setup lang="ts">
import type { Ref } from 'vue'
import DataOptions from './DataOptions.vue'
import type { FormField } from '@xfc/vue3-form-render'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
</script>

<template>
  <el-form-item prop="value" label="默认值" v-if="activeData?.value !== undefined">
    <el-select
      v-model="activeData.value"
      placeholder="请选择默认值"
      multiple
      clearable
      :style="{ width: '100%' }"
    >
      <el-option
        v-for="(item, index) in activeData.props.options"
        :key="index"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </el-form-item>
  <el-form-item
    prop="targetOrder"
    label="排序策略"
    v-if="activeData?.props.targetOrder !== undefined"
  >
    <el-select v-model="activeData.props.targetOrder" placeholder="请选择排序策略">
      <el-option label="默认（original）" value="original" />
      <el-option label="升序（push）" value="push" />
      <el-option label="降序（unshift）" value="unshift" />
    </el-select>
  </el-form-item>
  <el-form-item prop="titles" label="列表标题" v-if="activeData">
    <el-space>
      <el-input v-model="activeData.props.titles[0]" placeholder="左侧标题"></el-input>
      <el-input v-model="activeData.props.titles[1]" placeholder="右侧标题"></el-input>
    </el-space>
  </el-form-item>
  <el-form-item prop="buttonTexts" label="按钮文案" v-if="activeData">
    <el-space>
      <el-input v-model="activeData.props.buttonTexts[0]" placeholder="左侧按钮"></el-input>
      <el-input v-model="activeData.props.buttonTexts[1]" placeholder="右侧按钮"></el-input>
    </el-space>
  </el-form-item>
  <el-form-item
    prop="filterable"
    label="是否筛选"
    v-if="activeData?.props.filterable !== undefined"
  >
    <el-switch v-model="activeData.props.filterable" />
  </el-form-item>
  <el-form-item prop="filterPlaceholder" label="搜索框占位符" v-if="activeData">
    <el-input v-model="activeData.props.filterPlaceholder" clearable placeholder="请输入占位提示" />
  </el-form-item>
  <DataOptions />
</template>

<style scoped lang="scss"></style>
