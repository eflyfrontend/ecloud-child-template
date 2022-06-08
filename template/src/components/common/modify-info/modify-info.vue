<template>
	<efly-popover class="modify-info" :show="popover.show" top="14px" left="3px" trigger="click" @change="popoverChange($event)"
				  @click="click($event)">
		<div class="pad-mini" style="width: 200px" v-if="type === 'input'">
			<efly-input size="small" :placeholder="placeholder" v-model="newAlias"></efly-input>
			<div class="box flex-justify-end mar-t-small">
				<efly-button size="mini" class="btn-primary" @click="popoverSubmit('about')">确定</efly-button>
				<efly-button size="mini" class="mar-l-xs" @click="popoverCancel('about')">取消</efly-button>
			</div>
		</div>
		<div class="pad-mini" style="width: 300px" v-else>
			<efly-input size="small" type="textarea" v-model="newRemark" width="280px"
						placeholder="请输入描述，256个字符以内"></efly-input>
			<div class="box flex-justify-end mar-t-small">
				<efly-button class="btn-primary" size="mini"
							 @click="popoverSubmit('remark')">确定
				</efly-button>
				<efly-button class="mar-l-xs" size="mini"
							 @click="popoverCancel('remark')">取消
				</efly-button>
			</div>
		</div>
		<i slot="reference" class="color-primary icon icon-modify-alias font-small mar-l-xs" @click="click($event)"></i>

	</efly-popover>
</template>

<script>
    import ModifyInfo from "./modify-info";

    export default ModifyInfo;
</script>

<style lang="scss">

</style>
