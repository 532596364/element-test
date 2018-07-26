<template>
<el-card class="list">
    <el-tabs v-model="condition.state" @tab-click="refresh">
        <el-tab-pane label="全部订单" name="total" />
        <el-tab-pane label="待付款" name="paymentPending" />
        <el-tab-pane label="已发货" name="shipped" />
        <el-tab-pane label="订单签收" name="receipt" />
        <el-tab-pane label="取消待处理" name="cancelPending" />
        <el-tab-pane label="已取消" name="canceled" />
        <el-tab-pane label="物流签收" name="logisReceipt" />
        <el-tab-pane label="代发货已拦截" name="intercepted" />

        <el-form label-position="top" ref="queryForm" :model="condition">
            <kl-search :limit="2" :defaultCount="10" @search="refresh" @reset="reset">
                <el-form-item prop="category" label="类目">
                    <el-input placeholder="请输入" v-model="condition.category"></el-input>
                </el-form-item>
                <el-form-item prop="type" label="商品类型">
                    <el-select placeholder="请选择" v-model="condition.type"></el-select>
                </el-form-item>
                <el-form-item prop="coupon" label="优惠券效果">
                    <el-select placeholder="请选择" v-model="condition.coupon"></el-select>
                </el-form-item>
                <el-form-item prop="result" label="搜索结果">
                    <el-select placeholder="请选择" v-model="condition.result"></el-select>
                </el-form-item>
                <el-form-item prop="time" label="更新时间">
                    <el-date-picker
                    v-model="condition.time"
                    format="yyyy/MM/dd"
                    type="daterange"
                    range-separator="~"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item prop="brand" label="商品品牌">
                    <el-input placeholder="请输入" v-model="condition.brand"></el-input>
                </el-form-item>
                <el-form-item prop="warehouse" label="仓库名称">
                    <el-input placeholder="请输入" v-model="condition.warehouse"></el-input>
                </el-form-item>
                <el-form-item prop="name" label="商品名称">
                    <el-input placeholder="请输入" v-model="condition.name"></el-input>
                </el-form-item>
                <el-form-item prop="price" label="售价区间">
                    <el-input placeholder="请输入" v-model="condition.price"></el-input>
                </el-form-item>
                <el-form-item prop="searchValue" label="查询类型">
                    <el-input placeholder="请输入内容" v-model="condition.searchValue">
                        <el-select class="list-type-select" v-model="condition.searchType" slot="prepend">
                            <el-option label="货号" value="goodsId"></el-option>
                            <el-option label="单号" value="orderId"></el-option>
                        </el-select>
                    </el-input>
                </el-form-item>
                <el-form-item prop="goodState" label="商品状态">
                    <el-input placeholder="请输入" v-model="condition.goodState"></el-input>
                </el-form-item>
                <el-form-item prop="sku" label="SKU">
                    <el-input placeholder="请输入" v-model="condition.sku"></el-input>
                </el-form-item>
            </kl-search>
            <p class="f-mt10 f-mb10 s-fc-9">通过“商品货号、商品条形码、前台 id、商品名称、售价区间 "等条件查询时，界面操作（如下架、上架、提交审核等）有一定延时，请不要重复操作。</p>
        </el-form>
        <normal-list :condition="condition" :list="list" :loading="loading" />
        <el-pagination background
            class="f-cb"
            layout="total, sizes, prev, pager, next, jumper"
            :current-page="pageNo"
            :page-sizes="[10, 20, 30, 40, 50, 80, 100]"
            :page-size="pageSize"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange">
        </el-pagination>
    </el-tabs>
</el-card>
</template>

<script>
import {ListMixin} from '@/common/index'

import ListActionMixin from './mixins/list.action.js'

import NormalList from './modules/normal.list/index'

export default {
    components: { NormalList },
    mixins: [ListMixin, ListActionMixin],
    data () {
        return {
            condition: {
                state: 'total',
                searchType: 'goodsId'
            }
        }
    },
    methods: {}
}
</script>
