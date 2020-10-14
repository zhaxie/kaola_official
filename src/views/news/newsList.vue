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
            <div
              class="d-flex align-items-center news-item"
              v-for="(item, index) in dataListObj.data"
              :key="index"
              @click="$router.push({name: 'newsDetails', query: {id: item.id}})"
            >
              <div class="col-2">
                <div class="position-relative pb-100">
                  <imgWithLoading
                    class="position-absolute imgCover"
                    :withHostUrl="true"
                    :src="item.cover"
                  />
                </div>
              </div>
              <div class="col txt-content">
                <div class="text-over-two title">{{ item.name }}</div>
                <div class="d-flex align-items-center mt-10">
                  <div class="mr-10 pr-10 category">{{item.classify_name}}</div>
                  <div class="date">{{ format(item.create_time * 1000) }}</div>
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
    <listPagination
      class="pagination-modules"
      @sizeChange="handlePageSizeChange"
      :currentPage="Number(dataListObj.current_page)"
      :lastPage="Number(dataListObj.last_page)"
    ></listPagination>

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
      navList: [], //案例分类
      currentSelectedNavIndex: 0,
      dataListObj: {
        data: [],
        current_page: 1,
        last_page: 1,
      },
    };
  },
  mounted() {
    this.getAndSetNewsListByID("all"); //获取全部新闻

    console.info("timer", 1602464801);
  },
  methods: {
    //获取新闻
    async getAndSetNewsListByID(newsCategoryID) {
      try {
        if (
          newsCategoryID === this.lastGetNewsListID &&
          newsCategoryID !== "all"
        ) {
          return false;
        }

        let toSubmitOptions = {
          page: this.dataListObj.current_page, //当前页码
          paginate: 10, //paginate	否	int	当前显示条数，默认20
          classify_id: newsCategoryID, //classify_id	否	int	案例分类ID, 不传返回全部
        };

        this.lastGetNewsListID = newsCategoryID; //存储当前请求的分类id;

        if (newsCategoryID === "all") {
          delete toSubmitOptions.classify_id;
        }

        const { res } = await this.$ajax({
          apiKey: "newsList",
          data: toSubmitOptions,
        });

        if (newsCategoryID !== this.lastGetNewsListID) {
          console.info("请求回来时，分类已切换", "");
          return false;
        }

        this.dataListObj = res;

        console.info("res", res);
      } catch (error) {
        this.lastGetNewsListID = null;
        this.$catchError(error);
      }
    },

    //切换页码
    handlePageSizeChange(currentPage) {
      this.dataListObj.current_page = currentPage;

      this.getAndSetNewsListByID(this.lastGetNewsListID);
    },

    //时间戳转化为日期格式
    format(shijianchuo) {
      //shijianchuo是整数，否则要parseInt转换
      var time = new Date(shijianchuo);

      console.info("time", time);

      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();

      function add0(m) {
        return m < 10 ? "0" + m : m;
      }

      return (
        y +
        "-" +
        add0(m) +
        "-" +
        add0(d) +
        " " +
        add0(h) +
        ":" +
        add0(mm) +
        ":" +
        add0(s)
      );
    },
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
.pagination-modules {
  padding-bottom: 5.5rem;
}
</style>