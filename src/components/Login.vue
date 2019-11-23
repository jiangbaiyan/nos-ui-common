<template>
    <el-dialog
            title="登录"
            :visible.sync="dialogVisible"
            :before-close="resetDialog"
            width="30%">
        <el-form :model="form">
            <el-form-item label="邮箱">
                <el-input prefix-icon="el-icon-message" placeholder="请输入邮箱" v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="form.password" show-password></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button @click="resetDialog">取消</el-button>
    <el-button type="primary" @click="onSubmit">登录</el-button></span>
    </el-dialog>
</template>

<script>
    export default {
        name: 'Login',
        props: {
            url: {
                type: String,
                default: ''
            },
            params: {
                type: Object,
                default() {
                    return {}
                }
            },
            dialogVisible: {
                type: Boolean,
                default() {
                    return false;
                }
            },
        },
        methods: {
            onSubmit() {
                this.$set(this.params, 'email', this.form.email);
                this.$set(this.params, 'password', this.form.password);
                this.$axios.put(this.url, this.params).then(response => {
                    if (response.data.status === 200) {
                        this.resetDialog();
                        this.$alert('登录成功', '提示');
                    } else {
                        this.$alert('登录失败', '提示');
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
                form: {
                    email: '',
                    password: ''
                }
            }
        },
    };
</script>