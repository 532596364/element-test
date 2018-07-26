
export default {
    data () {
        return {}
    },
    methods: {
        obtained (data) {
            console.log('下架', data.row.name)
        },
        edit (data) {
            console.log('编辑', data.row.name)
        },
        detail (data) {
            console.log('查看', data.row.name)
        }
    }
}
