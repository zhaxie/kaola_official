<template>
  <page>
    <!-- 共用：导航头 -->
    <headerNav>
      <div slot="pageTitle">关于澳新考拉</div>
    </headerNav>

    <!-- 主内容区域 -->
    <div class="col">
      <!-- 模块：简介--1 -->
      <div class="container">
        <div class="d-flex align-items-center introduce-list-modules">
          <div
            class="col introduce-item"
            v-for="(item, index) in introduceList"
            :key="index"
          >
            <div class="d-flex align-items-baseline">
              <span class="big-title">{{ item.title }}</span>
              <span class="title-state" v-if="item.state !== undefined">{{
                item.state
              }}</span>
            </div>
            <div class="sub-title">{{ item.status }}</div>
          </div>
        </div>
      </div>

      <!-- 模块：简介--2 -->
      <div class="introduce-text-modules">
        <div class="container d-flex align-items-center">
          <div class="col-7">
            <div class="main-title">简介</div>
            <div class="text-content">
              {{ aboutUsObj.introduceInfo }}
            </div>
          </div>
          <div class="col-3 ml-auto">
            <div class="position-relative pb-100 attitude-list">
              <div class="position-absolute w-100 h-100">
                <div class="d-flex flex-column h-100">
                  <div class="col">
                    <div class="d-flex h-100">
                      <div class="col"></div>
                      <div class="col">
                        <div class="attitude-item-box" v-if="expertiseList[0]">
                          <div
                            class="position-relative pb-100 attitude-item"
                            style="transform: scale(1.3)"
                          >
                            <div class="position-absolute center-text">
                              {{ expertiseList[0].name }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="d-flex h-100">
                      <div class="col">
                        <div class="attitude-item-box" v-if="expertiseList[1]">
                          <div
                            class="position-relative pb-100 attitude-item"
                            style="transform: scale(0.8)"
                          >
                            <div class="position-absolute center-text">
                              {{ expertiseList[1].name }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="attitude-item-box" v-if="expertiseList[2]">
                          <div
                            class="position-relative pb-100 attitude-item"
                            style="transform: scale(0.5) translate3d(10%, 0, 0)"
                          >
                            <div class="position-absolute center-text">
                              {{ expertiseList[2].name }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="attitude-item-box" v-if="expertiseList[3]">
                          <div
                            class="position-relative pb-100 attitude-item"
                            style="
                              transform: scale(0.9) translate3d(0, -20%, 0);
                            "
                          >
                            <div class="position-absolute center-text">
                              {{ expertiseList[3].name }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="d-flex h-100">
                      <div class="col">
                        <div class="attitude-item-box" v-if="expertiseList[4]">
                          <div
                            class="position-relative pb-100 attitude-item"
                            style="transform: scale(0.5)"
                          >
                            <div class="position-absolute center-text">
                              {{ expertiseList[4].name }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="attitude-item-box" v-if="expertiseList[5]">
                          <div
                            class="position-relative pb-100 attitude-item"
                            style="
                              transform: scale(0.6) translate3d(-40%, -40%, 0);
                            "
                          >
                            <div class="position-absolute center-text">
                              {{ expertiseList[5].name }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col"></div>
                    </div>
                  </div>
                </div>
                <!-- <div class="d-flex flex-wrap h-100">
                  <div class="col-12">
                    <div class="ma-auto attitude-item-box">
                      <div class="position-relative pb-100 attitude-item">
                        <div class="position-absolute center-text">专业</div>
                      </div>
                    </div>
                  </div>
                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 模块：资质荣誉 -->
      <div class="mb-40 honner-modules">
        <div class="container">
          <div class="main-title">资质荣誉</div>
          <div class="position-relative honner-list">
            <div class="position-absolute w-100 h-100">
              <swiper class="h-100" ref="mySwiper" :options="swiperOptions">
                <swiper-slide
                  v-for="(item, index) in aboutUsObj.honnerImgList"
                  :key="index"
                >
                  <imgWithLoading
                    class="position-absolute imgCover"
                    :withHostUrl="true"
                    :src="item.pic"
                  />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
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
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

// import "swiper/css/swiper.css";
// If you use Swiper 6.0.0 or higher
import "swiper/swiper-bundle.css";

export default {
  components: {
    hotNewsList,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      introduceList: [
        {
          title: "2015",
          state: "年",
          status: "澳新考拉成立",
        },
        {
          title: "1000",
          state: "+",
          status: "政府企业客户共同选择",
        },
        {
          title: "1V1",
          status: "专业管家式服务",
        },
        {
          title: "7*24",
          state: "小时",
          status: "售后服务长期稳定无忧",
        },
      ],
      swiperOptions: {
        slidesPerView: 4,
        spaceBetween: 10,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: true,
      },

      aboutUsObj: {
        honnerImgList: [],
      },
      expertiseList: [],
    };
  },
  mounted() {
    this.getAndSetAboutUsInfo(); //简介
    this.getAndSetExpertiseList(); //专业特点
    this.getAndSetHonnerImgList(); //荣誉资质
  },
  methods: {
    //获取关于我们的简介
    async getAndSetAboutUsInfo() {
      try {
        const { res } = await this.$ajax({
          apiKey: "aboutUsInfo",
        });

        this.aboutUsObj.introduceInfo = res;
      } catch (error) {
        this.$catchError(error);
      }
    },

    //获取专业特点列表
    async getAndSetExpertiseList() {
      try {
        const { res } = await this.$ajax({
          apiKey: "getExpertiseList",
        });

        this.expertiseList = res;
      } catch (error) {
        this.$catchError(error);
      }
    },

    //获取荣誉资质
    async getAndSetHonnerImgList() {
      try {
        const { res } = await this.$ajax({
          apiKey: "getHonnerImgList",
        });

        this.aboutUsObj.honnerImgList = res;
      } catch (error) {
        this.$catchError(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main-title {
  font-size: 1.37rem;
  color: #677188;
}

// 模块：简介--1
.introduce-list-modules {
  .introduce-item {
    padding: 2.5rem 0;

    .big-title {
      line-height: 1.4;
      font-size: 3.5rem;
      color: #3079ec;
    }

    .title-state {
      font-size: 1.2rem;
      color: #000000;
    }
  }
}

// 模块：简介--2
.introduce-text-modules {
  background-color: #fafcff;
  padding-top: 4.5rem;
  padding-bottom: 1.5rem;

  .text-content {
    margin-top: 1.5rem;
    font-size: 1rem;
    color: #606060;
  }

  .attitude-list {
    .attitude-item-box {
      transition: all 0.4s;

      &:hover {
        transform: scale(1.3);
      }

      .attitude-item {
        background-color: #3079ec;
        border-radius: 50%;
        box-shadow: none;
        color: #fff;

        &:hover {
          box-shadow: 0.09rem 1.25rem 3.13rem 0rem rgba(48, 121, 236, 0.2);
        }

        .center-text {
          left: 50%;
          top: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
      }
    }
  }
}

//模块：资质荣誉
.honner-modules {
  .main-title {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
  .honner-list {
    padding-bottom: 30%;
  }
}
</style>
