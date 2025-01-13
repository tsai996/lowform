<script setup lang="ts">
import type { Component } from 'vue'
import CasePanel from './CasePanel.vue'
import AssemblyPanel from './AssemblyPanel.vue'
import OutlinePanel from './OutlinePanel.vue'
import SourcePanel from './SourcePanel.vue'
import type { FormField } from '@xfc/vue3-form-render'

const props = withDefaults(
  defineProps<{
    size?: number
    formConf: FormField
  }>(),
  {
    size: 70
  }
)

interface Options {
  label: string
  name: string
  icon: string
  width: string
  component: Component
}

const sidebarOptions = ref<Options[]>([
  {
    label: '案例',
    name: 'case',
    icon: 'gg:menu-grid-r',
    width: '250px',
    component: markRaw(CasePanel)
  },
  {
    label: '组件库',
    name: 'assembly',
    icon: 'material-symbols:extension-outline',
    width: '250px',
    component: markRaw(AssemblyPanel)
  },
  {
    label: '大纲树',
    name: 'outline',
    icon: 'material-symbols:account-tree-outline-rounded',
    width: '250px',
    component: markRaw(OutlinePanel)
  },
  {
    label: '源码',
    name: 'source',
    icon: 'icon-park-outline:source-code',
    width: '300px',
    component: markRaw(SourcePanel)
  }
])
const activeSidebar = ref<Options>(sidebarOptions.value[1])
const itemSize = computed(() => `${props.size}px`)
const positionX = computed(() => {
  const index = sidebarOptions.value.findIndex((item) => item.name === activeSidebar.value?.name)
  if (index >= 0) {
    return index * props.size
  }
  return -50
})
</script>

<template>
  <div class="editor-left">
    <el-aside :width="`${size}px`" class="editor-left-sidebar">
      <ul class="sidebar-container">
        <li
          class="sidebar-step-bar"
          v-show="positionX >= 0"
          :style="{ transform: `translateY(${positionX}px)` }"
        ></li>
        <el-tooltip
          v-for="item in sidebarOptions"
          :key="item.name"
          :content="item.label"
          placement="right"
        >
          <li
            @click="activeSidebar = item"
            :class="[
              'sidebar-item',
              `${item.name}-item`,
              { 'is-active': activeSidebar?.name === item.name }
            ]"
          >
            <slot name="item" :item="item">
              <Iconify :icon="item.icon" width="1.5em" height="1.5em" />
            </slot>
          </li>
        </el-tooltip>
      </ul>
    </el-aside>
    <el-aside v-if="activeSidebar" :width="activeSidebar.width" class="editor-left-panel">
      <div class="panel-header__title">
        {{ activeSidebar.label }}
      </div>
      <component :is="activeSidebar.component" :formConf="formConf" />
    </el-aside>
  </div>
</template>

<style scoped lang="scss">
.editor-left {
  position: relative;
  height: 100%;
  display: flex;
  border-right: 1px solid var(--el-border-color-light);
  box-shadow: 0 7px 7px rgba(0, 0, 0, 0.1);

  .editor-left-sidebar {
    height: 100%;
    background-color: var(--el-bg-color);
    border-right: var(--el-border);
    overflow: hidden;

    .sidebar-container {
      position: relative;
      list-style: none;
      padding: 0;
      margin: 0;

      .sidebar-step-bar {
        position: absolute;
        top: 0;
        height: v-bind(itemSize);
        width: v-bind(itemSize);
        background: var(--el-color-primary-light-9);
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        border-left: 3px solid var(--el-color-primary);
      }

      .sidebar-item {
        position: relative;
        text-align: center;
        height: v-bind(itemSize);
        width: v-bind(itemSize);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: all 0.3s;

        &:hover {
          color: var(--el-color-primary);
        }
      }
    }
  }

  .editor-left-panel {
    // position: absolute;
    left: v-bind(itemSize);
    z-index: 999;
    height: 100%;
    transition: width 0.3s ease;
    // margin-left: 1px;
    background-color: var(--el-bg-color);
    display: flex;
    flex-direction: column;

    .panel-header__title {
      padding: 10px 12px;
      font-size: 16px;
      font-weight: 700;
      border-bottom: var(--el-border);
    }
  }
}
</style>
