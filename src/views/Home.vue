<template>
  <page>
    <!-- 共用：导航头 -->
    <headerNav></headerNav>
    <!-- 顶部 -->
    <div class="top-modules">
      <div class="container py-30 d-flex align-items-center">
        <div class="left-box">
          <div class="big-title">
            <div>高端定制网站建设</div>
            <div class="d-flex align-items-start">
              <span class="number">1000</span>
              <span class="px-10 plus-icon">+</span>
              <span class="align-self-center">成功案例</span>
            </div>
          </div>
          <div class="d-inline-block mt-30 look-more-btn">查看更多></div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="container">
        <div class="d-flex align-items-center justify-content-center what-we-do-modules">
          <div class="col-3 do-item" v-for="(item, index) in 4" :key="index">
            <div class="position-relative pb-100 do-inner-box">
              <div class="position-absolute w-100 h-100">
                <div class="d-flex flex-column align-items-center justify-content-center h-100">
                  <div class="iconfont"></div>
                  <div class="icon-text">系统开发</div>
                </div>
              </div>
              <div class="position-absolute w-100 h-100 active-box">
                <div class="my-10 title">网站建设</div>
                <div class="sub-title">针对品牌提供定制化网站建设解决方案，全面展示企业及产品全貌，助力企业迅速占领各平台。</div>
              </div>
            </div>
          </div>
        </div>
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
};
</script>

<style lang="scss">
// 顶部
.top-modules {
  background-color: #3079ec;
  box-shadow: 0.04rem 0.56rem 0.56rem 0rem rgba(48, 121, 236, 0.15);
  border-radius: 0rem 0rem 6.25rem 6.25rem;

  .left-box {
    .big-title {
      font-weight: normal;
      font-size: 1.63rem;
      color: #e5efff;

      .number {
        font-size: 2.19rem;
        color: #ffffff;
      }

      .plus-icon {
        font-size: 1.59rem;
        color: #ffffff;
      }
    }

    .look-more-btn {
      padding-left: 1.7rem;
      padding-right: 1.7rem;
      line-height: 2.25rem;
      background-color: #ffe03f;
      border-radius: 1.13rem;

      font-size: 0.88rem;
      color: #112961;
    }
  }
}

.what-we-do-modules {
  margin-top: 5rem;
  margin-bottom: 5rem;
  margin-right: -2rem;

  .do-item {
    padding-right: 2rem;

    .do-inner-box {
      background-color: #f8fbff;
      box-shadow: 0.09rem 1.25rem 3.13rem 0rem rgba(63, 142, 247, 0.2);
      border-radius: 0.63rem;

      .icon-text {
        font-size: 1.13rem;
        color: #112961;
      }

      .active-box {
        padding: 1.9rem;
        background-color: #3f8ef7;
        box-shadow: 0.04rem 0.62rem 0.81rem 0rem rgba(63, 142, 247, 0.19);
        border-radius: 0.63rem;
        color: #fff;

        .title {
          font-size: 1.13rem;
        }

        .sub-title {
          font-size: 0.88rem;
        }
      }
    }
  }
}
</style>