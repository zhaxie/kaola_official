<template>
  <div class="hot-news-list">
    <div class="box-title">热门新闻</div>
    <Swiper ref="mySwiper" :options="swiperOptions">
      <SwiperSlide v-for="(item, index) in hotNewsList" :key="index">
        <div class="other-new-list">
          <div
            class="cursor-pointer news-item"
            v-for="(item, index) in item"
            :key="index"
            @click="handleOpenToNewsDetailsByID(item.id)"
          >
            <div class="text-over-one title">
              {{ item.name }}
            </div>
            <div class="mt-10 date">
              {{
                $com.formatDate(
                  new Date(item.create_time * 1000),
                  "yyyy-MM-dd hh:mm"
                )
              }}
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    scanNewsByPushPage: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: true, //可选选项，自动滑动
      },
      hotNewsList: [],
    };
  },
  mounted() {
    this.getAndSetHotNewsList(); //获取全部热门新闻
  },
  methods: {
    //获取热门新闻列表
    async getAndSetHotNewsList() {
      try {
        const { res } = await this.$ajax({
          apiKey: "newsList",
          data: {
            paginate: 10, //paginate	否	int	当前显示条数，默认20
            page: 1, //page	否	int	当前页码，默认1
            hot_id: 1, //hot_id	否	int	热门id，1-热门 2-非热门
            //classify_id	否	int	新闻分类ID，无参为全部新闻
          },
        });

        this.hotNewsList = this.listBeGroup(res.data, 2);

        console.info("this.hotNewsList", this.hotNewsList);
      } catch (error) {
        this.$catchError(error);
      }
    },

    handleOpenToNewsDetailsByID(newsID) {
      const { id } = this.$route.query;

      if (id === Number(newsID)) {
        return false;
      }

      let openPageOptions = {
        name: "newsDetails",
        query: {
          id: newsID,
        },
      };

      if (this.scanNewsByPushPage === true) {
        this.$router.push(openPageOptions);
      } else {
        this.$router.replace(openPageOptions);
      }
    },

    //数组分组
    listBeGroup(list, howManyOneGroup) {
      let listBeGroup = [];
      let listLen = list.length;

      let groupNum = Math.ceil(listLen / howManyOneGroup);

      for (var i = 0; i < listLen; i += howManyOneGroup) {
        console.info("i", i);
        listBeGroup.push(list.slice(i, i + howManyOneGroup));
      }

      console.info("groupNum", groupNum);
      console.info("listBeGroup", listBeGroup);

      return listBeGroup;
    },
  },
};
</script>

<style lang="scss" scoped>
.hot-news-list {
  padding-left: 1.55rem;
  padding-right: 1.4rem;
  border-radius: 0.56rem;
  background-color: #ffffff;

  .box-title {
    padding-top: 1.5rem;
    font-size: 1rem;
    color: #677188;

    &::after {
      margin-top: 1.4rem;
      content: "";
      display: block;
      width: 1.75rem;
      height: 0.2rem;
      background-color: #3079ec;
    }
  }

  // 其他新闻
  .other-new-list {
    .news-item {
      padding: 1.4rem 0;
      border-top: 1px solid #dee0e4;

      .title {
        font-size: 0.88rem;
        color: #112961;
      }

      .date {
        font-size: 0.88rem;
        color: #a1a5ac;
      }
    }

    & .news-item:first-child {
      border-top: none;
    }
  }
}

.swiper-container {
  --swiper-theme-color: #ff6600;
  --swiper-pagination-color: #00ff33; /* 两种都可以 */
}
</style>