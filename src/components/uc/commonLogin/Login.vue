<template>
    <div class="login_page fillcontain">
        <transition name="form-fade" mode="in-out">
            <section class="form_contianer" v-show="showLogin">
                <div class="manage_tip">
                    <p>Nmp管理系统</p>
                </div>
                <el-form :model="loginForm" ref="loginForm">
                    <el-form-item prop="email">
                        <el-input v-model="loginForm.email" placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登录</el-button>
                    </el-form-item>
                </el-form>
                <el-button type="primary" @click="reigsterPage" class="submit_btn">注册</el-button>
                <p class="tip">温馨提示：</p>
                <p class="tip">未登录过的新用户，请先点击下方注册按钮进行注册</p>
                <p class="tip">注册过之后请去邮箱激活</p>
                <p class="tip">注册过的用户可凭账号密码登录</p>
            </section>
        </transition>
        <div>
            <el-dialog title="注册" :visible.sync=displayDialog>
                <el-form :model="registerForm" ref="registerForm">
                    <el-form-item label="email" prop="email" label-width="100px">
                        <el-input v-model="registerForm.email" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password" label-width="100px">
                        <el-input v-model="registerForm.password"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="displayDialog = false">取 消</el-button>
                    <el-button type="primary" @click="reigsterForm('registerForm')">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import {login,register} from '@/api/getData'

    export default {
        name: 'Login',
        data(){
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
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                },
                showLogin: false,
                displayDialog: false,
            }
        },
        created(){
            this.showLogin = true;
            var token = this.$cookies.get('unified_token');
            if (token) {
                this.loginWithTolen(token);
            }
        },
        computed: {
        },
        methods: {
            async submitForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        const res = this.$axios.post('/v1/unified/login', {email: this.loginForm.email, password: this.loginForm.password});
                        if (res.status == 200) {
                            this.$message({
                                type: 'success',
                                message: '登录成功'
                            });
                            if (res.data.unified_token) {
                                this.$cookies.set('unified_token', res.data.unified_token)
                            }
                            this.$router.push('/').catch(err => {})
                        }else{
                            this.$message({
                                type: 'error',
                                message: res.message
                            });
                        }
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
            reigsterPage() {
                this.displayDialog = true;

            },
            async reigsterForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        const res = this.$axios.post('/v1/unified/login', {email: this.registerForm.email, password: this.registerForm.password});
                        if (res.status == 200) {
                            this.$message({
                                type: 'success',
                                message: '注册成功'
                            });
                            this.$router.push('login').catch(err => {});
                        }else{
                            this.$message({
                                type: 'error',
                                message: res.msg
                            });
                        }
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
            async loginWithTolen(token) {
                const res = this.$axios.post('/v1/unified/login', {unified_token:token});
                if (res.status == 200) {
                    this.$message({
                        type: 'success',
                        message: '登录成功'
                    });
                    this.$router.push('/').catch(err => {});
                }else{
                    this.$message({
                        type: 'error',
                        message: res.message
                    });
                }
            }
        },

        watch: {
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
    .form_contianer{
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
    .tip{
        font-size: 12px;
        color: red;
    }
    .form-fade-enter-active, .form-fade-leave-active {
        transition: all 1s;
    }
    .form-fade-enter, .form-fade-leave-active {
        transform: translate3d(0, -50px, 0);
        opacity: 0;
    }
</style>
