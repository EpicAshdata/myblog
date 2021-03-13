<template>
  <div class="totalnote">
    <article>
      <ul>
        <li v-for="item in notecontent" :key="item.date">
          <div class="titleanddate"><span>{{item.title}}/{{item.date}}</span></div>
          <div class="content">
            <p>{{item.content}}</p>
          </div>
          <div class="author">
            <span>{{item.author}}</span>
          </div>
          <div class="delnote">
            <span @click="delnote(item.id)">X</span>
          </div>
          <div class="non"></div>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
    export default {
        name: "totalnote",
        data(){
            return {
                notecontent: [
                    {
                        id:'',
                        title: '',
                        date: '',
                        content: '',
                        author: ''
                    }
                ]
            }
        },
        methods: {
          loadnote(){
              var _this = this;
              this.$axios.get('/notes').then(res => {
                  if(res && res.status ==200){
                      _this.notecontent = res.data;
                  }
              })
          },
            delnote(id){
              const bn = confirm("是否删除")
                if(bn){
                 this.$axios.post('/notedelete',{
                     id:id
                 }).then(res => {
                     if(res && res.status === 200){
                         this.loadnote()
                     }
                 })
                }
            }
        },
        mounted(){
            this.loadnote()
        }
    }
</script>

<style scoped>
  .totalnote {
    position: absolute;
    width: 90%;
    height: 600px;
    top: 0;
    left: 5%;
    background-color: black;
    box-shadow: 10px 5px 100px black;
  }
   .totalnote li {
    list-style: none;
     position: relative;
  }

  .totalnote .titleanddate {
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
  }
  /*.title span {*/
  /*  position: absolute;*/
  /*  !*display: inline-block;*!*/
  /*  background-color: #7c66ae;*/
  /*  top: 0;*/
  /*  right: 5px;*/
  /*}*/
  .totalnote .content {
    box-sizing: border-box;
    width: 100%;
    height: 500px;
    font: 20px '';
    border: #65f965 1px solid;
    padding: 10px 10px;
    color: #65f965;
    background-color: black;
    white-space: normal;
    border-radius: 10px;
  }

  .totalnote .author {
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
  }
  .non {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    background-color: black;
  }

  .delnote {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: 2px solid #65f965;
    background-color: black;
    color: #65f965;
  }
  .delnote span {
    height: 40px;
    display: flex;
    font: 20px '';
    justify-content: center;
    align-items: center;
  }
</style>