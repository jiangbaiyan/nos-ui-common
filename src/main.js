import Vue from 'vue'
import NosLogin from "./components/uc/nosLogin/NosLogin";
import Login from "./components/uc/commonLogin/Login";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import NosLogin from "./components/uc/nosLogin/NosLogin";

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(Login)
});
