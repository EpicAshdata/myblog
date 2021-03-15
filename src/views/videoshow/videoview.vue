<template>
  <div>
    <h2>放映厅</h2>
    <span @click="See(url)">iiiii</span>
  </div>
</template>

<script>
    export default {
        name: "videoShow",
        data(){
            return{
                url: "http://www.baidi.com"
            }
        },
        mount() {

        },
        methods: {
            See(e){
                window.location.href = e
            }
        }
    }
</script>

<style scoped>

</style>