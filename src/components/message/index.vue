<template>
    <teleport v-if="show" to="body">
        <div class="message">
            <span class="message-text" v-html="text"></span>
        </div>
    </teleport>
</template>

<script>
    import {ref} from 'vue'

    export default {
        name: "message",
        data() {
            return {
                text: '',
                show: false,
            }
        },
        methods: {
            init(data) {
                this.text = data?.text || '这是一段提示...';
                this.show = true;
            },
            close() {
                this.show = false;
            }
        }
        // setup(){
        //     let show = ref(false);
        //     let text = ref('');
        //     function init(data){
        //         text=data?.text||'这是一段提示...';
        //         show=true;
        //     }
        //     function close(){
        //         show=false;
        //     }
        //     return{
        //         show,
        //         text,
        //         init,
        //         close,
        //     }
        // }
    }
</script>

<style scoped lang="less">
    .message {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        /*background: rgba(0, 0, 0, .1);*/
        text-align: center;
        z-index: 9999;
        .message-text {
            box-sizing: border-box;
            border-radius: 0.05rem;
            padding:0.1rem;
            max-width: 2rem;
            background-color: white;
            position:absolute;
            left:50%;
            top:50%;
            transform: translate(-50%,-50%);
            color:#999;
            box-shadow: 1px 0px 5px #e0e0e0;
        }
    }
</style>