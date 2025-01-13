import type { FormField } from '@xfc/vue3-form-render'

export const useTransfer = function (field: FormField) {
  field.props.props = {
    key: 'value',
    label: 'label',
    disabled: 'disabled'
  }
  field.props.data = field.props.options
  delete field.props.options
}
