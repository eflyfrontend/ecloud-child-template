import {Component, Prop, Vue, Emit} from 'vue-property-decorator';

// @ts-ignore
import Service from '../../../../../common/src/assets/service/service';
import common from "../../../../../common/src/assets/js/common";

declare var $: any;

@Component({
    components: {
    }
})
export default class demoManage extends Vue {
    private tabs: any = 'voucherManger';
    private voucherList: any = [];
    private $platform: any;
    private isBlock: boolean = false;
    private money!: number;

    /**列表查询参数 */
    private params: any = {
        customerNameLike: '',
        customerType: 'customer',
        departmentName: '',
        managerTrueName: '',
        about: '',
        order: 'desc',
        orderFields: 'createTime',
        billCode: '',
        createTimeStart: '',
        createTimeEnd: '',
        userID: '',
    }

    private page: any = {
        total: 0,
        start: 0,
        length: 10,
    }

    private startTime: any = "";
    private endTime: any = '';


    /**页面状态 */
    private status: any = {
        data: 'loading',
        moneyLoading: 'loading',
    }

    private chargeTypeList: any = [
        '全部', '故障补偿', '充值赠送', '内部使用测试', '活动', '客户测试', '其他',
    ];


    private component: any = {
        addCashMoney: false,
    }


    /**用户回调 */
    private userChange($event: any) {
        this.params.customerNameLike = $event.email;
    }


    /**切换导航 */
    private changeTabs(value: any) {
        this.tabs = value;
        this.page.total = 0;
        this.page.length = 10;
        this.page.start = 0;
        this.getList();
        if (this.tabs === "voucherManger") {

        } else if (this.tabs === "voucherRecovery") {

        }
    }

    /**选择用户类型 */
    private changeCustomerType() {
        this.isBlock = !this.isBlock;
        this.params.customerType = this.isBlock ? 'customer' : '';
        this.getList();
    }


    /**
     *下来框选择回调
     * @private
     * @param {*} $event
     * @memberof voucherManger
     */
    private labelChange(type: any, $event: any) {
        switch (type) {
            case 'chargeTypeList':
                this.params.about = $event.value === '全部' ? '' : $event.value;
                this.getList();
                break;
        }
    }


    private $router: any;
    private $route: any;
    private $layer: any;

    private created() {
        this.params.userID = common.getUserID(this.$platform)
        if (this.$route.params.query) {
            if (this.$route.query.screen === 'customerNameLike') {
                // @ts-ignore
                this.params[this.$route.query.screen] = this.$route.params.query;
            }
        }
    }

    private mounted() {
        this.getList();
    }


    /**切页 */
    private changePage($event: any) {
        this.page.length = $event.length;
        this.page.start = $event.start;
        this.getList();
    }


    private selectTimeChange($event: any) {
        this.params.createTimeStart = $event.startTime;
        this.params.createTimeEnd = $event.endTime;
    }

    /**
     * 清除筛选
     */
    private clearScreen() {
        this.params.createTimeStart = '';
        this.params.createTimeEnd = '';
        this.params.about = "";
        this.params.managerTrueName = "";
        this.params.departmentName = "";
        this.params.billCode = "";
        this.params.customerNameLike = "";
        this.chargeTypeList = [...this.chargeTypeList];
        this.getList();

    }


    /**
     * 子组件回调
     */
    private childrenCallback($event: any) {
        switch ($event) {
            case 'update':
            case 'success':
                this.getList();
                break;
            case 'error':
                break;
        }
    }


    /**按钮操作 */
    private operateSelect($event: any) {
        switch ($event) {
            case 'create':
                this.component.addCashMoney = true;
                break;
        }
    }


    /**获取路由表列表数据 */
    private getList(type: any = "query") {
        let params = this.params;
        let extraParm = {
            limitStart: this.page.start,
            limitCount: this.page.length,
            billType: this.tabs === "voucherManger" ? 'recharge' : 'refund'
        }
        if (type === 'export') {
            Service.exportDoc('/user/bill/queryCouponBillList', params);
        } else {
            this.status.data = 'loading';
            Object.assign(params, extraParm);
            setTimeout(()=>{
                let res = {"data":{"count":90,"list":[{"about":"故障补偿","accountName":"guanqc","afterDiscountPrice":"0.00","billCode":"REC_220524092616_01","bit":0,"cUserID":"ADMIN_220407102514_01","cashMoney":"0.00","couponMoney":"11.00","createTime":"2022-05-24 09:26:16","deleteTime":null,"departmentID":61,"departmentName":"专属云项目","email":"guanqc@efly.cc","id":31494,"isCancel":0,"isDelete":0,"isFreeze":0,"isSafeLogin":0,"isTest":0,"orderCode":"","originalPrice":"0.00","payType":"coupon","phone":"13652052052","remark":"","source":"","trueName":"关启城测试","type":"recharge","updateTime":"2022-05-24 09:26:16","userCreateTime":"2022-04-07 10:25:16","userID":"ADMIN_220407102514_01","userType":"admin"},{"about":"故障补偿","accountName":"eflyqgs","afterDiscountPrice":"0.00","billCode":"REC_220523181212_36","bit":0,"cUserID":"ADMIN_220408110910_01","cashMoney":"0.00","couponMoney":"1.00","createTime":"2022-05-23 18:12:12","deleteTime":null,"departmentID":1,"departmentName":"专属云总部","email":"470686336@qq.com","id":31443,"isCancel":0,"isDelete":0,"isFreeze":0,"isSafeLogin":0,"isTest":0,"orderCode":"","originalPrice":"0.00","payType":"coupon","phone":"18925940587","remark":"","source":"","trueName":"秦国森","type":"recharge","updateTime":"2022-05-23 18:12:12","userCreateTime":"2022-04-08 11:09:13","userID":"ADMIN_220408110910_01","userType":"admin"},{"about":"","accountName":"eflyqgs","afterDiscountPrice":"0.00","billCode":"REC_220523181017_35","bit":0,"cUserID":"ADMIN_220408110910_01","cashMoney":"0.00","couponMoney":"1.00","createTime":"2022-05-23 18:10:17","deleteTime":null,"departmentID":1,"departmentName":"专属云总部","email":"470686336@qq.com","id":31441,"isCancel":0,"isDelete":0,"isFreeze":0,"isSafeLogin":0,"isTest":0,"orderCode":"","originalPrice":"0.00","payType":"coupon","phone":"18925940587","remark":"","source":"","trueName":"秦国森","type":"recharge","updateTime":"2022-05-23 18:10:17","userCreateTime":"2022-04-08 11:09:13","userID":"ADMIN_220408110910_01","userType":"admin"},{"about":"","accountName":"yonghu999","afterDiscountPrice":"0.00","billCode":"REC_220523162414_34","bit":0,"cUserID":"ADMIN_220519175527_01","cashMoney":"0.00","couponMoney":"1.00","createTime":"2022-05-23 16:24:14","deleteTime":null,"departmentID":57,"departmentName":"网络","email":"555@qq.com","id":31403,"isCancel":0,"isDelete":0,"isFreeze":0,"isSafeLogin":0,"isTest":0,"orderCode":"","originalPrice":"0.00","payType":"coupon","phone":"13122222222","remark":"1","source":"","trueName":"真实姓名","type":"recharge","updateTime":"2022-05-23 16:24:14","userCreateTime":"2022-05-19 17:55:30","userID":"ADMIN_220519175527_01","userType":"admin"},{"about":"","accountName":"admin@admin.com","afterDiscountPrice":"0.00","billCode":"REC_220523161949_15","bit":0,"cUserID":"EW_220328200819_0a","cashMoney":"0.00","couponMoney":"1.00","createTime":"2022-05-23 16:19:49","deleteTime":null,"departmentID":null,"departmentName":null,"email":"admin@admin.com","id":31372,"isCancel":0,"isDelete":0,"isFreeze":0,"isSafeLogin":0,"isTest":0,"orderCode":"","originalPrice":"0.00","payType":"coupon","phone":"18568887953","remark":"1","source":"","trueName":"admin","type":"recharge","updateTime":"2022-05-23 16:19:49","userCreateTime":"2022-03-28 20:08:23","userID":"EW_220328200819_0a","userType":"customer"},{"about":"","accountName":"eflyqgs","afterDiscountPrice":"0.00","billCode":"REC_220523161949_0a","bit":0,"cUserID":"ADMIN_220408110910_01","cashMoney":"0.00","couponMoney":"1.00","createTime":"2022-05-23 16:19:49","deleteTime":null,"departmentID":1,"departmentName":"专属云总部","email":"470686336@qq.com","id":31361,"isCancel":0,"isDelete":0,"isFreeze":0,"isSafeLogin":0,"isTest":0,"orderCode":"","originalPrice":"0.00","payType":"coupon","phone":"18925940587","remark":"1","source":"","trueName":"秦国森","type":"recharge","updateTime":"2022-05-23 16:19:49","userCreateTime":"2022-04-08 11:09:13","userID":"ADMIN_220408110910_01","userType":"admin"},{"about":"","accountName":"2931315852@qq.com","afterDiscountPrice":"0.00","billCode":"REC_220523161949_26","bit":0,"cUserID":"EW_210713102132_01","cashMoney":"0.00","couponMoney":"1.00","createTime":"2022-05-23 16:19:49","deleteTime":null,"departmentID":null,"departmentName":null,"email":"2931315852@qq.com","id":31389,"isCancel":0,"isDelete":0,"isFreeze":0,"isSafeLogin":0,"isTest":0,"orderCode":"","originalPrice":"0.00","payType":"coupon","phone":"18814127442","remark":"1","source":"","trueName":"","type":"recharge","updateTime":"2022-05-23 16:19:49","userCreateTime":"2021-07-13 10:21:32","userID":"EW_210713102132_01","userType":"customer"},{"about":"","accountName":"guanqc","afterDiscountPrice":"0.00","billCode":"REC_220523161949_0b","bit":0,"cUserID":"ADMIN_220407102514_01","cashMoney":"0.00","couponMoney":"1.00","createTime":"2022-05-23 16:19:49","deleteTime":null,"departmentID":61,"departmentName":"专属云项目","email":"guanqc@efly.cc","id":31362,"isCancel":0,"isDelete":0,"isFreeze":0,"isSafeLogin":0,"isTest":0,"orderCode":"","originalPrice":"0.00","payType":"coupon","phone":"13652052052","remark":"1","source":"","trueName":"关启城测试","type":"recharge","updateTime":"2022-05-23 16:19:49","userCreateTime":"2022-04-07 10:25:16","userID":"ADMIN_220407102514_01","userType":"admin"},{"about":"","accountName":"630880675@qq.com","afterDiscountPrice":"0.00","billCode":"REC_220523161949_21","bit":0,"cUserID":"EW_210816163242_01","cashMoney":"0.00","couponMoney":"1.00","createTime":"2022-05-23 16:19:49","deleteTime":null,"departmentID":null,"departmentName":null,"email":"630880675@qq.com","id":31384,"isCancel":0,"isDelete":0,"isFreeze":0,"isSafeLogin":0,"isTest":0,"orderCode":"","originalPrice":"0.00","payType":"coupon","phone":"15627235911","remark":"1","source":"","trueName":"","type":"recharge","updateTime":"2022-05-23 16:19:49","userCreateTime":"2021-08-16 16:32:42","userID":"EW_210816163242_01","userType":"customer"},{"about":"","accountName":"446848531@qq.com","afterDiscountPrice":"0.00","billCode":"REC_220523161949_27","bit":0,"cUserID":"EW_210708165007_01","cashMoney":"0.00","couponMoney":"1.00","createTime":"2022-05-23 16:19:49","deleteTime":null,"departmentID":null,"departmentName":null,"email":"446848531@qq.com","id":31390,"isCancel":0,"isDelete":0,"isFreeze":0,"isSafeLogin":0,"isTest":0,"orderCode":"","originalPrice":"0.00","payType":"coupon","phone":"13333333334","remark":"1","source":"","trueName":"","type":"recharge","updateTime":"2022-05-23 16:19:49","userCreateTime":"2021-07-08 16:50:08","userID":"EW_210708165007_01","userType":"customer"}],"money":{"cashMoney":"0.00","couponMoney":"100025109.00"}},"protocol":"default","ret":2,"uuid":"9a1299e4-0b3d-703b-597a-c9a40ddd80b4"};
                let data = res.data;
                this.page.total = data.count;
                this.voucherList = data.list;
                this.money = data.money;
                this.status.moneyLoading = 'complete';
                this.status.data = this.voucherList.length > 0 ? 'havedata' : 'nodata';
            }, 1000);
        }

    }


}



