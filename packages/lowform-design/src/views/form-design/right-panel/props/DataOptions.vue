<script setup lang="ts">
import type { Ref } from 'vue'
import Draggable from '@xfc/vue3-draggable'
import type { FormField } from '@xfc/vue3-form-render'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
const options = [
  {
    label: '静态',
    value: 'static'
  },
  {
    label: '动态',
    value: 'dynamic'
  }
]
const addOption = () => {
  if (activeData.value?.props.options) {
    const index = activeData.value.props.options.length + 1
    activeData.value.props.options.push({
      label: `选择${index}`,
      type: 'number',
      value: index,
      disabled: false
    })
  }
}
const delOption = (index: number) => {
  activeData.value?.props.options?.splice(index, 1)
}
const changeDataSource = () => {
  if (activeData.value) {
    activeData.value.props.key = Date.now()
  }
}
</script>

<template>
  <div v-if="activeData">
    <el-segmented v-model="activeData.props.dataType" :options="options" block />
    <div class="data-source">
      <div v-show="activeData?.props.dataType === 'static'">
        <Draggable
          v-model="activeData.props.options"
          :options="{
            handle: '.option-drag',
            animation: 300
          }"
          tag="ul"
          class="options-list"
        >
          <li
            v-for="(element, index) in activeData.props.options"
            :key="element.value"
            class="option-item"
          >
            <el-icon size="15" class="option-drag">
              <Rank />
            </el-icon>
            <el-input v-model="element.label" placeholder="选项名" clearable />
            <el-input v-model="element.value" placeholder="选项值" clearable />
            <el-button link type="danger" icon="Delete" @click="delOption(index)" />
          </li>
        </Draggable>
        <el-button class="options-add" icon="CirclePlus" @click="addOption">添加选项</el-button>
      </div>
      <div v-show="activeData?.props.dataType === 'dynamic'">
        <el-form-item prop="dataSource" label="数据源">
          <el-select
            v-model="activeData.props.dataSource"
            @change="changeDataSource"
            placeholder="请选择数据源"
            clearable
          >
          </el-select>
        </el-form-item>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.data-source {
  margin: 7px 0 18px;

  .options-list {
    list-style: none;
    padding: 0;
    margin: 0;

    .option-item {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      gap: 4px;

      .option-drag {
        cursor: move;
      }
    }

    .option-item + .option-item {
      margin-top: 4px;
    }
  }

  .options-add {
    width: 100%;
    border-style: dashed;
    margin-top: 10px;
  }
}
</style>
