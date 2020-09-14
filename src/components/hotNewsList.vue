<template>
  <div class="hot-news-list">
    <div class="box-title">热门新闻</div>
    <div class="other-new-list">
      <div class="cursor-pointer news-item">
        <div class="text-over-two title">为您省却火图片素材搜索时间,这里有海量火素材图片供您下载使用,</div>
        <div class="mt-10 date">2020-07-01</div>
      </div>
      <div class="cursor-pointer news-item">
        <div class="text-over-two title">为您省却火图片素材搜索时间,这里有海量火素材图片供您下载使用,</div>
        <div class="mt-10 date">2020-07-01</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hot-news-list {
  padding-left: 1.55rem;
  padding-right: 1.4rem;
  border-radius: 0.56rem;
  background-color: #ffffff;

  .box-title {
    padding-top: 1.5rem;
    font-size: 1rem;
    color: #677188;

    &::after {
      margin-top: 1.4rem;
      content: "";
      display: block;
      width: 1.75rem;
      height: 0.2rem;
      background-color: #3079ec;
    }
  }

  // 其他新闻
  .other-new-list {
    .news-item {
      padding: 1.4rem 0;
      border-top: 1px solid #dee0e4;

      .title {
        font-size: 0.88rem;
        color: #112961;
      }

      .date {
        font-size: 0.88rem;
        color: #a1a5ac;
      }
    }

    & .news-item:first-child {
      border-top: none;
    }
  }
}
</style>