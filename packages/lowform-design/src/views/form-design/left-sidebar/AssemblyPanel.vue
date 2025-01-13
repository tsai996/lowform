<script setup lang="ts">
import Draggable from '@xfc/vue3-draggable'
import { containers, formItems } from './fieldConfig'
import { cloneDeep } from 'lodash-es'
import type { Ref } from 'vue'
import type { FormField } from '@xfc/vue3-form-render'

const { activeData } = inject<{
  activeData: Ref<FormField>
}>('formDesign')!
const props = defineProps<{
  formConf: FormField
}>()
const panelComponents = computed(() => {
  return [
    {
      title: '表单项',
      list: formItems.filter((item) => item.label.includes(filterText.value))
    },
    {
      title: '布局容器',
      list: containers.filter((item) => item.label.includes(filterText.value))
    },
    {
      title: '展示',
      list: []
    }
  ]
})
const activeNames = ref([0, 1, 2])
const filterText = ref('')
const cloneComponent = (element: FormField) => {
  const clone = cloneDeep(element)
  clone.id = `field_${Math.random().toString(36).substring(2, 7)}`
  // delete clone.icon
  return clone
}
const getCurrentChildren = (field: FormField) => {
  const list = field.children
  const index = list?.findIndex((item) => item.id === activeData.value.id) ?? -1
  if (index >= 0) {
    return list
  }
  list?.forEach((item) => {
    const childrenList = getCurrentChildren(item)
    if (childrenList) {
      return childrenList
    }
  })
}
const addComponent = (element: FormField) => {
  const clone = cloneComponent(element)
  const children = getCurrentChildren(props.formConf)
  const index = children?.findIndex((item) => item.id === activeData.value?.id) ?? -1
  if (index >= 0) {
    children?.splice(index + 1, 0, clone)
    activeData.value = clone
  } else {
    props.formConf.children?.push(clone)
    activeData.value = clone
  }
}
</script>

<template>
  <div class="panel-content">
    <div class="panel-header">
      <el-input v-model="filterText" clearable placeholder="请输入关键字搜索组件" />
    </div>
    <div class="panel-body">
      <el-scrollbar>
        <el-collapse v-model="activeNames" class="group-wrap">
          <el-collapse-item
            v-for="(group, groupIndex) in panelComponents"
            :key="groupIndex"
            :title="group.title"
            :name="groupIndex"
          >
            <Draggable
              v-model="group.list"
              class="group-box"
              :options="{
                group: {
                  name: 'componentsGroup',
                  pull: 'clone',
                  put: false
                },
                sort: false
              }"
              :clone="cloneComponent"
            >
              <div
                v-for="element in group.list"
                :key="element.id"
                class="components-body"
                @click="addComponent(element)"
              >
                <iconify :icon="element.icon" />
                {{ element.label }}
              </div>
            </Draggable>
          </el-collapse-item>
        </el-collapse>
      </el-scrollbar>
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;

  .panel-header {
    padding: 7px;
  }

  .panel-body {
    flex: 1;
    overflow: auto;
  }

  .group-wrap {
    padding: 0 7px;

    .group-box {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
  }
}

:deep(.el-collapse-item__content) {
  padding-bottom: 10px;
}

.components-body {
  width: 110px;
  height: 32px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 8px;
  font-size: 12px;
  cursor: move;
  border: var(--el-border);
  border-radius: var(--el-border-radius-base);

  &:hover {
    border-color: var(--el-color-primary);
    color: var(--el-color-primary);
  }
}
</style>
