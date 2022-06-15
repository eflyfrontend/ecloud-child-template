<!--
 * @Author: your name
 * @Date: 2021-03-23 14:28:46
 * @LastEditTime: 2021-06-19 16:12:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exclusive-cloud\manage\resource\src\views\securityGroup\detail-list\optlog\list\list.vue
-->
<template>
	{{{{raw-helper}}}}
	<div class="securityGroup-list-container">
		<page-header
				title="余额充值记录"
				titleIcon="icon-coupon"
		>
		</page-header>
		<div class="list-tabs pad-lr-default">
			<efly-tabs :value="tabs" type="card" @change="changeTabs($event)">
				<efly-tabs-pane value="voucherManger">余额充值</efly-tabs-pane>
				<efly-tabs-pane value="voucherRecovery">余额回收</efly-tabs-pane>
			</efly-tabs>
		</div>
		<div class="list-content">
			<div class="list-box">
				<div class="mar-b-mini box flex-justify-between" v-if="$platform === 'eap'">
					<div class="list-search-left"></div>
					<div class="list-search-right">
						<div class="box">
							<span class="line-height-34 mar-r-default text-color-secondary"><i
									class="icon icon-log"></i> 客户账号</span>
							<select-user @userChange="userChange($event)"
										 :value="params.customerNameLike"></select-user>
						</div>
					</div>
				</div>
				<div class="list-serach">
					<div class="list-serach-left">
						<efly-button size="small" class="btn-primary nowrap" @click="operateSelect('create')">
							<i class="icon icon-create"></i>
							余额充值
						</efly-button>
						<efly-tooltip content="刷新" top="-42px" left="-6px" placement="top" type="white">
							<efly-button size="small" class="efly-button-icon btn-outline-primary"
										 @click="getList()">
								<i class="icon icon-refresh font-default"></i>
							</efly-button>
						</efly-tooltip>
					</div>
					<div class="list-serach-right">
						<efly-screen class="mar-l-xs" v-if="$platform === 'eap'">
							<div slot="label">
								<efly-select size="small" width="100px" type="screen"
											 value="充值类型"></efly-select>
							</div>
							<slot>
								<efly-select size="small" width="140px" :data="chargeTypeList" type="screen"
											 :value="chargeTypeList[0]"
											 @change="labelChange('chargeTypeList',$event)"
											 height="auto"></efly-select>
							</slot>
						</efly-screen>
						<select-time class="mar-l-xs" label="添加时间"
									 startTimeID="destory-time-start-true"
									 endTimeID="destory-time-end-true"
									 :startTime="params.createTimeStart"
									 :endTime="params.createTimeEnd"
									 @change="selectTimeChange($event)">
						</select-time>
						<efly-screen class="mar-l-xs" v-if="$platform === 'eap'">
							<div slot="label">
								<efly-select size="small" width="100px" type="screen"
											 value="归属部门"></efly-select>
							</div>
							<slot>
								<efly-input size="small" placeholder="客户经理所在部门" width="175px"
											v-model="params.departmentName"></efly-input>
							</slot>
						</efly-screen>
						<efly-screen class="mar-l-xs">
							<div slot="label">
								<efly-select size="small" width="100px" type="screen"
											 value="编号"></efly-select>
							</div>
							<slot>
								<efly-input size="small" placeholder="请输入编号" width="150px"
											v-model="params.billCode"></efly-input>
							</slot>
						</efly-screen>
						<efly-button size="small" class="btn-primary mar-l-xs" @click="getList()">搜索</efly-button>
						<efly-button size="small" class="btn-solid-primary mar-l-xs" @click="clearScreen()">清除
						</efly-button>
						<efly-tooltip content="导出：若数据量较大，导出速度较慢，请耐心等待。" top="-58px" left="-138px"
									  width="150px" placement="top-right" type="white">
							<efly-button size="small" class="efly-button-icon mar-l-xs" @click="getList('export')">
								<i class="icon icon-download font-default"></i>
							</efly-button>
						</efly-tooltip>
					</div>
				</div>

				<div class="box flex-justify-between">
					<div class="list-search-left">
						<div class="box flex-center mar-b-xs">
							<span>总金额&nbsp;:</span>
							<span v-if="status.moneyLoading === 'loading'"> <i class="icon icon-loading"></i></span>
							<span v-else class="color-danger font-larger font-weight-700">￥{{money.couponMoney}}</span>
						</div>
					</div>
					<div class="list-search-right">
						<div class="box flex-justify-center" v-if="$platform === 'eap'">
							<efly-checkbox :active="isBlock" @click="changeCustomerType()">屏蔽内部账号记录</efly-checkbox>
						</div>
					</div>
				</div>
				<!-- 代金券列表 -->
				<div class="list-data">
					<efly-table :data="voucherList" :status="status.data"
								:loadingImg="$loadingImg" nodataIcon="icon-nodata">
						<efly-table-column
								prop="createTime"
								header="添加时间">
						</efly-table-column>
						<efly-table-column v-if="$platform==='eap'"
										   header="客户账号(客户名)">
							<div slot-scope="scope">
								<span>{{scope.data.email?scope.data.email:'-'}}</span>
								<div class="box flex-justify-center" v-if="scope.data.company">({{scope.data.company}},
									{{scope.data.trueName}})
								</div>
							</div>
						</efly-table-column>
						<efly-table-column v-if="$platform==='eap'"
										   header="归属部门">
							<div slot-scope="scope">
								{{scope.data.departmentName?scope.data.departmentName:'-'}}
							</div>
						</efly-table-column>
						<efly-table-column
								header="充值类型">
							<div slot-scope="scope">
								{{scope.data.about?scope.data.about:'-'}}
							</div>
						</efly-table-column>

						<efly-table-column
								header="金额(元)">
							<div slot-scope="scope">
								<span class="color-danger">+ {{scope.data.couponMoney}}</span>
							</div>
						</efly-table-column>
						<efly-table-column
								header="备注">
							<div slot-scope="scope">
								{{scope.data.remark?scope.data.remark:'-'}}
							</div>
						</efly-table-column>
						<efly-table-column
								header="代金券编号">
							<div slot-scope="scope">
								{{scope.data.billCode}}
							</div>
						</efly-table-column>
					</efly-table>
				</div>
				<div class="list-footer">
					<div class="list-footer-left">
					</div>
					<div class="list-footer-right">
						<efly-page size="small" :list="[5,10,20,50]" :total="page.total" :count="page.length"
								   @change="changePage($event)"></efly-page>
					</div>
				</div>
			</div>
		</div>
	</div>
	{{{{/raw-helper}}}}
</template>

<script>
    import voucherManger from "./list";

    export default voucherManger;
</script>

<style lang="scss" scoped>
	.efly-input {
		width: 150px;
		height: 33px;
	}

	.nowrap {
		white-space: nowrap !important; /* 不换行 */
	}


</style>
