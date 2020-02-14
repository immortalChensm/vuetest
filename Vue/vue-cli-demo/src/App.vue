<template>
  <div id="app">
    {{msg}}
    <div>
      <router-link to="/home">home</router-link>
      <router-link to="/news">news</router-link>
    </div>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <button @click="send">ajax</button>
    <myButton @click.native="send"></myButton>
  </div>
</template>

<script>
  import axios from 'axios'
  import myButton from './components/Button.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to guiyang'
    }
  },
  mounted(){
    console.log(this.$route);
  },
  watch:{
    $route:function (newV,oldV) {
      console.log("路由变化"+newV.path);
    }
  },
  methods:{
    send(){
      axios.get("https://api.github.com/users/JackChensm")
        .then(res=>{
          console.log(res);
        })
    }
  },
  components:{
    myButton
  }
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
</style>
