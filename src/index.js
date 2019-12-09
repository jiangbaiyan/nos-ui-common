import NosLogin from './components/uc/nosLogin/index.js';
import NosRegister from './components/uc/nosRegister/index.js';
import Login from './components/uc/commonLogin/index'

const components = [
  NosLogin,
  NosRegister,
  Login
];

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
};

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  NosLogin,
  NosRegister,
  Login
}
