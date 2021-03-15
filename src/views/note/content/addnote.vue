<template>
  <div class="addnote">
      <article>
        <ul>
          <li>
            <form action="">
              <!--            <div class="titleanddate"><span>{{item.title}}/{{item.date}}</span></div>-->
              <input type="text" class="titleanddate" v-model="notecontent.title" placeholder="请输入标题">
              <!--            <div class="content">-->
              <!--              <p>{{item.content}}</p>-->
              <!--            </div>-->
              <!--            <input type="textarea" class="content" v-model="notecontent.content">-->
              <textarea name="" id="" cols="30" rows="10" class="content" v-model="notecontent.content" placeholder="请输入内容"></textarea>
              <!--            <div class="author">-->
              <!--              <span>{{item.author}}</span>-->
              <!--            </div>-->
<!--              <input type="text" class="author" v-model="notecontent.author" placeholder="请输入作者">-->
            </form>
            <button class="btn" @click="submitnote">提交</button>
          </li>
        </ul>
      </article>
  </div>
</template>

<script>
    export default {
        name: "addnote",
        data(){
            return {
                nowDate: new Date(),
                notecontent:
                    {
                        id: '',
                        title: '',
                        date: '',
                        content: '',
                        author: '',
                        user: {
                            id: '',
                        }
                    },
                myid: ''
            }
        },
        methods: {
            clear(){
             this.notecontent = {
                 id: '',
                 title: '',
                 date: '',
                 content: '',
                 author: '',
                 user: {
                     id: '1',
                 }
             }
            },
            submitnote(){
                const _this = this;
                this.notecontent.date = this.nowDate;
                console.log(this.notecontent.content)
                this.$axios.post('/notes',{
                    id: _this.notecontent.id,
                    title: _this.notecontent.title,
                    date: _this.notecontent.date,
                    content: _this.notecontent.content,
                    author: _this.notecontent.author,
                    user: _this.notecontent.user,
                }).then(res => {
                        if (res && res.status === 200) {
                            console.log('111111111')
                        }
                })

                this.clear()
            }
        },
        mounted(){
            this.notecontent.author = this.$store.state.user.username;
            this.$axios.get('/searchuser?key='+this.notecontent.author).then(res => {
                if (res && res.status === 200) {
                    this.notecontent.user.id = res.data.id;
                    console.log(this.notecontent.user.id)
                }
            })
        }
    }
</script>

<style scoped>
  .addnote{
    position: absolute;
    width: 90%;
    height: 600px;
    top: 0;
    left: 5%;
    background-color: black;
    box-shadow: 10px 5px 100px black;
  }
  li {
    list-style: none;
  }

  .addnote .titleanddate {
    /*position: relative;*/
    /*box-sizing: border-box;*/
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: black;
    text-align: left;
    line-height: 50px;
    font: 20px '';
    border: #65f965 1px solid;
    color: #65f965;
    border-radius: 10px;
    text-align: center;
  }
  /*.title span {*/
  /*  position: absolute;*/
  /*  !*display: inline-block;*!*/
  /*  background-color: #7c66ae;*/
  /*  top: 0;*/
  /*  right: 5px;*/
  /*}*/
  .addnote .content {
    resize: none;
    box-sizing: border-box;
    width: 100%;
    height: 500px;
    font: 20px '';
    border: #65f965 1px solid;
    padding: 10px 10px;
    color: #65f965;
    background-color: black;
    white-space: pre-wrap;
    border-radius: 10px;
    /*overflow-y: scroll;*/
    /*scrollbar-base-color: #65f965;*/
    /*scrollbar-arrow-color: #65f965;*/
    /*scrollbar-face-color: #65f965;*/
    /*scrollbar-highlight-color: black;*/
  }
  .content::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
  }
  .addnote .btn {
    width: 100%;
    height: 50px;
    background-color: black;
    font: 20px '';
    border: #65f965 1px solid;
    color: #65f965;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    text-align: center;
  }
</style>