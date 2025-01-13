<script setup lang="ts">
import type { Ref } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'
import type { FormField } from '@xfc/vue3-form-render'

defineProps<{
  formConf: FormField
}>()
const { activeData } = inject<{
  activeData: Ref<FormField>
}>('formDesign')!
const onNodeClick = (data: FormField, node: Node) => {
  activeData.value = data
}
const allowDrag = (draggingNode: Node) => {
  return draggingNode.level > 1
}
const allowDrop = (_draggingNode: Node, dropNode: Node, type: string) => {
  return type !== 'inner' && dropNode.level > 1
}
</script>

<template>
  <el-scrollbar>
    <el-tree
      class="outline-panel"
      draggable
      :allow-drag="allowDrag"
      :allow-drop="allowDrop"
      :data="[formConf]"
      :props="{
        children: 'children',
        label: 'label'
      }"
      highlight-current
      :key="activeData?.id"
      :current-node-key="activeData?.id"
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      @node-click="onNodeClick"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <Iconify :icon="data.icon" />
          <span>{{ node.label }}</span>
        </span>
      </template>
    </el-tree>
  </el-scrollbar>
</template>

<style scoped lang="scss">
:deep(.el-tree-node__content) {
  border-radius: 4px;
  margin: 2px 2px;
}

.outline-panel {
  padding: 5px;
}

.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
