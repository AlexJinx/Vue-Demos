<template>
  <div>
    <h1>我是主页</h1>
    <h1>呵呵呵呵</h1>
    <router-link to="/Home/News">新闻</router-link>
    <router-link to="/Home/Msg">消息</router-link>
    <input type="text" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "/Home/News",
    };
  },
  created() {
    // console.log(this.$route.meta.keepAlive);
  },
  // activated() {
  //   this.$router.push(this.path);
  // },
  // beforeRouteLeave(to, from, next) {
  //   this.path = this.$router.path;
  //   next();
  // },
};
</script>

<style>
</style>