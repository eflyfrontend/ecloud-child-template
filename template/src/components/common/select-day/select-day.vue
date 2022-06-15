<!--
 * @Author: your name
 * @Date: 2021-03-11 08:49:02
 * @LastEditTime: 2021-04-07 11:13:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \efly-ui\src\components\efly\select\select.vue
-->
<template>
    {{{{raw-helper}}}}
    <div class="efly-select" :class="{
	    disabled : status.disabled,
	    'efly-select-small': size === 'small',
	    'efly-select-mini': size === 'mini',
	    'efly-select-center': align === 'center',
	}" @mouseenter.stop="hover" :style="'width:'+width">
        <div>
            <input type="select" :placeholder="placeholder" v-model="input" disabled />
            <i class="icon" :class="downIcon" v-if="list.data.length > 0 || defShowDownIcon"></i>
            <div class="efly-select-data" v-show="status.content" :style="{
                    'width': location.selectWidth,
                    'left': location.x,
                    'top': !isTop ? location.y : 'unset',
                    'bottom': !isTop ? 'unset' : location.y ,
                    'border': list.data.length === 0 && type !== 'search' ? 'none' : '',
                }">
                <div class="efly-select-search" v-if="type === 'search'">
                    <input type="text" v-model="search" @input.stop="getSerach($event)">
                    <i class="icon" :class="searchIcon"></i>
                </div>
                <div class="efly-select-content" :style="'max-height:'+ height" @click="listShow()"
                    v-if="list.data.length > 0" @scroll="scroll($event)">
                    <div class="efly-select-box">
                        <div class="efly-select-item" v-for="(item,index) in list.data">
                            <div v-show="search === '' || (searchType === 'front' && item[main].indexOf(search) !== -1) || searchType === 'interface'"
                                    class="efly-select-item-label"
                                    :class="{
                                    'active': item.selected,
                                    'pad-r-default': type === 'tier'
                                }"
                                    :style="{'text-indent': tier * 10 + 'px'}"
                                    @click="selectItem(item, index)">
                                <div class="box mar-l-mini">
                                    <efly-checkbox style="position: relative;" :active="item.selected" ></efly-checkbox>
                                    <p>{{item[main]}}</p>
                                </div>
                                <p class="text-secondary mar-t-xs" v-if="minor">{{item[minor]}}</p>
                                <i v-if="children && item[children] && item[children].length > 0"
                                class="icon"
                                :class="item.groupShow ? downIcon : rightIcon"
                                @click.stop="showGroup(item)"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{{{/raw-helper}}}}
</template>

<script>
    import SelectDay from './select-day';

    export default SelectDay;
</script>

<style lang="scss" scoped>
</style>