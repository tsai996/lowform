import { useSelect } from './hooks/useSelect'
import { useRadio } from './hooks/useRadio'
import { useCheckbox } from './hooks/useCheckbox'
import { useUpload } from './hooks/useUpload'
import { useTransfer } from './hooks/useTransfer'
import { useButton } from './hooks/useButton'
import { useDivider } from './hooks/useDivider'
import { useFormRender } from '@xfc/vue3-form-render'
import http from '@/axios'

const { Render, FormRender, addComponent, removeComponent, components, hooks } = useFormRender({
  injects: {
    http: http
  }
})
export { Render, FormRender, addComponent, removeComponent, components, hooks }
addComponent('Form', ElForm)
addComponent('Input', ElInput)
addComponent('Textarea', ElInput)
addComponent('Number', ElInputNumber)
addComponent('Select', ElSelect, useSelect)
addComponent('Radio', ElRadioGroup, useRadio)
addComponent('Checkbox', ElCheckboxGroup, useCheckbox)
addComponent('Date', ElDatePicker)
addComponent('DateRange', ElDatePicker)
addComponent('Time', ElTimePicker)
addComponent('TimeRange', ElTimePicker)
addComponent('Switch', ElSwitch)
addComponent('Slider', ElSlider)
addComponent('Rate', ElRate)
addComponent('Upload', ElUpload, useUpload)
addComponent('Tab', ElTabs)
addComponent('TabPane', ElTabPane)
addComponent('Row', ElRow)
addComponent('Col', ElCol)
addComponent('Collapse', ElCollapse)
addComponent('CollapseItem', ElCollapseItem)
addComponent('Card', ElCard)
addComponent('Color', ElColorPicker)
addComponent('Transfer', ElTransfer, useTransfer)
addComponent('Button', ElButton, useButton)
addComponent('Alert', ElAlert)
addComponent('Divider', ElDivider, useDivider)
