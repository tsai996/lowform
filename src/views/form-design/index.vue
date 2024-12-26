<script setup lang="ts">
import { storeToRefs } from 'pinia'
import LeftSidebar from './left-sidebar/index.vue'
import TopArea from './top-area/index.vue'
import RightPanel from './right-panel/index.vue'
import EditorBody from './editor-body'
import { useGlobalStore } from '@/stores/global'
import FileSaver from 'file-saver'
import { cloneDeep } from 'lodash-es'
import { useRefHistory } from '@vueuse/core'
import { type FormField } from '@xfc/vue3-form-render'
import RenderForm from '@/components/RenderForm/index.vue'
import CodeDrawer from './CodeDrawer.vue'

const formConf = ref<FormField>({
  id: 'formConf',
  name: 'Form',
  icon: 'ep:document',
  type: 'container',
  label: '表单',
  value: undefined,
  readonly: false,
  required: undefined,
  hidden: false,
  props: {
    scrollToError: true,
    labelPosition: 'right',
    labelWidth: 100,
    size: 'default',
    disabled: false
  },
  on: {
    onVnodeMounted: '',
    onVnodeUpdated: '',
    onValidate: ''
  },
  children: []
})
const { undo, redo, canUndo, canRedo } = useRefHistory(formConf, { deep: true, clone: cloneDeep })
const onUndo = () => {
  undo()
  nextTick(() => {
    activeData.value = formConf.value
  })
}
const onRedo = () => {
  redo()
  nextTick(() => {
    activeData.value = formConf.value
  })
}
const globalStore = useGlobalStore()
const { isDark } = storeToRefs(globalStore)
const codeDrawerRef = ref<InstanceType<typeof CodeDrawer>>()
const renderFormRef = ref<InstanceType<typeof RenderForm>>()
const previewConf = ref<FormField>(formConf.value)
const previewForm = ref<Recordable>({})
const previewKey = ref(0)
const sidebarSize = ref(50)
const mode = ref('pc')
const bodySizeMap: Recordable<string> = {
  pc: '100%',
  mobile: '50%'
}
const widthSize = computed(() => bodySizeMap[mode.value])
const activeData = ref<FormField>(formConf.value)
const drawerVisible = ref(false)
const refFile = ref<HTMLInputElement>()
const modeOptions = [
  {
    label: '电脑',
    value: 'pc',
    icon: 'Monitor'
  },
  {
    label: '手机',
    value: 'mobile',
    icon: 'Cellphone'
  }
]
provide('formDesign', {
  activeData: activeData
})
const onClear = () => {
  ElMessageBox.confirm('您确认要清空所有组件吗？', '提示', { type: 'warning' }).then(() => {
    activeData.value = formConf.value
    formConf.value.children = []
  })
}
const onImport = () => {
  refFile.value?.click()
}
const onExport = () => {
  const data = JSON.stringify(formConf.value, null, 2)
  FileSaver.saveAs(new Blob([data], { type: 'text/plain' }), `${formConf.value.id}.form`)
}
const onCode = () => {
  codeDrawerRef.value?.open()
}
const onPreview = () => {
  previewConf.value = cloneDeep(formConf.value)
  previewForm.value = {}
  previewKey.value = Date.now()
  drawerVisible.value = true
}
const submitForm = () => {
  renderFormRef.value?.submitForm().then((formData) => {
    ElMessage.info(JSON.stringify(formData, null, 0))
  })
}
const resetForm = () => {
  renderFormRef.value?.resetForm()
}
const onClose = () => {
  previewForm.value = {}
}
const importLocalFile = () => {
  const file = refFile.value?.files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => {
      const result = reader.result
      if (result && typeof result === 'string') {
        formConf.value = JSON.parse(result)
        activeData.value = formConf.value
        if (refFile.value) {
          refFile.value.value = ''
        }
        return
      }
      ElMessage.error('文件解析失败')
    }
  }
}
const toGitHub = () => {
  window.open('https://github.com/tsai996/lowform-design')
}
</script>

<template>
  <el-container class="editor-container">
    <el-header class="editor-header">
      <TopArea>
        <el-space>
          <el-switch
            inline-prompt
            active-icon="Sunny"
            inactive-icon="Moon"
            @change="globalStore.switchMode()"
            v-model="isDark"
          />
          <el-button @click="toGitHub">
            <Iconify class="el-icon--left" icon="ri:github-fill" :size="4" />
            GitHub
          </el-button>
        </el-space>
      </TopArea>
    </el-header>
    <el-container class="editor-inner">
      <LeftSidebar :form-conf="formConf" :size="sidebarSize" />
      <el-container>
        <el-header class="editor-tools">
          <el-space :size="0">
            <el-button-group size="small">
              <el-tooltip placement="top" content="撤销">
                <el-button @click="onUndo" :disabled="!canUndo">
                  <iconify icon="ic:baseline-undo" />
                </el-button>
              </el-tooltip>
              <el-tooltip placement="top" content="恢复">
                <el-button @click="onRedo" :disabled="!canRedo">
                  <iconify icon="ic:baseline-redo" />
                </el-button>
              </el-tooltip>
            </el-button-group>
          </el-space>
          <el-segmented class="mode-segmented" v-model="mode" :options="modeOptions">
            <template #default="{ item }">
              <el-icon :size="15">
                <component :is="item.icon" />
              </el-icon>
            </template>
          </el-segmented>
          <el-space :size="7">
            <el-button-group size="small">
              <el-tooltip content="导入" placement="top">
                <el-button @click="onImport">
                  <iconify :size="3" icon="uil:import"></iconify>
                </el-button>
              </el-tooltip>
              <el-tooltip content="导出" placement="top">
                <el-button @click="onExport">
                  <iconify :size="3" icon="uil:export"></iconify>
                </el-button>
              </el-tooltip>
              <el-tooltip content="生成代码" placement="top">
                <el-button @click="onCode">
                  <iconify :size="3" icon="mdi:code"></iconify>
                </el-button>
              </el-tooltip>
              <el-tooltip content="清空" placement="top">
                <el-button @click="onClear">
                  <iconify :size="3" icon="ep:brush"></iconify>
                </el-button>
              </el-tooltip>
              <el-tooltip content="预览" placement="top">
                <el-button @click="onPreview">
                  <iconify :size="3" icon="ep:video-play"></iconify>
                </el-button>
              </el-tooltip>
            </el-button-group>
          </el-space>
        </el-header>
        <el-main class="editor-body">
          <div :class="['editor-body__inner', { 'is-mobile': bodySizeMap[mode] !== '100%' }]">
            <EditorBody :field="formConf" />
          </div>
        </el-main>
      </el-container>
      <el-aside class="editor-right" width="300px">
        <RightPanel />
      </el-aside>
    </el-container>
    <CodeDrawer ref="codeDrawerRef" :field="formConf" />
    <el-drawer v-model="drawerVisible" @close="onClose" title="表单预览" size="95%" direction="btt">
      <RenderForm
        ref="renderFormRef"
        :key="previewKey"
        :formData="previewForm"
        :field="previewConf"
      >
      </RenderForm>
      <template #footer>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button type="info" @click="resetForm">重置</el-button>
        <el-button @click="drawerVisible = false">关闭</el-button>
      </template>
    </el-drawer>
    <input
      ref="refFile"
      type="file"
      style="display: none"
      accept=".form"
      @change="importLocalFile"
    />
  </el-container>
</template>

<style scoped lang="scss">
.editor-container {
  height: 100%;
  width: 100%;
  border: var(--el-border);

  .editor-header {
    height: calc(var(--el-header-height) - 10px);
    border-bottom: 1px solid var(--el-border-color-lighter);
    background-color: var(--el-bg-color);
    padding: 0 10px;
    display: flex;
    align-items: center;
  }

  .editor-inner {
    position: relative;
    height: calc(100% - 50px);

    .editor-tools {
      height: calc(var(--el-header-height) - 20px);
      background-color: var(--el-bg-color);
      // border-bottom: 1px solid var(--el-border-color-light);
      padding: 0 5px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .iconify {
        font-size: 18px;
        cursor: pointer;
      }
    }

    .editor-body {
      width: 100%;
      padding: 5px;
      display: flex;
      justify-content: center;
      // box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.1);

      .editor-body__inner {
        position: relative;
        height: 100%;
        width: v-bind(widthSize);
        padding: 10px;
        background-color: var(--el-bg-color);
        box-shadow: var(--el-box-shadow-lighter);
        // border-radius: var(--el-border-radius-base);
        transition: width 0.3s ease-in-out;

        &.is-mobile {
          border: 10px solid #222;
          border-radius: 30px;
        }
      }
    }

    .editor-right {
      background-color: var(--el-bg-color);
      box-shadow: 0 7px 7px rgba(0, 0, 0, 0.1);
      border-left: 1px solid var(--el-border-color-light);
      transition: width 0.3s ease;
      height: 100%;
    }
  }
}
</style>
