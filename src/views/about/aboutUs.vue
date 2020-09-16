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
          <div class="col introduce-item" v-for="(item, index) in introduceList" :key="index">
            <div class="d-flex align-items-baseline">
              <span class="big-title">{{item.title}}</span>
              <span class="title-state" v-if="item.state !== undefined">{{item.state}}</span>
            </div>
            <div class="sub-title">{{item.status}}</div>
          </div>
        </div>
      </div>

      <!-- 模块：简介--2 -->
      <div class="introduce-text-modules">
        <div class="container d-flex align-items-center">
          <div class="col">
            <div class="main-title">简介</div>
            <div
              class="text-content"
            >广东澳新考拉信息技术有限公司，致力于为企业提供一站式互联网开发服务，包括网站建设、微信开发、APP应用、营销推广、人工智能、系统集成、底层开发等技术解决方案。目前我们已服务包括机械、医药、政府、建筑、IT 、纺织、娱乐、物流、房产、汽车等十几个行业，近百个细分行业1000+企业客户，从客户项目的需求分析，到立项计划制定，再到功能开发与交付，产品测试与专业售后服务等，致力于为客户提供专业的互联网技术指导与服务。</div>
          </div>
          <div class="col-3">
            <div class="position-relative pb-100 attitude-list">
              <div class="position-absolute w-100 h-100">
                <div class="position-relative attitude-item">专业</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 模块：资质荣誉 -->
      <div class="mb-40 honner-modules">
        <div class="container">
          <div class="main-title">简介</div>
          <div class="position-relative honner-list">
            <div class="position-absolute w-100 h-100">
              <swiper class="h-100" ref="mySwiper" :options="swiperOptions">
                <swiper-slide>
                  <imgWithLoading
                    class="position-absolute imgCover"
                    :src="require('@/assets/img/test-1.png')"
                  />
                </swiper-slide>
                <swiper-slide>
                  <imgWithLoading
                    class="position-absolute imgCover"
                    :src="require('@/assets/img/test-1.png')"
                  />
                </swiper-slide>
                <swiper-slide>
                  <imgWithLoading
                    class="position-absolute imgCover"
                    :src="require('@/assets/img/test-1.png')"
                  />
                </swiper-slide>
                <swiper-slide>
                  <imgWithLoading
                    class="position-absolute imgCover"
                    :src="require('@/assets/img/test-1.png')"
                  />
                </swiper-slide>
                <swiper-slide>
                  <imgWithLoading
                    class="position-absolute imgCover"
                    :src="require('@/assets/img/test-1.png')"
                  />
                </swiper-slide>
                <swiper-slide>
                  <imgWithLoading
                    class="position-absolute imgCover"
                    :src="require('@/assets/img/test-1.png')"
                  />
                </swiper-slide>
                <swiper-slide>
                  <imgWithLoading
                    class="position-absolute imgCover"
                    :src="require('@/assets/img/test-1.png')"
                  />
                </swiper-slide>
                <swiper-slide>
                  <imgWithLoading
                    class="position-absolute imgCover"
                    :src="require('@/assets/img/test-1.png')"
                  />
                </swiper-slide>
                <swiper-slide>
                  <imgWithLoading
                    class="position-absolute imgCover"
                    :src="require('@/assets/img/test-1.png')"
                  />
                </swiper-slide>
                <swiper-slide>
                  <imgWithLoading
                    class="position-absolute imgCover"
                    :src="require('@/assets/img/test-1.png')"
                  />
                </swiper-slide>
                <swiper-slide>
                  <imgWithLoading
                    class="position-absolute imgCover"
                    :src="require('@/assets/img/test-1.png')"
                  />
                </swiper-slide>
                <swiper-slide>
                  <imgWithLoading
                    class="position-absolute imgCover"
                    :src="require('@/assets/img/test-1.png')"
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
        // Some Swiper option/callback...
      },
    };
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

  .text-content {
    font-size: 1rem;
    color: #606060;
  }

  .attitude-list {
    border: 1px solid red;
  }
}

//模块：资质荣誉
.honner-modules {
  .main-title {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
  .honner-list {
    border: 1px solid red;
    padding-bottom: 30%;
  }
}
</style>
