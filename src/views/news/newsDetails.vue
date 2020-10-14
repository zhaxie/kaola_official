<template>
  <page>
    <!-- 共用：导航头 -->
    <headerNav></headerNav>

    <!-- 面包屑导航 -->
    <breadNav class="container"></breadNav>

    <!-- 主内容区域 -->
    <div class="col d-flex flex-column">
      <div class="container d-flex news-content">
        <!-- 盒子：左边 -->
        <div class="col-8 left-box">
          <div class="d-flex h-100">
            <div class="col px-40">
              <div class="title">{{ newsDetailsObj.name }}</div>
              <div class="d-flex sub-title">
                <div class="col-6">
                  发布时间：{{
                    $com.formatDate(
                      new Date(newsDetailsObj.create_time * 1000),
                      "yyyy-MM-dd hh:mm"
                    )
                  }}
                </div>
                <div class="col-6">来源：{{ newsDetailsObj.source }}</div>
              </div>
              <div class="content" v-html="newsDetailsObj.details"></div>
            </div>
          </div>
        </div>

        <!-- 盒子：右边 -->
        <div class="col-4">
          <!-- 组件：热门新闻 -->
          <hotNewsList
            class="right-box"
            :scanNewsByPushPage="false"
          ></hotNewsList>
        </div>
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
  data() {
    return {
      newsDetailsObj: {},
    };
  },
  mounted() {
    this.getAndSetNewsDetails();
  },
  watch: {
    "$route.query"(newValue) {
      this.getAndSetNewsDetails();
    },
  },
  methods: {
    async getAndSetNewsDetails() {
      try {
        const { id } = this.$route.query;

        if (!id) {
          throw "id有误";
        }

        const { res } = await this.$ajax({
          apiKey: "newsListDetails",
          data: {
            id, //id	是	int	新闻id
          },
        });

        this.newsDetailsObj = res;
      } catch (error) {
        this.$catchError(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.news-content {
  margin: 0 auto 3rem !important;
  flex-basis: 0;
  flex-grow: 1;

  &.col {
    width: inherit;
  }
}

// 盒子：左边
.left-box {
  background-color: #ffffff;
  box-shadow: 0.09rem 1.25rem 3.13rem 0rem rgba(48, 121, 236, 0.2);
  border-radius: 0.56rem;
  overflow: hidden;

  .title {
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: #000000;
  }

  .sub-title {
    margin-top: 0.88rem;
    margin-bottom: 0.88rem;
    font-size: 0.88rem;
    color: #999999;
  }
}

// 盒子：右边
.right-box {
  margin-left: 3.5rem;
  border: 1px solid #dee0e4;
}
</style>