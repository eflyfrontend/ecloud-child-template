/*
 * @Author: your name
 * @Date: 2021-04-01 10:18:22
 * @LastEditTime: 2021-06-11 11:08:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exclusive-cloud-admin\user\src\main.ts
 */
import './public-path.ts'
import Vue from 'vue'
import App from './App.vue'
import routes from './router'
// import { store as commonStore } from '../../common'
import store from './store'
import VueRouter from 'vue-router'
import beforeEach from '../../common/src/assets/js/routerBeforeEach'


/**
 * 父子项目传递通讯
 */
import SharedModule from "@/shared";


import components from "@/assets/js/components/components";


// jq时间选择插件
import '../../common/src/assets/plugins/jquery-ui-rj/themes/rjcloudpc-blue/jquery-ui.min.css';
import '../../common/src/assets/plugins/jquery-ui-rj/themes/rjcloudpc-blue/theme.css';
import '../../common/src/assets/plugins/jquery-ui-rj/jquery-ui.min.js';
import '../../common/src/assets/plugins/jquery-ui-rj/datepicker-zh-CN.js';
import '../../common/src/assets/plugins/jquery-ui-timepicker/jquery-ui-timepicker-addon.js';
import '../../common/src/assets/plugins/jquery-ui-timepicker/jquery-ui-timepicker-addon.css';
// 月份时间选择插件
import '../../common/src/assets/plugins/laydate/theme/default/laydate.css';


Vue.config.productionTip = false;

let router = null;
let instance: any = null;
const _window: any = window;

import projectComponent from '../../common/index'
// @ts-ignore
import efly from 'efly-ui-encrypt';
// @ts-ignore
import exclusiveCloud from "exclusive-cloud-encrypt"


import authority from '@/../../common/src/assets/authority/authority';


authority.init(Vue);
efly.install(Vue, '251EBD28A5193A8BEDD4FE15ABBB03F2C260388094352DCC7006969B8B3C8FA6')
exclusiveCloud.install(Vue)
components.install(Vue)
// projectComponent.install(Vue)

// 组件总的样式
import '@/assets/sass/index.scss';

function render({container, routerBase}: any = {}) {
    router = new VueRouter({
        base: _window['__POWERED_BY_QIANKUN__'] ? routerBase : process.env.BASE_URL,
        mode: 'history',
        routes
    })
    // 全局守卫
    beforeEach(router, Vue)
    
    instance = new Vue({
        router,
        store,
        render: (h) => h(App)
    }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!_window['__POWERED_BY_QIANKUN__']) {
    // 这里是子应用独立运行的环境，实现子应用的登录逻辑
    // 独立运行时，也注册一个名为global的store module
    // commonStore.globalRegister(store)
    // 模拟登录后，存储用户信息到global module
    const userInfo = {name: '我是独立运行时名字叫张三'} // 假设登录后取到的用户信息
    // store.commit('global/setGlobalState', { user: userInfo })
    render()
}

export async function bootstrap(props: any) {
    console.log('[vue] vue app bootstraped', props);
    // props.authority.init(Vue)
    efly.layer.init(props.window)
    if (props.platform === 'ecp') {
        Vue.prototype.$authority = props.authority.authority;
    } else {
        Vue.prototype.$authority = props.authority.default.authority;
    }
    Vue.prototype.$platform = props.platform;
    Vue.prototype.$loadingImg = props.loadingImg;
}

export async function mount(props: any) {
    console.log('[vue] props from main framework', props)
    // commonStore.globalRegister(store, props)
    const {shared = SharedModule.getShared()} = props;
    Vue.prototype.shared = shared
    SharedModule.overloadShared(shared);
    render(props)
}

export async function unmount() {
    instance.$destroy()
    instance.$el.innerHTML = ''
    instance = null
}
