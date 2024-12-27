import type { FormField } from '@xfc/vue3-form-render'

const validate: FormField = {
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
    labelWidth: 110,
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
      id: 'field_d6c24',
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
              id: 'field_tx34r',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '手机',
              value: null,
              readonly: false,
              required: true,
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
              id: 'field_7o6tm',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '电话',
              value: null,
              readonly: false,
              required: true,
              hidden: false,
              rules: [
                {
                  pattern: '^((0\\d{2,3}-\\d{7,8})|(1[3456789]\\d{9}))$',
                  message: '电话'
                }
              ],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入电话'
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
          id: 'field_v2doc',
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
              id: 'field_h1esy',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '邮箱',
              value: null,
              readonly: false,
              required: true,
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
          id: 'field_fb7gp',
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
              id: 'field_b6z3n',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '金额',
              value: null,
              readonly: false,
              required: true,
              hidden: false,
              rules: [
                {
                  pattern: '^([1-9][\\d]{0,7}|0)(\\.[\\d]{1,2})?$',
                  message: '金额'
                }
              ],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入金额'
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
          id: 'field_jd3f0',
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
              id: 'field_jh5b1',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '数字',
              value: null,
              readonly: false,
              required: true,
              hidden: false,
              rules: [
                {
                  pattern: '^[0-9]*$',
                  message: '数字'
                }
              ],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入数字'
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
          id: 'field_jtvlk',
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
              id: 'field_q9ttf',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '身份证',
              value: null,
              readonly: false,
              required: true,
              hidden: false,
              rules: [
                {
                  pattern:
                    '^(^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$)|(^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])((\\d{4})|\\d{3}[Xx])$)$',
                  message: '身份证'
                }
              ],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入身份证'
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
          id: 'field_hz2dx',
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
              id: 'field_os76n',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '网址',
              value: null,
              readonly: false,
              required: true,
              hidden: false,
              rules: [
                {
                  pattern:
                    '^https?:\\/\\/(([a-zA-Z0-9_-])+(\\.)?)*(:\\d+)?(\\/((\\.)?(\\?)?=?&?[a-zA-Z0-9_-](\\?)?)*)*$',
                  message: '网址'
                }
              ],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入网址'
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
          id: 'field_7nqce',
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
              id: 'field_ylkbo',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '邮编',
              value: null,
              readonly: false,
              required: true,
              hidden: false,
              rules: [
                {
                  pattern:
                    '^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\\d{4}$',
                  message: '邮政编码'
                }
              ],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入邮编'
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
          id: 'field_0ogst',
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
              id: 'field_uwyfk',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: 'ipv4',
              value: null,
              readonly: false,
              required: true,
              hidden: false,
              rules: [
                {
                  pattern: '^((25[0-5]|2[0-4]\\d|[01]?\\d\\d?)($|(?!\\.$)\\.)){4}$',
                  message: 'IPv4地址'
                }
              ],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入ipv4'
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
          id: 'field_7w31v',
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
              id: 'field_giok4',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '微信号',
              value: null,
              readonly: false,
              required: true,
              hidden: false,
              rules: [
                {
                  pattern: '^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$',
                  message: '微信号'
                }
              ],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入微信号'
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
          id: 'field_dox8s',
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
              id: 'field_9xhka',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '车牌号',
              value: null,
              readonly: false,
              required: true,
              hidden: false,
              rules: [
                {
                  pattern:
                    '^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$',
                  message: '车牌号'
                }
              ],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入车牌号'
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
          id: 'field_13wve',
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
              id: 'field_1i41i',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '中文姓名',
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
                placeholder: '请输入中文姓名'
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
          id: 'field_olp77',
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
              id: 'field_8owva',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '英文姓名',
              value: null,
              readonly: false,
              required: true,
              hidden: false,
              rules: [
                {
                  pattern: '(^[a-zA-Z][a-zA-Z\\s]{0,20}[a-zA-Z]$)',
                  message: '英文姓名'
                }
              ],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入英文姓名'
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
          id: 'field_bzj3k',
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
              id: 'field_ff64d',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '社会信用代码',
              value: null,
              readonly: false,
              required: true,
              hidden: false,
              rules: [
                {
                  pattern: '^[0-9A-HJ-NPQRTUWXY]{2}\\d{6}[0-9A-HJ-NPQRTUWXY]{10}$',
                  message: '统一社会信用代码'
                }
              ],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入社会信用代码'
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
          id: 'field_3onir',
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
              id: 'field_nxpmt',
              name: 'Input',
              icon: 'ph:textbox',
              type: 'formItem',
              label: '银行卡号',
              value: null,
              readonly: false,
              required: true,
              hidden: false,
              rules: [
                {
                  pattern: '^([1-9]{1})(\\d{14}|\\d{18})$',
                  message: '银行卡号'
                }
              ],
              props: {
                maxlength: null,
                showWordLimit: false,
                clearable: true,
                placeholder: '请输入银行卡号'
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
      ]
    }
  ]
}

export default validate
