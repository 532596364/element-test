<template>
<div>
    <el-button type="primary">添加</el-button>
    <el-button icon="el-icon-check">导出勾选</el-button>
    <el-button icon="el-icon-sold-out">全部导出</el-button>
    <el-button icon="el-icon-upload2">批量导出</el-button>
    <el-button icon="el-icon-edit">批量修改</el-button>
    <el-button icon="el-icon-download">批量下架设置</el-button>
    <el-button icon="el-icon-search">批量搜索</el-button>
    <div class="f-db f-fr f-lh30">
        <span class="s-fc-9 f-mr20">排序方式：上架时间倒序</span>
        <a href="javascripe">表头设置</a>
    </div>

    <el-table class="f-mt10" stripe border :data="list"
    empty-text="搜索结果为空，请重新输入搜索内容"
    v-loading.body="loading">
        <el-table-column type="selection" width="55" align="center">
        </el-table-column>
        <el-table-column label="商品信息" prop="name" min-width="120" align="center">
        </el-table-column>
        <el-table-column label="商品类目" prop="category" min-width="150" align="center">
        </el-table-column>
        <el-table-column label="商品类型" prop="type" min-width="120" align="center">
        </el-table-column>
        <el-table-column label="商品数量" prop="count" min-width="120" align="right">
        </el-table-column>
        <el-table-column label="仓库" prop="warehouse" min-width="180" align="center">
        </el-table-column>
        <el-table-column label="SKU规格" prop="sku" min-width="250" align="center">
        </el-table-column>
        <el-table-column label="下架" width="100" align="center" fixed="right">
            <template slot-scope="scope">
                <el-button @click="obtained(scope)" type="text">立即下架</el-button>
                <el-button @click="obtained(scope)" type="text">预约下架</el-button>
            </template>
        </el-table-column>
        <el-table-column label="商品操作" width="100" align="center" fixed="right">
            <template slot-scope="scope">
                <el-button @click="edit(scope)" type="text">修改</el-button><br>
                <el-button @click="detail(scope)" type="text">查看</el-button>
                <el-button type="text">售卖设置</el-button>
                <el-button type="text">SKU隐藏</el-button>
                <el-button @click="obtained(scope)" type="text">下架</el-button>
                <el-button type="text">导出图片</el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
import ActionMixin from './mixins/action.js'

export default {
    mixins: [ActionMixin],
    name: 'normal-list',
    props: {
        condition: {},
        list: [],
        loading: Boolean
    }
}
</script>
