import {getnav} from '../api/layout.js';
import {routerlink} from "../api/index.js"
export default {
    namespaced: true,
    state: {
        routerLink:[],
    },
    mutations: {
        init(state,data){
            state.routerLink = data;
        }
    },
    actions: {
        init({state,commit}){
            return new Promise((resolve,reject)=>{
                getnav().then(res=>{
                    if(res.status==200){

                        let routerData = res.data;
                        commit('init',res.data);
                        resolve(routerData);
                    }else{

                    }
                });
            })
        }
    },
    modules: {
    }
}