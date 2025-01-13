import type { FormField } from '@xfc/vue3-form-render'
// 表单项
export const formItems: FormField[] = [
  {
    id: 'field01',
    name: 'Input',
    icon: 'ph:textbox',
    type: 'formItem',
    label: '输入框',
    value: null,
    readonly: false,
    required: true,
    hidden: false,
    hideLabel: false,
    rules: [],
    props: {
      maxlength: null,
      showWordLimit: false,
      clearable: true,
      placeholder: '请输入输入框'
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
    id: 'field02',
    name: 'Textarea',
    icon: 'bi:textarea-resize',
    type: 'formItem',
    label: '多行输入框',
    value: null,
    readonly: false,
    required: true,
    hidden: false,
    hideLabel: false,
    rules: [],
    props: {
      type: 'textarea',
      placeholder: '请输入多行输入框',
      maxlength: null,
      showWordLimit: false,
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
    id: 'field03',
    name: 'Number',
    icon: 'fluent:keyboard-123-20-regular',
    type: 'formItem',
    label: '数值输入框',
    value: null,
    readonly: false,
    required: true,
    hidden: false,
    hideLabel: false,
    props: {
      min: undefined,
      max: undefined,
      step: 1,
      precision: undefined,
      placeholder: '数值输入框',
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
    id: 'field04',
    name: 'Select',
    icon: 'tabler:select',
    type: 'formItem',
    label: '下拉框',
    value: null,
    readonly: false,
    required: true,
    hidden: false,
    hideLabel: false,
    props: {
      filterable: true,
      multiple: false,
      placeholder: '请选择下拉框',
      dataType: 'static',
      options: [
        { label: '选项1', value: 1, type: 'number', disabled: false },
        { label: '选项2', value: 2, type: 'number', disabled: false }
      ],
      dataSource: undefined
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
    id: 'field05',
    name: 'Radio',
    icon: 'gg:radio-checked',
    type: 'formItem',
    label: '单选框',
    value: null,
    readonly: false,
    required: true,
    hidden: false,
    hideLabel: false,
    props: {
      dataType: 'static',
      options: [
        { label: '选项1', value: 1, type: 'number', disabled: false },
        { label: '选项2', value: 2, type: 'number', disabled: false }
      ],
      dataSource: undefined
    },
    on: {
      onVnodeMounted: '',
      onVnodeUpdated: '',
      onChange: ''
    }
  },
  {
    id: 'field06',
    name: 'Checkbox',
    icon: 'mdi:checkbox-outline',
    type: 'formItem',
    label: '多选框',
    value: [],
    readonly: false,
    required: true,
    hidden: false,
    hideLabel: false,
    props: {
      direction: 'horizontal',
      max: 999,
      dataType: 'static',
      options: [
        { label: '选项1', value: 1, type: 'number', disabled: false },
        { label: '选项2', value: 2, type: 'number', disabled: false }
      ],
      dataSource: undefined
    },
    on: {
      onVnodeMounted: '',
      onVnodeUpdated: '',
      onChange: ''
    }
  },
  {
    id: 'field07',
    name: 'Switch',
    icon: 'line-md:switch',
    type: 'formItem',
    label: '开关',
    value: null,
    readonly: false,
    required: true,
    hidden: false,
    hideLabel: false,
    props: {
      activeValue: true,
      inactiveValue: false,
      activeColor: undefined,
      inactiveColor: undefined
    },
    on: {
      onVnodeMounted: '',
      onVnodeUpdated: '',
      onChange: ''
    }
  },
  {
    id: 'field08',
    name: 'Date',
    icon: 'fluent-mdl2:date-time-mirrored',
    type: 'formItem',
    label: '日期选择',
    value: null,
    readonly: false,
    required: true,
    hidden: false,
    hideLabel: false,
    props: {
      type: 'date',
      placeholder: '请选择日期选择',
      valueFormat: 'YYYY-MM-DD',
      format: 'YYYY-MM-DD',
      style: {
        width: '100%'
      }
    },
    on: {
      onVnodeMounted: '',
      onVnodeUpdated: '',
      onChange: '',
      onBlur: '',
      onFocus: '',
      onClear: '',
      onCalendarChange: '',
      onPanelChange: '',
      onVisibleChange: ''
    }
  },
  {
    id: 'field09',
    name: 'DateRange',
    icon: 'heroicons:calendar-date-range-20-solid',
    type: 'formItem',
    label: '日期范围',
    value: null,
    readonly: false,
    required: true,
    hidden: false,
    hideLabel: false,
    props: {
      type: 'daterange',
      startPlaceholder: '开始日期',
      endPlaceholder: '结束日期',
      valueFormat: 'YYYY-MM-DD',
      format: 'YYYY-MM-DD'
    },
    on: {
      onVnodeMounted: '',
      onVnodeUpdated: '',
      onChange: '',
      onBlur: '',
      onFocus: '',
      onClear: '',
      onCalendarChange: '',
      onPanelChange: '',
      onVisibleChange: ''
    }
  },
  {
    id: 'field10',
    name: 'Time',
    icon: 'ci:timer',
    type: 'formItem',
    label: '时间选择',
    value: null,
    readonly: false,
    required: true,
    hidden: false,
    hideLabel: false,
    props: {
      format: 'HH:mm:ss',
      valueFormat: 'HH:mm:ss',
      placeholder: '请选择时间选择',
      style: {
        width: '100%'
      }
    },
    on: {
      onVnodeMounted: '',
      onVnodeUpdated: '',
      onChange: '',
      onBlur: '',
      onFocus: '',
      onClear: '',
      onVisibleChange: ''
    }
  },
  {
    id: 'field11',
    name: 'TimeRange',
    icon: 'fluent:keyboard-123-20-regular',
    type: 'formItem',
    label: '时间范围',
    value: null,
    readonly: false,
    required: true,
    hidden: false,
    hideLabel: false,
    props: {
      isRange: true,
      format: 'HH:mm:ss',
      valueFormat: 'HH:mm:ss',
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间'
    },
    on: {
      onVnodeMounted: '',
      onVnodeUpdated: '',
      onChange: '',
      onBlur: '',
      onFocus: '',
      onClear: '',
      onVisibleChange: ''
    }
  },
  {
    id: 'field12',
    name: 'Rate',
    icon: 'material-symbols:star-rate',
    type: 'formItem',
    label: '评分',
    value: null,
    readonly: false,
    required: true,
    hidden: false,
    hideLabel: false,
    props: {
      max: 5,
      allowHalf: false
    },
    on: {
      onVnodeMounted: '',
      onVnodeUpdated: '',
      onChange: ''
    }
  },
  {
    id: 'field13',
    name: 'Slider',
    icon: 'radix-icons:slider',
    type: 'formItem',
    label: '滑块',
    value: 0,
    readonly: false,
    required: true,
    hidden: false,
    hideLabel: false,
    props: {
      min: 0,
      max: 100,
      step: 1,
      range: false
    },
    on: {
      onVnodeMounted: '',
      onVnodeUpdated: '',
      onChange: '',
      onInput: ''
    }
  },
  {
    id: 'field14',
    name: 'Upload',
    icon: 'material-symbols:upload',
    type: 'formItem',
    label: '文件上传',
    value: null,
    readonly: false,
    required: true,
    hidden: false,
    hideLabel: false,
    props: {
      size: 10,
      limit: 3,
      action: undefined,
      accept: null
    },
    on: {
      onVnodeMounted: '',
      onVnodeUpdated: ''
    }
  },
  {
    id: 'field15',
    name: 'Color',
    icon: 'ic:outline-color-lens',
    type: 'formItem',
    label: '取色器',
    value: null,
    readonly: false,
    required: true,
    hidden: false,
    hideLabel: false,
    props: {
      showAlpha: false,
      colorFormat: undefined,
      predefine: []
    },
    on: {
      onVnodeMounted: '',
      onVnodeUpdated: '',
      onChange: '',
      onActiveChange: '',
      onFocus: '',
      onBlur: ''
    }
  },
  {
    id: 'field16',
    name: 'Transfer',
    icon: 'tabler:transfer',
    type: 'formItem',
    label: '穿梭框',
    value: [],
    readonly: false,
    required: true,
    hidden: false,
    hideLabel: false,
    props: {
      filterable: false,
      targetOrder: 'original',
      filterPlaceholder: undefined,
      titles: [],
      buttonTexts: [],
      dataType: 'static',
      options: [
        { label: '选项1', value: 1, type: 'number', disabled: false },
        { label: '选项2', value: 2, type: 'number', disabled: false }
      ],
      dataSource: undefined
    },
    on: {
      onVnodeMounted: '',
      onVnodeUpdated: '',
      onChange: '',
      onLeftCheckChange: '',
      onRightCheckChange: ''
    }
  }
]
// 布局容器
export const containers: FormField[] = [
  {
    id: 'field16',
    name: 'Tab',
    icon: 'material-symbols:tabs',
    type: 'container',
    label: '标签页',
    value: '1',
    hidden: false,
    props: {
      stretch: false,
      type: '',
      tabPosition: 'top'
    },
    on: {
      onVnodeMounted: '',
      onVnodeUpdated: '',
      onTabClick: '',
      onTabChange: ''
    },
    children: [
      {
        id: 'field16_1',
        name: 'TabPane',
        label: '标签栏',
        icon: 'material-symbols:tabs',
        type: 'container',
        value: undefined,
        hidden: false,
        props: {
          label: '标签1',
          name: '1'
        },
        children: []
      }
    ]
  },
  {
    id: 'field17',
    name: 'Collapse',
    icon: 'tabler:layout-navbar-collapse',
    type: 'container',
    label: '折叠面板',
    value: '1',
    hidden: false,
    props: {},
    on: {
      onVnodeMounted: '',
      onVnodeUpdated: '',
      onChange: ''
    },
    children: [
      {
        id: 'field17_1',
        name: 'CollapseItem',
        label: '折叠1',
        icon: 'tabler:layout-navbar-collapse',
        type: 'container',
        value: undefined,
        hidden: false,
        props: {
          title: '折叠项1',
          name: '1'
        },
        children: []
      }
    ]
  },
  {
    id: 'field18',
    name: 'Row',
    icon: 'ic:baseline-view-column',
    type: 'container',
    label: '分栏布局',
    value: null,
    hidden: false,
    props: {
      justify: 'start',
      gutter: 5
    },
    on: {
      onVnodeMounted: '',
      onVnodeUpdated: ''
    },
    children: [
      {
        id: 'field18_1',
        name: 'Col',
        label: '分栏1',
        icon: 'carbon:grid',
        type: 'container',
        value: undefined,
        hidden: false,
        props: {
          span: 12
        },
        children: []
      },
      {
        id: 'field18_2',
        name: 'Col',
        label: '分栏2',
        icon: 'carbon:grid',
        type: 'container',
        value: undefined,
        hidden: false,
        props: {
          span: 12
        },
        children: []
      }
    ]
  },
  {
    id: 'field19',
    name: 'Card',
    icon: 'ion:card-outline',
    type: 'container',
    label: '卡片',
    value: null,
    hidden: false,
    props: {
      shadow: 'always',
      header: '卡片'
    },
    on: {
      onVnodeMounted: '',
      onVnodeUpdated: ''
    },
    children: []
  },
  {
    id: 'field20',
    name: 'Button',
    icon: 'mdi:button-pointer',
    type: 'container',
    label: '按钮',
    value: null,
    readonly: false,
    hidden: false,
    props: {
      type: 'default',
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
      onClick: ''
    }
  },
  {
    id: 'field21',
    name: 'Alert',
    icon: 'mdi:alert-outline',
    type: 'container',
    label: '提示',
    value: null,
    hidden: false,
    props: {
      type: 'info',
      title: '提示',
      description: '描述',
      effect: 'light',
      showIcon: true,
      closable: false,
      center: false
    },
    on: {
      onVnodeMounted: '',
      onVnodeUpdated: '',
      onClose: ''
    }
  },
  {
    id: 'field22',
    name: 'Divider',
    icon: 'mdi:horizontal-line',
    type: 'container',
    label: '分割线',
    value: null,
    hidden: false,
    props: {
      contentPosition: 'center',
      content: '分割线'
    },
    on: {
      onVnodeMounted: '',
      onVnodeUpdated: ''
    }
  }
]
