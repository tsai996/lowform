import type { FormField } from '@xfc/vue3-form-render'

const submit: FormField = {
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
      id: 'field_7yebg',
      name: 'Input',
      icon: 'ph:textbox',
      type: 'formItem',
      label: '名称',
      value: null,
      readonly: false,
      required: true,
      hidden: false,
      rules: [],
      props: {
        maxlength: 150,
        showWordLimit: true,
        clearable: true,
        placeholder: '请输入名称'
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
      id: 'field_liq1m',
      name: 'Radio',
      icon: 'gg:radio-checked',
      type: 'formItem',
      label: '状态',
      value: 1,
      readonly: false,
      required: true,
      hidden: false,
      props: {
        dataType: 'static',
        options: [
          {
            label: '启用',
            value: 1,
            type: 'number',
            disabled: false
          },
          {
            label: '禁用',
            value: 2,
            type: 'number',
            disabled: false
          }
        ]
      },
      on: {
        onVnodeMounted: '',
        onVnodeUpdated: '',
        onChange: ''
      }
    },
    {
      id: 'field_k5q4n',
      name: 'Textarea',
      icon: 'bi:textarea-resize',
      type: 'formItem',
      label: '备注',
      value: null,
      readonly: false,
      required: true,
      hidden: false,
      rules: [],
      props: {
        type: 'textarea',
        placeholder: '请输入备注',
        maxlength: 500,
        showWordLimit: true,
        autosize: {
          minRows: 3,
          maxRows: 3
        }
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
      id: 'field_jt0eq',
      name: 'Button',
      icon: 'mdi:button-pointer',
      type: 'container',
      label: '提交',
      value: null,
      readonly: false,
      hidden: false,
      props: {
        type: 'primary',
        plain: false,
        text: false,
        link: false,
        round: false,
        circle: false,
        disabled: false,
        loading: false
      },
      on: {
        onVnodeMounted: '',
        onVnodeUpdated: '',
        onClick:
          "const formRef = $inject.rootRef\nconst formData = $inject.formData\nfield.props.loading = true\nformRef.value?.validate((valid)=>{\n  if(valid){\n    console.log(formData)\n    setTimeout(() => {\n      field.props.loading = false\n      alert('提交成功')\n    },500)\n  }else{\n    field.props.loading = false\n  }\n})"
      }
    },
    {
      id: 'field_957d9',
      name: 'Button',
      icon: 'mdi:button-pointer',
      type: 'container',
      label: '重置',
      value: null,
      readonly: false,
      hidden: false,
      props: {
        type: 'info',
        plain: false,
        text: false,
        link: false,
        round: false,
        circle: false,
        disabled: false
      },
      on: {
        onVnodeMounted: '',
        onVnodeUpdated: '',
        onClick: 'const formRef = $inject.rootRef\nformRef.value?.resetFields()'
      }
    }
  ]
}
export default submit
