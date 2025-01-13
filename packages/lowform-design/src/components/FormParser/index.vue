<script setup lang="ts">
import type { FormInstance, FormItemRule } from 'element-plus'
import { FormRender } from './context'
import type { FormField } from '@xfc/vue3-form-render'

const props = defineProps<{
  field: FormField
  formData: Recordable
}>()
const emits = defineEmits<{
  (e: 'submit', formData: Recordable): void
  (e: 'reset', formData: Recordable): void
}>()
const formRef = ref<FormInstance>()
const buildRule = (field: FormField) => {
  const { props, rules } = field
  let ruleList: FormItemRule[] = []
  if (Array.isArray(rules)) {
    ruleList.push(
      ...rules.map((rule) => {
        return {
          pattern: rule.pattern && new RegExp(rule.pattern),
          message: `请输入正确的${rule.message}`
        }
      })
    )
  }
  if (field.required !== undefined) {
    const required: FormItemRule = {
      required: field.required || false,
      message: props.placeholder
    }
    if (Array.isArray(field.value)) {
      required.type = 'array'
      required.message = `请至少选择一个${field.label}`
      required.trigger = 'change'
    }
    required.message === undefined && (required.message = `${field.label}不能为空`)
    ruleList.push(required)
  }
  return ruleList
}
const submitForm = () => {
  return new Promise<Recordable>((resolve, reject) => {
    if (!formRef.value) {
      reject()
      return
    }
    formRef.value?.validate((valid, fields) => {
      if (valid) {
        emits('submit', props.formData)
        resolve(props.formData)
      } else {
        reject(fields)
      }
    })
  })
}
const resetForm = () => {
  if (!formRef.value) return
  formRef.value.resetFields()
  emits('reset', props.formData)
}
defineExpose({
  submitForm,
  resetForm,
  buildRule
})
</script>

<template>
  <FormRender ref="formRef" :model="formData" :formData="formData" :field="field" v-bind="$attrs">
    <template #formItem="{ node, field }">
      <el-form-item
        v-if="!field.hidden"
        :prop="field.id"
        :label="field.hideLabel ? undefined : field.label"
        :label-width="field.hideLabel ? '0px' : undefined"
        :required="field.required"
        :rules="buildRule(field)"
      >
        <component :is="node"></component>
      </el-form-item>
    </template>
    <template v-for="(value, name) in $slots" #[name]="scope">
      <slot :name="name" v-bind="scope || {}"></slot>
    </template>
  </FormRender>
</template>

<style scoped lang="scss"></style>
