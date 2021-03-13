<template>
  <div>
    <libraryview></libraryview>
  </div>
</template>

<script>
  import libraryview from "@/views/library/libraryview";
    export default {
        name: "Library",
        components: {
            libraryview,
        }
    }
</script>

<style scoped>
  .librarybody {
    position: relative;
    width: 100%;
    height: 100%;
    /*background-color: darkcyan;*/
  }
</style>