import Vue from 'vue'
import Login from "./components/uc/nosLogin/NosLogin";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(Login)
});
