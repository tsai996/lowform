<script setup lang="ts">
import FormDesign from '../form-design/index.vue'
import { useTransfer } from './hooks/useTransfer'
import { useCheckbox } from './hooks/useCheckbox'
import { useRadio } from './hooks/useRadio'
import { useSelect } from './hooks/useSelect'
import { useUpload } from './hooks/useUpload'
import { type FormField, renderElement } from '@xfc/vue3-form-render'

const formConf = ref<FormField>({
  id: 'formConf',
  name: 'Form',
  icon: 'ep:document',
  type: 'container',
  label: '表单',
  value: undefined,
  readonly: false,
  required: undefined,
  hidden: false,
  props: {
    scrollToError: true,
    labelPosition: 'right',
    labelWidth: 100,
    size: 'default',
    disabled: false
  },
  on: {
    onMounted: '',
    onUnmounted: '',
    onValidate: ''
  },
  children: []
})
renderElement
  .addComponent('Form', ElForm)
  .addComponent('Input', ElInput)
  .addComponent('Textarea', ElInput)
  .addComponent('Number', ElInputNumber)
  .addComponent('Select', ElSelect, useSelect)
  .addComponent('Radio', ElRadioGroup, useRadio)
  .addComponent('Checkbox', ElCheckboxGroup, useCheckbox)
  .addComponent('Date', ElDatePicker)
  .addComponent('DateRange', ElDatePicker)
  .addComponent('Time', ElTimePicker)
  .addComponent('TimeRange', ElTimePicker)
  .addComponent('Switch', ElSwitch)
  .addComponent('Slider', ElSlider)
  .addComponent('Rate', ElRate)
  .addComponent('Upload', ElUpload, useUpload)
  .addComponent('Tab', ElTabs)
  .addComponent('TabPane', ElTabPane)
  .addComponent('Row', ElRow)
  .addComponent('Col', ElCol)
  .addComponent('Collapse', ElCollapse)
  .addComponent('CollapseItem', ElCollapseItem)
  .addComponent('Card', ElCard)
  .addComponent('Color', ElColorPicker)
  .addComponent('Transfer', ElTransfer, useTransfer)
</script>

<template>
  <FormDesign :form-conf="formConf"></FormDesign>
</template>

<style scoped lang="scss"></style>
