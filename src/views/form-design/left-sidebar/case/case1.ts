import type { FormField } from '@xfc/vue3-form-render'

const case1: FormField = {
  id: 'formConf',
  name: 'Form',
  icon: 'ep:document',
  type: 'container',
  label: '表单',
  readonly: false,
  hidden: false,
  props: {
    scrollToError: true,
    labelPosition: 'right',
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
      id: 'field_rqnya',
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
            span: 12
          },
          children: [
            {
              id: 'username',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '用户名',
              value: null,
              readonly: false,
              required: true,
              hidden: false,
              rules: [],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入用户名'
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
              id: 'nickname',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '昵称',
              value: null,
              readonly: false,
              required: true,
              hidden: false,
              rules: [
                {
                  pattern: '^(?:[一-龥·]{2,16})$',
                  message: '中文姓名'
                }
              ],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入昵称'
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
          id: 'field_vcjg2',
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
              id: 'phone',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '手机',
              value: null,
              readonly: false,
              required: false,
              hidden: false,
              rules: [
                {
                  pattern:
                    '^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$',
                  message: '手机'
                }
              ],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入手机'
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
          id: 'field_u8tvl',
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
              id: 'email',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '邮箱',
              value: null,
              readonly: false,
              required: false,
              hidden: false,
              rules: [
                {
                  pattern: '\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*',
                  message: '邮箱'
                }
              ],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入邮箱'
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
          id: 'field_ywym4',
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
              id: 'gender',
              name: 'Select',
              icon: 'tabler:select',
              type: 'formItem',
              label: '性别',
              value: 1,
              readonly: false,
              required: false,
              hidden: false,
              props: {
                filterable: true,
                multiple: false,
                placeholder: '请选择性别',
                dataType: 'static',
                options: [
                  {
                    label: '男',
                    value: 1,
                    type: 'number',
                    disabled: false
                  },
                  {
                    label: '女',
                    value: 2,
                    type: 'number',
                    disabled: false
                  },
                  {
                    label: '未知',
                    value: 3,
                    type: 'number',
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
          id: 'field_e4q9j',
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
              id: 'deptId',
              name: 'Select',
              icon: 'tabler:select',
              type: 'formItem',
              label: '部门',
              value: null,
              readonly: false,
              required: false,
              hidden: false,
              props: {
                filterable: true,
                multiple: false,
                placeholder: '请选择部门',
                dataType: 'static',
                options: [
                  {
                    label: '销售部',
                    value: 1,
                    type: 'number',
                    disabled: false
                  },
                  {
                    label: '市场部',
                    value: 2,
                    type: 'number',
                    disabled: false
                  },
                  {
                    label: '开发部',
                    value: 3,
                    type: 'number',
                    disabled: false
                  },
                  {
                    label: '财务部',
                    value: 4,
                    type: 'number',
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
          id: 'field_7e731',
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
              id: 'roleId',
              name: 'Select',
              icon: 'tabler:select',
              type: 'formItem',
              label: '角色',
              value: null,
              readonly: false,
              required: false,
              hidden: false,
              props: {
                filterable: true,
                multiple: false,
                placeholder: '请选择角色',
                dataType: 'static',
                options: [
                  {
                    label: '游客',
                    value: 1,
                    type: 'number',
                    disabled: false
                  },
                  {
                    label: '系统管理员',
                    value: 2,
                    type: 'number',
                    disabled: false
                  },
                  {
                    label: '管理员',
                    value: 3,
                    type: 'number',
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
          id: 'field_segs9',
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
              id: 'status',
              name: 'Radio',
              icon: 'gg:radio-checked',
              type: 'formItem',
              label: '状态',
              value: 1,
              readonly: false,
              required: false,
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
            }
          ]
        }
      ]
    }
  ]
}
export default case1
