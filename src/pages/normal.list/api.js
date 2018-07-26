import { JSONAPI } from '@/common/index.js'

export const geList = (params) => {
    return JSONAPI.post('/projectA-api/normalList/list', params)
}
