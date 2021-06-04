<template>
    <ul class="nav-box">
        <li class="nav-li" v-for="(item,i) in navlist" :class="{'hot':item.hot}" :key="i.toString()" v-html="item.nav_title" @click="toRouter(item.icon)"></li>
    </ul>
</template>

<script>
    import {ref, watch, toRefs, defineComponent} from 'vue';
    import { useRouter, useRoute } from 'vue-router'
    export default defineComponent({
        name: "nav-link",
        props: {
            navlist: {
                type: Array,
                default:[]
            },
            leftShow:{
                type:Boolean,
                default:true
            }
        },
        setup(props,{slots,attrs,emit}) {

            const router = useRouter();
            const route = useRoute();
            function toRouter(item){
                router.push(`/Layout${item}`);
                emit('leftfunc',item);
            }
            // console.log(route);
            // let nav = ref([]);
            // watch(props.navlist, (val, old)=> {
            //     console.log(val.value);
            //
            // },{deep:true});
            //
            // return {
            //     nav,
            // }
            return {
                toRouter
            }
        }
    })
</script>

<style scoped lang="less">
    .nav-box {
        box-sizing: border-box;
        padding-top: 0.2rem;
        width: 1.8rem;
        height:100%;
        background-color: #fff;
        /*border-top:1px solid #999;*/
        /*border-right:1px solid #999;*/
        /*background-color: rgba(0,0,0,.01);*/
        .nav-li {
            box-sizing: border-box;
            text-align: left;
            padding: 0.05rem 0.1rem 0.05rem 0.2rem;
            margin-bottom: 0.1rem;
            &.hot{
                color:#409eff;
            }
        }
    }
</style>