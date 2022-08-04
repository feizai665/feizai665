<template>
    <div>
        <div class="move" v-for="(item,index) in arrays" :key="index" >
            <p>{{item.title}}</p>
            <img v-for="(imags,index) in item.imageSrc" :key="index"  :src="imags" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr: [],
            arrays:[]
        }
    },
    created() {
        /* this.$http.post('/api/get_article_list',{
            cate_id:"60a033ea935e5b0001ef67b6",
            skip: 0,
            limit: 10
        })
        .then(data=>{
            console.log(data);
        }) */
       /*  this.ajax("/api/get_cate_list").then(data=>{
            console.log(data);
            this.arr = data.data
        }) */
        let that = this
        that.ajax("/api/get_cate_list").then(function(data){
            console.log(that)
            return that.ajax("/api/get_article_list",{
                "cate_id": that.arr[0]._id,
                        "skip": 0,
                        "limit": 10
            }).then(function(data){
                console.log(data);
                that.arrays = data
            })
        })
    },
    methods: {
        ajax(url,data){
            let that = this
             return new Promise(function(resolve,reject){
                that.$http.post(url,data)
                .then(function(res){
                    that.arr = res.data.data
                    // console.log(this.arr);
                    resolve(that.arr)
                })
                .catch(function(err){
                    reject(err)
                })
            })
        },
        /* wenzhang(){
            this.ajax("/api/get_article_list",{
                        "cate_id": this.arr[0]._id,
                        "skip": 0,
                        "limit": 10
                    })
        }, */
    },
}
</script>
<style lang="less">
    .move{
        width: 100%;
        box-sizing: border-box;
        p{
            width: 100%;
        }
        img{
            width: 100%;
        box-sizing: border-box;

        }
    }
</style>