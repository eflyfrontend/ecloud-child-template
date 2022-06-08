<template>
	<div class="multi-select-container" :style="'height:'+ height">
		<div class="multi-select-content">
			<div class="multi-select-item" v-for="(item,index) in list.data">
				<div class="multi-select-item-label" :class="{
					'active': item.active
				}" @click="selectLabel(index)">
					<span>{{item[label]}}</span>
					<div class="multi-select-item-icon-list">
						<efly-tooltip style="display: inline" :content="'新增'" top="28px" left="-20px" placement="bottom" v-if="$authority.EDepartment.create"
									  trigger="hover">
							<i class="icon icon-add-box color-primary" @click.stop="add(item)"></i>
						</efly-tooltip>
						<efly-tooltip style="display: inline" :content="'编辑'" top="28px" left="-20px" placement="bottom" v-if="$authority.EDepartment.modify"
									  trigger="hover">
							<i class="icon icon-modify-alias color-primary" @click.stop="modify(item)"></i>
						</efly-tooltip>
					</div>
					<i class="icon color-primary" :class="{
					    'icon-down2' : item.groupShow,
					    'icon-up2': !item.groupShow
					}" v-if="item[children].length > 0" @click.stop="selectGroupShow(index)"></i>
				</div>
				<multi-select-group v-if="item[children].length > 0 && item.groupShow" :data="item[children]" :label="label" :children="children"
									:indent="indent+15" :tier="index"></multi-select-group>
			</div>
		</div>
	</div>
</template>

<script>
    import MultiSelect from "./multi-select";

    export default MultiSelect;
</script>

<style lang="scss" scoped>
	.efly-tooltip .efly-tooltip-content .efly-tooltip-text {
		display: inline !important;
	}
</style>
