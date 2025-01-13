import type { FormField } from '@xfc/vue3-form-render'

export const useCheckbox = function (field: FormField) {
  const slots = {
    default: () => {
      return field.props.options?.map((item: Recordable) => {
        return (
          <el-checkbox value={item.value} disabled={item.disabled}>
            {item.label}
          </el-checkbox>
        )
      })
    }
  }
  if (!field.slots) {
    field.slots = {}
  }
  Object.assign(field.slots, slots)
}
