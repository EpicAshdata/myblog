<template>
<!--  <div class="loginbody">-->
<!--    <div class="login">-->
<!--      <div class="loginbtn">-->
<!--        <h2 class="loginw">系统登录</h2>-->
<!--          <div class="loginable">-->
<!--            <div class="loginuser">-->
<!--              <h2>用户名</h2>-->
<!--              <input type="text" v-model="loginform.username">-->
<!--            </div>-->
<!--            <div class="loginpasswd">-->
<!--              <h2>密码</h2>-->
<!--              <input type="password" v-model="loginform.passwd">-->
<!--            </div>-->
<!--            <button @click="login"> 登录</button>-->
<!--            <router-link to="/login/regis">-->
<!--              <button @click="login">注册</button>-->
<!--            </router-link>-->
<!--          </div>-->
<!--      </div>-->
<!--&lt;!&ndash;      <audio src="../../assets/sounds/bgm1.mp3" autoplay loop class="bgm1" id="bgm1"></audio>&ndash;&gt;-->
<!--    </div>-->
<!--    <section class="regis">-->

<!--    </section>-->
<!--  </div>-->

  <div class="loginbody">
      <div class="main">
        <section class="login_main" id="login_m">
          <p>用户登录</p>
            <span>用户名</span>
            <input type="text" class="username" v-model="loginform.username">
            <span>密码</span>
            <input type="password" class="passwd" v-model="loginform.passwd">
          <button class="loginbtn" @click="login">登录</button>
          <span class="tips">没有账号？点击注册</span><button class="regis_btn" @click="toregis('mainregis','login_m')">注册</button>
        </section>
        <article class="regis_main" id="mainregis">
          <div class="regiselect">
            <div class="title">用户注册</div>
            <form action="" class="theform">
              <span class="user">用户名</span><input type="text" class="usern" v-model="user.username"><br>
              <span class="password">密码</span><input type="password" class="passwords" v-model="user.passwd"><br>
              <span class="useremail">邮箱</span><input type="email" class="email" v-model="user.eamil"><br>
              <span class="userebirth">出生日期</span><input type="date" class="birth" v-model="user.birth"><br>
              <span class="usertel">联系电话</span><input type="tel" class="tele" v-model="user.tele">
            </form>
          </div>
          <div class="btn">
            <button class="finish" @click="regfinish('mainregis','login_m')">完成</button>
            <button class="cancel" @click="regcancel('mainregis','login_m')">取消</button>
          </div>
        </article>
      </div>
  </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginform: {
                    username: '',
                    passwd: '',
                },
                responseResult: [],
                nowDate: new Date(),
                user: {
                    username: '',
                    passwd: '',
                    eamil: '',
                    date:'',
                    birth: '',
                    tele: '',
                }
            }
        },
        methods: {
          login() {
              var _this = this
              console.log(this.$store.state)
            this.$axios.post('/login',{
                username: this.loginform.username,
                passwd: this.loginform.passwd
            }).then(successResponse => {
                if(successResponse.data.code === 200){
                    _this.$store.commit('login',_this.loginform)
                    const path = this.$route.query.redirect
                    this.$router.replace(path === '/' || path === undefined ? '/home':path )
                }
            })
          },
            toregis(id1,id2){
                const e1 = document.getElementById(id1)
                e1.style.display= 'block'
                const e2 = document.getElementById(id2)
                e2.style.display= 'none'
            },
            regfinish(id1,id2){
                const _this = this
                const e1 = document.getElementById(id1)
                const e2 = document.getElementById(id2)
                this.user.date = this.nowDate
                this.$axios.post('/users',{
                    username: _this.user.username,
                    passwd: _this.user.passwd,
                    eamil: _this.user.eamil,
                    date: _this.user.date,
                    birth: _this.user.birth,
                    tele: _this.user.tele,
                }).then(resp => {
                    if (resp && resp.status === 200) {
                        e1.style.display = 'none'
                        e2.style.display = 'block'
                    }
                })
            },
            regcancel(id1,id2){
                const e1 = document.getElementById(id1)
                e1.style.display= 'none'
                const e2 = document.getElementById(id2)
                e2.style.display= 'block'
            }
        },
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    font: 20px '';
  }
  .loginbody{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: black;
  }
  .main {
    position: relative;
    width: 100%;
    height: 100%;
    transition:all 3s linear;
  }
  .login_main {
    position: absolute;
    height: 500px;
    width: 500px;
    top: calc(50% - 250px);
    left: calc(50% - 250px);
    border: #65f965 2px solid;
    border-radius: 10px;
    box-shadow: 10px 10px 50px #65f965;
    /*background-color: #65f965;*/
    text-align: center;
  }
  .login_main p{
    margin-top: 20px;
    font: bolder 40px '华文彩云';
    text-shadow: #65f965;
    display: inline-block;
    height: 10%;
    width: 100%;
    color: #65f965;
    /*background-color: #9c41c5;*/
  }
  .login_main  span {
    font: 30px '';
    display: block;
    height: 10%;
    /*width: 100%;*/
    /*background-color: #7c66ae;*/
    color: #65f965;
    margin-top: 20px;
  }
  .login_main input {
    height: 10%;
    width: 80%;
    border-radius: 15px;
    text-align: center;
    border: 2px solid #65f965;
    color: #65f965;
    background-color:black;
    outline: none;
  }
  .login_main button {
    display: inline-block;
  }
  .loginbtn {
    /*margin-top: 20px;*/
    width: 80%;
    height: 10%;
    margin-top: 30px;
    border-radius: 15px;
    border: #65f965 2px solid;
    font: 35px '';
    color: #65f965;
    outline: none;
    background-color: black;
  }
  .login_main .tips {
    font: 15px '';
    display: inline-block;
    /*width: 50%;*/
  }
  .regis_btn {
    color: #65f965;
    outline: none;
    margin: 0;
    padding: 0;
    border: 1px solid transparent;
    background-color: transparent;
    cursor: pointer;
  }
  .regis_main {
    display: none;
    position: absolute;
    top: calc(50% - 400px);
    left: calc(50% - 250px);
    height: 800px;
    width: 500px;
    /*background-color:#9c41c5;*/
  }
  .title {
    margin-top: 50px;
    text-align: center;
    display: block;
    width: 100%;
    height: 80px;
    line-height: 80px;
    color: #65f965;
    font:bolder 60px  '';
  }
  .theform {
    display: block;
    width: 100%;
    height: 400px;
    /*background-color: #4d2b77;*/
    vertical-align: bottom;
    /*text-align: center;*/
  }
  .theform span {
    display: inline-block;
    margin-left: 100px;
    width: 100px;
    line-height: 40px;
    color: #65f965;
  }
  .theform span, .theform input{
    margin-top: 30px;
    height: 40px;
    font: 25px '';

  }
  .theform .usern,.theform .user {
    margin-top: 10px;
  }
  .theform input {
    background-color: black;
    margin-left: 5px;
    width: 200px;
    outline: none;
    color: #65f965;
    border-radius: 5px;
    border: 3px #65f965 solid;
  }
  .btn {
    text-align: center;
  }
  .regis_main button {
    margin-top: 10px;
    width: 150px;
    height: 50px;
    border-radius: 10px;
    color: #65f965;
    border: #65f965 5px solid;
    background-color: black;
  }
</style>