<script setup lang="ts">
import FormDesign from '../form-design/index.vue'
import { useTransfer } from './hooks/useTransfer'
import { useCheckbox } from './hooks/useCheckbox'
import { useRadio } from './hooks/useRadio'
import { useSelect } from './hooks/useSelect'
import { useUpload } from './hooks/useUpload'
import { useButton } from './hooks/useButton'
import { useDivider } from './hooks/useDivider'
import { renderElement } from '@xfc/vue3-form-render'

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
  .addComponent('Button', ElButton, useButton)
  .addComponent('Alert', ElAlert)
  .addComponent('Divider', ElDivider, useDivider)
</script>

<template>
  <FormDesign></FormDesign>
</template>

<style scoped lang="scss"></style>
