<template>
  <page class="page">
    <!-- 共用：导航头 -->
    <headerNav></headerNav>

    <!-- 主内容区域 -->
    <div class="position-relative col d-flex overflow-hidden">
      <div
        class="position-relative container d-flex align-items-center contactUs-modules"
      >
        <!-- 左边的背景图 -->
        <div class="col-5 animated fadeIn">
          <div class="left-bg animated slideInLeft">
            <div class="position-relative img-box">
              <imgWithLoading
                class="position-absolute imgCover"
                :src="require('@/assets/img/contactUs_bg.png')"
              ></imgWithLoading>
            </div>
          </div>
        </div>

        <!-- 内容文字 -->
        <div class="col-6 ml-auto info-box">
          <div class="animated bounceIn delay-1s cursor-pointer info-content">
            <div class="title">{{ contactUsObj.name }}</div>
            <div class="content">
              <div class="d-flex align-items-end">
                <div class="col">
                  <div class="text">
                    全国统一服务热线：{{ contactUsObj.number }}
                  </div>
                  <div class="d-flex align-items-center text">
                    <span>微信咨询：{{ contactUsObj.wechat_num }}</span>
                    <div class="iconfont"></div>
                  </div>
                  <!-- <div class="text">
                   
                  </div> -->
                  <div class="text">{{ contactUsObj.address }}</div>
                </div>
                <div class="col-3 px-5 pt-5 ml-auto qr-code">
                  <div class="position-relative pb-100 code-img" v-if="contactUsObj.wechat_pic">
                    <imgWithLoading
                      class="position-absolute imgCover"
                      :withHostUrl="true"
                      :src="contactUsObj.wechat_pic"
                    ></imgWithLoading>
                  </div>
                  <div class="py-5 text-center qr-text">扫码加微信咨询</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右边的背景 -->
        <div class="position-absolute animated slideInRight right-box">
          <div class="bg" :class="{ active: onLoaded }"></div>
        </div>
      </div>
    </div>

    <!-- 共用：底部 -->
    <footerNav></footerNav>
  </page>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      onLoaded: false,
      contactUsObj: {},
    };
  },
  mounted() {
    this.onLoaded = true;
    this.getAndSetContactUs();
  },
  methods: {
    async getAndSetContactUs() {
      try {
        const { res } = await this.$ajax({
          apiKey: "contactUs",
        });

        this.contactUsObj = res;
      } catch (error) {
        this.$catchError(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contactUs-modules {
  // 左边的背景图
  .left-bg {
    .img-box {
      padding-bottom: 73.5%;
    }
  }

  // 内容文字
  .info-box {
    transition: all 0.4s;

    &:hover {
      transform: scale(1.1);
    }

    .info-content {
      background-color: #ffffff;
      box-shadow: 0.53rem 1.13rem 3.13rem 0rem rgba(49, 123, 238, 0.2);
      border-radius: 0.63rem;
      padding: 4rem 3rem 4rem 4.6rem;
      overflow: hidden;

      .title {
        font-size: 1.8rem;
        color: #112961;
      }

      .content {
        margin-top: 1rem;
        font-size: 1rem;
        color: #4b5a6d;

        .text {
          line-height: 1.8;
        }
      }

      .qr-code {
        background-color: #ffffff;
        box-shadow: 0rem 0.19rem 0.44rem 0rem rgba(44, 114, 235, 0.35);

        .code-img {
          padding-bottom: 1;
        }

        .qr-text {
          font-size: 0.8rem;
          color: #606060;
        }
      }
    }
  }

  //   右边的背景
  .right-box {
    z-index: -1;
    top: 0;
    bottom: 5rem;
    left: 90%;
    width: 100%;

    .bg {
      width: 100%;
      height: 100%;
      background-color: #317bee;

      border-bottom-left-radius: 0;
      transition: all 2s;

      &.active {
        border-bottom-left-radius: 8rem;
        transform: skewX(-27deg);
      }
    }
  }
}
</style>    