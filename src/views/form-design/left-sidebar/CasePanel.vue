<script setup lang="ts">
import case1 from './case/case1'
import case2 from './case/case2'
import case3 from './case/case3'
import formula from './case/formula'
import submit from './case/submit'
import validate from './case/validate'
import type { FormField } from '@xfc/vue3-form-render'
import type { Ref } from 'vue'

const props = defineProps<{
  formConf: FormField
}>()
const { activeData } = inject<{
  activeData: Ref<FormField>
}>('formDesign')!
const config = ref([
  {
    label: '基本案例',
    children: [
      {
        label: '案例1',
        data: case1
      },
      {
        label: '案例2',
        data: case2
      },
      {
        label: '案例3',
        data: case3
      }
    ]
  },
  {
    label: '组件联动',
    children: [
      {
        label: '请假',
        description: '通过请假日期范围动态计算出请假时长',
        data: formula
      },
      {
        label: '动态状态',
        description: '通过字段事件编写js代码实现与其他组件联动'
      },
      {
        label: '数据联动',
        description: '通过字段事件编写js代码实现与其他组件联动'
      }
    ]
  },
  {
    label: '组件事件',
    children: [
      {
        label: '表单提交/重置',
        description: '表单提交事件',
        data: submit
      },
      {
        label: '表单校验',
        description: '表单字段校验，验证不同输入格式',
        data: validate
      }
    ]
  }
])
const load = (data: FormField) => {
  if (data) {
    delete props.formConf.children
    Object.assign(props.formConf, data)
    activeData.value = props.formConf
  }
}
</script>

<template>
  <el-scrollbar>
    <el-tree
      class="case-panel"
      :data="config"
      :props="{
        children: 'children',
        label: 'label'
      }"
    >
      <template #default="{ node, data }">
        <div class="custom-tree-node">
          <div class="flex-col">
            <span class="flex-items-center gap4px font-500">
              <Iconify icon="mdi:form-outline" v-if="node.level > 1" />
              <Iconify icon="ep:folder" v-else />
              {{ node.label }}
            </span>
            <span class="case-description" v-if="node.level > 1">
              {{ data.description }}
            </span>
          </div>
          <el-button
            v-if="node.level > 1"
            :disabled="!data.data"
            type="primary"
            link
            @click.stop="load(data.data)"
          >
            载入
          </el-button>
        </div>
      </template>
    </el-tree>
  </el-scrollbar>
</template>

<style scoped lang="scss">
.case-panel {
  padding: 5px;
}

.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  .case-description {
    color: var(--el-text-color-placeholder);
    font-size: 12px;
    white-space: normal;
    word-break: break-all;
    width: 100%;
  }
}

:deep {
  .el-tree-node__content {
    height: auto;
    border-radius: 8px;
    margin: 4px 0 4px 0;
    padding: 5px 5px 5px 0;
  }
}
</style>
