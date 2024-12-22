<script setup lang="ts">
import type { Ref } from 'vue'
import Draggable from '@xfc/vue3-draggable'
import type { FormField } from '@xfc/vue3-form-render'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
const delItem = (index: number) => {
  if (activeData.value?.children) {
    if (activeData.value?.children.length === 1) {
      return ElMessage.warning('至少保留一个折叠项')
    }
    const item = activeData.value.children[index]
    if (item) {
      if (item.props.name === activeData.value.value) {
        const nextTab = (activeData.value.value =
          activeData.value.children[index - 1] || activeData.value.children[index + 1])
        if (nextTab) {
          activeData.value.value = nextTab.props.name
        } else {
          activeData.value.value = ''
        }
      }
    }
    activeData.value.children.splice(index, 1)
  }
}
const addItem = () => {
  if (activeData.value?.children) {
    const name = `${Math.random().toString(36).substring(2, 7)}`
    activeData.value.children.push({
      id: `field_${name}`,
      name: 'CollapseItem',
      label: '折叠项',
      icon: 'tabler:layout-navbar-collapse',
      type: 'container',
      value: undefined,
      hidden: false,
      props: {
        title: `折叠${name}`,
        name: name,
        key: undefined,
        style: {},
        class: [],
        on: {}
      },
      children: []
    })
  }
}
</script>

<template>
  <el-form-item prop="collapseItem" label="折叠项">
    <Draggable
      v-if="Array.isArray(activeData?.children)"
      v-model="activeData.children"
      :options="{
        handle: '.option-drag',
        ghostClass: 'ghost',
        animation: 300
      }"
      tag="ul"
      class="collapse-list"
    >
      <li
        v-for="(element, index) in activeData.children"
        :key="element.value"
        class="collapse-item"
      >
        <el-icon size="15" class="option-drag">
          <Rank />
        </el-icon>
        <el-input v-model="element.props.title" placeholder="标签名" clearable />
        <el-button link type="danger" icon="Delete" @click="delItem(index)" />
      </li>
    </Draggable>
    <el-button icon="CirclePlus" @click="addItem" class="add-btn">添加标签页</el-button>
  </el-form-item>
</template>

<style scoped lang="scss">
.collapse-list {
  list-style: none;
  padding: 0 0 7px 0;
  margin: 0;
  width: 100%;

  .collapse-item {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 4px;

    .option-drag {
      cursor: move;
    }
  }

  .collapse-item + .collapse-item {
    margin-top: 4px;
  }
}

.add-btn {
  width: 100%;
  border-style: dashed;
  margin-bottom: 10px;
}
</style>
