import type { FormField } from '@xfc/vue3-form-render'

const news: FormField = {
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
      id: 'field_i0ip7',
      name: 'Select',
      icon: 'tabler:select',
      type: 'formItem',
      label: '新闻',
      value: null,
      readonly: false,
      required: true,
      hidden: false,
      hideLabel: false,
      props: {
        filterable: true,
        multiple: false,
        placeholder: '请选择新闻',
        dataType: 'static',
        options: [
          {
            label: '选项1',
            value: 1,
            type: 'number',
            disabled: false
          },
          {
            label: '选项2',
            value: 2,
            type: 'number',
            disabled: false
          }
        ]
      },
      on: {
        onVnodeMounted:
          "const http = $inject.http\nhttp.request({\n  url: '/api/news/list'\n}).then(res=>{\n  if(res.success){\n    field.props.options = res.data.map(e=>{\n      return {\n        label: e.title,\n        value: e.id\n      }\n    })\n  }\n})",
        onVnodeUpdated: '',
        onChange:
          "const val = event[0]\nif(val){\n  const http = $inject.http\n  http.request({\n    url: '/api/news/info',\n    params: {\n      id: val\n    }\n  }).then(res=>{\n    if(res.success){\n      const target = $inject.getField('field_g72it')\n      target.props.description = res.data.content\n    }\n  })\n  \n\n\n  \n}",
        onVisibleChange: '',
        onRemoveTag: '',
        onClear: '',
        onBlur: '',
        onFocus: ''
      }
    },
    {
      id: 'field_g72it',
      name: 'Alert',
      icon: 'mdi:alert-outline',
      type: 'container',
      label: '提示',
      value: null,
      hidden: false,
      props: {
        type: 'info',
        title: '新闻内容',
        description: '',
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
    }
  ]
}
export default news
