<template>
  <div id="app">
    <h1>我是App组件</h1>
    <router-link to="/Home">首页</router-link>
    <router-link to="/About">关于</router-link>
    <router-link :to="{ path:'/Profile' ,query:{name:'wnm',age:22} }">档案</router-link>
    <button @click="proFileClick">档案</button>

    <keep-alive v-if="this.$route.meta.keepAlive" exclude="Profile,About">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    proFileClick() {
      this.$router.push({
        path: "/Profile",
        query: {
          name: "wnm",
          age: 22,
        },
      });
    },
  },
  created() {
    // console.log("app-Start");
    // console.log(this.$route);
    console.log(this.$route.meta.keepAlive);
    // console.log("app-End");
  },
};
</script>

<style>
</style>
