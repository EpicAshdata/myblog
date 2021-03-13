<template>
  <div class="viewce">
      <div class="search">
        <input type="text" class="searchtext" v-model="key">
        <input type="submit" class="searchbtn" @click="searchClick" value="提交">
      </div>
    <searchresult :books="books"></searchresult>
  </div>
</template>

<script>
  import searchresult from "@/views/library/content/searchresult";
    export default {
        name: "viewce",
        data(){
          return{
              books: [],
              key: '',
          }
        },
        components: {
            searchresult,
        },
        methods: {
            searchClick(){
                const _this = this
                // console.log(this.key);
                this.$axios .get('/search?key='+this.key).then(res =>{
                    if(res && res.status === 200){
                        _this.books = res.data
                    }
                })
            },
        },
    }
</script>

<style scoped>
  .search {
    margin: 10px auto;
    /*width: 50%;*/
    height: 60px;
    /*background-color: #65f965;*/
    text-align: center;
    line-height: 60px;
    vertical-align: bottom;
  }

  .searchtext{
    box-sizing: border-box;
    width: 300px;
    height: 60px;
    border: #65f965 groove 5px;
    background-color: #4d2b77;
    font: 20px '';
    padding-left: 5px;
    border-radius: 5px;
    color: #65f965;
  }
  .searchbtn {
    box-sizing: border-box;
    margin-left: 10px;
    width: 80px;
    height: 60px;
    font: 20px '';
    background-color: #4d2b77;
    color: #65f965;
    border: #65f965 groove 5px;
  }
</style>