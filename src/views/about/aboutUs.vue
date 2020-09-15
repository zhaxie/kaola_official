<template>
  <page>
    <!-- 共用：导航头 -->
    <headerNav>
      <div slot="pageTitle">关于澳新考拉</div>
    </headerNav>

    <!-- 主内容区域 -->
    <div class="col">
      <!-- 模块：简介 -->
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

      <div class=""></div>
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
    };
  },
};
</script>

<style lang="scss">
 introduce-list-modules {
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
</style>
