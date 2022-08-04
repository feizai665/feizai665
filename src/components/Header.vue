<template>
  <div>
    <div class="header">
      <input type="text" icon="search" placeholder="搜索" />
    </div>
     <van-tabs color="#07c160">
        <van-tab v-for="item in arr" :key="item._id" to="/home/article" :title="item.name">
        </van-tab>
      </van-tabs>
   <!--  <van-tabs color="#07c160">
      <van-tab to="/home/article" :title="'标签 '"> </van-tab>
      <van-tab to="/home/recruitment" :title="'标签 '"> </van-tab>
      <van-tab to="/home/article" :title="'标签 '"> </van-tab>
      <van-tab :title="'标签 '"> </van-tab
      ><van-tab :title="'标签 '"> </van-tab>
    </van-tabs> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [],
    };
  },
  created() {
    this.ajax("/api/get_cate_list");
  },
  methods: {
    ajax(url, data) {
      // let that = this
      //  return new Promise(function(resolve,reject){
      this.$http.post(url, data).then((res) => {
        this.arr = res.data.data;
        // console.log(this.arr);
      });
      // })
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  line-height: 50px;
  background: rgb(7, 193, 96);
  input {
    box-sizing: border-box;
    width: 70vw;
    height: 30px;
    margin: 0 auto;
    border-radius: 20px;
    background: rgb(161, 241, 199);
    color: #fff;
    opacity: 0.8;
    text-align: center;
    border: 0;
    background: rgb(161, 241, 199);
    &::placeholder {
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>