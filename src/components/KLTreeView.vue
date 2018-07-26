<template>
    <div>
        <div class="box">
            <el-tree
                :data="data"
                :props="defaultProps"
                @node-click="handleNodeClick">
            </el-tree>
        </div>
        <div class="box">
            <el-tree
                :props="props"
                :load="loadNode"
                lazy
                show-checkbox
                @check-change="handleCheckChange">
            </el-tree>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            props: {
                label: 'name',
                children: 'zones'
            },
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            count: 1,
            data: [
                {
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [
                        {
                            label: '二级 2-1',
                            children: [{
                                label: '三级 2-1-1'
                            }]
                        }, {
                            label: '二级 2-2',
                            children: [{
                                label: '三级 2-2-1'
                            }]
                        }
                    ]
                }, {
                    label: '一级 3',
                    children: [
                        {
                            label: '二级 3-1',
                            children: [{
                                label: '三级 3-1-1'
                            }]
                        }, {
                            label: '二级 3-2',
                            children: [{
                                label: '三级 3-2-1'
                            }]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        handleCheckChange (data, checked, indeterminate) {
            console.log(data, checked, indeterminate)
        },
        handleNodeClick (data) {
            console.log(data)
        },
        loadNode (node, resolve) {
            if (node.level === 0) {
                return resolve([{ name: 'region1' }, { name: 'region2' }])
            }
            if (node.level > 3) return resolve([])

            var hasChild
            if (node.data.name === 'region1') {
                hasChild = true
            } else if (node.data.name === 'region2') {
                hasChild = false
            } else {
                hasChild = Math.random() > 0.5
            }

            setTimeout(() => {
                var data
                if (hasChild) {
                    data = [{
                        name: 'zone' + this.count++
                    }, {
                        name: 'zone' + this.count++
                    }]
                } else {
                    data = []
                }

                resolve(data)
            }, 500)
        }
    }
}
</script>
<style>
.box {
    margin-bottom: 20px;
}
/* .el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #00C4C0;
    border-color: #00C4C0;
}
.el-checkbox__inner:hover {
    border-color: #00C4C0;
} */
</style>
