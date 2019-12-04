<template>
  <el-dialog
    title="登录"
    :visible.sync="dialogVisible"
    :before-close="resetDialog"
    width="30%">
    <el-form :model="form" :rules="rules" status-icon>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" show-password></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
    <el-button @click="resetDialog">取消</el-button>
    <el-button type="primary" @click="submit('form')">登录</el-button></span>
  </el-dialog>
</template>

<script>
  export default {
    name: 'NosLogin',
    props: {
      // 对话框展示与否
      dialogVisible: {
        type: Boolean,
        default() {
          return true;
        }
      },
      // 其他请求参数
      params: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      submit(formName) {
        // 表单验证
        this.$refs[formName].validate((valid) => {
          if (valid) {
            Object.assign(this.params, this.form);
            this.$axios.post('http://152.136.125.67:9600/unified/login', this.params).then(response => {
              if (response.data.status === 200) {
                this.$message.success('登录成功', '成功');
                this.resetDialog(response.data);
              } else {
                this.$message.error('登录失败', '错误');
                this.resetDialog(response.data);
              }
            });
          } else {
            this.$message.error('您的信息填写不正确', '错误');
            return false;
          }
        });
      },
      resetDialog(data = '') {
        this.dialogVisible = false;
        this.$emit('login-finish', data);
      }
    },
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
        rules: {
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
          ]
        }
      }
    }
  };
</script>
