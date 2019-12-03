<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    :before-close="resetDialog"
    width="30%">
    <el-form>
      <el-form-item label="账号">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
    <el-button @click="resetDialog">取消</el-button>
    <el-button type="primary" @click="onSubmit">登录</el-button></span>
  </el-dialog>
</template>

<script>
  export default {
    name: 'NosLogin',
    props: {
      title: {
        type: String,
        default() {
          return '登录';
        }
      },
      dialogVisible: {
        type: Boolean,
        default() {
          return true;
        }
      }
    },
    methods: {
      onSubmit() {
        let url = env.host + '/user/update';
        this.$axios.post(url, {
          appId: 'uc_all',
          accessToken: 'adfadsfsad',
          timestamp: 1512412,
          unified_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NywidGltZSI6MTU3Mjc0OTIyNH0.2k7x_YZ1TpXgdvkFiuMAWgg-Z9z5AIVFu5pprp2WBb8',
          id: this.form.id,
          data: {
            email: this.form.email,
            name: this.form.name,
            is_activate: this.form.is_activate,
            resource_id: this.select
          }
        }).then(response => {
          if (response.data.status === 200) {
            this.resetDialog();
            this.$alert('登录', '提示');
          } else {
            this.$alert('登录', '提示');
          }
        });
      },
      resetDialog() {
        this.dialogVisible = false;
        this.$emit('resetDialog');
      }
    },
    data() {
      return {
        form: {}
      }
    },
    watch: {
      form(val) {
        this.resource.forEach(item => {
          if (item.full_key === val.resource) {
            this.select = item.id;
          }
        });
      }
    }
  };
</script>

<style scoped>

</style>
