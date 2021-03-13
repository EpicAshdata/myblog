<template>
  <div class="homeview">
     <article>
       <ul>
         <li class="box1">
           <div class="icon1"></div>
           <p class="title1">技术采用</p>
         </li>
         <li class="box2">
           <div class="icon2"></div>
           <p class="title2">最近更新</p>
         </li>
         <li class="box3">
           <div class="icon3"></div>
           <p class="title3">下载源码</p>
         </li>
         <li class="box4">
           <div class="icon4"></div>
           <p class="title4">关于我们</p>
         </li>
       </ul>
     </article>
    <div class="project">
      <section class="myse">
        <div class="projecttitle">
          <div class="head"></div>
          <div class="righth"></div>
          <div class="lefth"></div>
        </div>
        <div class="lastipdate">
          <p class="update_title">最近更新</p>
          <div class="update_project">
            <slot></slot>
          </div>
        </div>
        <footer>
          <p class="foot_tietle">Talk is nothing,Show me your code</p>
          <div class="foot_cart"></div>
          <div class="copyright">
            <p class="aurther">罗罗马上</p>
            <p class="telp">1161438158@qq.com</p>
          </div>
        </footer>
      </section>
    </div>
  </div>

</template>

<script>
  import bscroll from 'better-scroll'
    export default {
        name: "Homeview",
        data(){
          return {
              iscroll: null,
          }
        },
        mounted() {
          this.iscroll = new bscroll(document.querySelector('.project'),{
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
        }
    }
</script>

<style scoped>
  .homeview {
    /*position: absolute;*/
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: mediumslateblue;
  }
  li {
    list-style: none;
  }
  article {
    position: fixed;
    display: inline-block;
    width: 10%;
    height: 30%;
    margin-top: 100px;
    /*border-radius: 15px;*/
    background-color: transparent;
    left: 100px;
    top: 200px;
  }
  section {
    position: absolute;
    display: inline-block;
    width: 60%;
    min-width: 1000px;
    white-space: nowrap;
    background-color: white;
    top: 20%;
    left: calc(50% - 30%);
    margin-left: 50px;
    overflow: hidden;
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
    background-color: rgba(124,102,174,.5);
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
    border: #65f965 2px solid;
    background-color: #9c41c5;
  }

  .projecttitle {
    position: relative;
    width: 100%;
    height: 500px;
    /*background-color: white;*/
    background: no-repeat url("~assets/img/bg2.jpg");
    background-size: 100%;
    background-position: 0px -80px;
    transition: all linear .5s;
  }
  .projecttitle:hover {
    background: no-repeat url("~assets/img/bg4.jpg");
    background-size: 100%;
    background-position: 0px -80px;
  }
  .lastipdate {
    width: 100%;
    /*height: 500px;*/
    background-color: #7c66ae;
  }
  .update_title {
    width: 100%;
    height: 50px;
    font: 500 25px '' ;
    line-height: 50px;
    border: black 2px solid;
    color: #65f965;
    background-color: #7c66ae;
    border-bottom: 2px solid black;
    box-shadow: 2px 2px 5px #7c66ae;
  }

  .update_project {
    width: 100%;
    height: 300px;
  }

  footer {
    width: 100%;
    height: 500px;
  }

  .foot_tietle {
    width: 100%;
    height: 80px;
    text-align: center;
    font: italic 50px bolder;
    border-bottom: 2px solid black;
    color: #65f965;
    line-height: 80px;
    background-color: #7c66ae;
  }

  .foot_cart {
    width: 100%;
    height: 150px;
    background-color: #7c66ae;
    text-align: center;
    border-bottom: 2px solid black;
  }

  .copyright{
    text-align: center;
  }
  .aurther,.telp {
    background-color: #7c66ae;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font: italic 25px '';
    color: #65f965;
    border-bottom: 2px solid black;
    box-shadow: 2px 2px 5px #7c66ae;
  }
  .aurther {
    border-bottom: transparent;
  }
</style>