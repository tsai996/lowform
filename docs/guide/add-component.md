# 扩展组件
在表单渲染引擎中，扩展自定义组件是一个常见的需求。
通过扩展组件，可以满足特定的业务需求或实现个性化的功能。
以下是扩展组件的完整流程，包括添加组件、注册组件以及注册 Hook 的详细说明。
## 1. 添加组件
在 `fieldConfig.ts `文件中添加组件。
### 1.1 示例
假设需要添加一个名为 `CustomSelect` 的自定义组件，可以在 `fieldConfig.ts` 文件中进行如下配置：
```typescript
import type { FormField } from '@xfc/vue3-form-render'

export const formItems: FormField[] = [
  {
    id: 'custom_select', // 组件唯一标识
    name: 'CustomSelect', // 组件名称
    icon: 'ph:textbox',  // 图标
    type: 'formItem', // 组件类型
    label: '自定义输入框', // 组件标签
    value: null, // 默认值
    props: {
      placeholder: '请输入内容' // 组件属性
    },
    ...
  },
  // 其他组件配置...
];

export default fieldConfig;
```
## 2. 注册组件
将自定义组件注册到 `useFormRender` 中，以便表单解析引擎能够正确解析和渲染组件。
### 2.1 示例：注册自定义组件
在 `useFormRender` 中注册 `CustomSelect` 组件：
```typescript
import CustomSelect from './components/CustomSelect'; // 导入自定义组件

const { Render, FormRender, addComponent, removeComponent, components, hooks } = useFormRender({
    injects: {
        http: http
    }
})
export { Render, FormRender, addComponent, removeComponent, components, hooks }
addComponent('CustomSelect', CustomSelect)
...
```
## 3. 注册 Hook
通过注册 Hook，可以在组件渲染前修改其属性，实现个性化配置。
### 3.1 示例：注册 Hook
假设需要在 `CustomSelect` 组件渲染前动态设置其 `placeholder` 属性，可以注册一个 Hook：
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
addComponent('CustomSelect', CustomSelect, useSelect)
```
## 4. 完整流程
1. 添加组件配置：在 `fieldConfig.ts` 中定义组件的属性和行为。
2. 注册组件：在 `useFormRender` 中注册组件，使其能够被表单解析引擎识别。
3. 注册 Hook：通过 Hook 动态修改组件属性，实现个性化需求。