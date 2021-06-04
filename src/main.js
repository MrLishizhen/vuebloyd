import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./permission";

import "@/assets/defin"
import "@/assets/defin/index.less"
//引入iconpack
import {install} from '@icon-park/vue-next/es/all';
import '@icon-park/vue-next/styles/index.css';
//导入路由处理器
import "./permission"

//导入自己本地封装的包
import lszFZ from '@/util/message.js'

const app = createApp(App).use(store).use(router).use(lszFZ);


//注入iconpack
install(app, 'i');

app.mount('#app')

