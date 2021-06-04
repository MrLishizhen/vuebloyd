<template>
    <div class="article-box">
        <h2 class="article-bt">
            <span>{{article.article_title}}</span>
            <span class="bz">{{article.article_label}}</span>
        </h2>
        <h4 class="article-subtitle">{{article.article_subtitle}}</h4>
        <div class="cont" v-html="article.article_content">

        </div>
        <div class="user">
            <span>作者：{{article.article_user}}</span>
            <span>{{article.article_date}}</span>
        </div>
    </div>
</template>

<script>
    import {ref, watch, reactive,onMounted, defineComponent} from 'vue'
    import {useRoute, useRouter} from "vue-router";
    import {getarticles} from '../../api/layout.js'
    import {rTime} from '@/api/index.js'
    export default defineComponent({
        name: "wzArticle",
        async setup(){
            const router = useRouter();
            const route = useRoute();

            let xmid = route.query.xmid;
            let article = ref({});
            onMounted(()=>{
                getarticles({article_id:xmid}).then(res=>{
                    if(res.status==200){
                        res.data.map((item)=>{
                            item.article_date = rTime(item.article_date);
                        });
                        article.value=res.data[0];
                    }else{
                        this.message('请求失败');
                    }
                })
            })

            return{
                article
            }
        }
    })
</script>

<style scoped lang="less">
    .article-box{
        height:100%;
        width:100%;
        display:flex;
        padding:0 0.2rem;
        box-sizing: border-box;
        flex-direction: column;
        img{
            width:100%;
            height:auto;
        }
        .article-bt{
            flex-shrink: 0;
            height:0.3rem;
            font-size:0.14rem;
            line-height:0.3rem;
            position:relative;
            .bz{
                position:absolute;
                right:0.2rem;
                top:50%;
                transform: translateY(-50%);
                font-size:0.12rem;
                font-weight: 400;
                padding: 0 0.05rem;
                border: 1px solid #409eff;
                color: #409eff;
                border-radius: 0.03rem;
                height:0.2rem;
                line-height:0.2rem;
            }
        }
        .article-subtitle{
            height:0.2rem;
            line-height:0.2rem;
            font-weight:400;
            fontsize:0.14rem;
            text-indent: 0.2rem;
        }
        .user{
            flex-shrink: 0;
            display:flex;
            justify-content: space-between;
            height:0.2rem;
            line-height:0.2rem;
        }
        .cont{
            padding-top:0.1rem;
            box-sizing: border-box;
            flex-grow: 1;
            text-align:left;
        }
    }

</style>