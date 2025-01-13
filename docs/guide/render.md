# 简介
Render 是一个用于渲染表单组件的组件，通过传入 field 属性，可以直接渲染对应的组件。
<script setup>
import { ref } from 'vue';
import { ElInput } from 'element-plus';
const field = ref({
  "id": "field_bxt5s",
  "name": "Input",
  "icon": "ph:textbox",
  "type": "formItem",
  "label": "输入框",
  "value": null,
  "readonly": false,
  "required": true,
  "hidden": false,
  "hideLabel": false,
  "rules": [],
  "props": {
    "maxlength": null,
    "showWordLimit": false,
    "clearable": true,
    "placeholder": "请输入输入框"
  },
  "on": {
    "onVnodeMounted": "",
    "onVnodeUpdated": "",
    "onBlur": "",
    "onFocus": "",
    "onChange": "",
    "onInput": "",
    "onClear": ""
  }
})
</script>
## 1. 接口格式
```typescript
export interface Field {
    // 组件名
    name: string 
    // 属性
    props: Props 
    // 插槽
    slots?: {[name: string]: unknown}
    // 事件
    on?: Recordable<string | ((event: any, $inject: InjectionType, ref: Ref<any>, field: Field) => void) | undefined>
}
```
## 2. 渲染例子
以渲染el-input组件为例子，传入field属性后直接当作el-input组件使用。
::: details 点我查看代码
```vue lines:line-numbers {1}
<script setup lang="ts">
  import type {Field} from "@xfc/vue3-form-render";
  import { Render } from '@/components/FormParser/context'
  import type {InputInstance} from "element-plus";

  const inputRef = ref<InstanceType<InputInstance>>()
  const field = ref<Field>({
    "name": "Input",
    "props": {
      "maxlength": null,
      "showWordLimit": false,
      "clearable": true,
      "placeholder": "请输入输入框"
    },
    "on": {
      "onVnodeMounted": "",
      "onVnodeUpdated": "",
      "onBlur": "",
      "onFocus": "",
      "onChange": "",
      "onInput": "",
      "onClear": ""
    }
  })
  const value = ref('')
  onMounted(() => {
    // 使 input 获取焦点
    inputRef.value?.focus()
  })
</script>

<template>
  <Render ref="inputRef" :field="field" v-model="value">
    <template #prepend>Http://</template>
  </Render>
</template>

<style scoped lang="scss"></style>
```
:::