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
  <el-form-item prop="max" label="最大可选数" v-if="activeData?.props.max !== undefined">
    <el-input-number v-model="activeData.props.max" :style="{ width: '100%' }" :min="0" />
  </el-form-item>
  <DataOptions />
</template>

<style scoped lang="scss"></style>
