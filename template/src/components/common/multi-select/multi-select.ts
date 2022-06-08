import {Component, Prop, Vue, Emit, Watch} from 'vue-property-decorator';

// @ts-ignore
import MultiSelectGroup from "../multi-select-group/multi-select-group.vue";

@Component({
    components: {
        MultiSelectGroup
    }
})
export default class MultiSelect extends Vue {
    @Prop({default: () => '300px'}) private width!: any;
    @Prop({default: () => 'auto'}) private height!: any;
    @Prop({default: () => ''}) private data!: any;
    @Prop({default: () => 'label'}) private label!: any;
    @Prop({default: () => 'children'}) private children!: any;


    private $authority: any;
    private node: any;
    private indent: any = 0;

    private list: any = {
        data: [],
    }

    private created() {
    }

    private mounted() {
    }


    @Watch('data', {immediate: true})
    private watchData(value: any) {
        this.list.data = [];
        for (let i in this.data) {
            this.list.data.push(this.data[i])
        }
        this.assignActiveInit(this.list.data);
    }

    private assignActiveInit(data: any) {
        for (let i in data) {
            data[i]['active'] = false;
            data[i]['groupShow'] = true;
            if (data[i][this.children]) {
                this.assignActiveInit(data[i][this.children]);
            }
        }
    }

    private selectLabel(index: any) {
        this.init(this)
        this.list.data[index].active = true;
        this.$forceUpdate();
        this.selectItem(this.list.data[index])
    }

    private selectGroupShow(index: any) {
        this.list.data[index].groupShow = !this.list.data[index].groupShow;
        this.$forceUpdate();
    }

    private init(that: any = this) {
        for (let i in that.list.data) {
            that.list.data[i].active = false;
        }
        that.$forceUpdate();
        let $children: any = that.$children;
        for(let i in $children){
            if($children[i].$options._componentTag === 'multi-select-group'){
                this.init($children[i])
            }
        }
    }


    private selectItem(item: any) {
        this.$emit('select', item)
    }

    private add(item: any) {
        this.$emit('add', item)
    }

    private modify(item: any) {
        this.$emit('modify', item)
    }

    private destroy(item: any) {
        this.$emit('destroy', item)
    }

}

