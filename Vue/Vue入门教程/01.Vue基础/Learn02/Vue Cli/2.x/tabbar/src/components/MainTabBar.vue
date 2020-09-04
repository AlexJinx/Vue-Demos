<template>
  <div>
    <tabbar>
      <!-- 传入点击活跃颜色 -->
      <tabbaritem path="/home" activeColor="deeppink">
        <img slot="item-icon" src="~assets/img/tabbar/Home.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/Home_Active.svg" alt />
        <div slot="item-name">首页</div>
      </tabbaritem>
      <tabbaritem path="/category">
        <img slot="item-icon" src="../assets/img/tabbar/Category.svg" alt />
        <img slot="item-icon-active" src="../assets/img/tabbar/Category_Active.svg" alt />
        <div slot="item-name">分类</div>
      </tabbaritem>
      <tabbaritem path="/car">
        <img slot="item-icon" src="../assets/img/tabbar/Car.svg" alt />
        <img slot="item-icon-active" src="../assets/img/tabbar/Car_Active.svg" alt />
        <div slot="item-name">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile">
        <img slot="item-icon" src="../assets/img/tabbar/Profile.svg" alt />
        <img slot="item-icon-active" src="../assets/img/tabbar/Profile_Active.svg" alt />
        <div slot="item-name">我的</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "components/tabbar/TabBar";
import tabbaritem from "components/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    tabbar,
    tabbaritem,
  },
};
</script>

<style scoped>
</style>