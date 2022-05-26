/*
 * @Author: your name
 * @Date: 2021-04-01 10:18:22
 * @LastEditTime: 2021-04-26 16:23:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exclusive-cloud-admin\user\src\router\index.ts
 */
import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import demoMangeRouter from "@/router/modules/demoManage";
// import pledgeMoneyRouter from "@/router/modules/pledgeMoney";

// @ts-ignore
import routerPush from '../../../common/src/assets/js/router'

let allRouter = {
  demoMangeRouter
  // pledgeMoneyRouter,
}

// 重置路由跳转
VueRouter.prototype.push = routerPush.prototype.push;
Vue.use(VueRouter);

let routes: RouteConfig[] = [];

Object.values(allRouter).forEach((route: any) => {
  if (!route) {
    return
  }
  for (let i in route) {
    routes.push(route[i])
  }
})


// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes,
// });

export default routes;
