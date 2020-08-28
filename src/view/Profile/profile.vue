<template>
  <div>
    <home-web></home-web>
    <nav-bar class="category-nav">
      <div slot="center">热门图片</div>
    </nav-bar>
    <scroll class="centent">
    </scroll>
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar";
import Scroll from "../../components/common/scroll/Scroll";
import HomeWeb from "../Home/HomeWeb";

export default {
  name: "profile",
  components: {
    NavBar,
    Scroll,
    HomeWeb
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.centent {
  overflow: hidden;
  position: absolute;
  top: 43px;
  bottom: 43px;
  left: 0;
  right: 0;
}
</style>
