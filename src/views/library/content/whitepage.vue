<template>
  <div></div>
</template>

<script>
    export default {
        name: "whitepage",
        data(){
            this.$router.replace({
                path:this.$store.path+'?index='+this.$store.index
            })
            return{

            }
        }
    }
</script>

<style scoped>

</style>