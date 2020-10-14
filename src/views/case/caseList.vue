<template>
  <page class="page">
    <!-- 共用：导航头 -->
    <headerNav @firstNavHeight="secondNavTop = $event">
      <div slot="pageTitle">业务案例</div>
    </headerNav>

    <!-- 二级导航 -->
    <div
      class="position-sticky z100 animated slideInleft second-nav-modules"
      :style="{ top: secondNavTop + 'px' }"
    >
      <div class="container d-flex align-items-center">
        <div
          class="cursor-pointer nav-item"
          v-for="(item, index) in navList"
          :key="index"
          :class="{ active: index === currentSelectedNavIndex }"
          @click="handleSwitchCaseList(item.id, index)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>

    <!-- 主内容区域 -->
    <div class="col" style="background-color: #fff">
      <div class="container">
        <!-- 组件：案例列表 -->
        <caseItemList
          style="margin-top: 4rem"
          :dataList="dataListObj.data"
          :parentRouterInfo="{
            title: '案例列表',
            routerName: 'caseList',
          }"
        ></caseItemList>

        <!-- 组件：分页器 -->
        <listPagination
          class="pagination-modules"
          align="justify-content-end"
          @sizeChange="handlePageSizeChange"
          :currentPage="Number(dataListObj.current_page)"
          :lastPage="Number(dataListObj.last_page)"
        ></listPagination>
      </div>
    </div>

    <!-- 共用：底部 -->
    <footerNav></footerNav>
  </page>
</template>

<script>
import hotNewsList from "@/components/hotNewsList.vue";
import caseItemList from "@/components/caseItemList.vue";
import listPagination from "@/components/common/listPagination.vue";

export default {
  components: {
    hotNewsList,
    caseItemList,
    listPagination,
  },
  data() {
    return {
      secondNavTop: 0,
      navList: [], //案例分类
      currentSelectedNavIndex: 0,
      dataListObj: {
        current_page: 1,
        last_page: 1,
      },
    };
  },
  mounted() {
    const {categoryIndex} = this.$route.query;

    categoryIndex && (this.currentSelectedNavIndex = categoryIndex);

    this.getAndSetNavList(); //设置导航
    this.getAndSetCaseListByID("all"); //获取全部案例
  },
  methods: {
    //分类导航
    async getAndSetNavList() {
      try {
        const { res } = await this.$ajax({
          apiKey: "caseNavList",
          data: {
            paginate: 20,
          },
        });

        res.data.unshift({
          name: "全部",
          id: "all",
        });

        this.navList = res.data;
      } catch (error) {
        this.$catchError(error);
      }
    },

    //分类列表
    async getAndSetCaseListByID(caseCategoryID) {
      try {
        if (
          caseCategoryID === this.lastGetCaseListID &&
          caseCategoryID !== "all"
        ) {
          return false;
        }

        let toSubmitOptions = {
          page: this.dataListObj.current_page, //当前页码
          paginate: 20, //paginate	否	int	当前显示条数，默认20
          classify_id: caseCategoryID, //classify_id	否	int	案例分类ID, 不传返回全部
        };

        this.lastGetCaseListID = caseCategoryID; //存储当前请求的分类id;

        if (caseCategoryID === "all") {
          delete toSubmitOptions.classify_id;
        }

        const { res } = await this.$ajax({
          apiKey: "caseList",
          data: toSubmitOptions,
        });

        if (caseCategoryID !== this.lastGetCaseListID) {
          console.info("请求回来时，分类已切换", "");
          return false;
        }

        this.dataListObj = res;

        console.info("res", res);
      } catch (error) {
        this.lastGetCaseListID = null;
        this.$catchError(error);
      }
    },

    //切换分类列表
    handleSwitchCaseList(caseCategoryID, thisNavIndex) {
      this.currentSelectedNavIndex = thisNavIndex;

      this.getAndSetCaseListByID(caseCategoryID);
    },

    //切换页码
    handlePageSizeChange(currentPage) {
      this.dataListObj.current_page = currentPage;

      this.getAndSetCaseListByID(this.lastGetCaseListID);
    },
  },
};
</script>

<style lang="scss" scoped>
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

.pagination-modules {
  padding-bottom: 3.8rem;
}
</style>