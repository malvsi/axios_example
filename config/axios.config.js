import axios from 'axios'
import querystring from 'querystring'

let source = axios.CancelToken.source()

let xhr = axios.create({
    baseURL: 'https://easy-mock.com/mock/5d6f61f957a3b74a8c350aad/example/',
    timeout: 2000,  // 超时时间
    responseType: 'json',   // 请求返回文本格式
    headers: {
        'custom-header': 'malvsi',
        'user-header': 'lijunjian',
        'content-type': 'pplication/ X-www-form- urlencoded'
    },
    transformRequest:[(data) => querystring.stringify(data)],   //  请求数据转换
    transformResponse: [(data) => { // 请求返回的数据转换
        data.data.www = 'easy_mock'
        return data
    }],
    validateStatus(status) {    // 设置请求状态码，当状态码小于400时可以认为请求是成功的，返回值是true
        return status<400
    },
    cancelToken: source.token   // 取消请求令牌
})

export default xhr