import axios from 'axios';
import Vue from 'Vue'
Vue.prototype.$ajax = axios;

let base = '';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };


var qs=require('qs');
var instance = axios.create({
headers: {
    'content-type': 'application/x-www-form-urlencoded'},
    // headers: {'content-type': 'application/x-www-form-urlencoded;application/json'},


    // transformRequest: [function (data) {
    //
    //     data = qs.stringify(data);
    //     return data;
    // }],


    //headers: {'Access-Control-Allow-Origin': '*'},
    //headers: {"Access-Control-Allow-Headers": "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"},
    //headers: {"Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS"},
    // headers: {'content-type': 'application/x-www-form-urlencoded;application/json'},
    //  transformRequest: [function (data) {
    //      data = JSON.stringify(data);
    //      return data;
    //  }],
    //  withCredentials:true   //加了这段就可以跨域了
});

//instance .get(`http://localhost:1083`, qs.stringify(params)).then(res => res.data);

//let base1 = 'http://127.0.0.1:1086';
let base1 = 'http://192.168.1.120:1086';
//let base1 = 'http://192.168.1.109:1086';


export const getMerchantList = params => { return instance.get(`${base1}/merchant/merchantMapPage`, { params: params }); };
export const merchantBillList = params => { return instance.get(`${base1}/merchant/merchantBillList`, { params: params }); };
export const addMerchant = params => { return instance.get(`${base1}/merchant/addMerchant`, { params: params }); };
export const editMerchant = params => { return instance.get(`${base1}/merchant/editMerchant`, { params: params });};
export const editMerchantBill = params => { return instance.get(`${base1}/merchant/editMerchantBill`, { params: params }); };
export const getOrderList = params => { return instance.get(`${base1}/order/orderMapPage`, { params: params }); };
export const orderRefund = params => { return instance.get(`${base1}/order/orderRefund`, { params: params }); };
export const getRefundList = params => { return instance.get(`${base1}/refund/refundMapPage`, { params: params }); };



//export const editMerchant = params => {
//    return Vue.prototype.$ajax({
//        method: 'get',
//        url: 'http://192.168.1.120:1086/merchant/editMerchant',
//        data: params
//    });
//};


