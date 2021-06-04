<template>
    <teleport v-if="show" to="body">
        <div class="loading">
           <div class="loading-box">
               <span>加载中...</span>
           </div>
        </div>
    </teleport>

</template>

<script>

    export default{
        name: "d-loading",
        props:["parentdom"],
        data() {
            return {
                show: false
            }
        },
        methods: {
            init() {
                this.show = true;
                return this
            },
            hidden() {
                this.show = false;
                // 删除父元素
                // this.parentdom.removeChild(this.parentdom);
            }
        }
    }
</script>

<style scoped lang="less">
    .loading {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        background: rgba(255,255,255,.3);
        text-align: center;
        z-index: 9999;
        .loading-box{
            position:absolute;
            left:50%;
            top:50%;
            transform: translate(-50%,-50%);
            color:#409eff;
        }
    }
</style>
