<template>
  <div class="d-flex align-items-center bread-nav-modules">
    <div
      class="d-flex align-items-center"
      v-for="(item, index) in breadNavList"
      :key="index"
    >
      <div class="mx-10" v-if="index !== 0">|</div>
      <div
        :class="{ 'cursor-pointer': index !== breadNavList.length - 1 }"
        @click="handleRouterThisBread(item)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    breadNavList: {
      type: Array,
    },
  },
  methods: {
    handleRouterThisBread(thisBreadObj) {
      const { routerName } = thisBreadObj;

      if (routerName) {
        this.$router.replace({ name: routerName });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bread-nav-modules {
  font-size: 0.88rem;
  color: #606060;

  line-height: 2;
  min-height: 3rem;
}
</style>

