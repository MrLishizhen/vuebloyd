//loading.js loading组件的注册文件
import _loading from "../components/loading/index.vue"
import _meassage from '../components/message/index.vue'
import {createApp} from "vue"
export function loading() {
    // 创建一个div包裹loading元素
    let div = document.createElement("div");
    // 将创建好的div插入到body中
    // document.querySelector("body").appendChild(div);
    // 在创建好的div中重新实例化一个vue实例
    let loadingEl = createApp(_loading, {parentdom: div});
    // 保存loading对象
    let loadingVm = loadingEl.mount(div);
    // 显示loading

    loadingVm.init();
    return {
        close:loadingVm.hidden,
    }
    // return () => {
    //     // 销毁实例
    //     loadingEl.unmount(div);
    //     // 销毁loading
    //     // loadingVm.hidden();
    // };
}

/*
* data{}
* text:文字
* time:时间
* */
export function message(data){
    let div=document.createElement('div');
    // let loadingEl = createApp(_loading, {parentdom: div});
    let messageEl = createApp(_meassage);

    let messageVm = messageEl.mount(div);
    messageVm.init(data);
    setTimeout(()=>{
        messageVm.close();

    },data?.time||3000)

    return{}
    // setTimeout(()=>{
    //     messageEl.unmount();
    // },data?.time||3000);

}

export default {
    install: (app) => {
        // 挂载到this.$loading中
        app.config.globalProperties.$loading = loading;

        app.config.globalProperties.$message = message;

    }
}
