<script setup lang="ts"></script>

<template>
  <div class="top-toolbar">
    <div class="design-logo">
      <img src="@/assets/logo.png" alt="logo" />
      <el-text tag="b" class="design-title"> lowform-design </el-text>
    </div>
    <div>
      <slot> </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mode-segmented {
  --el-segmented-padding: 3px;
}

.top-toolbar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .design-logo {
    img {
      margin-right: 10px;
      height: 25px;
      vertical-align: middle;
    }

    .design-title {
      display: inline-block;
      font-size: 18px;
      font-weight: 700;
      text-decoration: none;
    }
  }
}
</style>
