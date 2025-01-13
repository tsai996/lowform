<script setup lang="ts">
import type { Ref } from 'vue'
import { type FormField } from '@xfc/vue3-form-render'
import { Render } from '@/components/FormParser/context'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
const colorFormatOptions = ref(['hex', 'rgb', 'rgba', 'hsv', 'hsl'])
const addPredefineItem = () => {
  activeData.value?.props.predefine.push('')
}
const removePredefineItem = (index: number) => {
  activeData.value?.props.predefine.splice(index, 1)
}
</script>

<template>
  <el-form-item prop="value" label="默认值" v-if="activeData?.value !== undefined">
    <Render
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
  <el-form-item prop="colorFormat" label="颜色格式" v-if="activeData">
    <el-select v-model="activeData.props.colorFormat" placeholder="请选择颜色格式" clearable>
      <el-option v-for="item in colorFormatOptions" :key="item" :label="item" :value="item">
      </el-option>
    </el-select>
  </el-form-item>
  <el-form-item
    prop="showAlpha"
    label="支持透明度"
    v-if="activeData?.props.showAlpha !== undefined"
  >
    <el-switch v-model="activeData.props.showAlpha" />
  </el-form-item>
  <el-form-item
    prop="predefine"
    label="预定义颜色"
    v-if="activeData?.props.predefine !== undefined"
  >
    <div class="predefine-options">
      <div v-for="(color, index) in activeData.props.predefine" :key="index" class="predefine-item">
        <el-input placeholder="请输入颜色" v-model="activeData.props.predefine[index]" />
        <el-button type="danger" icon="Delete" plain circle @click="removePredefineItem(index)" />
      </div>
      <el-button icon="CirclePlus" class="predefine-add" @click="addPredefineItem">
        添加
      </el-button>
    </div>
  </el-form-item>
</template>

<style scoped lang="scss">
.predefine-options {
  width: 100%;

  .predefine-item {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 7px;
  }

  .predefine-add {
    width: 100%;
    border-style: dashed;
  }
}
</style>
