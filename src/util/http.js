import Axios from 'axios';

//引入axios
import {createTimestamp} from '../api'
import {loading} from '../util/message.js';

let needLoadingRequestCount = 0;//计数
let loadingServe;//保存loading对象
//请求拦截
Axios.interceptors.request.use(config=>{

    if((config.method=='GET'||config.method=='get')&&config.GetShow){
        config.url = config.url+"?"+createTimestamp();
    }
    if(config.loading){
        //创建一个loading
        loadingServe = loading();

        needLoadingRequestCount++
    }
    return config;
},error=>{
    //清除loading，返回失败参数
    loadingServe.close();
    return Promise.reject(error.response);
})

//响应拦截
Axios.interceptors.response.use(response=>{
        //没有傻逼的登录
        if(response.config.loading){
            needLoadingRequestCount--;
            needLoadingRequestCount=needLoadingRequestCount<0?0:needLoadingRequestCount;

            if(needLoadingRequestCount==0){
                //清除loading
                loadingServe.close();
            }
        }

        return response.data

    },
    error=>{
        //有loading就执行下方的操作
        if(loadingServe){
            needLoadingRequestCount--;
            needLoadingRequestCount = needLoadingRequestCount < 0 ? 0 : needLoadingRequestCount;
            needLoadingRequestCount == 0 && loadingServe && loadingServe.close(); //关闭加载动画
        }

        return Promise.reject(error.response);
    })

export default  Axios;