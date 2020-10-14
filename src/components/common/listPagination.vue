<template>
  <div class="pagination-modules">
    <div class="d-flex text-center" :class="{ [align]: align }">
      <div
        class="last-or-next cursor-pointer btn"
        @click="handleChangeCurrentSize(1, currentPage - 1)"
      >
        <
      </div>
      <div
        class="cursor-pointer px-10 btn"
        v-for="(item, index) in lastPage"
        :key="index"
        :class="{ active: item === currentPage }"
        @click="$emit('sizeChange', item)"
      >
        {{ item }}
      </div>
      <div
        class="last-or-next cursor-pointer btn"
        @click="handleChangeCurrentSize(2, currentPage + 1)"
      >
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      default: "justify-content-center",
    },
    currentPage: {
      type: Number,
    },
    lastPage: {
      type: Number,
    },
  },
  methods: {
    handleChangeCurrentSize(btnType, currentPage) {
      try {
        console.info('currentPage', currentPage);

        switch (
          btnType //1：上一页 2：下一页
        ) {
          case 1:
            if (currentPage === 0) {
              throw '这是第一页';
            }
            break;
          case 2:
            if (currentPage === this.lastPage + 1) {
              throw '这是最后一页';
            }
            break;
        }

        this.$emit("sizeChange", currentPage);
      } catch (error) {
        console.error('error', error);
      }
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