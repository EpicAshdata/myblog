<template>
  <div class="AddOrUpdate">
    <div class="title"><h2>添加/修改图书</h2></div>
    <div class="project">
      <span>书名</span><input type="text" class="booktitle" autofocus v-model="form.title">
      <span>作者</span><input type="text" class="author" v-model="form.author">
      <span>出版日期</span><input type="text" class="date" v-model="form.date">
      <span>出版社</span><input type="text" class="press" v-model="form.press">
      <span>封面</span>
      <elementui @onUpload="getcover" ref="imgUpload"></elementui>
      <input type="text" class="cover" v-model="form.cover">
      <div class="submitimg">上传图片</div>
      <span>图书简介</span><input type="text" class="abs" v-model="form.abs">
      <span>图书类别</span>
      <select name="bookcatrgory" id="" class="category" v-model="form.category.id">
        <option value="1">文学</option>
        <option value="2">玄幻</option>
        <option value="3">科幻</option>
        <option value="4">轻小说</option>
        <option value="5">都市</option>
      </select>
    </div>
    <div class="choos">
      <button class="sure" @click="onSubmit">确定</button>
      <button class="cancel" @click="clear">取消</button>
    </div>
  </div>
</template>
<script>
  import elementui from "@/views/library/content/elementui";
  export default {
        name: "AddOrUpdate",
        data(){
            return{
                form: {
                    id: '',
                    title: '',
                    author: '',
                    date: '',
                    press: '',
                    cover: '',
                    abs: '',
                    category: {
                        id: '',
                        name: ''
                    }
                }
            }
        },
        components: {
            elementui,
        },
        methods: {
            clear () {
                this.form = {
                    id: '',
                    title: '',
                    author: '',
                    date: '',
                    press: '',
                    cover: '',
                    abs: '',
                    category: {
                        id: '',
                        name: ''
                    }
                }
            },
            onSubmit () {
                this.$axios
                    .post('/books', {
                        id: this.form.id,
                        cover: this.form.cover,
                        title: this.form.title,
                        author: this.form.author,
                        date: this.form.date,
                        press: this.form.press,
                        abs: this.form.abs,
                        category: this.form.category
                    }).then(resp => {
                    if (resp && resp.status === 200) {
                        // this.dialogFormVisible = false
                        this.$emit('onSubmit')
                    }
                })
                console.log(this.form)
                this.clear()
            },
            getcover(){
                this.form.cover = this.$refs.imgUpload.url
                console.log(this.form.cover)
            }
        },

    }
</script>

<style scoped>
  .AddOrUpdate {
    position: relative;
    margin-left: 150px;
    overflow: hidden;
    width: 700px;
    /*height: 700px;*/
    background-color: #4d2b77;
    border-radius: 20px;
    border: #65f965 groove 10px;
    white-space: normal;
    box-shadow:10px 20px 30px #65f965;
  }
  .title {
    width: 100%;
    height: 50px;
    background-color: #4d2b77;
    line-height: 50px;
    text-align: center;
    color: #65f965;
    border-bottom: 3px black solid;
  }
  .project {

    text-align: center;
  }

  .AddOrUpdate input,select {
    text-align: center;
    display: inline-block;
    width: 400px;
    height: 30px;
    margin-top: 10px;
    font: 25px '';
    color: #65f965;
    border: #65f965 solid 3px;
    background-color: black;
  }

  .AddOrUpdate span {
    margin-top: 10px;
    text-align: center;
    display: inline-block;
    width: 100%;
    font: 25px '';
    background-color: #4d2b77;
    color: #65f965;
  }
  .AddOrUpdate .category {
    height: 40px;
  }

  .choos {
    margin-top: 50px;
    width: 100%;
    height: 100px;
    /*background-color: #9c41c5;*/
    text-align: center;
  }
  .sure,.cancel {
    width: 100px;
    height: 50px;
    margin: 20px;
    background-color: black;
    border: 5px solid #65f965;
    color: #65f965;
    font: 25px '';
  }

  .sure:hover,.cancel:hover {
    background-color: #9c41c5;
  }

  .submitimg{
    text-align: center;
    position: absolute;
    top: 445px;
    right: 70px;
    width: 70px;
    height: 30px;
    line-height: 30px;
    color: #65f965;
    background-color: black;
    border: #65f965 1px groove;
    box-shadow:2px -2px 5px  black;
    cursor: pointer;
    z-index: 1;
  }
  .submitimg:hover {
    background-color: dimgray;
  }

  .AddOrUpdate .cover {
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
  }
</style>