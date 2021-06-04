<template>
    <div class="tabs">
        <div class="tabs-top">
            <div class="tabs-item" @click="tabsIs(item)" :class="{'hot':item.hot}" v-for="(item,i) in tabsList" :key="i.toString()" v-html="item.article_label"></div>
        </div>
        <div class="tabs-box" @scroll="scrollFunc">
            <ul class="tabs-ul" >
                <li class="tabs-ul-li" v-for="(item,i) in tabList" @click="active(item.article_id)" :key="i.toString()">

                    <div class="tabs-img" v-if="item.artive_cover">
                        <img :src="item.artive_cover" alt="">
                    </div>
                    <div class="tabs-li-box" :class="{'imgno':!item.artive_cover}">
                        <p v-html="item.article_title" class="title"></p>
                        <p v-html="item.article_subtitle" class="subtitle"></p>
                        <p class="aggregate">
                            <span class="userdate" v-html="item.article_date"></span>
                            <span class="userName" v-html="item.article_user"></span>

                        </p>
                        <span v-html="item.article_label" class="label"></span>
                    </div>
                </li>
            </ul>
            <div v-html="textTS"></div>
        </div>
    </div>
</template>

<script>
    //type:0 || 1 0表示仅仅把他当做一个查询条件 1表示每个界面有不同的显示效果
    //tabslist:所需要的使用的数据
    //当前只当做一种查询条件来使用

    import {ref,toRef,reactive,defineComponent,watch} from 'vue'
    import {useRouter} from "vue-router";
    export default defineComponent({
        name: "tabs",
        props:{
            type:{
                default:0,
                type:Number
            },
            tabsList:{
                default:[],
                type:Array,
            },
            tabList:{
                default:[],
                type:Array,
            },
            textTS:{
                default:'加载中...',
                type:String
            }
        },
        setup(props,{slots,attrs,emit}){
            let num = 50;
            let scroll = false;
            const router = useRouter();
            let itemhot = ref(props.tabsList[0].article_label).value;
            // watch(props,(o,l)=>{
            //     console.log(o);
            //     console.log(l);
            // },{deep:true})

            function tabsIs(item){
                itemhot = item.article_label;
                //切换数据
                emit('tabsitem',item.article_label);
            }
            function scrollFunc(event){

                // console.log(event);
                // console.log(event.target.offsetHeight);//视图高度
                // console.log(event.target.scrollTop);//视图出去的内容
                // console.log(event.target.scrollHeight);//视图整体的高度

                let scrollTop = event.target.scrollTop;
                let offsetHeight = event.target.offsetHeight;
                let scrollHeight = event.target.scrollHeight;

                if(scrollHeight-scrollTop-offsetHeight<=15&&!scroll&&props.textTS=='加载中...'){
                    scroll = true;
                    emit('tabscont',itemhot);
                }else{
                    scroll = false;
                    return;
                }
            }
            //获取文章
            function active(id){
                router.push({path:'/Layout/wzArticle',query:{xmid:id}});
            }
            return{
                tabsIs,
                scrollFunc,
                active
            }
        }
    })
</script>

<style scoped lang="less">
.tabs{
    flex-grow: 1;
    display:flex;
    overflow:hidden;
    flex-direction: column;
    .tabs-top{
        padding:0 0.1rem;
        display:flex;
        flex-shrink: 0;
        height:0.4rem;
        box-shadow: 0px 10px 10px #e0e0e0;
        /*background-color: #42b983;*/
        align-items: flex-end;
        .tabs-item{
            height:0.3rem;
            box-sizing: border-box;
            font-size:0.14rem;
            /*padding:0.05rem 0.1rem;*/
            margin:0 0.1rem;
            border-bottom:0.04rem solid transparent;
            line-height:0.3rem;
            &.hot{
                border-bottom:0.04rem solid #409eff;
            }
        }
    }
    .tabs-box{
        flex-grow: 1;
        padding:0.2rem 0.05rem;
        box-sizing: border-box;
        overflow:auto;
        .tabs-ul{
            .tabs-img{
                width:0.9rem;
                img{
                    width:100%;
                    flex-shrink: 0;
                }
            }
            .tabs-li-box{
                flex-grow: 1;
                /*height:1.1rem;*/
                /*background-color: #42b983;*/
                margin-left:0.5rem;
                position:relative;
                &.imgno{
                    width:100%;
                    margin-left:0;
                }
                .title{
                    text-align: left;
                    line-height:0.4rem;
                    font-size:0.16rem;
                    padding-left:0.05rem;
                    font-weight:600;
                }
                .subtitle{
                    font-size:0.14rem;
                    text-align:left;
                    padding-left:0.5rem;
                }
                .label{
                    position:absolute;
                    top:0.05rem;
                    right:0.1rem;
                    padding:0.01rem 0.05rem;
                    border:1px solid #409eff;
                    color:#409eff;
                    border-radius: 0.03rem;
                }
                .aggregate{
                    text-align:right;
                    .userName{
                        margin-left:0.1rem;
                    }
                }

            }
        }
        .tabs-ul-li{
            /*min-height:1.1rem;*/
            /*border:1px solid #ccc;*/
            border-bottom: 1px solid #e0e0e0;
            padding:0.08rem 0.1rem;
            display:flex;
            border-radius: 0.1rem;
            margin-bottom:0.1rem;

        }
    }
}
</style>