// import router from "@/router/index.js"
// import store from "@/store/index.js"
// import {routerlink} from '@/api/index.js'
// router.beforeEach(async (to, from, next) => {
//
//     if(to.path=='/Layout/home'){
//         if (store.state.navRouter.routerLink.length == 0) {
//
//             try{
//                 let routerLink = await store.dispatch("navRouter/init");
//                 let Router = await routerlink(routerLink);
//                 router.addRoute(Router);
//                 next({...to, replace: true});
//             }catch(error){
//                 console.log(error);
//                 next('/Layout/home');
//
//                 // next('/login');
//             }
//
//         } else {
//             next();
//         }
//     }else{
//         next();
//     }
//
//
// });
//
//
// router.afterEach((to, from) => {
// })