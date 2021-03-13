<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>

export default {
    name: 'App',
    provide(){
      return{
          reload:this.reload
      }
    },
    data(){
      return{
          isRouterAlive:true
      }
    },
    methods: {
      reload(){
          this.isRouterAlive = false
          this.$nextTick(() => {
              this.isRouterAlive = true
          })
      }
    },
    components: {
    }
}
</script>

<style>
  @import "assets/css/index.css";
  body {
    /*background-color: chartreuse;*/
    width: 100%;
    height: 100%;
    background-color: #4d2b77;
  }
  #app {
    width: 100%;
    height: 100%;
    min-height: 600px;
    min-width: 1000px;
    /*background-color: deepskyblue;*/
  }
</style>
