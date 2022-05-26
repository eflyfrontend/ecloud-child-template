<template>
	<div class="price-container">
		<div class="price-fixed">
			<div class="price-padding" :style="'height:'+ padHeight + 'px'" v-if="type === 'fixed'"></div>
			<div class="price-content">
				<div class="price-content-left">
					<slot name="left"></slot>
				</div>
				<div class="price-content-right">
					<slot name="right"></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import AdminFooter from "@/components/common/footer/footer";

    export default AdminFooter;
</script>

<style lang="scss" scoped>
</style>
