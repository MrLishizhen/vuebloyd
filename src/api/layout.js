import Axios from '../util/http.js';

export function getnav(data) {
    return Axios({
        url: '/home/nav',
        method: 'get',
        data: data,
        loading: true,
        GetShow:true
    })
}

export function gettab(){
    return Axios({
        url: '/home/getlb',
        method: 'get',
        loading: true,
        GetShow:true
    })
}

export function getTabList(data){
    return Axios({
        url: '/home/getList',
        method: 'get',
        params:data,
        loading: false,
        GetShow:true
    })
}
//请求文章分享中的界面
export function getTabListx(data){
    return Axios({
        url: '/jsfx/getList',
        method: 'get',
        params:data,
        loading: false,
        GetShow:true
    })
}
//获取文章详情
export function getarticles(data){
    return Axios({
        url: '/home/articlexqs',
        method: 'get',
        params:data,
        loading: false,
        GetShow:true
    })
}