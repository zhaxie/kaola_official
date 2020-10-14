<template>
  <!-- 模块：顶部到航头 -->
  <div class="header-nav-modules">
    <!-- 顶部 -->
    <div class="position-fixed z100 top-nav" ref="firstNav">
      <div class="container d-flex align-items-center">
        <div class="col d-flex align-items-center">
          <div class="logo">
            <imgWithLoading
              class="imgCover"
              :src="require('@/assets/icon/com_logo.png')"
            ></imgWithLoading>
          </div>
          <div class="name">澳新考拉</div>
        </div>
        <div class="d-flex align-items-center second-nav-list">
          <div
            class="position-relative cursor-pointer nav-item"
            v-for="(item, index) in secondNavList"
            :key="item.title"
            :class="{ active: index === currentSelectNavIndex }"
            @click="$router.push({ name: item.pathName })"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
    <!-- 高度占位符 -->
    <div :style="{ height: firstNavHeight + 'px' }"></div>

    <!-- 页面标题 -->
    <div
      class="animated slideInDown"
      style="background-color: #3079ec"
      v-if="$slots.pageTitle"
    >
      <div class="container">
        <div class="page-title">
          <slot name="pageTitle"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      secondNavList: [
        {
          title: "首页",
          pathName: "home",
        },
        {
          title: "关于我们",
          pathName: "aboutUs",
        },
        {
          title: "业务案例",
          pathName: "caseList",
        },
        {
          title: "企业新闻",
          pathName: "newsList",
        },
        {
          title: "联系我们",
          pathName: "contactUs",
        },
      ],
      firstNavHeight: 0,
    };
  },
  mounted() {
    const firstNavHeight = this.$refs.firstNav.getBoundingClientRect().height;

    this.firstNavHeight = firstNavHeight;
    this.$emit("firstNavHeight", firstNavHeight);
  },
  computed: {
    currentSelectNavIndex() {
      const { name: currentRouterName } = this.$route;
      const currentSelectNavIndex = this.secondNavList.findIndex(
        (item) => currentRouterName === item.pathName
      );

      console.info('this.$route', this.$route);
      console.info('currentSelectNavIndex', currentSelectNavIndex);

      return currentSelectNavIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
// 模块：顶部到航头
.header-nav-modules {
  .top-nav {
    left: 0;
    top: 0;
    right: 0;
    background-color: #3079ec;

    .logo {
      width: 1.06rem;
      height: 2rem;
    }
    .name {
      margin-left: 6px;
      font-size: 1rem;
      color: #ecf3fe;
    }

    .second-nav-list {
      .nav-item {
        padding: 0 2.06rem;
        line-height: 4rem;
        font-size: 1rem;
        color: #edf4ff;

        &.active::after {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          content: "";
          display: block;
          width: 0;
          height: 0;
          border: 6px solid transparent;
          border-bottom-color: #ffe03f !important;
        }
      }
    }
  }

  .page-title {
    margin-left: 50%;
    padding: 3rem 0;
    font-size: 1.25rem;
    color: #fff;
  }
}
</style>