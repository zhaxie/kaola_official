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
          <!-- 组件：通用按钮 -->
          <comBtn class="mt-30" @click="$router.push({ name: 'caseList' })"
            >查看更多></comBtn
          >
        </div>
        <div class="col-6 ml-auto right-box">
          <div class="d-flex align-items-center">
            <div class="ver-text small-text opactiy-0">垂直文本</div>
            <div class="ver-text middle-text opactiy-1">垂直文本</div>
            <div class="ver-text big-text opactiy-2">垂直文本</div>
            <div class="ver-text ">垂直文本</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="container">
        <!-- 模块：业务范围 -->
        <div
          class="d-flex align-items-center justify-content-center what-we-do-modules"
        >
          <div
            class="col-3 do-item"
            v-for="(item, index) in businessList"
            :key="index"
          >
            <div class="position-relative pb-100 do-inner-box">
              <div class="position-absolute w-100 h-100">
                <div
                  class="d-flex flex-column align-items-center justify-content-center h-100"
                >
                  <div class="mb-15 iconfont" :class="item.iconfont"></div>
                  <div class="icon-text">{{ item.title }}</div>
                </div>
              </div>
              <div class="position-absolute w-100 h-100 active-box">
                <div class="my-10 title">{{ item.title }}</div>
                <div class="sub-title">{{ item.hoverText }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 模块：关于澳新考拉 -->
        <div class="mb-40 aboutUs-modules">
          <div class="big-title">关于澳新考拉</div>
          <div class="overflow-hidden about-container">
            <div class="d-flex flex-wrap justify-content-center about-list">
              <div
                class="col-6 about-item"
                v-for="(item, index) in aboutUsList"
                :key="index"
              >
                <!-- 左边 -->
                <div
                  class="d-flex align-items-start justify-content-end loaction-left"
                  v-if="index % 2 === 0"
                >
                  <div class="position-relative text-box">
                    <div class="mb-20 title">{{ item.title }}</div>
                    <div class="text">{{ item.subTitle }}</div>
                  </div>
                  <div class="icon-box">
                    <div class="position-relative pb-100">
                      <div class="position-absolute imgCover d-flex">
                        <div
                          class="ma-auto iconfont"
                          :class="item.iconfont"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 右边 -->
                <div class="d-flex align-items-start loaction-right" v-else>
                  <div class="icon-box">
                    <div class="position-relative pb-100">
                      <div class="position-absolute imgCover d-flex">
                        <div
                          class="ma-auto iconfont"
                          :class="item.iconfont"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="position-relative text-box">
                    <div class="mb-20 title">{{ item.title }}</div>
                    <div class="text">{{ item.subTitle }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 模块：案例 -->
        <div class="case-modules">
          <div class="d-flex align-items-center">
            <div class="big-title">案例</div>
            <div class="col">
              <div
                class="d-flex align-items-center justify-content-end category-list"
              >
                <div
                  class="px-30 category-item cursor-pointer"
                  v-for="(item, index) in navList"
                  :key="index"
                  :class="{ active: index === currentSelectedNavIndex }"
                  @click="handleSwitchCaseList(item.id, index)"
                >
                  {{ item.name }}
                </div>
              </div>
            </div>
          </div>

          <!-- 组件：案例列表 -->
          <caseItemList
            style="margin-top: 4.5rem"
            :dataList="dataListObj.data"
            :parentRouterInfo="{
              title: '首页',
              routerName: 'home',
            }"
          ></caseItemList>

          <!-- 组件：通用按钮 -->
          <div
            class="d-flex justify-content-center"
            v-if="dataListObj.last_page > 1"
          >
            <comBtn
              class="pb-20 mb-50"
              color="#3f8ef7"
              textColor="#fff"
              @click="
                $router.push({
                  name: 'caseList',
                  query: { categoryIndex: currentSelectedNavIndex },
                })
              "
              >查看更多></comBtn
            >
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
      businessList: [
        {
          iconfont: "icon-internet",
          title: "网站建设",
          hoverText:
            "针对品牌提供定制化网站建设解决方案，全面展示企业及产品全貌，助力企业迅速占领各平台。",
        },
        {
          iconfont: "icon-setting",
          title: "系统开发",
          hoverText:
            "为企业、电商打造B2B2C多用户商城系统，微商管理系统，全方位解决企业引流、推广难题。",
        },
        {
          iconfont: "icon-small-app",
          title: "小程序开发",
          hoverText:
            "专注于商城、点餐、O2O、预约、名片通讯录、平台小程序定制开发，助力企业搭建小程序新渠道。",
        },
        {
          iconfont: "icon-develop",
          title: "软件开发",
          hoverText:
            "开发出符合企业需求的产品，完善定制应用软件界面、交互体验等解决方案，助力企业信息化升级转型。",
        },
      ],
      aboutUsList: [
        {
          iconfont: "icon-quKuaiLian",
          title: "个性化服务",
          subTitle:
            "我们专注于与客户进行有效的沟通，基于客户需求，量身定制更适合企业信息化管理的产品。",
        },
        {
          iconfont: "icon-design",
          title: "创新设计思维",
          subTitle:
            "从客户角度出发，探索发现客户隐藏需求，快速反应，打造客户未知的渴望的产品。",
        },
        {
          iconfont: "icon-code",
          title: "强大技术实力",
          subTitle:
            "掌握各种主流程序语言开发技术，支撑和全方位维护渠道让客户安枕无忧。",
        },
        {
          iconfont: "icon-computed-online",
          title: "超大云服务器",
          subTitle:
            "灵活高效、适用各类应用场景的弹性可扩容云服务器，为客户提供一个安全稳定、高效高性能的一站式互联网基础服务平台。",
        },
      ],
      navList: [], //案例分类
      currentSelectedNavIndex: 0,
      dataListObj: {
        current_page: 1,
        last_page: 1,
      },
      bannerList: [{
        name: '案例1',
      },{
        name: '案例2',
      },{
        name: '案例3',
      },{
        name: '案例4',
      },{
        name: '案例5',
      },
      ]
    };
  },
  mounted() {
    this.getAndSetCaseListByID("all"); //获取全部案例
    this.getAndSetNavList(); //设置导航
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
          paginate: 6, //paginate	否	int	当前显示条数，默认20
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
  },
};
</script>

<style lang="scss" scoped>
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
  }

  .right-box {
    .ver-text {
      -webkit-writing-mode: vertical-rl;
      writing-mode: vertical-rl;
      color: #fff;

      &.small-text{
        font-size: 1rem;
      }

      &.middle-text{
        font-size: 1.2rem;
      }

      &.big-text{
        font-size: 1.8rem;
      }
    }
  }
}

//模块：业务范围
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

      .iconfont {
        width: 3rem;
        height: 3rem;
        border-radius: 0.63rem;
        background-color: #5688fe;
        font-size: 1.8rem;
        color: #fff;
      }

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

        transition: all 0.8s;
        opacity: 0;

        .title {
          font-size: 1.13rem;
        }

        .sub-title {
          font-size: 0.88rem;
        }
      }
    }

    &:hover .active-box {
      opacity: 1;
    }
  }
}

//模块：关于考拉
.aboutUs-modules {
  .about-container {
    margin: 0 5%;
  }
  .about-list {
    margin-top: -1px;

    .about-item {
      .text-box {
        width: 40%;
        padding: 2.8rem 0;

        &::before {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          content: "";
          display: block;
          height: 1px;
          background-color: #cccccc;
        }

        .title {
          font-size: 1.13rem;
          color: #112961;
        }

        .text {
          line-height: 1.8;
          font-size: 0.88rem;
          color: #6f7b8b;
        }
      }

      .icon-box {
        width: 20%;
        margin: 3rem;
        background-color: #ffffff;
        box-shadow: 0.09rem 1.25rem 3.13rem 0rem rgba(63, 142, 247, 0.2);
        border-radius: 50%;
        transition: all 0.8s;

        .iconfont {
          font-size: 3rem;
          color: #3f8ef7;
          transition: all 0.8s;
        }
      }

      .loaction-left {
        text-align: right;

        .text-box::before {
          left: -20%;
        }
      }

      .loaction-right {
        .text-box::before {
          right: -20%;
        }
      }

      &:hover {
        .icon-box {
          background-color: #3f8ef7;

          .iconfont {
            color: #fff;
          }
        }
      }
    }
  }
}

//模块：案例
.case-modules {
  .category-list {
    .category-item {
      font-size: 1rem;
      color: #6f7b8b;

      &.active {
        color: #2c73e5;
      }
    }
  }
}

.big-title {
  font-size: 1.37rem;
  color: #677188;
}
</style>