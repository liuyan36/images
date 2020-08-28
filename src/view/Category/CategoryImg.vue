<!--<template>
  <div class="centent-div">
    <div v-for="(item, index) in acg.items" :key="index">
      <!-- <img @touchstart="start" @click="popupVisible=true"  class="category-img" :src="item.picUrl" alt="">
      <img class="category-img" :src="item.picUrl" alt />
    </div>
  </div>
</template>-->
<template>
  <grid-view class="good-list">
    <img :src="item.picUrl" v-for="(item, index) in acg.items" :key="index">
  </grid-view>
</template>

<script>
import { mapState } from "vuex";
import GridView from '../../components/common/gridView/GridView'

export default {
  name: "CategOryImg",
  components: {
    GridView
  },
  mounted() {
    this.$store.dispatch("getShopAcg");
  },
  computed: {
    ...mapState(["acg"])
  },
  // methods: {
  //   start() {
  //           var that = this;
  //           this.longClick = 0;
  //           this.timeOutEvent = setTimeout(function() {
  //           that.longClick = 1;
  //           that.downImg()
  //         }, 500);
  //       },
  //       // 下载
  //       downImg() {
  //           if(!window.plus) return;
  //               plus.gallery.save(this.item.picUrl, function () {
  //                   // alert('保存成功!');
  //               },function(){
  //                   // alert('保存失败，请重试!');
  //           });
  //       }
  // }
};
</script>

<style scoped>
.centent-div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.category-img {
  width: 100px;
  height: 100px;
  margin-bottom: 5%;
}
</style>
