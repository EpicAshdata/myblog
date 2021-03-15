<template>
  <div class="homebody">
    <nav_home></nav_home>
<!--    <router-link to="/homeview">shouye</router-link>-->
<!--    <router-link to="/libraryview">library</router-link>-->
<!--    <router-link to="/noteview"></router-link>-->
<!--    <router-link to="/video"></router-link>-->

   <transition :name="transitionName">
     <router-view id="mainbox"></router-view>
   </transition>
  </div>
</template>

<script>
  import nav_home from "@/components/common/nav_home";
    export default {
        name: "Home",
        components: {
            nav_home,
        },
        data(){
          return {
              transitionName: ''
          }
        },
        watch: {
            '$route'(to,from){
                console.log(to);
                console.log(from);
                this.transitionName = 'fold-left'
            }
        }
    }
</script>

<style scoped>
  .homebody {
    position: relative;
    width: 100%;
    height: 100%;
    /*background-color: darkcyan;*/
    /*transform-style: preserve-3d;*/
    perspective: 1000px;
  }
  #mainbox{
    position: relative;
    top: 125px;
  }
  .fold-left-enter-active {
    animation-name: fold-left-in;
    animation-duration: 2s;
  }
  .fold-left-leave-active {
    animation-name: fold-left-out;
    animation-duration: 2s;
  }
  .fold-right-enter-active {
    animation-name: fold-right-in;
    animation-duration: .3s;
  }
  .fold-right-leave-active {
    animation-name: fold-right-out;
    animation-duration: .3s;
  }
  @keyframes fold-left-in {
    0% {
      transform:rotateY(0) translate3d(100%, 0, 0);
    }
    50% {
      transform:rotateY(-15deg) translate3d(50%, 0, 0);
    }
    100% {
      transform:rotateY(0) translate3d(0, 0, 0);
    }
  }
  @keyframes fold-left-out {
    0% {
      transform:rotateY(0) translate3d(0, 0, 0);
    }
    50% {
      transform:rotateY(-15deg) translate3d(-50%, 0, 0);
    }
    100% {
      transform:rotateY(0deg) translate3d(-100%, 0, 0);
    }
  }

</style>