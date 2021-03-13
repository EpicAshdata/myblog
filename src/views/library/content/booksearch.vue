<template>
  <div class="booksearch">
    <div class="sear" v-if="cmyactive"><slot name="search"></slot></div>
    <div class="serrouter"><solt name="searrouter"></solt></div>
  </div>
</template>

<script>
    export default {
        name: "booksearch",
        props: {
            cmyactive: {
                type: Boolean,
            }
        }
    }
</script>

<style scoped>

</style>