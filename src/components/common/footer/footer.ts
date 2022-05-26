import {Component, Prop, Vue, Emit, Watch} from 'vue-property-decorator';

@Component
export default class AdminFooter extends Vue {
    @Prop({default: () => 'fixed'}) private type!: any;
    private padHeight: any = '74';
}
