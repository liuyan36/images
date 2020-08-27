<template>
  <div class="home-image">
    <div v-for="(item, index) in acg.items" :key="index">
      <img :src="item.picUrl" alt="">
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'HomeImage',
  data() {
    return {
      baseURL: ''
    }
  },
  mounted() {
    this.$store.dispatch('getShopAcg')
  },
  computed: {
    ...mapState(['acg'])
  },
}
</script>

<style scoped>
.home-image { display: flex; flex-wrap: wrap; justify-content: space-evenly; }
.home-image img { width: 135px; height: 148px; margin-bottom: 5%;}

</style>
