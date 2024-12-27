import type { FormField } from '@xfc/vue3-form-render'

const case3: FormField = {
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
      id: 'field_8jcji',
      name: 'Row',
      icon: 'ic:baseline-view-column',
      type: 'container',
      label: '分栏布局',
      value: null,
      readonly: false,
      required: true,
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
          hidden: false,
          props: {
            span: 24
          },
          children: [
            {
              id: 'field_kvihg',
              name: 'Radio',
              icon: 'gg:radio-checked',
              type: 'formItem',
              label: '类型',
              value: 1,
              readonly: false,
              required: true,
              hidden: false,
              props: {
                dataType: 'static',
                options: [
                  {
                    label: '目录',
                    value: 1,
                    disabled: false
                  },
                  {
                    label: '菜单',
                    value: 2,
                    disabled: false
                  },
                  {
                    label: '按钮',
                    value: '3',
                    disabled: false
                  }
                ]
              },
              on: {
                onVnodeMounted: '',
                onVnodeUpdated: '',
                onChange:
                  "const {getFiled} = $inject\nconst yc = getFiled('field_u00td')\nconst hc = getFiled('field_tj7q1')\nconst gd = getFiled('field_fhr5k')\nconst value = event[0]\nif(value == 1){\n  yc.hidden = false\n  hc.hidden = true\n  gd.hidden = true\n}else if(value == 2){\n  yc.hidden = false\n  hc.hidden = false\n  gd.hidden = false\n}else if(value == 3){\n  yc.hidden = true\n  hc.hidden = true\n  gd.hidden = true\n}"
              }
            }
          ]
        },
        {
          id: 'field18_2',
          name: 'Col',
          label: '分栏2',
          icon: 'carbon:grid',
          type: 'container',
          hidden: false,
          props: {
            span: 12
          },
          children: [
            {
              id: 'field_k78r1',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '菜单标题',
              value: null,
              readonly: false,
              required: true,
              hidden: false,
              rules: [],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入菜单标题'
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
        },
        {
          id: 'field_utqw8',
          name: 'Col',
          label: '栅栏',
          icon: 'carbon:grid',
          type: 'container',
          hidden: false,
          props: {
            span: 12,
            style: {},
            class: [],
            on: {}
          },
          children: [
            {
              id: 'field_97mt2',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '组件名称',
              value: null,
              readonly: false,
              required: true,
              hidden: false,
              rules: [],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入组件名称'
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
        },
        {
          id: 'field_d5ikr',
          name: 'Col',
          label: '栅栏',
          icon: 'carbon:grid',
          type: 'container',
          hidden: false,
          props: {
            span: 12,
            style: {},
            class: [],
            on: {}
          },
          children: [
            {
              id: 'field_cskvc',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '路由地址',
              value: null,
              readonly: false,
              required: true,
              hidden: false,
              rules: [],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入路由地址'
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
        },
        {
          id: 'field_wxx26',
          name: 'Col',
          label: '栅栏',
          icon: 'carbon:grid',
          type: 'container',
          hidden: false,
          props: {
            span: 12,
            style: {},
            class: [],
            on: {}
          },
          children: [
            {
              id: 'field_wmz9w',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '重定向',
              value: null,
              readonly: false,
              required: false,
              hidden: false,
              rules: [],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入重定向'
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
        },
        {
          id: 'field_t52r5',
          name: 'Col',
          label: '栅栏',
          icon: 'carbon:grid',
          type: 'container',
          hidden: false,
          props: {
            span: 12,
            style: {},
            class: [],
            on: {}
          },
          children: [
            {
              id: 'field_f8ipr',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '菜单图标',
              value: null,
              readonly: false,
              required: true,
              hidden: false,
              rules: [],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入菜单图标'
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
        },
        {
          id: 'field_aw4a9',
          name: 'Col',
          label: '栅栏',
          icon: 'carbon:grid',
          type: 'container',
          hidden: false,
          props: {
            span: 12,
            style: {},
            class: [],
            on: {}
          },
          children: [
            {
              id: 'field_go2rq',
              name: 'Number',
              icon: 'fluent:keyboard-123-20-regular',
              type: 'formItem',
              label: '排序',
              value: 0,
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
            }
          ]
        },
        {
          id: 'field_gdl5t',
          name: 'Col',
          label: '栅栏',
          icon: 'carbon:grid',
          type: 'container',
          hidden: false,
          props: {
            span: 24,
            style: {},
            class: [],
            on: {}
          },
          children: [
            {
              id: 'field_z4dzr',
              name: 'Select',
              icon: 'tabler:select',
              type: 'formItem',
              label: '上级菜单',
              value: null,
              readonly: false,
              required: true,
              hidden: false,
              props: {
                filterable: true,
                multiple: false,
                placeholder: '请选择上级菜单',
                dataType: 'static',
                options: [
                  {
                    label: '菜单1',
                    value: 1,
                    disabled: false
                  },
                  {
                    label: '菜单2',
                    value: 2,
                    disabled: false
                  },
                  {
                    label: '菜单3',
                    value: '3',
                    disabled: false
                  },
                  {
                    label: '菜单4',
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
        },
        {
          id: 'field_u7rtt',
          name: 'Col',
          label: '栅栏',
          icon: 'carbon:grid',
          type: 'container',
          hidden: false,
          props: {
            span: 8,
            style: {},
            class: [],
            on: {}
          },
          children: [
            {
              id: 'field_u00td',
              name: 'Switch',
              icon: 'line-md:switch',
              type: 'formItem',
              label: '隐藏',
              value: false,
              readonly: false,
              required: false,
              hidden: false,
              props: {
                activeValue: true,
                inactiveValue: false
              },
              on: {
                onVnodeMounted: '',
                onVnodeUpdated: '',
                onChange: ''
              }
            }
          ]
        },
        {
          id: 'field_cr4ob',
          name: 'Col',
          label: '栅栏',
          icon: 'carbon:grid',
          type: 'container',
          hidden: false,
          props: {
            span: 8,
            style: {},
            class: [],
            on: {}
          },
          children: [
            {
              id: 'field_tj7q1',
              name: 'Switch',
              icon: 'line-md:switch',
              type: 'formItem',
              label: '缓存',
              value: false,
              readonly: false,
              required: false,
              hidden: true,
              props: {
                activeValue: true,
                inactiveValue: false
              },
              on: {
                onVnodeMounted: '',
                onVnodeUpdated: '',
                onChange: ''
              }
            }
          ]
        },
        {
          id: 'field_h17v5',
          name: 'Col',
          label: '栅栏',
          icon: 'carbon:grid',
          type: 'container',
          hidden: false,
          props: {
            span: 8,
            style: {},
            class: [],
            on: {}
          },
          children: [
            {
              id: 'field_fhr5k',
              name: 'Switch',
              icon: 'line-md:switch',
              type: 'formItem',
              label: '固定',
              value: false,
              readonly: false,
              required: false,
              hidden: true,
              props: {
                activeValue: true,
                inactiveValue: false
              },
              on: {
                onVnodeMounted: '',
                onVnodeUpdated: '',
                onChange: ''
              }
            }
          ]
        }
      ]
    }
  ]
}
export default case3
