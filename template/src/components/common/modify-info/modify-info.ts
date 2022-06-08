/*
 * @Author: your name
 * @Date: 2021-04-16 09:44:45
 * @LastEditTime: 2021-06-19 17:57:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exclusive-cloud-admin\common\src\components\modify-info\modify-info.ts
 */
import {Component, Prop, Vue, Emit, Watch} from 'vue-property-decorator';
import service from "../../../../../common/src/assets/service/service";

@Component
export default class ModifyInfo extends Vue {
    @Prop({default: () => 'input'}) private type!: any;              // 类型 {String} all:全部
    @Prop({default: () => ''}) private resource!: any;
    @Prop({default: () => ''}) private data!: any;
    @Prop({default: () => '请输入别名，128个字符以内'}) private placeholder: any;

    // @Prop({default: () => false}) private alias!: boolean;
    // @Prop({default: () => false}) private isSecurityGroup!: boolean;
    // @Prop({default: () => false}) private isTextArea!: boolean;


    private newAlias: any = "";
    private newRemark: any = "";

    private url: any = {
        vm: "/resource/vm/updateVMInfo",
        disk: "/resource/disk/updateDiskInfo",
        snap: "/resource/snap/updateSnapInfo",
        mirror: "/resource/image/updateImageInfo",
        ip: "/resource/ip/updateIPInfo",
        vpc: "/resource/vpc/updateVPCInfo",
        vswitch: "/resource/vswitch/updateVSwitchInfo",
        routeTable: '/resource/routeTable/updateRouteTableInfo',
        nat: '/resource/nat/updateNATInfo',
        slb: '/resource/slb/updateSLBInfo',
        securityGroup: "/resource/securityGroup/update",
        strategy: "/resource/accessControlEntryPackage/updatePackage",
        projectList: "",
        infoSet: "",
    }


    private popover: any = {
        show: false
    };

    public $layer: any;

    @Watch('alias', {immediate: true})
    private watchAlias(value: any) {
    }

    @Watch('type', {immediate: true})
    private watchType(value: any) {
    }

    @Watch('data', {immediate: true})
    private watchData(value: any) {
    }

    private created() {
        let body = document.getElementsByTagName('body')[0];
        body.addEventListener('click', () => {
            this.popover.show = false;
            this.$forceUpdate();
        })
    }

    private popoverChange($event: any) {
        let delay = setTimeout(() => {
            this.popover.show = $event;
            if (this.popover.show) {
                if (this.resource === 'strategy') {
                    this.newAlias = this.data.packageName;
                } else {
                    this.newAlias = this.data.about;
                    this.newRemark = this.data.remark;
                }

            }
            clearTimeout(delay)
        }, 300)
    }

    private click($event: any) {
        // this.popover.show = true;
        // $event.stopPropagation();
    }


    private popoverCancel(type: any) {
        this.popover.show = false;
    }

    private popoverSubmit() {
        if (this.resource === 'strategy') {
            this.strategySubmit();
        } else {
            this.submit();
        }
    }

    private submit() {
        let layerIndex = this.$layer.load({message: "正在修改" + (this.type === 'input' ? '别名' : '描述') + "中..."})
        let params: any = {
            uuid: this.data.uuid,
            userID: this.data.userID,
        }
        if (this.type === 'input') {
            params['about'] = this.newAlias;
        } else {
            params['remark'] = this.newRemark;
        }
        this.popover.show = false;
        service.request(this.url[this.resource], params, 'original').then((res: any) => {
            this.$layer.close(layerIndex)
            this.$layer.msg('修改成功...', {type: 'success'});
            this.$emit('success', this.newAlias)
        }).catch((error: any) => {
            this.$layer.close(layerIndex)
            this.$layer.msg(error.errorMsg, {type: 'error'});
        })
    }

    private strategySubmit() {
        let layerIndex = this.$layer.load({message: "正在修改" + (this.type === 'input' ? '别名' : '描述') + "中..."})
        let params: any = {
            packageUUID: this.data.uuid,
            userID: this.data.userID,
        }
        if (this.type === 'input') {
            params['packageName'] = this.newAlias;
        } else {
            params['remark'] = this.newRemark;
        }
        this.popover.show = false;
        service.request(this.url[this.resource], params, 'original').then((res: any) => {
            this.$layer.close(layerIndex)
            this.$layer.msg('修改成功...', {type: 'success'});
            this.$emit('success')
        }).catch((error: any) => {
            this.$layer.close(layerIndex)
            this.$layer.msg(error.errorMsg, {type: 'error'});
        })
    }
}
