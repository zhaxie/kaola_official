<template>
  <!-- 模块：顶部到航头 -->
  <div class="header-nav-modules">
    <!-- 顶部 -->
    <div class="position-fixed z100 top-nav" ref="firstNav">
      <div class="container d-flex align-items-center">
        <div class="col d-flex align-items-center">
          <div class="logo">
            <imgWithLoading class="imgCover" :src="require('@/assets/icon/com_logo.png')"></imgWithLoading>
          </div>
          <div class="name">澳新考拉</div>
        </div>
        <div class="d-flex align-items-center second-nav-list">
          <div
            class="cursor-pointer nav-item"
            v-for="(item) in secondNavList"
            :key="item.title"
          >{{item.title}}</div>
        </div>
      </div>
    </div>
    <!-- 高度占位符 -->
    <div :style="{height: firstNavHeight + 'px'}"></div>

    <!-- 页面标题 -->
    <div class="animated slideInDown" style="background-color: #3079ec;" v-if="$slots.pageTitle">
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
          title: "首页1",
        },
        {
          title: "首页2",
        },
        {
          title: "首页3",
        },
        {
          title: "首页4",
        },
        {
          title: "首页5",
        },
      ],
      firstNavHeight: 0,
    };
  },
  mounted () {
    const firstNavHeight = this.$refs.firstNav.getBoundingClientRect().height;

    this.firstNavHeight = firstNavHeight;
    this.$emit('firstNavHeight', firstNavHeight);
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