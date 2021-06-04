<template>
    <div class="gywm">
        <div class="gywm-box">
            <h3>关于我们：</h3>
            <p>我们是谁？</p>
            <p>我们是前端和UI的结合体</p>
            <p>嗯，这样说其实不对</p>
            <h3>这个作品为什么存在？</h3>
            <p>第一个呢，是因为我们有着共同的目的。</p>
            <p>我们想锻炼下自己的专业技能。</p>
            <p>第二呢，我们想构建一个内部的平台，可以记录一些有趣的事。</p>
            <h3>你能从这里得到什么？</h3>
            <p>日常的分享</p>
            <p>我们的学习经历</p>
<!--            <h3>我们会日常维护吗？</h3>-->
            <h3>介绍下自己</h3>
            <p>这个作品是由一名前端和一个UI共同制作完成的。</p>
            <p>当你看到这个移动端的界面，嗯不要怀疑</p>
            <p>这个巨丑的界面是前端写的，</p>
            <p>其实重点是WEB端，不过那个还没有制作完成。</p>
            <p>由于vue3发布的原因，所以前端想试试水。于是就有了这个有点丑的移动端，不过后期会慢慢维护的。</p>
            <p class="zuozhe">生命不息，奋斗不止。谨记~</p>
            <p class="zuozhe">
                <span>秋雨~前端</span>
                <span>Neil~UI</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "gywm"
    }
</script>

<style scoped>
    .gywm{
        width:100%;
        height:100%;
        padding:0.25rem;
        box-sizing: border-box;
        display:flex;
        flex-direction: column;
        text-align:left;

    }
    h3{
        font-size:0.16rem;

    }
    p{
        font-size:0.14rem;
        line-height:2;
    }
    .zuozhe{
        margin-top:0.1rem;
        text-align:right;
    }
    .zuozhe span{
        margin-left:0.1rem;
    }
</style>