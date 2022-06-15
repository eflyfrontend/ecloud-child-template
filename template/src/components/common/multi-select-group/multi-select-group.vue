<script src="multi-select-group.ts"></script>
<template>
	  {{{{raw-helper}}}}
	<div class="multi-select-item-group">
		<div class="multi-select-item" v-for="(item,index) in list.data">
			<div class="multi-select-item-label" :class="{
			    'active': item.active
			}" :style="'text-indent:'+indent+'px'"
				@click="selectLabel(index)"
			>
				<span>{{item[label]}}</span>
				<div class="multi-select-item-icon-list">
					<efly-tooltip style="display: inline" :content="'新增'" top="28px" left="-20px" placement="bottom" trigger="hover" v-if="$authority.EDepartment.create">
						<i class="icon icon-add-box color-primary" @click.stop="add(index)"></i>
					</efly-tooltip>
					<efly-tooltip style="display: inline" :content="'编辑'" top="28px" left="-20px" placement="bottom" trigger="hover" v-if="$authority.EDepartment.modify">
						<i class="icon icon-modify-alias color-primary"  @click.stop="modify(index)"></i>
					</efly-tooltip>
					<efly-tooltip style="display: inline" :content="'删除'" top="28px" left="-20px" placement="bottom" trigger="hover" v-if="$authority.EDepartment.destory">
						<i class="icon icon-destroy color-danger"  @click.stop="destroy(index)"></i>
					</efly-tooltip>
				</div>
				<i class="icon color-primary" :class="{
					    'icon-down2' : item.groupShow,
					    'icon-up2': !item.groupShow
					}" v-if="item[children].length > 0" @click.stop="selectGroupShow(index)"></i>
			</div>
			<multi-select-group v-if="item[children].length > 0 && item.groupShow" :data="item[children]" :label="label" :children="children" :indent="indent+15" :tier="tier+'-'+index"></multi-select-group>
		</div>
	</div>
	  {{{{/raw-helper}}}}
</template>

<script>
    import MultiSelectGroup from "./multi-select-group";

    export default MultiSelectGroup;
</script>

<style lang="scss">

</style>
