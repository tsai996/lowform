import type { FormField } from '@xfc/vue3-form-render'

export const useSelect = function (field: FormField) {
  const slots = {
    default: () => {
      return field.props.options?.map((item: Recordable) => {
        return <el-option label={item.label} value={item.value} disabled={item.disabled} />
      })
    }
  }
  if (!field.slots) {
    field.slots = {}
  }
  Object.assign(field.slots, slots)
}
