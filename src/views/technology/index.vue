<template>
    <div class="technology-box">
        <tabs :tabsList="tabsList" :textTS="textTS" :tabList="tabList" @tabsitem="tabsitem" @tabscont = "tabscont"></tabs>
    </div>
</template>

<script>
    // @ is an alias to /src
    import {ref} from 'vue'
    import {gettab,getTabListx} from '@/api/layout.js'
    import {rTime} from '@/api/index.js'
    import tabs from '@/components/tabs/index.vue'
    import {loading} from "../../util/message";

    export default {
        name: 'jsfx',
        data() {
            return {
                nam: '',
            }
        },
        components: {tabs},
        created() {
            // this.$loading({show:true})
            // this.$message();
        },
        methods: {

        },
        async setup() {
            let tabsList = ref([]);
            //记得ref之后的数据需要用.value的方式去修改，要不然就会把vue自带的监控属性覆盖
            let tabList = ref([]);
            let begin =0;
            let count = 10;
            let textTS= ref('加载中...');
            // 请求tabs切换数据
            await gettab().then(res => {
                if(res.status==200){
                    tabsList.value =res.data;
                    tabsList.value.push({article_label:'设计'});
                    tabsList.value.map((item,i)=>{
                        i==0?item.hot=true : item.hot=false;
                    })
                    getTab();
                }else{

                }
            });
            //请求tabs选中是的数据
            function getTab(text){
                // console.log(begin,begin*10);
                let loadingServe = loading();
                // return;
                getTabListx({article_label:text?text:tabsList?.value[0].article_label,begin:begin*10,count:count}).then(res=>{
                    if(res.status==200){
                        if(res.data.length==0){
                            if(tabList.value.length==0){
                                tabList.value=[];
                            }
                            textTS.value = '没有更多了';
                        }else{
                            textTS.value = '加载中...';
                            res.data.map((item)=>{
                                item.article_date = rTime(item.article_date);
                            });
                            begin++;
                            tabList.value =tabList.value.concat(res.data);
                        }

                        loadingServe.close();
                    }
                })
            }
            function tabscont(text){
                getTab(text)
            }
            //切换tabs
            function tabsitem(text) {
                tabList.value=[];
                textTS.value = '加载中...';
                tabsList.value.forEach(item => {
                    item.article_label == text ? item.hot = true : item.hot = false;
                })
                begin =0;

                getTab(text);
            }

            return {
                tabsList,
                tabsitem,
                tabList,
                getTab,
                tabscont,
                textTS
            }
        }

    }
</script>

<style scoped lang="less">
    .technology-box{
        width:100%;
        height:100%;
        overflow:hidden;
        display:flex;
        flex-direction: column;
    }
</style>