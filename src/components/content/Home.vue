<template>
  <div class="homebody">
    <nav_home></nav_home>
    <router-link to="/homeview">shouye</router-link>
    <router-link to="/libraryview">library</router-link>
    <router-link to="/noteview"></router-link>
    <router-view id="mainbox"></router-view>
  </div>
</template>

<script>
  import nav_home from "@/components/common/nav_home";
    export default {
        name: "Home",
        components: {
            nav_home,
        }
    }
</script>

<style scoped>
  .homebody {
    position: relative;
    width: 100%;
    height: 100%;
    /*background-color: darkcyan;*/
  }
  #mainbox{
    position: relative;
    top: 125px;
  }

</style>