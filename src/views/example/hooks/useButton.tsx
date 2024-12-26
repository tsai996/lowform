import type { FormField } from '@xfc/vue3-form-render'

export const useButton = function (field: FormField) {
  const slots = {
    default: () => field.label
  }
  if (!field.slots) {
    field.slots = {}
  }
  Object.assign(field.slots, slots)
}
