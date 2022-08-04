### v-for="item in arr" :key="这个值是每一个元素绑定的值"

### 路由跳转时带值传送，， 使用 this.$router.push('路径/值') 跳转带值
需要绑定动态路由， 在注册路由的页面 添加占位符 /:

### 其他页面取得 路由跳转传的值
this.$route.params.动态路由