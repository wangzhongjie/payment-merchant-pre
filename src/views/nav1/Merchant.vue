<template>
	<section>


		<!--列表-->
		<el-table :data="list" highlight-current-row v-loading="loading" style="width: 100%;">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column type="index" width="60">
			</el-table-column>
			<el-table-column prop="merchant_incoming_id" label="商户ID" width="120" sortable>
			</el-table-column>
			<el-table-column prop="mch_id" label="商户号" width="100" :formatter="formatSex" sortable>
			</el-table-column>
			<el-table-column prop="mch_name" label="商户名称" width="100" sortable>
			</el-table-column>
			<el-table-column prop="mch_short_name" label="商户简称" width="120" sortable>
			</el-table-column>
			<el-table-column prop="bank_mch_id" label="上游返回商户号" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="fee_type" label="币种" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="mch_deal_type" label="商户经营类型" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="remark" label="备注" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="ch_pay_auth" label="渠道授权交易" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="industr_id" label="行业类别" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="province" label="商户省份" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="city" label="商户城市" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="address" label="商户地址" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="tel" label="商户电话" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="email" label="商户邮箱" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="legal_person" label="企业法人" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="customer_phone" label="客服电话" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="principal" label="负责人" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="principal_mobile" label="负责人手机号" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="id_code" label="负责人身份证" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="indentity_photo" label="身份证图片正面,反面" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="license_photo" label="营业执照" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="protocol_photo" label="商户协议照" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="org_photo" label="组织机构代码照" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="account_code" label="银行卡号" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="bank_id" label="开户银行" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="account_name" label="开户人" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="account_type" label="帐户类型" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="contact_line" label="联行号" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="bank_account_type" label="银行卡类型" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="bank_name" label="开户支行名称" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="bank_province" label="开户支行所在省" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="bank_city" label="开户支行所在市" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="id_card_type" label="持卡人证件类型" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="id_card" label="持卡人证件号码" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="bank_address" label="持卡人地址" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="bank_tel" label="手机号码" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="mch_type" label="商户类型" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="secret_key" label="密钥" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="mch_category" label="经营类目代码" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="channel_code" label="通道code" min-width="180" sortable>
			</el-table-column>

		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
		</el-col>


	</section>
</template>

<script>
    import { getMerchantList } from '../../api/api';
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
            //性别显示转换
            formatSex: function (row, column) {
                return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
            },
            //获取商户列表
            getMerchant: function () {
                let para = {
                    pageNum: this.page,
                    pageSize: 20
                };
                this.loading = true;
                //NProgress.start();
                getMerchantList(para).then((res) => {
                    this.total = res.data.count;
                    this.list = res.data.list;
                    console.log("res data merchant:"+res.data);
                    this.loading = false;
                    //NProgress.done();
                });
            }


        },
        mounted() {
            this.getMerchant();
        }
    };

</script>

<style scoped>

</style>