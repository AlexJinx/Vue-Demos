<template>
  <div id="app">
    <h1>{{$store.state.counter}}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="addCount(5)">+5</button>
    <h2>{{$store.state.userInfo}}</h2>

    <h3>--------------Getters---------------</h3>
    <h2>{{$store.getters.multCounter}}</h2>
    <h2>{{$store.getters.moreAgeList(40)}}</h2>

    <h3>--------------Mutation---------------</h3>
    <button @click="updateUserInfo">Mutation异步修改State</button>

    <h3>--------------Actions---------------</h3>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "你好啊",
    };
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      this.$store.commit("incrementCount", count);
    },
    updateUserInfo() {
      this.$store.commit("updateUserInfo");
    },
  },
};
</script>

<style>
</style>
 