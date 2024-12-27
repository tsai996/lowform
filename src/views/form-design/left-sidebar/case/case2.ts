import type { FormField } from '@xfc/vue3-form-render'

const case2: FormField = {
  id: 'formConf',
  name: 'Form',
  icon: 'ep:document',
  type: 'container',
  label: '表单',
  readonly: false,
  hidden: false,
  props: {
    scrollToError: true,
    labelPosition: 'top',
    labelWidth: 100,
    size: 'default',
    disabled: false
  },
  on: {
    onMounted: '',
    onUnmounted: '',
    onValidate: ''
  },
  children: [
    {
      id: 'field_nmuut',
      name: 'Input',
      icon: 'ph:textbox',
      type: 'formItem',
      label: '组织名称',
      value: null,
      readonly: false,
      required: true,
      hidden: false,
      rules: [],
      props: {
        maxlength: 99,
        showWordLimit: true,
        clearable: true,
        placeholder: '请输入组织名称'
      },
      on: {
        onVnodeMounted: '',
        onVnodeUpdated: '',
        onBlur: '',
        onFocus: '',
        onChange: '',
        onInput: '',
        onClear: ''
      }
    },
    {
      id: 'field_zrr91',
      name: 'Number',
      icon: 'fluent:keyboard-123-20-regular',
      type: 'formItem',
      label: '排序',
      value: 99,
      readonly: false,
      required: true,
      hidden: false,
      props: {
        min: 0,
        max: 999,
        step: 1,
        placeholder: '排序',
        style: {
          width: '100%'
        }
      },
      on: {
        onVnodeMounted: '',
        onVnodeUpdated: '',
        onBlur: '',
        onFocus: '',
        onChange: ''
      }
    },
    {
      id: 'field_a1g8c',
      name: 'Select',
      icon: 'tabler:select',
      type: 'formItem',
      label: '上级组织',
      value: null,
      readonly: false,
      required: true,
      hidden: false,
      props: {
        filterable: true,
        multiple: false,
        placeholder: '请选择上级组织',
        dataType: 'static',
        options: [
          {
            label: '杭州分公司',
            value: 1,
            disabled: false
          },
          {
            label: '宁波分公司',
            value: 2,
            disabled: false
          },
          {
            label: '金华分公司',
            value: '3',
            disabled: false
          }
        ]
      },
      on: {
        onVnodeMounted: '',
        onVnodeUpdated: '',
        onChange: '',
        onVisibleChange: '',
        onRemoveTag: '',
        onClear: '',
        onBlur: '',
        onFocus: ''
      }
    },
    {
      id: 'field_jdnz1',
      name: 'Select',
      icon: 'tabler:select',
      type: 'formItem',
      label: '负责人',
      value: null,
      readonly: false,
      required: false,
      hidden: false,
      props: {
        filterable: true,
        multiple: false,
        placeholder: '请选择负责人',
        dataType: 'static',
        options: [
          {
            label: '张三',
            value: 1,
            disabled: false
          },
          {
            label: '李四',
            value: 2,
            disabled: false
          },
          {
            label: '王五',
            value: '3',
            disabled: false
          },
          {
            label: '毛六',
            value: '4',
            disabled: false
          }
        ]
      },
      on: {
        onVnodeMounted: '',
        onVnodeUpdated: '',
        onChange: '',
        onVisibleChange: '',
        onRemoveTag: '',
        onClear: '',
        onBlur: '',
        onFocus: ''
      }
    }
  ]
}
export default case2
