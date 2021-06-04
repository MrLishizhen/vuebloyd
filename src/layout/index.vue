<template>
    <div class="layout">
        <div class="layout-top">
            <span class="nav-btn" @click="qhLeft"><i-align-text-left theme="outline" size="20" fill="#333"
                                                                     :strokeWidth="3" strokeLinecap="square"/></span>
            <h1 class="title">勿忘初心</h1>
        </div>
        <div class="layout-cont">
            <router-view></router-view>
        </div>
        <div class="layout-left" :class="{'left-show':book.leftShow}" @click.self="book.leftShow=true">
            <Link :navlist="navlist" @leftfunc="qhLeft"></Link>
        </div>
    </div>


</template>

<script lang="ts">
    import Link from '../components/nav/index.vue'
    import {message} from '../util/message.js'
    import {ref, watch, reactive, defineComponent} from 'vue'
    import {getnav} from '../api/layout.js'
    import {useRoute, useRouter} from "vue-router";

    export default defineComponent({
        name: "layout",
        components: {
            Link
        },

        async setup() {

            let navlist = ref([]);
            const book = reactive({
                leftShow: true
            });
            const router = useRouter();
            const route = useRoute();

            function qhLeft(text) {
                book.leftShow = !book.leftShow;
            }

            await getnav().then(res => {
                if (res.status == 200) {
                    navlist.value = res.data;
                    // for (let i = 0; i < navlist.value.length; i++) {
                    //     if (i == 0) {
                    //         navlist.value[i]['hot'] = true;
                    //     } else {
                    //         navlist.value[i]['hot'] = false;
                    //     }
                    // }
                } else {
                    message({text: '数据请求错误,请刷新重试'});
                }
            })

            return {
                navlist,
                book,
                qhLeft
            }
        }
    })
</script>

<style scoped lang="less">
    .layout {
        overflow: hidden;
        position: relative;
        margin: 0 auto;
        max-width: 680px;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;

        .layout-top {
            height: 0.4rem;
            flex-shrink: 0;
            /*box-shadow: 2px 2px 5px #e0e0e0;*/

            .title {
                font-size: 0.18rem;
                font-weight: 600;
                line-height: 0.4rem;
            }

            .nav-btn {
                position: absolute;
                /*cursor: pointer;*/
                top: 0.1rem;
                left: 0.2rem;
                width: 0.3rem;
                height: 0.2rem;
                /*border:1px solid #ccc;*/
            }
        }

        .layout-cont {
            padding:0.1rem 0;
            box-sizing: border-box;
            flex-grow: 1;
            overflow: hidden;
        }

    }

    .layout-left {
        transition: all 0.5s;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0.4rem;
        left: 0;

        &.left-show {
            left: -100%;
        }
    }
</style>