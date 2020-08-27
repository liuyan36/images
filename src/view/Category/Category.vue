<template>
  <div class="category">
    <nav-bar class="category-nav"><div slot="center">热门图片</div></nav-bar>
    <scroll class="centent">
    <div v-for="(item, index) in acg.anime" :key="index">
      <img class="category-img" :src="item.middleURL" alt="">
    </div>
    </scroll>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import {mapState} from 'vuex'
import Scroll from '../../components/common/scroll/Scroll'
export default {
  name: 'Category',
  mounted() {
    this.$store.dispatch('getShopAcg')
  },
  computed: {
    ...mapState(['acg'])
  },
  components: {
    NavBar,
    Scroll
  }
}
</script>

<style scoped>
.category {}
.centent { overflow: hidden; position: absolute; top: 43px; bottom: 43px; left: 0; right: 0; }
.category-nav { background-color:lawngreen;color: #ffffff; }
.category-img { width: 100%; }

</style>
