/**
 * 初始化用户数据
 * @param list {Array} vm列表数据
 * @param serverTime {String} 请求服务器时间
 * @param canUseHouseList {Array} 可用节点列表
 */
function init(list: any, authority: any) {
    list.forEach((item: any, index: any) => {
        item.init = {
            status: {
                selected: false,
            }
        };
        operateLimit(item, authority);
    });
    return list;
}

/**
 * 操作限制
 * @param item
 */
function operateLimit(item: any, authority: any) {
    let operate = {
        baseOperation: {
            label: '基本操作', icon: 'icon-base-operate', show: true, data: {
                // login: {label: '账号登录', icon: '', show: authority.EUser.login, disabled: false, error: ''},
                freeze: {label: '冻结账号', icon: '', show: authority.EUser.freeze, disabled: false, error: ''},
                unfreeze: {label: '解冻账号', icon: '', show: authority.EUser.unfreeze, disabled: false, error: ''},
                logout: {label: '注销账号', icon: '', show: authority.EUser.logout, disabled: false, error: ''},
                changeEmail: {label: '更换账号邮箱', icon: '', show: authority.EUser.changeEmail, disabled: false, error: ''},
            }
        },
        accountMnagement: {
            label: '账号管理', icon: 'icon-account-operate', show: true, data: {
                accountInfo: {label: '账号信息', icon: '', show: authority.EUser.accountInfo, disabled: false, error: ''},
                resetPassword: {
                    label: '修改密码',
                    icon: '',
                    show: authority.EUser.resetPassword,
                    disabled: false,
                    error: ''
                },
                // activationEmail: {
                //     label: '激活邮箱',
                //     icon: '',
                //     show: authority.EUser.activationEmail,
                //     disabled: false,
                //     error: ''
                // },
                clientLog: {label: '客户日志', icon: '', show: authority.EClientLog.list, disabled: false, error: ''},
                // changeAdmin: {label: '转为后台用户', icon: '', show: authority.EUser.changeAdmin, disabled: false, error: ''},
                setPermission: {
                    label: '设置角色',
                    icon: '',
                    show: authority.EUser.setPermission,
                    disabled: false,
                    error: ''
                },
                setDepartment: {
                    label: '设置部门',
                    icon: '',
                    show: authority.EUser.setDepartment,
                    disabled: false,
                    error: ''
                },
                setWork: {
                    label: '审批设置',
                    icon: '',
                    show: authority.EUser.flowSetting,
                    disabled: false,
                    error: ''
                },
            },
        },
        resource: {
            label: '所属资源', icon: 'icon-virtual-resource', show: true, data: {
                vm: {label: '所属云主机', icon: '', show: authority.EVm.list, disabled: false, error: ''},
                mirror: {label: '所属镜像', icon: '', show: authority.EImage.list, disabled: false, error: ''},
                disk: {label: '所属磁盘', icon: '', show: authority.EDisk.list, disabled: false, error: ''},
                snap: {label: '所属快照', icon: '', show: authority.ESnap.fixedSnapList, disabled: false, error: ''},
                ip: {label: '所属IP', icon: '', show: authority.EIp.list, disabled: false, error: ''},
                vpc: {label: '所属VPC', icon: '', show: authority.EVpc.list, disabled: false, error: ''},
                vswitch: {label: '所属交换机', icon: '', show: authority.EVswitch.list, disabled: false, error: ''},
                route: {label: '所属路由', icon: '', show: authority.ERouteTable.list, disabled: false, error: ''},
                nat: {label: '所属nat网关', icon: '', show: authority.ENat.list, disabled: false, error: ''},
                slb: {label: '所属负载均衡', icon: '', show: authority.ESlb.list, disabled: false, error: ''},
            }
        },
        charges: {
            label: '资费操作', icon: 'icon-caiwuguanli', show: true, data: {
                // addCashMoney: {label: '现金充值', icon: '', show: authority.ECash.recharge, disabled: false, error: ''},
                addCashMoney: {label: '余额充值', icon: '', show: authority.EVoucher.add, disabled: false, error: ''},
                // addVoucher: {label: '添加代金券', icon: '', show: authority.EVoucher.add, disabled: false, error: ''},
                recycleVoucher: {label: '回收余额', icon: '', show: authority.EVoucher.recycle, disabled: false, error: ''},
                dailyBills: {label: '每日账单', icon: '', show: authority.EDailyBills.list, disabled: false, error: ''},
                chargesRecord: {
                    label: '资费记录',
                    icon: '',
                    show: authority.EChargesRecord.list,
                    disabled: false,
                    error: ''
                },
                // cashRecords: {label: '现金记录', icon: '', show: authority.ECash.list, disabled: false, error: ''},
                voucherRecords: {label: '余额充值记录', icon: '', show: authority.EVoucher.list, disabled: false, error: ''},
                // voucherRecords: {label: '代金券记录', icon: '', show: authority.EVoucher.list, disabled: false, error: ''},
            }
        },
        other: {
            // label: '其他操作', icon: 'icon-account-operate', show: true, data: {
            //     discount: {label: '折扣管理', icon: '', show: authority.EDiscount.list, disabled: false, error: ''},
            // }
        }
    }
    if (item.isFreeze === 1) {
        operate.baseOperation.data.freeze.show = false;
    } else {
        operate.baseOperation.data.unfreeze.show = false;
    }
    if (item.userType === 'customer') {
        operate.accountMnagement.data.setDepartment.show = false;
        operate.accountMnagement.data.setPermission.show = false;
    } else {
        // operate.accountMnagement.data.changeAdmin.show = false;
    }

    operate = judgeOperate(operate, item);
    operate = judgeAdmin(operate, item);
    item.init['operate'] = operate;

}

function judgeOperate(operate: any, item: any) {
    let status = false;
    for (let i in operate) {
        let flag = false;
        for (let j in operate[i].data) {
            if (operate[i].data[j].show) {
                flag = true;
            }
        }
        operate[i].show = flag;
        if (operate[i].show) {
            status = true;
        }
    }
    item['init'].status.operate = status;
    return operate;
}


function judgeAdmin(operate: any, item: any) {
    if (item.accountName === 'admin') {
        operate.baseOperation.data.freeze = false;
        operate.baseOperation.data.unfreeze = false;
        operate.baseOperation.data.logout = false;
        operate.accountMnagement.data.setPermission = false;
    }
    return operate
}

export default {
    init,
}
