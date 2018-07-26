import CommonVue from 'sc-common-vue'

// 初始化
const Common = CommonVue({
    handleRequestError: (result) => {
        console.log(result)
    },
    selectUrl: '/example/common/getSelectBykeys',
    setSelectUrlPrefix: () => {
        let href = window.location.href
        let prefix = ''
        if (/\/projectA\//.test(href)) {
            prefix = '/projectA-api'
        }
        return prefix
    }
})
export const {
    JSONAPI,
    FORMAPI,
    Util,
    DialogMixin,
    ListMixin,
    SelectionMixin,
    ValidateMixin,
    Filters,
    Directives,
    Components
} = Common
