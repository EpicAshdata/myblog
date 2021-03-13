<template>
  <div class="noteview">
    <article class="notes">
      <ul>
        <router-link to="/note/totalnote">
          <li class="box1">
            <div class="icon1"></div>
            <p class="title1">查看笔记</p>
          </li>
        </router-link>
        <router-link to="/note/addnote">
          <li class="box7">
            <div class="icon7"></div>
            <p class="title7">添加笔记</p>
          </li>
        </router-link>
      </ul>
    </article>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
    export default {
        name: "Noteview",
        data(){
          return {
              notecontent: {
                  title: '',
                  date: '',
                  content: '',
                  author: ''
              }
          }
        },
        components: {
        },
        methods: {
            // flushCom() {
            //     this.$store.index = this.$route.query.index
            //     this.$store.path = this.$route.path
            //     console.log(this.$store.path);
            //     console.log(this.$store.index);
            //     this.$router.replace({
            //         path:'/whitepage'
            //     })
            // }
        }
    }
</script>

<style scoped>
  .noteview {
    position: relative;
    width: 100%;
    height: 100%;
  }
  li {
    list-style: none;
  }
  /*article,section {*/
  /*  position: absolute;*/
  /*  top: 100px;*/
  /*  left: 100px;*/
  /*  width: 500px;*/
  /*  height: 500px;*/
  /*  background-color: black;*/
  /*}*/
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
    /*height: 500px;*/
    min-width: 1000px;
    white-space: nowrap;
    background-color: red;
    top: 20%;
    left: calc(50% - 30%);
    margin-left: 50px;
    /*overflow: hidden;*/
  }
</style>