import {Component, Prop, Vue, Emit, Watch} from 'vue-property-decorator';


@Component
export default class MultiSelectGroup extends Vue {
    @Prop({default: () => ''}) private data!: any;
    @Prop({default: () => ''}) private indent!: any;
    @Prop({default: () => 'label'}) private label!: any;
    @Prop({default: () => 'children'}) private children!: any;
    @Prop({default: () => ''}) private tier!: any;

    private $authority: any;
    private mostParent: any;            // 最父母

    private list: any = {
        data: [],
    }

    private created() {
        this.findMostParent(this);
    }

    private mounted() {

    }

    @Watch('data', {immediate: true})
    private watchData(value: any) {
        this.list.data = [];
        for (let i in value) {
            value[i]['groupShow'] = true;
            this.list.data.push(value[i])
        }
        this.$forceUpdate();
    }


    private findMostParent(that: any) {
        if (that.$options._componentTag === 'multi-select') {
            this.mostParent = that;
            return
        } else {
            this.findMostParent(that.$parent)
        }
    }

    private selectLabel(index: any) {
        this.mostParent.init();
        this.list.data[index].active = true;
        this.$forceUpdate();
        this.mostParent.selectItem(this.list.data[index]);
    }

    private selectGroupShow(index: any) {
        this.list.data[index].groupShow = !this.list.data[index].groupShow;
        this.$forceUpdate();
    }

    private add(index: any) {
        this.mostParent.add(this.list.data[index])
    }

    private modify(index: any) {
        this.mostParent.modify(this.list.data[index])
    }

    private destroy(index: any) {
        this.mostParent.destroy(this.list.data[index])
    }
}

