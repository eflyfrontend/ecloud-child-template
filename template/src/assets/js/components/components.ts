import AdminFooter from "@/components/common/footer/footer.vue";
import MultiSelect from "@/components/common/multi-select/multi-select.vue";
import MultiSelectGroup from "@/components/common/multi-select-group/multi-select-group.vue";
import ModifyInfo from "@/components/common/modify-info/modify-info.vue";

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install: any = function (Vue: any) {
    // 判断是否可以安装
    if (install['installed']) return
    // 遍历注册全局组件
    Vue.component('AdminFooter', AdminFooter);
    Vue.component('MultiSelect', MultiSelect);
    Vue.component('MultiSelectGroup', MultiSelectGroup);
    Vue.component('ModifyInfo', ModifyInfo);
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window['Vue']) {
    install(window['Vue'])
}

export default {
    install,
}
