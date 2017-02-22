<template>
  <div id="routerTemp">
    <p id="author">iOS=>WebAPP之路</p>
    <a href="https://github.com/jakajacky" target="_blank"><p id="author">GitHub</p></a>
    <el-button type="success" name="button" icon="share" v-on:click="onClick"></el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
          List:[
            {title:'上一页'},
            {title:'下一页'}
          ]
        }
      },
    methods: {
      onClick: function() {
        // 触发该监听事件  注意this的使用，教程中是vm.$emit
        this.$emit('dataFromRouterTemp',"i'm john")
      }
    }

    }
</script>

<style>
#routerTemp {
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

#author {
  color: #42b983;
}
</style>
