<script setup lang="ts">
import type { Ref } from 'vue'
import Draggable from '@xfc/vue3-draggable'
import type { FormField } from '@xfc/vue3-form-render'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
const delTab = (index: number) => {
  if (activeData.value?.children) {
    if (activeData.value?.children.length === 1) {
      return ElMessage.warning('至少保留一个标签页')
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
const addTab = () => {
  if (activeData.value?.children) {
    const name = `${Math.random().toString(36).substring(2, 7)}`
    activeData.value.children.push({
      id: `field_${name}`,
      name: 'TabPane',
      label: '标签栏',
      icon: 'material-symbols:tabs',
      type: 'container',
      value: undefined,
      hidden: false,
      props: {
        label: `标签${name}`,
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
  <el-form-item prop="tab" label="标签页">
    <Draggable
      v-if="Array.isArray(activeData?.children)"
      v-model="activeData.children"
      :options="{
        handle: '.option-drag',
        ghostClass: 'ghost',
        animation: 300
      }"
      tag="ul"
      class="pane-list"
    >
      <li v-for="(element, index) in activeData.children" :key="element.value" class="pane-item">
        <el-icon size="15" class="option-drag">
          <Rank />
        </el-icon>
        <el-input v-model="element.props.label" placeholder="标签名" clearable />
        <el-button link type="danger" icon="Delete" @click="delTab(index)" />
      </li>
    </Draggable>
    <el-button icon="CirclePlus" @click="addTab" class="add-btn">添加标签页</el-button>
  </el-form-item>
  <el-form-item
    prop="tabPosition"
    label="标签页位置"
    v-if="activeData?.props.tabPosition !== undefined"
  >
    <el-radio-group v-model="activeData.props.tabPosition">
      <el-radio-button label="顶部" value="top" />
      <el-radio-button label="左侧" value="left" />
      <el-radio-button label="右侧" value="right" />
      <el-radio-button label="底部" value="bottom" />
    </el-radio-group>
  </el-form-item>
  <el-form-item prop="type" label="风格类型" v-if="activeData?.props.type !== undefined">
    <el-radio-group v-model="activeData.props.type">
      <el-radio-button label="默认" value="" />
      <el-radio-button label="选择" value="card" />
      <el-radio-button label="卡片" value="border-card" />
    </el-radio-group>
  </el-form-item>
  <el-form-item prop="stretch" label="自动撑开" v-if="activeData?.props.stretch !== undefined">
    <el-switch v-model="activeData.props.stretch" />
  </el-form-item>
</template>

<style scoped lang="scss">
.pane-list {
  list-style: none;
  padding: 0 0 7px 0;
  margin: 0;
  width: 100%;

  .pane-item {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 4px;

    .option-drag {
      cursor: move;
    }
  }

  .pane-item + .pane-item {
    margin-top: 4px;
  }
}

.add-btn {
  width: 100%;
  border-style: dashed;
  margin-bottom: 10px;
}
</style>
