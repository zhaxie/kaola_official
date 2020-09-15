<template>
  <div class="d-flex flex-wrap content-list">
    <div class="col-4" v-for="(item, index) in 5" :key="index">
      <div class="content-item">
        <div class="position-relative img-box">
          <imgWithLoading
            class="position-absolute imgCover"
            :src="require('@/assets/img/test-1.png')"
          ></imgWithLoading>
        </div>
        <div class="px-30">
          <div class="mt-20 mb-10 text-over-two title">华侨大数据</div>
          <div class="mb-20 category">使用产品：企业官网</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content-list {
  margin-right: -3.38rem;

  .content-item {
    margin-right: 3.38rem;
    margin-bottom: 3.38rem;
    border-radius: 0.94rem;
    border: solid 1px #dee0e4;
    overflow: hidden;

    .img-box {
      padding-bottom: 68%;
    }

    .title {
      font-size: 1rem;
      color: #333333;
    }

    .category {
      font-size: 0.88rem;
      color: #000000;
      opacity: 0.6;
    }
  }
}
</style>