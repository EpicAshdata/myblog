<template>
  <div class="libraryview">
    <article class="notes">
      <ul @click="changeactive">
        <router-link :to="{path:'/library/total',query:{index:0}}" @click.native="flushCom" >
            <li class="box1">
              <div class="icon1"></div>
              <p class="title1">全部</p>
            </li>
        </router-link>
        <router-link :to="{path:'/library/total',query:{index:1}}" @click.native="flushCom">
          <li class="box2">
            <div class="icon2"></div>
            <p class="title2">文学</p>
          </li>
        </router-link>
        <router-link :to="{path:'/library/total',query:{index:2}}" @click.native="flushCom">
        <li class="box3">
          <div class="icon3"></div>
          <p class="title3">玄幻</p>
        </li>
        </router-link>
        <router-link :to="{path:'/library/total',query:{index:3}}" @click.native="flushCom">
        <li class="box4">
          <div class="icon4"></div>
          <p class="title4">科幻</p>
        </li>
        </router-link>
        <router-link :to="{path:'/library/total',query:{index:4}}" @click.native="flushCom">
        <li class="box5">
          <div class="icon5"></div>
          <p class="title5">轻小说</p>
        </li>
        </router-link>
        <router-link :to="{path:'/library/total',query:{index:5}}" @click.native="flushCom">
        <li class="box6">
          <div class="icon6"></div>
          <p class="title6">都市</p>
        </li>
        </router-link>
          <router-link to="/library/addorupdate">
            <li class="box7">
              <div class="icon7"></div>
              <p class="title7">添加图书</p>
            </li>
          </router-link>
      </ul>
    </article>

    <section class="booksshow">
      <div>
          <booksearch :cmyactive="myActive">
            <div slot="search"><viewce></viewce></div>
            <div slot="searrouter"></div>
          </booksearch>
      </div>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
    import bscroll from "better-scroll";
    import booksearch from "@/views/library/content/booksearch";
    import viewce from "@/views/library/content/viewce";
    export default {
        name: "libraryview",
        data(){
            return{
                books: [],
                currentPage: 1,
                pagesize: 17,
            }
        },
        components: {
            viewce,
            booksearch,
        },
        computed:{
          myActive(){
              return this.$route.path == '/library'? true: false
          }
        },
        inject:['reload'],
        methods: {
            changeactive(){
              this.myactive = false
            },
            loadbooks(){
                const _this = this
                this.$axios.get('/books').then(res => {
                  if(res && res.status == 200){
                      _this.books = res.data
                  }
              })
            },
            handleCurrentChange: function (currentPage) {
                this.currentPage = currentPage
                console.log(this.currentPage)
            },
            flushCom(){
                this.$store.index = this.$route.query.index
                this.$store.path = this.$route.path
                console.log(this.$store.path);
                this.$router.replace({
                    path:'/whitepage'
                })
            },
        },
        mounted() {
            this.iscroll = new bscroll(document.querySelector('.booksshow'),{
                probeType: 3,
                click: false,
                pullUpLoad: true
            })
            // 监听上拉加载更多 只能回调一次
            this.iscroll.on('pullingUp',() =>{
                // console.log("上拉加载");
                //实现多次回调
                this.iscroll.finishPullUp()
            })
            this.loadbooks()
        },
    }
</script>

<style scoped>
  .libraryview {
    /*position: fixed;*/
    position: relative;
    width: 100%;
    height: 100%;
  }
  li {
    list-style: none;
  }
  article {
    position: fixed;
    /*display: none;*/
    /*display: inline-block;*/
    width: 10%;
    height: 30%;
    /*margin-top: 100px;*/
    /*border-radius: 15px;*/
    /*background-color: transparent;*/
    left: 0;
    top: 200px;
  }
  article ul {
    /*border-radius: 15px;*/
    width: 100%;
    height: 100%;
  }
  article ul li {
    border-radius: 10px;
    min-height: 60px;
    min-width: 190px;
    position: relative;
    display: table;
    font-size: 20px;
    font-weight: bolder;
    border: black 1px solid;
    white-space: nowrap;
    width: 100%;
    height: 25%;
    text-align: center;
    vertical-align: middle;
    background-color: rgba(124,102,174,1);
    overflow: hidden;
    box-shadow: 2px 2px 5px #9c41c5;
  }
  article ul a {
    color: black;
  }
  article ul li p {
    position: absolute;
    min-height: 60px;
    min-width: 100px;
    line-height: 50px;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    display: inline-block;
  }
  article ul li div {
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 75px);
    display: inline-block;
    width: 50px;
    height: 50px;
    background: no-repeat url("~assets/img/icons/icons1.png");
    background-size: 50px 50px;
  }
  article ul li:hover {
    color: HSL(120,100%,72%);
    border: #65f965 3px solid;
    background-color: #9c41c5;
  }

  section{
    position: absolute;
    display: inline-block;
    width: 60%;
    min-width: 1000px;
    white-space: nowrap;
    background-color: #4d2b77;
    top: 20%;
    left: calc(50% - 30%);
    margin-left: 50px;
    overflow: hidden;
  }
</style>