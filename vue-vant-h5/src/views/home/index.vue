<!-- home -->
<template>
  <div class="app-container">
    <!-- <div class="warpper">
      <h1 class="demo-home__title"><img src="https://imgs.solui.cn/weapp/logo.png" /><span>VUE H5开发模板</span></h1>
      <h2 class="demo-home__desc">
        A vue h5 template with Vant UI
      </h2>
    </div> -->
    <van-sticky>
      <van-search
        v-model="key"
        shape="round"
        background="#4fc08d"
        placeholder="请输入搜索关键词"
      />
    </van-sticky>

    <van-swipe :autoplay="3000" style="height: 200px;">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" style="width: 100%;height: 200px;" />
       
      </van-swipe-item>
    </van-swipe>
    
    <van-pull-refresh
      v-model="isLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
    >
      <!-- <p>刷新次数: {{ count }}</p> -->

      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->

        <div  class="news-item" v-for="item in list" :key="item._id" :title="item.title" @click="scanNews(item._id)">

          <img class="news-img" :src="item.poster" />
          <div class="news-right">
          <div class="news-title" >{{item.title}}-{{item.content}}</div>
          <div class="news-content">{{item.author}}   {{item.updateTime}}</div>
          </div>
        </div>

        
        <!-- <news-item v-for="item in list" :key="item" :title="item"/> -->

      </van-list>

      <!-- <van-cell icon="success" v-for="item in list" :key="item" :title="item" /> -->
    </van-pull-refresh>

    
    <van-tabbar fixed v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o">新闻</van-tabbar-item>
      <van-tabbar-item icon="good-job-o">用户</van-tabbar-item>
      <van-tabbar-item icon="good-job-o">发布新闻</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

// 请求接口
import {getUserInfo} from '@/api/user.js'
import { Toast } from 'vant';
import NewsItem from '../news/components/newsItem'
import { getNewsList } from '@/api/news';
export default {
  components: {NewsItem},

  data() {
    return {
      key : '',
      active: 0,
      list: [
        // 'Vue-cli4',
        // 'VantUI组件按需加载',
        // 'Sass',
        // 'Webpack 4',
        // 'Vue-router',
        // 'Vuex',
        // 'Axios封装',
        // 'rem适配方案',
        // '多环境配置',
        // '生产环境cdn优化首屏加速',
        // 'babel低版本浏览器兼容',
        // 'Eslint+Pettier统一开发规范'
      ],
      images: [
        'http://g0.hexunimg.cn/2012-12-09/148834204.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1480268885,3459100534&fm=26&gp=0.jpg'
      ],
      count: 0,
      isLoading: false,
      finished: true,
      refreshing: false,
      loading : false
    }
  },
  computed: {},
  created() {
    this.getNews();
  },
  mounted() {
    this.initData()
  },

  methods: {
    getNews() {
        getNewsList().then(res => {
            console.log(res);
            this.list = res;
        })
    },
    scanNews(id){
        this.$router.push({name : 'addNews', params: { id: id }})
    },
    onLoad() {
      // setTimeout(() => {
      //   if (this.refreshing) {
      //     this.list = [];
      //     this.refreshing = false;
      //   }

      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   this.loading = false;

      //   if (this.list.length >= 10) {
      //     this.finished = true;
      //   }
      // }, 1000);
    },
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    // 请求数据案例
    initData() {
      // 请求接口数据，仅作为展示，需要配置src->config下环境文件
      getUserInfo()
        .then(() => {})
        .catch(() => {})
    },
    onChange(index) {
      //if (index === 1) window.location.href = 'https://github.com/sunnie1992/vue-h5-template'
      if (index === 1) {
        //this.$router.push({name : 'addNews', params: { id: '0' }})
        this.$router.push({name : 'login'})
      }else if(index === 2){
        this.$router.push({name : 'addNews', params: { id: '0' }})
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  .warpper {
    padding: 12px;
    .demo-home__title {
      margin: 0 0 6px;
      font-size: 32px;
      .demo-home__title img,
      .demo-home__title span {
        display: inline-block;
        vertical-align: middle;
      }
      img {
        width: 32px;
      }
      span {
        margin-left: 16px;
        font-weight: 500;
      }
    }
    .demo-home__desc {
      margin: 0 0 20px;
      color: rgba(69, 90, 100, 0.6);
      font-size: 14px;
    }
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.news-item{
  width: 96%;
  min-height: 80px;
  height: auto;
  float: left;
  border-bottom: 1px solid #dcdcdc;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 10px;
  margin-bottom: 10px;
  .news-img{
    width: 25%;
    height: 80px;
    float: left;
    
  }
  .news-right{
    width: 75%;
    float: left;
    text-align: left;
    text-indent: 10px;
  }
  .news-title{
    width: 100%;
    height: 50px;
    font-size: 20px;
    color: #333333;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .news-content{
     width: 100%;
     height: 30px;
     font-size: 12px;
     color: #999999;
     text-align: left;
     line-height: 30px;
  }
}

</style>
