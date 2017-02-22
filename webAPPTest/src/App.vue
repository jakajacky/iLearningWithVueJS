<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1></h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <li><a href="https://github.com/jakajacky" target="_blank">GitHub</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <!-- <h2>DynamicContent</h2>
    <div>

    </div> -->
    <p v-if="isno>-1" name="un" style="color:#42b983">{{msg}}</p>
    <br />
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="6" :push="3">
            <h1 style="line-height: 36px;color:#20A0FF" v-bind:class="ischange">豆瓣电影排行榜</h1>
          </el-col>
          <el-col :span="6" :push="3">
            <el-input v-model="input" placeholder="请输入内容">
              <el-button slot="append" icon="search"></el-button>
            </el-input>
          </el-col>
        </el-row


      </div>
      <ul>
        <li v-for="article in articles">{{article.title}}</li>
      </ul>
      <br />

      <!-- layout布局 row -->
      <el-row type="flex" justify="center" align="middle">
        <!-- column1 -->
        <el-col :span="5">
          <div>
            <!-- autosize type="textarea" -->
            <el-input v-model="input" placeholder="请输入内容" v-focus>
              <i slot="prepend" class="el-icon-plus"></i>
            </el-input>

          </div>
        </el-col>

        <!-- column2 -->
        <el-col :span="2">
          <div>
            <el-button @click.native="clickBtn" type="primary">确定{{content}}</el-button>
          </div>
        </el-col>
      </el-row>

    </el-card>
    <br />
    <br />
    <br />
    <br />
    <div>
      <router-link to="/">版权</router-link>
      <router-link to="/second">简介</router-link>
    </div>
    <router-view class="view" v-bind:now="nowdate" v-on:dataFromRouterTemp="listenToRouterTemp"></router-view>
  </div>
</template>

<script>
import footerTemp from './component/footerTemp.vue'
import routerTemp from './component/routerTemp.vue'
import Storage from './storage'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      content:"",
      isno:0,
      input:'',
      radio:'1',
      articles:[],
      ischange:'head-title',
      isClicked:false,
      nowdate : '',
    }
  },
  // 计算属性
  computed:{
    nowdate:function() {
      var datee = new Date();
      console.log('Time:'+datee.toLocaleDateString());

      return datee.toLocaleDateString();
    }
  },
  methods: {
    readyInput:function (event) {
      // msg = content
      // data.msg = event.target.value // 获取该事件event，target控件
    },
    clickBtn:function (event) {
      if (this.Clicked) {
        this.ischange = 'head-title'
      }
      else {
        this.ischange = 'head-title1'
      }
      this.Clicked = !this.Clicked
      alert(this.a)
    },
    // 监听的回调
    listenToRouterTemp: function (msg) {
      if (this.content === '') {
        this.content = msg;
      }
      else {
        this.content = '';
      }

    }
  },
  mounted:function(){
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
      header: {

      },
      emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调
      // console.log(this.articles);
      this.articles = response.data.subjects
      this.$nextTick(function(){
        console.log('DOM更新了'+this);
      })

    }, function(response) {
      // 这里是处理错误的回调
      console.log(response)
    });

  },
  // 监听器
  watch : {
    articles: {
      handler:function (oldVal, newVal) {
        console.log('有新的数据被获取到，请持久化到本地');
        // 持久化
        Storage.save(this.articles)
      },
      deep:true
    }
  },
  components:{footerTemp,routerTemp},
  // 自定义指令
  // directives:{
  //   'focus':{
  //     inserted:function(el) {
  //       el.focus();
  //       console.log('focus开始了。。。。');
  //     }
  //   }
  // },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;

  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .el-icon-d {

  }

  .clearfix {

  }

  .head-title {

  }

  .head-title1 {
    animation: myfirst 5s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    -moz-animation: myfirst 5s;	/* Firefox */
    -moz-animation-direction: alternate;
    -moz-animation-iteration-count: infinite;
    -webkit-animation: myfirst 5s;	/* Safari 和 Chrome */
    -webkit-animation-direction: alternate;
    -webkit-animation-iteration-count: infinite;
    -o-animation: myfirst 5s;
    -o-animation-direction: alternate;
    -o-animation-iteration-count: infinite;
  }

  @keyframes myfirst
  {
  from {color:#20A0FF;}
  to {color:cyan;}
  }

  @-moz-keyframes myfirst /* Firefox */
  {
  from {color:#20A0FF;}
  to {color:cyan;}
  }

  @-webkit-keyframes myfirst /* Safari and Chrome */
  {
  from {color:#20A0FF;}
  to {color:cyan;}
  }

  @-o-keyframes myfirst /* Opera */
  {
  from {color:#20A0FF;}
  to {color:cyan;}
  }

</style>
