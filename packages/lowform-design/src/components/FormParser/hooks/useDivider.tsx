import type { FormField } from '@xfc/vue3-form-render'

export const useDivider = function (field: FormField) {
  const slots = {
    default: () => field.props.content
  }
  if (!field.slots) {
    field.slots = {}
  }
  Object.assign(field.slots, slots)
}
