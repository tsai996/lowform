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

const props = defineProps<{
  formConf: FormField
}>()
const formConf = useModel(props, 'formConf')
const { undo, redo, canUndo, canRedo } = useRefHistory(formConf, { deep: true, clone: cloneDeep })
const globalStore = useGlobalStore()
const { isDark } = storeToRefs(globalStore)
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
                <el-button @click="undo" :disabled="!canUndo">
                  <iconify icon="ic:baseline-undo" />
                </el-button>
              </el-tooltip>
              <el-tooltip placement="top" content="恢复">
                <el-button @click="redo" :disabled="!canRedo">
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
              <el-button @click="onImport">
                <iconify icon="mingcute:file-import-line"></iconify>
                导入
              </el-button>
              <el-button icon="Download" @click="onExport"> 导出</el-button>
              <el-button icon="BrushFilled" @click="onClear"> 清空</el-button>
              <el-button icon="View" @click="onPreview"> 预览</el-button>
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
    <el-drawer v-model="drawerVisible" @close="onClose" title="表单预览" size="60%" direction="rtl">
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
