<template>
    <div>
        <div class="boxItem">
            <h2>基础用法</h2>
            <div class="box">
                <div class="top">
                    <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
                        <el-button>上左</el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                        <el-button>上边</el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
                        <el-button>上右</el-button>
                    </el-tooltip>
                </div>
                <div class="left">
                    <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
                        <el-button>左上</el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
                        <el-button>左边</el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
                        <el-button>左下</el-button>
                    </el-tooltip>
                </div>

                <div class="right">
                    <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
                        <el-button>右上</el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
                        <el-button>右边</el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
                        <el-button>右下</el-button>
                    </el-tooltip>
                </div>
                <div class="bottom">
                    <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
                        <el-button>下左</el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
                        <el-button>下边</el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
                        <el-button>下右</el-button>
                    </el-tooltip>
                </div>
            </div>
        </div>
        <div class="boxItem">
            <h2>主题</h2>
            <el-tooltip content="Top center" placement="top">
                <el-button>Dark</el-button>
            </el-tooltip>
            <el-tooltip content="Bottom center" placement="bottom" effect="light">
                <el-button>Light</el-button>
            </el-tooltip>
        </div>
        <div class="boxItem">
            <h2>更多 Content</h2>
            <el-tooltip placement="top">
                <div slot="content">多行信息<br/>第二行信息</div>
                <el-button>Top center</el-button>
            </el-tooltip>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            currentDate: new Date()
        }
    }
}
</script>
<style>
/*tooltip 样式覆盖*/
.el-tooltip__popper.is-dark {
    max-width:250px;
    padding:8px 10px;
    margin:0;
    text-align:left;
    text-decoration:none;
    background-color: rgba(64, 64, 64, 0.85);
    border-radius:4px;
    box-shadow:0 1px 6px rgba(0, 0, 0, 0.2);
}
/*箭头 样式覆盖， 建议采用var变量方式，*/
.el-tooltip__popper[x-placement^=top] .popper__arrow {
    border-top-color: rgba(64, 64, 64, 0.85);
}
.el-tooltip__popper[x-placement^=left] .popper__arrow {
    border-left-color: rgba(64, 64, 64, 0.85);
}
.el-tooltip__popper[x-placement^=right] .popper__arrow {
    border-right-color: rgba(64, 64, 64, 0.85);
}
.el-tooltip__popper[x-placement^=bottom] .popper__arrow {
    border-bottom-color: rgba(64, 64, 64, 0.85);
}
</style>

<style scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
.el-col {
    border-radius: 4px;
}
.box {
    width: 400px;

    .top {
        text-align: center;
    }

    .left {
        float: left;
        width: 60px;
    }

    .right {
        float: right;
        width: 60px;
    }

    .bottom {
        clear: both;
        text-align: center;
    }

    .item {
        margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
        padding: 8px 10px;
    }
}
.boxItem {
    margin-bottom: 20px;
}
</style>
