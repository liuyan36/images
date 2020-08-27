<template>
  <div class="profile">
    <nav-bar class="profile-nav"><div slot="center">个人中心</div></nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'

export default {
  name: "Profile",
  components: {
    NavBar
  }
}
</script>

<style scoped>
.profile {}
.profile-nav { background-color:lawngreen;color: #ffffff; }

</style>
