<template>
<div class="posi">
  <div class="nav_body">
    <div class="nav_home">
      <router-link to="/homeview" class="r_div">
        <div class="a_div" @click="turnhome"><a href="" class="btn1">首页</a></div>
      </router-link>
       <router-link to="/note" class="r_div">
         <div class="a_div" ><a href="" class="btn2">笔记本</a>
           <article class="notes">
             <ul>
               <li class="box1">
                 <div class="icon1"></div>
                 <p class="title1">我的笔记</p>
               </li>
               <li class="box2">
                 <div class="icon2"></div>
                 <p class="title2">最近更新</p>
               </li>
               <li class="box3">
                 <div class="icon3"></div>
                 <p class="title3">编辑笔记</p>
               </li>
               <li class="box4">
                 <div class="icon4"></div>
                 <p class="title4">回收中心</p>
               </li>
             </ul>
           </article></div>
       </router-link>
     <router-link to="/library" class="r_div">
       <div class="a_div" ><a href="" class="btn3">图书馆</a>
         <article class="books">
           <ul>
             <li class="box1">
               <div class="icon1"></div>
               <p class="title1">我的喜欢</p>
             </li>
             <li class="box2">
               <div class="icon2"></div>
               <p class="title2">图书分类</p>
             </li>
             <li class="box3">
               <div class="icon3"></div>
               <p class="title3">社会文学</p>
             </li>
             <li class="box4">
               <div class="icon4"></div>
               <p class="title4">编程原理</p>
             </li>
           </ul>
         </article></div>
     </router-link>
    <router-link to="/personview" class="r_div">
      <div class="a_div"><a href="" class="btn4">个人中心</a>
        <article class="personal">
          <ul>
            <li class="box1">
              <div class="icon1"></div>
              <p class="title1">个人资料</p>
            </li>
            <li class="box2">
              <div class="icon2"></div>
              <p class="title2">Github地址</p>
            </li>
            <li class="box3">
              <div class="icon3"></div>
              <p class="title3">我的仓库</p>
            </li>
            <li class="box4">
              <div class="icon4"></div>
              <p class="title4">关于网站</p>
            </li>
          </ul>
        </article></div>
    </router-link>
      <router-link to="/videoview" class="r_div">
        <div class="a_div"><a href="" class="btn5">放映厅</a>
          <article class="video">
            <ul>
              <li class="box1">
                <div class="icon1"></div>
                <p class="title1">电视剧</p>
              </li>
              <li class="box2">
                <div class="icon2"></div>
                <p class="title2">电影</p>
              </li>
              <li class="box3">
                <div class="icon3"></div>
                <p class="title3">动漫</p>
              </li>
              <li class="box4">
                <div class="icon4"></div>
                <p class="title4">秘密花园</p>
              </li>
            </ul>
          </article></div>
      </router-link>
      <div class="nav_title"><h2>My First Blog</h2></div>
      <div class="nav_ability_img"></div>
      <div class="nav_ability_more"></div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "HomeViews",
        data() {
            return{
                navability: [
                    {}
                ]
            }
        },
        methods: {
            turnhome(){
                this.$router.replace('/homeview')
            },
            turnnote(){
                this.$router.replace('/noteview')
            },
            turnlibrary(){
                this.$router.replace('/library')
            },

        }
    }
</script>

<style scoped>
  @import "~assets/css/index.css";
  * {
    vertical-align: middle;
  }
  .posi {
    position: fixed;
    z-index: 3;
    width: 100%;
    height: 100px;
    background-color: #4d2b77;
    /*background-color: blue;*/
  }
  .nav_body {
    /*position: sticky;*/
    position: relative;
    display: block;
    /*position: fixed;*/
    /*background-color: rgba(0,0,0,.1);*/
    /*z-index: 3;*/
  }
  .nav_home {
    /*position: absolute;*/
    left: calc(50% - 49.5%);
    margin-top: 1%;
    position: fixed;
    width: 99%;
    height: 10%;
    min-width: 1000px;
    min-height: 100px;
    border: rgba(0,0,0,.1) 1px solid;
    border-radius: 10px;
    background-color: rgba(124,102,174,1);
    box-shadow: 0 4px 3px rgba(0,0,0,.1);
  }
  .r_div {
    position: relative;
    /*display: inline-block;*/
    float: left;
    display: table;
    width: 50px;
    height: 100%;
    text-align: center;
  }
  .a_div {
    position: relative;
    float: left;
    display: table;
    width: 5%;
    height: 100%;
    text-align: center;
    /*overflow: hidden;*/
  }

  .nav_home a {
    display: table-cell;
    width: 5%;
    border: transparent;
    white-space: nowrap;
    /*overflow: hidden;*/
    text-align: center;
    line-height: 100%;
    min-width: 100px;
    font: italic 23px '';
    text-decoration: none;
    /*color: rgba(15,198,18,1);*/
    color: HSL(120,100%,72%);
    transition: all linear .3s;
  }


  .nav_home a:hover {
    background-color: #9c41c5;
    font-style: normal;
    border-bottom: HSL(120,100%,72%) solid 8px;
    transform: scale(1.1);
  }
  .nav_ability_more,.nav_ability_img,.nav_title {
    float: left;
    height: 100%;
  }

  .nav_title {
    display: table;
    position: absolute;
    width: 20%;
    top: 0;
    left: calc(50% - 10%);
    text-align: center;
    perspective: 1000px;
    margin-left: 10px;
    transform-style: preserve-3d;
  }

  .nav_title h2 {
    display: table-cell;
    font: italic 50px '';
    color: #9c41c5;
    min-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    transition: all linear .3s;
    text-shadow: 5px 5px 10px black;
  }
  .nav_title h2:hover {
    transform:scale(1.05) rotateY(-20deg) ;
  }
  .nav_ability_img,.nav_ability_more {
    position: absolute;
  }
  .nav_ability_img {
    top: 0;
    right: 10%;
    width: 5%;
    min-width: 93px;
    min-height: 102px;
    border: black 1px solid;
    box-shadow: 1px 1px 5px blueviolet;
    /*background-color: darkorange;*/
    background: no-repeat url("~assets/img/bg2.jpg") -915px -250px;
    transition: all linear .3s;
  }
  .nav_ability_img:hover {
    background: no-repeat url("~assets/img/bg4.jpg") -915px -250px;
    transform: scale(1.1);
  }
  .nav_ability_more {
    right: 0;
    width: 10%;
  }
  @keyframes scel {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1.1);
    }
  }

  li {
    list-style: none;
  }
  article {
    position: absolute;
    display: none;
    /*display: inline-block;*/
    width: 10%;
    height: 30%;
    margin-top: 100px;
    /*border-radius: 15px;*/
    /*background-color: transparent;*/
    left: 0;
    top: 0;
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

  .r_div .a_div:hover>article {
    display: block;
  }
</style>