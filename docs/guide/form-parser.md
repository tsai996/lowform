# 表单解析器
## 1. 介绍
表单解析器是一个可以将json格式解析渲染为表单的组件，支持自定义渲染器，注册组件，自定义组件hook，属性注入等。

## 2. 安装
```shell
npm install @xfc/vue3-form-render
```
## 3. 注册组件
通过 `addComponent` 方法注册组件，组件注册后可以在json中通过 `name` 属性引用。
```typescript
import { useSelect } from './hooks/useSelect'
import { useFormRender } from '@xfc/vue3-form-render'
import http from '@/axios'

const { Render, FormRender, addComponent, removeComponent, components, hooks } = useFormRender({
  injects: {
    http: http
  }
})
export { Render, FormRender, addComponent, removeComponent, components, hooks }
addComponent('Form', ElForm)
addComponent('Input', ElInput)
addComponent('Textarea', ElInput)
addComponent('Number', ElInputNumber)
addComponent('Select', ElSelect, useSelect)
...
```
## 4. 注册Hook
通过 `addComponent` 添加组件时附带添加上该组件的Hook，Hook可以在组件渲染器修改组件属性，事件等。
```tsx
import type { FormField } from '@xfc/vue3-form-render'

export const useSelect = function (field: FormField) {
    const slots = {
        default: () => {
            return field.props.options?.map((item: Recordable) => {
                return <el-option label={item.label} value={item.value} disabled={item.disabled} />
            })
        }
    }
    if (!field.slots) {
        field.slots = {}
    }
    Object.assign(field.slots, slots)
}
addComponent('Select', ElSelect, useSelect)
```

## 5. 渲染器
默认渲染器分为2种分别为：
* **formItem：** 表单项渲染器
* **container：** 容器渲染器

自定义渲染器：

渲染器命名优先级：id > name > type，比如如果存在id为 `custom` 的FormField对象，则会优先使用**custom**渲染器。
```typescript
const { Render, FormRender, addComponent, removeComponent, components, hooks } = useFormRender({
  injects: {
    http: http
  },
  renders:{
    custom: field => {
      return h(Render, {field})
    }
  }
})
```

## 6. 注入方法/属性
注入后的方法属性可以的组件事件中调用，比 `customFun` 为例。
```typescript
const { Render, FormRender, addComponent, removeComponent, components, hooks } = useFormRender({
    injects: {
        http: http,
        customFun: ()=>{console.log('测试')}
    }
})
```
在 `FormField` 对象的on事件中调用通过 `$inject` 调用注入的方法。
```typescript
const formConf = ref<FormField>({
    id: 'formConf',
    name: 'Form',
    icon: 'ep:document',
    type: 'container',
    label: '表单',
    value: undefined,
    readonly: false,
    required: undefined,
    hidden: false,
    props: {...},
    on: {
        onMounted: '$inject.customFun()',
        onUnmounted: '',
        onValidate: ''
    },
    children: []
})
```
## 7. 插槽扩展
插槽分为3类分别为：
* 父容器插槽：

  | 插槽名     |           参数            |      说明      |
  |---------|:-----------------------:|:------------:|
  | prepend |          field          |   顶部追加渲染组件   |
  | default |       child、field       | 默认插槽，覆盖默认的子项 |
  | append  |          field          |   底部追加渲染组件   |

* 组件插槽：

组件插槽分为3类优先级分别为：id > name > type

| 插槽名            |  参数   |   说明   |
|----------------|:-----:|:------:|
| FormField 内（id、name、type）值 | node、field | 覆盖渲染组件 |

* 只读插槽：

如果对默认只读显示或某些组件的只读显示不满意可以使用该插槽替换默认的只读显示。

| 插槽名                    |  参数   |     说明      |
|------------------------|:-----:|:-----------:|
| readonly               | value、field |  覆盖所有只读显示   |
| readonly-`${field.name}` | value、field | 覆盖指定组件的只读显示 |