import type { FormField } from '@xfc/vue3-form-render'

export const useRadio = function (field: FormField) {
  const slots = {
    default: () => {
      return field.props.options?.map((item: Recordable) => {
        return (
          <el-radio value={item.value} disabled={item.disabled}>
            {item.label}
          </el-radio>
        )
      })
    }
  }
  if (!field.slots) {
    field.slots = {}
  }
  Object.assign(field.slots, slots)
}
