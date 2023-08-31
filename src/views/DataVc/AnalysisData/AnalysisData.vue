<template>
  <div>this is AnalysisData</div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "AnalysisData",
  methods: {
    ...mapMutations("bread", ["SET_BREADS"]),
  },
  mounted() {
    console.log(this.$route);
    this.SET_BREADS(this);
  },
};
</script>
<style lang="scss" scoped>
</style>