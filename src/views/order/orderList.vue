<template>
    <section>


        <!--列表-->
        <el-table :data="list" stripe border highlight-current-row v-loading="loading" style="width: 100%;">

            <el-table-column prop="mch_id" label="商户号" width="140"  sortable>
            </el-table-column>
            <el-table-column prop="trade_no" label="系统订单号" width="180" sortable>
            </el-table-column>
            <el-table-column prop="mch_trade_no" label="商户订单号" width="120" sortable>
            </el-table-column>
            <el-table-column prop="bank_trade_no" label="上游通道订单号" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="total_fee" label="总金额" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="time_start" label="订单创建时间" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="time_expire" label="订单过期时间" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="time_completion" label="订单完成时间" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="product_id" label="商品id" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="product_name" label="商品名称" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="product_desc" label="商品描述" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="mch_err_code" label="商户错误返回码" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="mch_err_msg" label="商户错误信息" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="order_status" label="订单状态" :formatter="formatOrderStatus" min-width="180"  sortable>
            </el-table-column>
            <el-table-column prop="time_update" label="订单更新时间" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="openid" label="公众号openid" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="sub_openid" label="子商户公众号openid" min-width="180" sortable>
            </el-table-column>

            <el-table-column label="操作" width="150" fixed="right">
                <template scope="scope">
                    <el-button size="small" v-if="scope.row.order_status == 'SUCCESS'"  @click="handleRefund(scope.$index, scope.row)">退款</el-button>

                </template>
            </el-table-column>


        </el-table>

        <!--工具条-->
        <el-col :span="24" class="toolbar">
            <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="10" :total="total" style="float:right;">
            </el-pagination>
        </el-col>


    </section>
</template>

<script>
    import { getOrderList,orderRefund } from '../../api/api';
    //import NProgress from 'nprogress'
    export default {
        data() {
            return {
                filters: {
                    name: ''
                },
                loading: false,
                users: [],
                total: 0,
                page: 1
            }
        },
        methods: {
            handleCurrentChange(val) {
                this.page = val;
                this.getOrder();
            },
            formatOrderStatus: function (row, column) {
                return row.order_status == 'NOTPAY' ? '未支付' :
                    row.order_status == 'SUCCESS' ? '支付成功' :
                    row.order_status == 'PAYERROR' ? '支付失败' :
                    row.order_status == 'UNKOWN' ? '未知' :
                    row.order_status == 'REVERSAL' ? '冲正' :
                    row.order_status == 'REFUND' ? '转入退款' :
                    row.order_status == 'USERPAYING' ? '用户支付中' :'已关闭';
            },
            //获取订单列表
            getOrder: function () {
                let para = {
                    pageNum: this.page,
                    pageSize: 10
                };
                this.loading = true;
                //NProgress.start();
                getOrderList(para).then((res) => {
                    this.total = res.data.count;
                    this.list = res.data.list;
                    console.log("res data order:"+res.data);
                    this.loading = false;
                    //NProgress.done();
                });
            },
            //退款处理
            handleRefund: function (index, row) {
                this.$confirm('确认退款吗？', '提示', {}).then(() => {
                    //let para = Object.assign({}, this.editForm);
                    let para = {
                        trade_no: row.trade_no,
                        refund_fee: row.total_fee
                    };
                    orderRefund(para).then((res) => {
                        if (res!=null && res.data!=null){
                            if(res.data.code == '000000'){
                                this.$message({
                                    message: '退款成功',
                                    type: 'success'
                                });
                                this.getOrder();
                            }else{
                                this.$message({
                                    message: res.data.message,
                                    type: 'error'
                                });
                            }
                        }

                    });
                });

            },


        },
        mounted() {
            this.getOrder();
        }
    };

</script>

<style scoped>

</style>