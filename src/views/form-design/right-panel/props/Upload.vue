<script setup lang="ts">
import type { Ref } from 'vue'
import { type FormField, JsonRender } from '@xfc/vue3-form-render'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
</script>

<template>
  <el-form-item prop="value" label="默认值" v-if="activeData?.value !== undefined">
    <JsonRender
      v-model="activeData.value"
      :field="{
        ...activeData,
        ...{ readonly: false },
        props: {
          ...activeData.props,
          ...{ disabled: false }
        }
      }"
    />
  </el-form-item>
  <el-form-item prop="accept" label="文件类型" v-if="activeData?.props.accept !== undefined">
    <el-select
      v-model="activeData.props.accept"
      placeholder="请选择文件类型"
      :style="{ width: '100%' }"
      clearable
    >
      <el-option label="图片" value="image/*" />
      <el-option label="视频" value="video/*" />
      <el-option label="音频" value="audio/*" />
      <el-option label="excel" value=".xls,.xlsx" />
      <el-option label="word" value=".doc,.docx" />
      <el-option label="pdf" value=".pdf" />
      <el-option label="txt" value=".txt" />
    </el-select>
  </el-form-item>
  <el-space>
    <el-form-item prop="limit" label="最多上传" v-if="activeData?.props.limit !== undefined">
      <el-input-number
        v-model="activeData.props.limit"
        :style="{ width: '100%' }"
        placeholder="最多上传"
        :min="1"
        :max="999"
      />
    </el-form-item>
    <el-form-item prop="size" label="大小限制" v-if="activeData?.props.size !== undefined">
      <el-input-number
        v-model="activeData.props.size"
        :style="{ width: '100%' }"
        placeholder="大小限制"
        :min="0.1"
        :max="999"
        :precision="1"
      />
    </el-form-item>
  </el-space>
  <el-form-item prop="action" label="上传地址" v-if="activeData">
    <el-input v-model="activeData.props.action" placeholder="请输入上传地址" />
  </el-form-item>
</template>

<style scoped lang="scss"></style>
