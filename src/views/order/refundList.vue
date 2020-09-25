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
            <el-table-column prop="refund_id" label="系统退款订单号" width="120" sortable>
            </el-table-column>
            <el-table-column prop="mch_refund_no" label="商户退款订单号" width="120" sortable>
            </el-table-column>
            <el-table-column prop="bank_refund_no" label="上游通道退款订单号" width="120" sortable>
            </el-table-column>
<!--            <el-table-column prop="refund_count" label="退款次数" min-width="180" sortable>
            </el-table-column>-->
            <el-table-column prop="refund_fee" label="退款金额" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="refund_time" label="退款时间" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="refund_tim_plane" label="退款预计时间" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="refund_time_end" label="退款结束时间" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="refund_status" label="退款状态" :formatter="formatRefundStatus" min-width="180" sortable>
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
    import { getRefundList } from '../../api/api';
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
                this.getRefund();
            },

            formatRefundStatus: function (row, column) {
                return row.refund_status == 'INIT' ? '退款初始化' :
                    row.refund_status == 'PROCESSING' ? '退款处理中' :
                    row.refund_status == 'SUCCESS' ? '退款成功' :
                    row.refund_status == 'FAIL' ? '退款失败' :
                    row.refund_status == 'NOTSURE' ? '未确定' :
                    row.refund_status == 'CHANGE' ? '冲正' :
                    row.refund_status == 'REFUND' ? '转入代发' :'未知';
            },
            //获取退款订单列表
            getRefund: function () {
                let para = {
                    pageNum: this.page,
                    pageSize: 10
                };
                this.loading = true;
                //NProgress.start();
                getRefundList(para).then((res) => {
                    this.total = res.data.count;
                    this.list = res.data.list;
                    console.log("res data order:"+res.data);
                    this.loading = false;
                    //NProgress.done();
                });
            },


        },
        mounted() {
            this.getRefund();
        }
    };

</script>

<style scoped>

</style>