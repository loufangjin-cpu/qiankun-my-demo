<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="handleGlobal">修改全局</el-button>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    handleGlobal () {
      window.localStorage.setItem = function () {
        console.log('Hi child')
      }
    }
  }
}
</script>
<style scoped>
 .about {
   border: 1px solid red;
 }
</style>
