<script setup lang="ts">
import type { Ref } from 'vue'
import { type FormField } from '@xfc/vue3-form-render'
import { Render } from '@/components/FormParser/context'

const { activeData } = inject<{
  activeData: Ref<FormField | undefined>
}>('formDesign')!
const regularOptions = ref([
  {
    pattern: '^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$',
    message: '手机'
  },
  {
    pattern: '^((0\\d{2,3}-\\d{7,8})|(1[3456789]\\d{9}))$',
    message: '电话'
  },
  {
    pattern: '\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*',
    message: '邮箱'
  },
  {
    pattern: '^([1-9][\\d]{0,7}|0)(\\.[\\d]{1,2})?$',
    message: '金额'
  },
  {
    pattern: '^[0-9]*$',
    message: '数字'
  },
  {
    pattern:
      '^(^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$)|(^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])((\\d{4})|\\d{3}[Xx])$)$',
    message: '身份证'
  },
  {
    pattern:
      '^https?:\\/\\/(([a-zA-Z0-9_-])+(\\.)?)*(:\\d+)?(\\/((\\.)?(\\?)?=?&?[a-zA-Z0-9_-](\\?)?)*)*$',
    message: '网址'
  },
  {
    pattern: '^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\\d{4}$',
    message: '邮政编码'
  },
  {
    pattern: '^((25[0-5]|2[0-4]\\d|[01]?\\d\\d?)($|(?!\\.$)\\.)){4}$',
    message: 'IPv4地址'
  },
  {
    pattern: '^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$',
    message: '微信号'
  },
  {
    pattern:
      '^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$',
    message: '车牌号'
  },
  {
    pattern: '^(?:[\u4e00-\u9fa5·]{2,16})$',
    message: '中文姓名'
  },
  {
    pattern: '(^[a-zA-Z][a-zA-Z\\s]{0,20}[a-zA-Z]$)',
    message: '英文姓名'
  },
  {
    pattern: '^[0-9A-HJ-NPQRTUWXY]{2}\\d{6}[0-9A-HJ-NPQRTUWXY]{10}$',
    message: '统一社会信用代码'
  },
  {
    pattern: '^([1-9]{1})(\\d{14}|\\d{18})$',
    message: '银行卡号'
  }
])
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
          ...{ placeholder: '请输入默认值', clearable: true, disabled: false }
        }
      }"
    />
  </el-form-item>
  <el-form-item prop="rules" label="格式校验" v-if="activeData?.rules !== undefined">
    <el-select
      v-model="activeData.rules"
      value-key="message"
      multiple
      clearable
      filterable
      placeholder="请选择格式校验"
    >
      <el-option
        v-for="item in regularOptions"
        :key="item.message"
        :label="item.message"
        :value="item"
      />
    </el-select>
  </el-form-item>
  <el-form-item
    prop="placeholder"
    label="占位提示"
    v-if="activeData?.props.placeholder !== undefined"
  >
    <el-input v-model="activeData.props.placeholder" clearable placeholder="请输入占位提示" />
  </el-form-item>
  <el-form-item prop="maxlength" label="最多输入" v-if="activeData?.props.maxlength !== undefined">
    <el-input-number
      v-model="activeData.props.maxlength"
      :style="{ width: '100%' }"
      :min="1"
      placeholder="长度"
    />
  </el-form-item>
  <el-form-item
    prop="showWordLimit"
    label="显示统计"
    v-if="activeData?.props.showWordLimit !== undefined"
  >
    <el-switch v-model="activeData.props.showWordLimit" />
  </el-form-item>
  <el-form-item prop="clearable" label="是否清空" v-if="activeData?.props.clearable !== undefined">
    <el-switch v-model="activeData.props.clearable"></el-switch>
  </el-form-item>
</template>

<style scoped lang="scss"></style>
