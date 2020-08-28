<template>
  <tab-control class="tab-control" :titles="['动漫', '古风', '流行']" @tabClick="tabClick"></tab-control>
</template>

<script>
import TabControl from "../../components/content/tabControl/tabControl"

export default {
  name: "CategoryFrom",
  components: {
    TabControl
  },
  methods: {
    tabClick(index) {
      console.log(index)
    }
  }
}
</script>

<style scoped>


</style>
