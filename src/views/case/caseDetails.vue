<template>
  <page>
    <!-- 共用：导航头 -->
    <headerNav></headerNav>

    <!-- 面包屑导航 -->
    <breadNav class="container"></breadNav>

    <!-- 主内容区域 -->
    <div class="col">
      <!-- 模块：顶部的简介 -->
      <div class="container top-introduce-modules">
        <div class="d-flex">
          <div class="col-7 left-box">
            <div class="d-flex align-items-baseline">
              <div class="my-15 title">广东澳新考拉信息技术有限公司</div>
              <a class="ml-10 sub-title" href="www.ozkoalas.com">(www.ozkoalas.com)</a>
            </div>
            <div
              class="text"
            >澳新考拉于2015年成立,为国家高新技术企业,拥有实力雄厚的产品研发团队。作为互联网创新模式与技术服务解决方案提供商,致力于为企业提供一站式互联网开发服务,包括网</div>
          </div>
          <div class="col right-box">
            <div class="title">主要服务</div>
            <div class="d-flex flex-wrap align-items-center server-list">
              <div class="px-20 server-item">网站设计</div>
              <div class="px-20 server-item">网站设计</div>
              <div class="px-20 server-item">网站设计</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 模块：色彩搭配 -->
      <div class="container color-modules">
        <div class="position-relative mx-auto title-box">色彩搭配</div>
        <div class="d-flex align-items-center justify-content-center color-list">
          <div class="col-1 mx-20">
            <div class="color-item"></div>
          </div>
          <div class="col-1 mx-20">
            <div class="color-item"></div>
          </div>
          <div class="col-1 mx-20">
            <div class="color-item"></div>
          </div>
        </div>
      </div>

      <!-- 模块：详细介绍 -->
      <div class="container details-info-modules">
        <img :src="require('@/assets/img/test-2.jpg')" />
        <img :src="require('@/assets/img/test-1.png')" />
      </div>
    </div>

    <!-- 共用：底部 -->
    <footerNav></footerNav>
  </page>
</template>

<script>
import hotNewsList from "@/components/hotNewsList.vue";

export default {
  components: {
    hotNewsList,
  },
};
</script>

<style lang="scss" scoped>
// 模块：顶部的简介
.top-introduce-modules {
  background-color: #3079ec;
  padding: 1.75rem 0;

  .left-box {
    padding-left: 2.5rem;
    padding-right: 1.5rem;
    border-right: 1px dashed #fff;

    .title {
      font-size: 1.38rem;
      color: #ffffff;
    }

    .sub-title {
      text-decoration: none;
      font-size: 1rem;
      color: #ffffff;
    }

    .text {
      font-size: 1rem;
      color: #ffffff;
    }
  }

  .right-box {
    padding-left: 1.88rem;
    padding-right: 1.88rem;

    .title {
      margin-bottom: 1.38rem;
      font-size: 1.38rem;
      color: #ffffff;
    }

    .server-list {
      max-width: 70%;

      .server-item {
        margin-right: 0.88rem;
        margin-bottom: 0.88rem;

        line-height: 1.56rem;
        background-color: #fff;
        border-radius: 1.56rem;
        font-size: 0.88rem;
        color: #3079ec;
      }
    }
  }
}

// 模块：色彩搭配
.color-modules {
  margin-top: 4rem;
  margin-bottom: 4rem;

  .title-box {
    padding-bottom: 0.8rem;
    width: 50%;
    border-bottom: 1px solid #d5e5ff;
    text-align: center;
    font-size: 1.38rem;
    color: #112961;

    &::after {
      position: absolute;
      left: 0;
      right: 0;
      bottom: -2px;
      margin: auto;
      content: "";
      display: block;
      width: 12%;
      height: 4px;
      border-radius: 2rem;
      background-color: #3079ec;
    }
  }

  .color-list {
    margin-top: 3.4rem;

    .color-item {
      padding-bottom: 100%;
      background-color: #3079ec;
    }
  }
}

//模块：详细介绍
.details-info-modules {
  padding-bottom: 5rem;

  img {
    display: block;
    width: 100%;
  }
}
</style>