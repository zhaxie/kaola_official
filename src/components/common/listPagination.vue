<template>
  <div class="pagination-modules">
    <div class="d-flex text-center" :class="{[align]: align}">
      <div class="last-or-next cursor-pointer btn"><</div>
      <div class="cursor-pointer px-10 btn active">111</div>
      <div class="last-or-next cursor-pointer btn">></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      default: 'justify-content-center'
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination-modules {
  line-height: 2rem;
  color: #333333;
  font-size: 0.87rem;

  .last-or-next {
    width: 1.75rem;
    background-color: #f7f7f7;
  }

  .btn {
    margin: 0 0.6rem;
    min-width: 1.8rem;

    &.active {
      background-color: #2c73e4;
      color: #fff;
    }
  }
}
</style>