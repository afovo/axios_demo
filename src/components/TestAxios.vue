<template>
<h2>{{this.getData()}}</h2>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  name: "TestAxios",
  data() {
  },
  mounted() {
    this.initData();
  },
  methods: {
    ...mapGetters(['getData']),
    ...mapActions(['initData']),
  },
}
</script>

<style scoped>

</style>
