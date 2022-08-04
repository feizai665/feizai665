<template>
    <div class="register">
        <header>
            <div class="icon">
                <van-icon name="arrow-left" />
            </div>
            <h3>注册/登录</h3>
        </header>
        <main>
            <div class="user">
                <van-icon name="phone-o" />
                <input type="text" v-model="tel" placeholder="请输入手机号">
            </div>
            <div class="pass">
                <div>
                    <van-icon name="shield-o" />
                    <input type="text" v-model="yanzeng" placeholder="请输入验证码">
                </div>
                <button class="validation">发送验证码</button>
            </div>
        </main>
        <footer>
            <van-button type="primary" block>登录</van-button>
        </footer>
    </div>
</template>
<script>
export default {
    name: 'Register',
    data() {
        return {
            tel:'',
            yanzeng:''
        }
    },
    methods: {
        login(){
        }
    },

}
</script>
<style lang="less" scoped>
    .register{
        width: 100vw;
        display: flex;
        flex-flow: column;
        header{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 50px;
            background: rgb(7, 193, 96);
                color: #fff;
            .icon{
                width: 2vw;
            }
            h3{
                flex: 1;
            }
        }
        main{
            width: 100vw;
            display: flex;
            flex-flow: column;
            justify-content: flex-start;
            box-sizing: border-box;
            background: #fff;
            .user{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding: 0 10px;
                height: 50px;
                line-height: 50px;
                border-bottom: 1px solid #ccc;
                input{
                    box-sizing: border-box;
                    // width: 100%;
                    height: 50px;
                    border: 0;
                    &::placeholder{
                        font-size: 14px;
                    }
                }
            }
            .pass{
                display: flex;
                flex-flow: row;
                justify-content: space-between;
                align-items: center;
                 height: 50px;
                border-bottom: 1px solid #ccc;
                padding: 0 10px;
                input{
                    box-sizing: border-box;
                    // width: 100%;
                    height: 50px;
                    border: 0;
                     &::placeholder{
                        font-size: 14px;
                    }
                }
                .validation{
                    display: inline;
                    // height: 20px;
                    border-radius: 20px;
                    border: 0;
                    font-size: 14px;
                }
            }
        }
        footer{
            width: 90vw;
            margin: 0 auto;
            margin-top: 20px;
            color: #fff;
        }
    }
</style>