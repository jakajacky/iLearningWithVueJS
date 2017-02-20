<template>
  <div id="footerTemp" style="color:#42b983">
    <footer>write by {{author|uppercase}} 2017-2 CopyRight@xqzh </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author:"john"
    }
  }
}
</script>

<style>
#footerTemp {
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
