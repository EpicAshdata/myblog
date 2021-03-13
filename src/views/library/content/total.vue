<template>
  <div class="totalbody">
    <ul class="booklist">
      <li v-for="item in books" :key="item.id">
        <img :src="item.cover" alt="">
        <p>{{item.title}}</p>
        <p>{{item.author}}</p>
        <div class="bookabs" id="bookabs">
<!--          <div class="tri"></div>-->
          <div class="abstitle">{{item.title}}</div>
          <div class="absinfo">{{item.author}}/{{item.date}}/{{item.press}}</div>
          <div class="abs">{{item.abs}}</div>
        </div>
        <div class="delbook">
            <button @click="deletebooks(item.id)">X</button>
        </div>
      </li>
      <li class="add" @click="toAdd">
        <img src="~assets/img/add.jpg" alt="">
        <p>添加新的</p>
        <p>书籍</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "total",
        data() {
            return {
                books: [],
                hover: false,
                mycid: 0,
            }
        },
        inject:['reload'],
        mounted() {
            this.reload()
            this.mycid = this.$route.query.index
            this.loadbooks()
        },
        watch:{
        },
        methods: {
            loadbooks() {
                const _this = this
                this.$axios.get('categories/'+_this.mycid+'/books').then(res => {
                    if (res && res.status == 200) {
                        _this.books = res.data
                    }
                })
            },
            handleCurrentChange: function (currentPage) {
                this.currentPage = currentPage
                console.log(this.currentPage)
            },
            deletebooks(id){
               const bn = confirm("是否删除")
                 if(bn){
                     this.$axios
                         .post('/delete',{
                             id: id
                         }).then(res => {
                         if (res && res.status === 200) {
                             this.loadbooks()
                         }
                     })
                 }
            },
            toAdd(){
                this.$router.replace('/library/addorupdate')
            }
        },
    }
    // function () {
    //     setTimeout(function () {
    //         ("#bookabs").css("display","none");
    //     },2000)
    // }
</script>

<style scoped>
  .booklist li {
    position: relative;
    padding-top:10px;
    width: 200px;
    float: left;
    background-color: #9c41c5;
    text-align: center;
    border: #65f965 10px groove;
    margin: 10px 10px;
  }

  .booklist img {
    min-width: 162px;
    min-height: 237px;
    width: 162px;
    height: 237px;
  }
  .tri {
    position: absolute;
    top: calc(100% - 40px);
    left: -30px;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-right: 20px solid #4d2b77;
    /*border-bottom: 0px solid blue;*/
  }
  .bookabs {
    box-sizing: border-box;
    z-index: 3;
    display: none;
    position: absolute;
    top: 50px;
    left: 0;
    width: 250px;
    height: 250px;
    padding: 0 20px;
    border-radius: 10px;
    background-color: #7c66ae;
    color: #65f965;
    font: 15px '';
    text-align: left;
    overflow: hidden;
    border: 3px solid #65f965;
    text-overflow: ellipsis;
  }
  .absinfo,.abstitle,.abs {
    margin: 0;
    margin-top: 10px;
  }

  .absinfo,.abs {
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
  }
  .booklist li:hover >div {
    display: block;
  }

  .delbook {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    background-color: black;
  }
   .booklist .add{
      min-width: 162px;
      min-height: 237px;
      width: 200px;
      height: 283px;
  }
</style>