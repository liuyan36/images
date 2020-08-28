<template>
  <div class="category">
    <home-web></home-web>
    <nav-bar class="category-nav">
      <div slot="center">热门图片</div>
    </nav-bar>

    <category-from class="tab-control"></category-from>

    <scroll class="centent">
      <category-img></category-img>
    </scroll>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import Scroll from "../../components/common/scroll/Scroll";

import HomeWeb from "../Home/HomeWeb";
import CategoryFrom from "./CategoryFrom"
import CategoryImg from './CategoryImg'

export default {
  name: "Category",
  data() {
    return {}
  },
  components: {
    NavBar,
    Scroll,
    HomeWeb,
    CategoryFrom,
    CategoryImg
  },

};
</script>

<style scoped>
.category {}
.centent {
  overflow: hidden;
  position: absolute;
  top: 76px;
  bottom: 43px;
  left: 0;
  right: 0;
}
.category-nav {
  color: #ffffff;
  width: 100%;
  position: absolute;
  top: 0px;
  color: red;
  background-color: transparent;
  font-weight: 700;
}
.tab-control {
    position: absolute;
    top: 6%;
    z-index: 1;
    width: 100%;
    background-color:transparent;
}
</style>
