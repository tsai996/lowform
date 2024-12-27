import type { FormField } from '@xfc/vue3-form-render'

const formula: FormField = {
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
      id: 'field_lob18',
      name: 'Radio',
      icon: 'gg:radio-checked',
      type: 'formItem',
      label: '请假类型',
      value: 1,
      readonly: false,
      required: true,
      hidden: false,
      props: {
        dataType: 'static',
        options: [
          {
            label: '病假',
            value: 1,
            disabled: false
          },
          {
            label: '事假',
            value: 2,
            disabled: false
          },
          {
            label: '年假',
            value: '3',
            disabled: false
          },
          {
            label: '丧假',
            value: '4',
            disabled: false
          }
        ]
      },
      on: {
        onVnodeMounted: '',
        onVnodeUpdated: '',
        onChange:
          "const {getField} = $inject\nconst yy = getField('field_h75fl')\nconst value = event[0]\nif(value == 2){\n  yy.required = true\n}else{\n  yy.required = false\n}"
      }
    },
    {
      id: 'field_6720g',
      name: 'DateRange',
      icon: 'heroicons:calendar-date-range-20-solid',
      type: 'formItem',
      label: '请假日期',
      value: null,
      readonly: false,
      required: true,
      hidden: false,
      props: {
        type: 'datetimerange',
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期',
        valueFormat: 'YYYY-MM-DD HH:mm',
        format: 'YYYY-MM-DD HH:mm',
        key: 1735279561451
      },
      on: {
        onVnodeMounted: '',
        onVnodeUpdated: '',
        onChange:
          'const {getField,formData} = $inject\nconst value = event[0]\nconst timestamp = new Date(value[1]).getTime() - new Date(value[0]).getTime()\nformData.field_ykkfx = timestamp /1000/60/60/24',
        onBlur: '',
        onFocus: '',
        onClear: '',
        onCalendarChange: '',
        onPanelChange: '',
        onVisibleChange: ''
      }
    },
    {
      id: 'field_ykkfx',
      name: 'Number',
      icon: 'fluent:keyboard-123-20-regular',
      type: 'formItem',
      label: '时长',
      value: 0,
      readonly: false,
      required: true,
      hidden: false,
      props: {
        min: 0,
        max: 999,
        step: 1,
        precision: 1,
        placeholder: '时长',
        style: {
          width: '100%'
        },
        disabled: false
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
      id: 'field_h75fl',
      name: 'Textarea',
      icon: 'bi:textarea-resize',
      type: 'formItem',
      label: '请假原因',
      value: null,
      readonly: false,
      required: false,
      hidden: false,
      rules: [],
      props: {
        type: 'textarea',
        placeholder: '请输入请假原因',
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
    }
  ]
}
export default formula
