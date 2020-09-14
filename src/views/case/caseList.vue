<template>
  <page class="page">
    <!-- 共用：导航头 -->
    <headerNav @firstNavHeight="secondNavTop = $event">
      <div slot="pageTitle">业务案例</div>
    </headerNav>

    <!-- 二级导航 -->
    <div
      class="position-sticky z100 animated slideInleft second-nav-modules"
      :style="{top: secondNavTop + 'px'}"
    >
      <div class="container d-flex align-items-center">
        <div class="nav-item active">全部</div>
        <div class="nav-item">全部</div>
        <div class="nav-item">全部</div>
      </div>
    </div>

    <!-- 主内容区域 -->
    <div class="col" style="background-color:#fff">
      <div class="container">

        <!-- 内容列表 -->
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

        <!-- 组件：分页器 -->
        <listPagination class="pagination-modules" align="justify-content-end"></listPagination>
      </div>
    </div>

    <!-- 共用：底部 -->
    <footerNav></footerNav>
  </page>
</template>

<script>
import hotNewsList from "@/components/hotNewsList.vue";
import listPagination from "@/components/common/listPagination.vue";

export default {
  components: {
    hotNewsList,
    listPagination,
  },
  data() {
    return {
      secondNavTop: 0,
    };
  },
  mounted() {},
};
</script>

<style lang="scss">
.page {
  background-color: #3079ec;
}

// 二级导航
.second-nav-modules {
  left: 0;
  top: 5rem;
  background-color: #3079ec;

  .nav-item {
    padding: 1.5rem 2.6rem;
    font-size: 1rem;
    color: #ffffff;

    &.active {
      position: relative;

      &::after {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        content: "";
        display: block;
        width: 0;
        height: 0;
        background-color: transparent;
        border: 0.5rem solid transparent;
        border-bottom: 0.5rem solid #fff;
      }
    }
  }
}

// 内容列表
.content-list {
  margin-top: 4rem;
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

.pagination-modules{
    padding-bottom: 3.8rem;
}
</style>