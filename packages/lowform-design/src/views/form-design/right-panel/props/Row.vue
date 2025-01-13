<script setup lang="ts">
import type { Ref } from 'vue'
import Draggable from '@xfc/vue3-draggable'
import type { FormField } from '@xfc/vue3-form-render'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
const addCol = () => {
  const name = `${Math.random().toString(36).substring(2, 7)}`
  activeData.value?.children?.push({
    id: `field_${name}`,
    name: 'Col',
    label: '栅栏',
    icon: 'carbon:grid',
    type: 'container',
    value: undefined,
    hidden: false,
    props: {
      span: 12,
      style: {},
      class: [],
      on: {}
    },
    children: []
  })
}
const delCol = (index: number) => {
  activeData.value?.children?.splice(index, 1)
}
</script>

<template>
  <el-form-item prop="col" label="栅格列">
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
        <el-slider v-model="element.props.span" :min="0" :max="24" placement="right" />
        <el-button link type="danger" icon="Delete" @click="delCol(index)" />
      </li>
    </Draggable>
    <el-button icon="CirclePlus" @click="addCol" class="add-btn">添加栅格列</el-button>
  </el-form-item>
  <el-form-item prop="justify" label="排列方式" v-if="activeData?.props.justify !== undefined">
    <el-select v-model="activeData.props.justify" placeholder="请选择排列方式">
      <el-option label="start" value="start" />
      <el-option label="end" value="end" />
      <el-option label="center" value="center" />
      <el-option label="space-around" value="space-around" />
      <el-option label="space-between" value="space-between" />
      <el-option label="space-evenly" value="space-evenly" />
    </el-select>
  </el-form-item>
  <el-form-item prop="gutter" label="栅格间隔" v-if="activeData?.props.gutter !== undefined">
    <el-input-number
      v-model="activeData.props.gutter"
      :style="{ width: '100%' }"
      :min="0"
      placeholder="栅格间隔"
      clearable
    />
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
    gap: 10px;

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
