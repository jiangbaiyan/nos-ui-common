<template>
    <div class="login_page fillcontain">
        <transition name="form-fade" mode="in-out">
            <section class="form_container" v-show="showLogin">
                <div class="manage_tip">
                    <p>Nos统一登录</p>
                </div>
                <el-form :model="loginForm" :rules="rules" ref="loginForm">
                    <el-form-item prop="email">
                        <el-input v-model="loginForm.email" placeholder="邮箱"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登录</el-button>
                    </el-form-item>
                </el-form>
                <el-button type="primary" @click="registerPage" class="submit_btn">注册</el-button>
            </section>
        </transition>
        <div>
            <el-dialog title="统一注册" :rules="rules" :visible.sync=displayDialog width="20%">
                <el-form :model="registerForm" ref="registerForm">
                    <el-form-item label="邮箱" prop="email" required>
                        <el-input v-model="registerForm.email" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password" show-password required>
                        <el-input v-model="registerForm.password"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="displayDialog = false">取消</el-button>
                    <el-button type="primary" @click="register('registerForm')">确定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'NosRegLogin',
        props: ['loginUrl', 'registerUrl'],
        data() {
            return {
                loginForm: {
                    email: '',
                    password: '',
                },
                registerForm: {
                    email: '',
                    password: '',
                },
                rules: {
                    email: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ],
                },
                showLogin: false,
                displayDialog: false,
            }
        },
        mounted() {
            this.showLogin = true;
            let token = this.$cookies.get('unified_token');
            if (token) {
                this.loginWithToken(token);
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let data = {
                          email: this.loginForm.email,
                          password: this.loginForm.password
                        };
                        axios.post(this.url, data).then(res => {
                            if (res.data.status === 200) {
                                this.$message({
                                    type: 'success',
                                    message: '登录成功'
                                });
                                if (res.data.unified_token) {
                                    this.$cookies.set('unified_token', res.data.unified_token)
                                }
                                this.returnData(res.data);
                            } else {
                                this.$message({
                                    type: 'error',
                                    message: res.data.msg
                                });
                            }
                        })
                    } else {
                        this.$notify.error({
                            title: '错误',
                            message: '请输入正确的用户名密码',
                            offset: 100
                        });
                        return false;
                    }
                });
            },
            registerPage() {
                this.displayDialog = true;
            },
            register(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let data = {"email": this.registerForm.email, "password": this.registerForm.password};
                        axios.post(this.registerUrl, data).then(res => {
                            if (res.data.status === 200) {
                                this.$message({
                                    type: 'success',
                                    message: '注册成功'
                                });
                                this.returnData(res.data);
                            } else {
                                this.$message({
                                    type: 'error',
                                    message: res.data.msg
                                });
                            }
                        })
                    } else {
                        this.$notify.error({
                            title: '错误',
                            message: '请输入正确的用户名密码',
                            offset: 100
                        });
                        return false;
                    }
                });
            },
            loginWithToken(token) {
                let data = {"unified_token": token};
                axios.post(this.url, data).then(res => {
                    if (res.data.status === 200) {
                        this.$message({
                            type: 'success',
                            message: '登录成功'
                        });
                        this.returnData(res.data);
                    } else {
                        this.$message({
                            type: 'error',
                            message: res.data.msg
                        });
                    }
                })
            },
            returnData(data = '') {
                this.$emit('login-finish', data);
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../../style/mixin';
    .login_page{
        background-color: #324057;
    }
    .manage_tip{
        position: absolute;
        width: 100%;
        top: -100px;
        left: 0;
        p{
            font-size: 34px;
            color: #000000;
        }
    }
    .form_container{
        .wh(320px, 210px);
        .ctp(320px, 210px);
        padding: 25px;
        border-radius: 5px;
        text-align: center;
        background-color: #fff;
        .submit_btn{
            width: 100%;
            font-size: 16px;
        }
    }
    .form-fade-enter-active, .form-fade-leave-active {
        transition: all 1s;
    }
    .form-fade-enter, .form-fade-leave-active {
        transform: translate3d(0, -50px, 0);
        opacity: 0;
    }
</style>
