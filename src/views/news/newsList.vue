<template>
  <page>
    <!-- 共用：导航头 -->
    <headerNav>
        <div slot="pageTitle">企业新闻</div>
    </headerNav>

    <!-- 主内容区域 -->
    <div class="col d-flex flex-column">
      <div class="container d-flex news-content">
        <!-- 盒子：左边 -->
        <div class="col-8 left-box news-list">
          <div class>
            <div class="d-flex align-items-center news-item" v-for="(item, index) in 5" :key="index">
              <div class="col-2">
                <div class="position-relative pb-100">
                  <imgWithLoading
                    class="position-absolute imgCover"
                    :src="require('@/assets/img/test-1.png')"
                  />
                </div>
              </div>
              <div class="col txt-content">
                <div class="text-over-two title">为您省却火图片素材搜索时间,这里有海量火素材图片供您</div>
                <div class="d-flex align-items-center mt-10">
                  <div class="mr-10 pr-10 category">公司新闻</div>
                  <div class="date">2020-07-01</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 盒子：右边 -->
        <div class="col-4">
            <!-- 组件：热门新闻 -->
          <hotNewsList class="right-box"></hotNewsList>
        </div>
      </div>
    </div>

    <!-- 组件：分页器 -->
    <listPagination class="pagination-modules"></listPagination>

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

<style lang="scss" scoped>
.news-content {
  margin: 2.5rem auto 0 !important;
  flex-basis: 0;
  flex-grow: 1;
}

// 盒子：左边
.left-box.news-list {
  .news-item {
    margin-bottom: 2.5rem;
    background-color: #ffffff;
    box-shadow: 0.09rem 1.25rem 3.13rem 0rem rgba(48, 121, 236, 0.2);
    border-radius: 0.56rem;
    overflow: hidden;

    .txt-content {
      margin-left: 0.88rem;
    }

    .title {
      font-size: 1.13rem;
      color: #112961;
    }

    .category,
    .date {
      font-size: 0.88rem;
      color: #a1a5ac;
      line-height: 1;
    }

    .category {
      border-right: 1px solid #dee0e4;
    }
  }
}

// 盒子：右边
.right-box {
  margin-left: 3.5rem;
  border: 1px solid #dee0e4;
}

//分页器
.pagination-modules{
    padding-bottom: 5.5rem;
}
</style>