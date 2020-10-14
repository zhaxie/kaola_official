<template>
  <div>
    <div
      class="d-inline-block cursor-pointer look-more-btn"
      :style="{ backgroundColor: color, color: textColor }"
      @click="$emit('click')"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#ffe03f",
    },
    textColor: {
      type: String,
      default: "#112961",
    },
  },
};
</script>

<style lang="scss" scoped>
.look-more-btn {
  padding-left: 1.7rem;
  padding-right: 1.7rem;
  line-height: 2.25rem;
  background-color: #ffe03f;
  border-radius: 1.13rem;

  font-size: 0.88rem;
  color: #112961;

  transition: all 0.6s;
  transform: scale(1);

  &:hover {
    transform: scale(1.1);
  }
}
</style>