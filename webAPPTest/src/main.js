import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);

import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import footerTemp from './component/footerTemp.vue'
import routerTemp from './component/routerTemp.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

// 2.x之后 需要 自定义过滤器
Vue.filter('uppercase', function(value) {
  if (!value) {
    return ''
  }

  value = value.toString()
  return value.charAt(0).toUpperCase()+value.slice(1)
});

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: footerTemp
    },
    {
      path: '/second',
      component: routerTemp
    }
  ]
});

var vm = new Vue({
  el: '#app',
  data(){
    return {
      a:1
    }

  },
  router,
  render: h => h(App),
  created:function (){

    console.log('created'+this.a);
    this.a = 3
  },
  updated:function () {
    console.log('updated'+this.a);
  },
  mounted:function () {
    console.log('mounted'+this.a);
    this.a = 4;
  }
});

// 监听属性变化
vm.$watch('a',function(oldVal, newVal) {
  console.log("成功加载数据---------");
}, {
  immediate: true // 立即触发回调

})
