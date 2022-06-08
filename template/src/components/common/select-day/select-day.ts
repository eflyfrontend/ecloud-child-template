import {Component, Prop, Vue, Emit, Watch} from 'vue-property-decorator';
import index from "@/store";

@Component
export default class SelectDay extends Vue {
    @Prop({default: () => 'select'}) private type!: any;
    @Prop({default: () => 'moneyMessageConfig'}) private moduleType!: any;
    @Prop({default: () => ''}) private size!: any;
    @Prop({default: () => 'left'}) private align!: any;
    @Prop({default: () => false}) private multi!: any;
    @Prop({default: () => false}) private disabled!: any;
    @Prop({default: () => 'front'}) private searchType!: any;
    @Prop({default: () => ''}) private data!: any;
    @Prop({default: () => ''}) private value: any;
    @Prop({default: () => ''}) private prop!: any;
    @Prop({default: () => 'value'}) private main!: any;
    @Prop({default: () => ''}) private minor!: any;
    @Prop({default: () => ''}) private children!: any;
    @Prop({default: () => ''}) private width!: any;
    @Prop({default: () => '200px'}) private height!: any;
    @Prop({default: () => 'auto'}) private placement!: any;
    @Prop({default: () => 'icon-down2'}) private downIcon!: any;
    @Prop({default: () => 'icon-next'}) private rightIcon!: any;
    @Prop({default: () => 'icon-search'}) private searchIcon!: any;
    @Prop({default: () => 'icon-error'}) private cancelIcon!: any;
    @Prop({default: () => '请选择'}) private placeholder!: any;
    @Prop({default: () => false}) private defShowDownIcon?: boolean;

    @Emit('hover') emitHover($event: any) {
    }

    @Emit('input') emitInput($event: any) {
    }


    /**
     * 定位
     */
    private location: any = {
        x: 0,
        y: 0,
        height: 0,
        selectX: 0,
        selectY: 0,
        selectHeight: 0,
        selectWidth: 0,
    }

    private list: any = {
        data: [],
        multi: [],              // 选中的选项列表
        originalData: [],
    };

    private status: any = {
        content: true,
        disabled: false,
        dataType: '',
        multi: false
    };

    private input: any = '';
    private select: any = '';
    private search: any = '';
    private tier: any = 0;
    private id: any = "";
    private isTop: boolean = false; // 是否向上显示

    private created() {
        this.status.multi = this.multi === '' || this.multi ? true : false;
        this.status.disabled = this.disabled === '' || this.disabled ? true : false;
        this.id = this.prop ? this.prop : this.main;
    }

    private mounted() {
        this.initData();
        this.initValue();
        window.addEventListener('scroll', () => {
            this.initLocation();
        })

        // 先执行一遍，好获取高度
        this.initLocation();
    }

    @Watch('disabled', {immediate: true})
    private watchDisabled(value: any) {
        if (this.disabled === '') {
            this.status.disabled = true;
        } else if (this.disabled) {
            this.status.disabled = this.disabled;
        } else {
            this.status.disabled = false;
        }
    }

    private hover() {
        this.initLocation();
        if (!this.select) {
            this.emitHover(this.search);
        }
    }

    private initLocation() {
        let location = this.$el.getBoundingClientRect();
        let layer = this.$el.getElementsByClassName('efly-select-data')[0].getBoundingClientRect();
        this.location.x = location.x + 'px';
        this.location.selectWidth = location.width + 'px';
        if (this.placement === 'auto') {
            this.isTop = false;
            if (location.y + location.height + layer.height > window.innerHeight) {
                this.isTop = true;
                this.location.y = window.innerHeight - location.y - 1 + 'px';
            } else {
                this.location.y = location.y + location.height - 1 + 'px';
            }
        } else if (this.placement === 'bottom') {
            this.location.y = location.y + location.height - 1 + 'px';
        } else {
            this.isTop = true;
            this.location.y = window.innerHeight - location.y - 1 + 'px';
        }
    }

    @Watch('data') changeData(newValue: any) {
        this.initData();
        this.initValue();
    }

    @Watch('value', {deep: true}) changeValue(newValue: any) {
        if ((this.status.dataType === 'String' && this.value) || (this.status.dataType === 'Object' && this.value[this.id])) {
            this.initValue();
        } else {
            this.selectItem(this.value);
        }
    }

    /**
     * 初始化数据
     */
    private initData() {
        let data = [];
        this.list.data = [];
        if (typeof this.data[0] === 'string' || typeof this.data[0] === 'number') {
            this.status.dataType = 'String'
        } else {
            this.status.dataType = 'Object'
        }
        for (let i in this.data) {
            this.data[i]['selected'] = false;
            if (this.status.dataType === 'String') {
                data.push({value: this.data[i]})
            } else {
                data.push(this.data[i])
            }
        }
        this.deepInitData(data);
        this.list.data = data;
    }

    /**
     * 递归初始化子项数据
     * @param data
     * @param index
     */
    private deepInitData(data: any, index = '') {
        for (let i in data) {
            data[i].selectID = index ? index + '-' + i : i;
            data[i]['selected'] = false;
            if (Boolean(data[i][this.children]) && data[i][this.children].length > 0) {
                data[i].groupShow = true;
                this.deepInitData(data[i][this.children], data[i].selectID)
            }
        }
    }


    /**
     * 递归初始化子项选中
     * @param that
     */
    private initItemSelected(that: any = this, index: any = '') {
        let $children: any = that.$children;
        for (let i in $children) {
            if ($children[i].$options._componentTag === 'efly-select-box') {
                $children[i].init(index);
                this.initItemSelected($children[i], index);
            }
        }
    }

    private initValue() {
        this.list.multi = [];
        if (this.value) {
            if (this.data) {
                if (!this.status.multi) {
                    this.deepInitValue(this.list.data, this.value);
                } else {
                    for (let i in this.value) {
                        this.deepInitValue(this.list.data, this.value[i]);
                    }
                }
                if (!this.status.multi) {
                    this.select = this.list.multi[0];
                    this.input = this.select[this.main]
                }
                this.initInputData();
            } else {
                this.input = this.value;
            }
        }
    }

    /**重置输出值 */
    private initInputData() {
        let tagNameArrWithSpace:any = [];
        let arrParam:any = [];
        // 根据不同类型的模板，赋值到数组上
        if (this.moduleType === 'MESSAGE_CONFIG_EXPIRE' || this.moduleType === 'MESSAGE_CONFIG_DESTROY' || this.moduleType === 'MESSAGE_CONFIG_BALANCE_LESS') {
            this.list.multi.forEach((set:any) => {
                arrParam.push(set.value);
                tagNameArrWithSpace.push(' ' + set.value);
                set['isSelected'] = true;
            });
            tagNameArrWithSpace = tagNameArrWithSpace.sort((a:any, b:any) => {return a - b}); // 排序
            let titleJoin = tagNameArrWithSpace.join(' |');
            this.input = titleJoin + ' 天';
            this.input = arrParam.length === 0? '无' : this.input;
        } else {
            this.input = this.list.multi[0].value;
        }
    }

    private deepInitValue(data: any, item: any) {
        for (let i in data) {
            if ((this.status.dataType === 'Object' && data[i][this.id] === item[this.id]) || (this.status.dataType === 'String' && data[i][this.id] === item)) {
                data[i].selected = true;
                this.list.multi.push(data[i])
            }
            if (Boolean(data[i][this.children]) && data[i][this.children].length > 0) {
                this.deepInitValue(data[i][this.children], item)
            }
        }
    }


    private selectItem(item: any, index?:any) {
        this.initItemSelected();
        if (index !== '' && index !== null && index !== undefined) {
            this.list.data[index].selected = this.status.multi ? !this.list.data[index].selected : true;
        }
        this.$forceUpdate();
        if (!this.status.multi) {
            this.select = item;
            this.input = this.select[this.main]
            this.$emit('change', item);
            // this.$forceUpdate();
        } else {
            if (item.selected) {
                this.list.multi.push(item);
                this.initInputData();
                this.initLocation();
                this.emit();
            } else {
                this.deleteMultiOption(item)
            }

        }
    }

    /**
     * 删除多选item
     */
    private deleteMultiOption(item: any, index: any = '') {
        if (index) {
            this.list.multi.splice(index, 1);
        } else {
            for (let i in this.list.multi) {
                if (this.list.multi[i].selectID === item.selectID) {
                    this.list.multi.splice(i, 1);
                    break;
                }
            }
        }
        this.initItemSelected(this, item.selectID);
        this.deepChangeDataActive(this.list.data, item.selectID);
        this.initInputData();
        this.emit();
    }

    private emit() {
        if (this.status.dataType === 'String') {
            let list = [];
            for (let i in this.list.multi) {
                list.push(this.list.multi[i].value)
            }
            this.$emit('change', list);
        } else {
            this.$emit('change', this.list.multi);
        }
    }

    private deepChangeDataActive(data: any, selectID: any) {
        for (let i in data) {
            data[i]['selected'] = data[i].selectID === selectID ? false : data[i]['selected'];
            if (Boolean(data[i][this.children]) && data[i][this.children].length > 0) {
                this.deepChangeDataActive(data[i][this.children], selectID)
            }
        }
    }

    private getSerach($event: any) {
        this.search = $event.target.value;
        this.$emit('search', this.search)
    }

    private scroll($event: any) {
        let layer = this.$el.getElementsByClassName('efly-select-content')[0];
        var scrollTop = layer.scrollTop;
        var windowHeight = layer.scrollHeight - layer.clientHeight;
        if (scrollTop === windowHeight) {
            this.$emit('reachBottom');
        }
    }

    private listShow() {
        if (this.status.multi) {
            // 多选不关闭
            return;
        }
        this.status.content = false;
        setTimeout(() => {
            this.status.content = true;
        }, 100)
    }
}
