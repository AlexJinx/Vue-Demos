<template>
  <div class="tab-bar-item">
    <div @click="itemClick">
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
    </div>

    <div :style="activeStyle">
      <slot name="item-name"></slot>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "TabBarItem",
  data() {
    return {
      //   isActive: false,
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    //自定义活跃颜色
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  methods: {
    itemClick() {
      console.log(this.activeColor);
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

/* .active {
  color: red;
} */
</style>