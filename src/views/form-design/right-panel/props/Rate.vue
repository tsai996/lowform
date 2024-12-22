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
          ...{ disabled: false }
        }
      }"
    />
  </el-form-item>
  <el-form-item prop="max" label="数量" v-if="activeData?.props.max !== undefined">
    <el-input-number
      v-model="activeData.props.max"
      :style="{ width: '100%' }"
      :min="1"
      placeholder="数量"
    />
  </el-form-item>
  <el-form-item prop="allowHalf" label="允许半选" v-if="activeData?.props.allowHalf !== undefined">
    <el-switch v-model="activeData.props.allowHalf" />
  </el-form-item>
</template>

<style scoped lang="scss"></style>
