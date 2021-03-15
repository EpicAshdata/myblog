<template>
  <el-upload class="img-upload"
             ref="upload"
             action="http://localhost:8443/api/covers"
             :on-success="handleSuccess"
             multiple
             :limit="1"
             :on-exceed="handleExceed"
             :file-list="fileList">
    <el-button size="small" type="primary">点击上传</el-button>
  </el-upload>
</template>

<script>
    export default {
        name: "elementui",
        data () {
            return {
                fileList: [],
                url: ''
            }
        },
        methods: {
            handleSuccess (response) {
                this.url = response
                this.$emit('onUpload')
                this.$message.warning('上传成功')
            },
            clear () {
                this.$refs.upload.clearFiles()
            }
        }
    }
</script>

<style scoped>
  .img-upload {
    position: absolute;
    opacity: 0;
    width: 10px;
    height: 10px;
    float: left;
    display: inline;
    top: 465px;
    right: 130px;
    z-index: 2;
    cursor: pointer;
    background-color: black;
  }
</style>