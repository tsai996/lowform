import type { FormField } from '@xfc/vue3-form-render'

export const useUpload = function (field: FormField) {
  const slots = {
    default: () => {
      return (
        <el-button icon="Link" disabled={field.props.disabled} round type="primary">
          选择文件
        </el-button>
      )
    },
    tip: () => {
      const typeDesc = field.props.accept ? ` 的${field.props.accept}文件` : null
      return (
        <div class="el-upload__tip">
          单个文件只能上传不超过 {field.props.size}MB {typeDesc}
        </div>
      )
    }
  }
  if (!field.slots) {
    field.slots = {}
  }
  Object.assign(field.slots, slots)
}
