<script setup lang="ts">
import type { Component, Ref } from 'vue'
import type { FormField } from '@xfc/vue3-form-render'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
const components: Recordable<Component> = {}
const arrts = import.meta.glob('./*.vue', { eager: true })
Object.keys(arrts).forEach((key: string) => {
  const obj: any = arrts[key]
  const name = key.replace(/(.*\/)*([^.]+).*/gi, '$2')
  components[name] = obj.default
})
const activeNames = ref(['base', 'attribute'])

const onUpdateLabel = (label: string) => {
  if (activeData.value?.props.placeholder !== undefined) {
    const name = activeData.value?.name
    let placeholder = `请选择${label}`
    if (['Input', 'Textarea'].includes(name)) {
      placeholder = `请输入${label}`
    } else if (['Number', 'Calculation'].includes(name)) {
      placeholder = label
    }
    activeData.value.props.placeholder = placeholder
  }
}
const changeReadonly = (val: boolean) => {
  if (activeData.value) {
    activeData.value.props.disabled = val
  }
}
</script>

<template>
  <el-form :model="activeData" label-width="80" label-position="top" v-if="activeData">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="base">
        <template #title>
          <span class="panel-collapse__title">
            <el-icon><InfoFilled /></el-icon>
            常规
          </span>
        </template>
        <el-form-item prop="id" label="字段名" v-if="activeData.id !== undefined">
          <el-input v-model="activeData.id" placeholder="请输入字段名" />
        </el-form-item>
        <el-form-item prop="title" label="标签" v-if="activeData.label !== undefined">
          <el-input
            v-model="activeData.label"
            placeholder="请输入标签"
            @update:model-value="onUpdateLabel"
          >
            <template #suffix>
              <el-tooltip content="显示/隐藏标签" placement="top">
                <el-icon
                  v-if="activeData.hideLabel !== undefined"
                  @click.stop="activeData.hideLabel = !activeData.hideLabel"
                  class="el-input__icon el-input__password"
                >
                  <Hide v-if="activeData.hideLabel" />
                  <View v-else />
                </el-icon>
              </el-tooltip>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="placeholder" label="操作">
          <el-checkbox
            v-model="activeData.required"
            label="必填"
            v-if="activeData.required !== undefined"
          />
          <el-checkbox
            v-model="activeData.readonly"
            @change="changeReadonly(!!$event)"
            label="只读"
            v-if="activeData.readonly !== undefined"
          />
          <el-checkbox
            v-model="activeData.hidden"
            label="隐藏"
            v-if="activeData.hidden !== undefined"
          />
        </el-form-item>
      </el-collapse-item>
      <el-collapse-item name="attribute">
        <template #title>
          <span class="panel-collapse__title">
            <el-icon><Tools /></el-icon>
            属性
          </span>
        </template>
        <component :is="components[activeData.name]" />
      </el-collapse-item>
    </el-collapse>
  </el-form>
</template>

<style scoped lang="scss">
:deep(.el-collapse-item__content) {
  padding: 10px 12px 0 10px;
}

.panel-collapse__title {
  border-left: 3px solid var(--el-color-primary);
  padding: 0 8px;
  line-height: 1.2em;
  display: flex;

  .el-icon {
    margin-right: 8px;
  }
}
</style>
