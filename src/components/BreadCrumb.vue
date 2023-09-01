<template>
  <div class="bread">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="item in breads" :key="item.meta.title">{{
        item.meta.title
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "BreadCrumb",
  computed: {
    ...mapState("bread", ["breads"]),
  },
};
</script>
<style lang="scss">
.bread {
  position: absolute;
  left: 2%;
  .el-breadcrumb__inner {
    color: #fff;
  }
}
</style>