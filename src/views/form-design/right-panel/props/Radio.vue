<script setup lang="ts">
import type { Ref } from 'vue'
import DataOptions from '@/views/form-design/right-panel/props/DataOptions.vue'
import type { FormField } from '@xfc/vue3-form-render'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
</script>

<template>
  <el-form-item prop="value" label="默认值" v-if="activeData?.value !== undefined">
    <el-select
      :model-value="activeData.value"
      @update:model-value="
        (val: unknown) => {
          if (activeData) {
            if (val === undefined) {
              activeData.value = null
            } else {
              activeData.value = val
            }
          }
        }
      "
      placeholder="请选择默认值"
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
  <DataOptions />
</template>

<style scoped lang="scss"></style>
