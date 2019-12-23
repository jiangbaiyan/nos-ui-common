import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import NosRegLogin from "./components/uc/nosRegLogin/NosRegLogin";

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(NosRegLogin)
});
