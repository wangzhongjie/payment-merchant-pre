<template>

    <section>



        <!--工具条1-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <!--<el-form-item>
                    <el-input v-model="filters.mch_name" placeholder="商户名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" v-on:click="getMerchant">查询</el-button>
                </el-form-item>-->
                <el-form-item>
                    <el-button type="primary" @click="handleAdd">新增</el-button>
                </el-form-item>
            </el-form>
        </el-col>


        <!--列表-->
        <el-table :data="list" stripe border  max-height="500" highlight-current-row v-loading="loading" style="width: 100%;">
            <!--<el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column type="index" width="60">
            </el-table-column>
            <el-table-column prop="merchant_incoming_id" label="商户ID" width="120" sortable>
            </el-table-column>-->
            <el-table-column prop="mch_id" fixed label="商户号" width="100" sortable>
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
            <el-table-column prop="district" label="商户地区" min-width="180" sortable>
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
            <el-table-column fixed="right" label="操作" width="180">
                <template scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" @click="handleBill(scope.$index, scope.row)">查看费率</el-button>
                </template>
            </el-table-column>

            <el-table-column label="操作" width="150" fixed="right">
                <template scope="scope">
                    <el-button size="small" @click="handleQrcode(scope.$index, scope.row)">生成商户二维码</el-button>

                </template>
            </el-table-column>



        </el-table>

        <!--工具条-->
        <el-col :span="24" class="toolbar">
            <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="10" :total="total" style="float:right;">
            </el-pagination>
        </el-col>

        <!--编辑界面-->
        <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
            <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                <el-form-item label="商户号" prop="mch_id"><el-input v-model="editForm.mch_id" auto-complete="off" :disabled="true"></el-input></el-form-item>
                <el-form-item label="商户名称" prop="mch_name"><el-input v-model="editForm.mch_name" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="商户简称" prop="mch_short_name"><el-input v-model="editForm.mch_short_name" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="商户地址" prop="address"><el-input v-model="editForm.address" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="商户电话" prop="tel"><el-input v-model="editForm.tel" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="商户邮箱" prop="email"><el-input v-model="editForm.email" auto-complete="off"></el-input></el-form-item>
                <!--<el-form-item label="商户省份" prop="province"><el-input v-model="editForm.province" auto-complete="off"></el-input></el-form-item>-->
                <!--<el-form-item label="商户城市" prop="city"><el-input v-model="editForm.city" auto-complete="off"></el-input></el-form-item>-->
                <!--<el-form-item label="商户地区" prop="city"><el-input v-model="editForm.city" auto-complete="off"></el-input></el-form-item>-->
                <el-form-item label="省份" prop="province">
                    <el-select v-model="editForm.province" filterable placeholder="请选择">
                        <el-option
                                v-for="item in options_province"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="城市" prop="city">
                    <el-select v-model="editForm.city" filterable placeholder="请选择">
                        <el-option
                                v-for="item in options_city"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="地区" prop="district">
                    <el-select v-model="editForm.district" filterable placeholder="请选择">
                        <el-option
                                v-for="item in options_district"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="客服电话" prop="customer_phone"><el-input v-model="editForm.customer_phone" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="负责人手机号" prop="principal_mobile"><el-input v-model="editForm.principal_mobile" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="负责人身份证" prop="id_code"><el-input v-model="editForm.id_code" auto-complete="off"></el-input></el-form-item>
                <!--<el-form-item label="商户类型" prop="mch_type"><el-input v-model="editForm.mch_type" auto-complete="off"></el-input></el-form-item>-->
                <el-form-item label="商户类型" prop="mch_type">
                    <el-radio-group v-model="editForm.mch_type">
                        <el-radio :label="0">普通商户</el-radio>
                        <el-radio :label="1">POS商户</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="帐户类型" prop="account_type"><el-input v-model="editForm.account_type" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="经营类目代码" prop="mch_category"><el-input v-model="editForm.mch_category" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="银行卡号" prop="account_code"><el-input v-model="editForm.account_code" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="开户人" prop="account_name"><el-input v-model="editForm.account_name" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="联行号" prop="contact_line"><el-input v-model="editForm.contact_line" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="银行卡类型" prop="bank_account_type"><el-input v-model="editForm.bank_account_type" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="开户支行名称" prop="bank_name"><el-input v-model="editForm.bank_name" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="开户支行所在省" prop="bank_province"><el-input v-model="editForm.bank_province" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="开户支行所在市" prop="bank_city"><el-input v-model="editForm.bank_city" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="持卡人证件类型" prop="id_card_type"><el-input v-model="editForm.id_card_type" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="持卡人证件号码" prop="id_card"><el-input v-model="editForm.id_card" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="持卡人地址" prop="bank_address"><el-input v-model="editForm.bank_address" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="银行手机号码" prop="bank_tel"><el-input v-model="editForm.bank_tel" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="经营代码" prop="category"><el-input v-model="editForm.category" auto-complete="off"></el-input></el-form-item>

                <el-form-item label="上游返回商户号" prop="bank_mch_id"><el-input v-model="editForm.bank_mch_id" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="币种" prop="fee_type"><el-input v-model="editForm.fee_type" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="商户经营类型" prop="mch_deal_type"><el-input v-model="editForm.mch_deal_type" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="备注" prop="remark"><el-input v-model="editForm.remark" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="渠道授权交易" prop="ch_pay_auth"><el-input v-model="editForm.ch_pay_auth" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="行业类别" prop="industr_id"><el-input v-model="editForm.industr_id" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="企业法人" prop="legal_person"><el-input v-model="editForm.legal_person" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="负责人" prop="principal"><el-input v-model="editForm.principal" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="身份证图片正面,反面" prop="indentity_photo"><el-input v-model="editForm.indentity_photo" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="营业执照" prop="license_photo"><el-input v-model="editForm.license_photo" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="商户协议照" prop="protocol_photo"><el-input v-model="editForm.protocol_photo" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="组织机构代码照" prop="org_photo"><el-input v-model="editForm.org_photo" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="开户银行" prop="bank_id"><el-input v-model="editForm.bank_id" auto-complete="off"></el-input></el-form-item>

                <el-form-item label="密钥" prop="secret_key"><el-input v-model="editForm.secret_key" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="通道code" prop="channel_code"><el-input v-model="editForm.channel_code" auto-complete="off"></el-input></el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="editFormVisible = false">取消</el-button>
                <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
            </div>
        </el-dialog>

        <!--费率列表-->
        <el-dialog title="费率列表" v-model="BillListVisible" :close-on-click-modal="false">
            <el-table :data="billList" stripe border highlight-current-row v-loading="loading" style="width: 100%;">
                <el-table-column prop="merchant_bill_id" fixed label="id" width="100" sortable>
                </el-table-column>
                <el-table-column prop="pay_type_id" label="支付类型" width="100" sortable>
                </el-table-column>
                <el-table-column prop="rate_type" label="费率类型" width="120" :formatter="formatRateType" sortable>
                </el-table-column>
                <el-table-column prop="draw_fee" label="提现手续费" min-width="180" :formatter="formatDrawFee" sortable>
                </el-table-column>
                <el-table-column prop="bill_rate" label="费率" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="min_amount" label="低保金额" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="max_amount" label="封顶金额" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="sett_cycle" label="结算周期" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="busi_code" label="系统业务编号" min-width="180" :formatter="formatBusiCode" sortable>
                </el-table-column>
                <el-table-column prop="bank_busi_code" label="上游业务编号" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="tobank_mch_id" label="上游的商户编号" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="channel_code" label="通道code" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="channel_merchant_code" label="支付渠道商户编码" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="bill_status" label="费率状态" min-width="180" :formatter="formatBillStatus" sortable>
                </el-table-column>
                <el-table-column prop="category" label="经营代码" min-width="180" sortable>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="150">
                    <template scope="scope">
                        <el-button size="small" @click="handleBillEdit(scope.$index, scope.row)">修改费率</el-button>
                    </template>
                </el-table-column>
            </el-table>

        </el-dialog>

        <el-dialog title="修改费率" v-model="editMerchantBill" :close-on-click-modal="false">
            <el-form :model="editMarchantForm" label-width="80px" :rules="editMarchantFormRules" ref="editMarchantForm">
                <el-form-item label="通道code" prop="channel_code"><el-input v-model="editMarchantForm.channel_code" :disabled="true" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="给上游的商户编号" prop="tobank_mch_id"><el-input v-model="editMarchantForm.tobank_mch_id" :disabled="true" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="商户号" prop="mch_id"><el-input v-model="editMarchantForm.mch_id" :disabled="true" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="系统业务编号" prop="busi_code">
                    <!--<el-input v-model="editMarchantForm.busi_code" auto-complete="off"></el-input>-->
                    <el-select v-model="editMarchantForm.busi_code" filterable placeholder="请选择" :disabled="true">
                        <el-option
                                v-for="item in busi_code"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="费率类型" prop="rate_type">
                    <!--<el-input v-model="editMarchantForm.rate_type" auto-complete="off"></el-input>-->
                    <!--费率类型: 0-每笔固定多少元，1-每笔收百分比-->
                    <el-radio-group v-model="editMarchantForm.rate_type">
                        <el-radio :label="0">每笔固定多少元</el-radio>
                        <el-radio :label="1">每笔收百分比</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="费率" prop="bill_rate"><el-input v-model="editMarchantForm.bill_rate" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="提现手续费" prop="draw_fee"><el-input v-model="editMarchantForm.draw_fee" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="经营代码" prop="category"><el-input v-model="editMarchantForm.category" auto-complete="off"></el-input></el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="editMerchantBill = false">取消</el-button>
                <el-button type="primary" @click.native="editMarchantSubmit" :loading="editMerchantBillLoading">提交</el-button>
            </div>

        </el-dialog>

        <!--新增界面-->
        <el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
            <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
                <el-form-item label="通道code" prop="channel_code">
                    <el-select v-model="addForm.channel_code">
                        <el-option label="民生通道" value="MS"></el-option>
                    </el-select>
                    <!--<el-input v-model="addForm.channel_code" auto-complete="off"></el-input>-->
                </el-form-item>
                <el-form-item label="商户名称" prop="mch_name"><el-input v-model="addForm.mch_name" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="商户简称" prop="mch_short_name"><el-input v-model="addForm.mch_short_name" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="商户地址" prop="address"><el-input v-model="addForm.address" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="商户省份" prop="province"><el-input v-model="addForm.province" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="商户城市" prop="city"><el-input v-model="addForm.city" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="商户地区" prop="district"><el-input v-model="addForm.district" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="客服电话" prop="customer_phone"><el-input v-model="addForm.customer_phone" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="负责人类型" prop="contact_type">
                    <el-select v-model="addForm.contact_type">
                        <el-option label="法人" value="01"></el-option>
                        <el-option label="实际控制人" value="02"></el-option>
                        <el-option label="代理人" value="03"></el-option>
                        <el-option label="其他" value="00"></el-option>
                    </el-select>
                    <!--<el-input v-model="addForm.contact_type" auto-complete="off"></el-input>-->
                </el-form-item>
                <el-form-item label="负责人" prop="principal"><el-input v-model="addForm.principal" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="负责人手机号" prop="principal_mobile"><el-input v-model="addForm.principal_mobile" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="商户类型" prop="mch_type">
                    <el-select v-model="addForm.mch_type">
                        <el-option label="普通商户" value="0"></el-option>
                        <!--<el-option label="POS机商户" value="1"></el-option>-->
                    </el-select>
                    <!--<el-input v-model="addForm.mch_type" auto-complete="off"></el-input>-->
                </el-form-item>
                <el-form-item label="商户电话" prop="tel"><el-input v-model="addForm.tel" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="商户邮箱" prop="email"><el-input v-model="addForm.email" auto-complete="off"></el-input></el-form-item>


                <el-form-item label="负责人身份证" prop="id_code"><el-input v-model="addForm.id_code" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="银行卡号" prop="account_code"><el-input v-model="addForm.account_code" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="开户人" prop="account_name"><el-input v-model="addForm.account_name" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="联行号" prop="contact_line"><el-input v-model="addForm.contact_line" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="开户支行名称" prop="bank_name"><el-input v-model="addForm.bank_name" auto-complete="off"></el-input></el-form-item>



                费率配置：
                <br/>
                微信公众号：
                <el-form-item label="费率(%)" prop="bill_rates"><el-input v-model="addForm.bill_rates" value="0.6" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="业务代码" prop="busi_codes"><el-input v-model="addForm.busi_codes" value="03" readonly auto-complete="off"></el-input></el-form-item>
                <el-form-item label="经营类目" prop="categorys"><el-input v-model="addForm.categorys" value="208" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="提现手续费(元)" prop="draw_fees"><el-input v-model="addForm.draw_fees" value="0.2" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="费率类型" prop="rate_types"><el-input v-model="addForm.rate_types" value="1.0" auto-complete="off"></el-input></el-form-item>

                支付宝生活号：
                <el-form-item label="费率(%)" prop="bill_rates1"><el-input v-model="addForm.bill_rates1" value="0.5" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="业务代码" prop="busi_codes1"><el-input v-model="addForm.busi_codes1" value="06" readonly auto-complete="off"></el-input></el-form-item>
                <el-form-item label="经营类目" prop="categorys1"><el-input v-model="addForm.categorys1" value="208" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="提现手续费(元)" prop="draw_fees1"><el-input v-model="addForm.draw_fees1" value="0.2" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="费率类型" prop="rate_types1"><el-input v-model="addForm.rate_types1" value="1.0" auto-complete="off"></el-input></el-form-item>


                
                <!--<el-form-item
                        v-for="(domain, index) in addForm.domains"
                        :label="'域名' + index"
                        :key="domain.key"
                        :prop="'domains.' + index + '.value'"
                        :rules="{
                          required: true, message: '域名不能为空', trigger: 'blur'
                        }"
                >
                <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button @click="addDomain">新增费率配置</el-button>
                    <el-button @click="resetForm('addForm')">重置</el-button>
                </el-form-item>-->


                <!--微信正扫：
                <el-form-item label="费率" prop="bill_rates"><el-input v-model="addForm.bill_rates" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="业务代码" prop="busi_codes"><el-input v-model="addForm.busi_codes" value="01" readonly auto-complete="off"></el-input></el-form-item>
                <el-form-item label="经营类目" prop="categorys"><el-input v-model="addForm.categorys" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="提现手续费" prop="draw_fees"><el-input v-model="addForm.draw_fees" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="费率类型" prop="rate_types"><el-input v-model="addForm.rate_types" auto-complete="off"></el-input></el-form-item>

                微信反扫：
                <el-form-item label="费率" prop="bill_rates"><el-input v-model="addForm.bill_rates" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="业务代码" prop="busi_codes"><el-input v-model="addForm.busi_codes" value="02" readonly auto-complete="off"></el-input></el-form-item>
                <el-form-item label="经营类目" prop="categorys"><el-input v-model="addForm.categorys" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="提现手续费" prop="draw_fees"><el-input v-model="addForm.draw_fees" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="费率类型" prop="rate_types"><el-input v-model="addForm.rate_types" auto-complete="off"></el-input></el-form-item>

                支付宝正扫：
                <el-form-item label="费率" prop="bill_rates"><el-input v-model="addForm.bill_rates" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="业务代码" prop="busi_codes"><el-input v-model="addForm.busi_codes" value="04" readonly auto-complete="off"></el-input></el-form-item>
                <el-form-item label="经营类目" prop="categorys"><el-input v-model="addForm.categorys" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="提现手续费" prop="draw_fees"><el-input v-model="addForm.draw_fees" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="费率类型" prop="rate_types"><el-input v-model="addForm.rate_types" auto-complete="off"></el-input></el-form-item>

                支付宝反扫：
                <el-form-item label="费率" prop="bill_rates"><el-input v-model="addForm.bill_rates" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="业务代码" prop="busi_codes"><el-input v-model="addForm.busi_codes" value="05" readonly auto-complete="off"></el-input></el-form-item>
                <el-form-item label="经营类目" prop="categorys"><el-input v-model="addForm.categorys" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="提现手续费" prop="draw_fees"><el-input v-model="addForm.draw_fees" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="费率类型" prop="rate_types"><el-input v-model="addForm.rate_types" auto-complete="off"></el-input></el-form-item>-->




   <!--
                <el-form-item label="经营类目代码" prop="mch_category"><el-input v-model="addForm.mch_category" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="企业法人" prop="legal_person"><el-input v-model="addForm.legal_person" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="币种" prop="fee_type"><el-input v-model="addForm.fee_type" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="商户经营类型" prop="mch_deal_type"><el-input v-model="addForm.mch_deal_type" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="备注" prop="remark"><el-input v-model="addForm.remark" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="渠道授权交易" prop="ch_pay_auth"><el-input v-model="addForm.ch_pay_auth" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="行业类别" prop="industr_id"><el-input v-model="addForm.industr_id" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="身份证图片正面,反面" prop="indentity_photo"><el-input v-model="addForm.indentity_photo" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="营业执照" prop="license_photo"><el-input v-model="addForm.license_photo" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="商户协议照" prop="protocol_photo"><el-input v-model="addForm.protocol_photo" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="组织机构代码照" prop="org_photo"><el-input v-model="addForm.org_photo" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="开户支行所在省" prop="bank_province"><el-input v-model="addForm.bank_province" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="开户支行所在市" prop="bank_city"><el-input v-model="addForm.bank_city" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="持卡人证件类型" prop="id_card_type"><el-input v-model="addForm.id_card_type" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="持卡人证件号码" prop="id_card"><el-input v-model="addForm.id_card" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="持卡人地址" prop="bank_address"><el-input v-model="addForm.bank_address" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="手机号码" prop="bank_tel"><el-input v-model="addForm.bank_tel" auto-complete="off"></el-input></el-form-item>
                <el-form-item label="密钥" prop="secret_key"><el-input v-model="addForm.secret_key" auto-complete="off"></el-input></el-form-item>-->


            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="addFormVisible = false">取消</el-button>
                <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
            </div>
        </el-dialog>



        
        <!--生成商户二维码界面-->
        <el-dialog title="生成商户二维码" v-model="qrcodeVisible" size="tiny" :close-on-click-modal="false">

            
            <div slot="footer" class="dialog-footer">
                <div id="query">
                    <!--<h1>二维码：</h1>-->
                    <canvas id="canvas"></canvas>
                </div>
                
                <el-button @click.native="qrcodeVisible = false">取消</el-button>
            </div>
        </el-dialog>


    </section>
</template>

<script>
    import { getMerchantList,addMerchant,editMerchant,merchantBillList,editMerchantBill } from '../../api/api';
    import QRCode from 'qrcode'
    //import NProgress from 'nprogress'

    export default {
        data() {
            return {

                filters: {
                    mch_name: ''
                },
                loading: false,

                list: [],

                merchants: [],

                total: 0,
                page: 1 ,

                billList:[],

                editFormVisible: false,//编辑界面是否显示
                editLoading: false,
                editFormRules: {
                    province:[
                        { required: true, message: '请选择省份', trigger: 'blur' }
                    ],
                    tel: [
                        { required: true, message: '请输入手机号', trigger: 'blur' }
                    ],
                    principal_mobile: [
                        { required: true, message: '请输入负责人手机号', trigger: 'blur' }
                    ],
                    principal: [
                        { required: true, message: '请输入负责人', trigger: 'blur' }
                    ],
                    mch_short_name: [
                        { required: true, message: '请输入商户简称', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '请输入邮箱', trigger: 'blur' }
                    ],
                    district: [
                        { required: true, message: '请选择区域', trigger: 'blur' }
                    ],
                    customer_phone: [
                        { required: true, message: '请输入银联号', trigger: 'blur' }
                    ],
                    contact_line: [
                        { required: true, message: '请输入银联号', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: '请选择城市', trigger: 'blur' }
                    ],
                    channel_code: [
                        { required: true, message: '请输入通道code', trigger: 'blur' }
                    ],
                    band_name: [
                        { required: true, message: '请输入开户支行名称', trigger: 'blur' }
                    ],
                    account_code: [
                        { required: true, message: '请输入银行卡号', trigger: 'blur' }
                    ],
                    mch_name: [
                        { required: true, message: '请输入商户名', trigger: 'blur' }
                    ],
                    address:[
                        { required: true, message: '请输入地址', trigger: 'blur' }
                    ],
                    account_name:[
                        { required: true, message: '请输入开户人', trigger: 'blur' }
                    ]
                },
                //编辑界面数据
                editForm: {
                    //id: 0,
                    //name: '',
                    //sex: -1,
                    //age: 0,
                    //birth: '',
                    //addr: ''
                },
                //费率列表页面
                BillListVisible:false,
                //编辑费率界面
                editMerchantBill:false,
                editMerchantBillLoading: false,
                editMarchantFormRules:{

                },
                editMarchantForm:{
                    //draw_fee: ''
                },

                addFormVisible: false,//新增界面是否显示
                addLoading: false,
                addFormRules: {
 
                    mch_name: [
                        { required: true, message: '请输入商户名称', trigger: 'blur' }
                    ]
                },
                //新增界面数据
                addForm: {
                    merchant_incoming_id:'',
                    mch_id:'',
                    mch_name: '',
                    mch_short_name: -1,
                    bank_mch_id:'',
                    city: 0,
                    address: '',
                    tel: '',
                    fee_type:'',
                    mch_deal_type:'',
                    remark:'',
                    ch_pay_auth:'',
                    industr_id:'',
                    province:'',
                    email:'',
                    legal_person:'',
                    customer_phone:'',
                    principal:'',
                    principal_mobile:'',
                    id_code:'',
                    indentity_photo:'',
                    license_photo:'',
                    protocol_photo:'',
                    org_photo:'',
                    account_code:'',
                    bank_id:'',
                    account_name:'',
                    account_type:'',
                    contact_line:'',
                    bank_account_type:'',
                    bank_name:'',
                    bank_province:'',
                    bank_city:'',
                    id_card_type:'',
                    id_card:'',
                    bank_address:'',
                    bank_tel:'',
                    mch_type:'',
                    secret_key:'',
                    mch_category:'',
                    channel_code:''
                },
                //系统业务编号:01.微信正扫 02.微信反扫 03.微信公众号 04.支付宝正扫 05.支付宝反扫 06.支付宝生活号 07.代付
                busi_code: [{
                    value: '01',
                    label: '微信正扫'
                },{
                    value: '02',
                    label: '微信反扫'
                },{
                    value: '03',
                    label: '微信公众号'
                },{
                    value: '04',
                    label: '支付宝正扫'
                },{
                    value: '05',
                    label: '支付宝反扫'
                },{
                    value: '06',
                    label: '支付宝生活号'
                },{
                    value: '07',
                    label: '代付'
                }],
                //省份选择
                options_province: [{
                    value: '440000',
                    label: '广东省'
                }],
                //市选择
                options_city: [{
                    value: '440100',
                    label: '广州市'
                }],
                //区选择
                options_district: [{
                    value: '440103',
                    label: '荔湾区'
                },{
                    value: '440104',
                    label: '越秀区'
                },{
                    value: '440105',
                    label: '海珠区'
                },{
                    value: '440105',
                    label: '海珠区'
                },{
                    value: '440106',
                    label: '天河区'
                },{
                    value: '440111',
                    label: '白云区'
                },{
                    value: '440112',
                    label: '黄浦区'
                },{
                    value: '440113',
                    label: '番禺区'
                },{
                    value: '440114',
                    label: '花都区'
                },{
                    value: '440115',
                    label: '南沙区'
                },
                {
                    value: '440117',
                    label: '从化区'
                },
                {
                    value: '440118',
                    label: '增城区'
                }],
                domains: [{
                value: ''
                }],
                qrcodeVisible: false //二维码界面是否显示

            }
        },


        methods: {
            formatBusiCode: function (row, column) {
                return row.busi_code == '01' ? '微信正扫' : row.busi_code == '02' ? '微信反扫' : row.busi_code == '03' ? '微信公众号' : row.busi_code == '04' ? '支付宝正扫' : row.busi_code == '05' ? '支付宝反扫' : row.busi_code == '06' ? '支付宝生活号' : row.busi_code == '07' ? '代付' : '';
            },
            formatBillStatus: function (row, column) {
                //费率状态: 0 - 未审核 1 - 正常 2-待提交资料（微信）
                return row.bill_status == 1 ? '正常' : row.bill_status == 0 ? '未审核' : row.bill_status == 2 ? '待提交资料' : '';
            },
            formatDrawFee: function (row, column) {
                return row.draw_fee/100;
            },
            formatRateType: function (row, column) {
                //费率类型: 0-每笔固定多少元，1-每笔收百分比
                return row.rate_type == 0 ? '每笔固定多少元' : row.rate_type == 1 ? '每笔收百分比' : '';
            },
            handleCurrentChange(val) {
                this.page = val;
                this.getMerchant();
            },
            //获取商户列表
            getMerchant() {
                let para = {
                    //mch_name:filters.mch_name,
                    pageNum: this.page,
  
                    pageSize: 10,

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
            },

            //获取商户费率列表
            getMerchantBill(mch_id,channel_code) {
                let para = {
                    mch_id: mch_id,
                    channel_code: channel_code,

                };
                //this.loading = true;
                //NProgress.start();
                merchantBillList(para).then((res) => {
//                    this.total = res.data.count;
                    this.billList = res.data;
                console.log("res data merchant:" + res.data);
                //this.loading = false;
                //NProgress.done();
            });
            },
            //新增
            addSubmit: function () {
                this.$refs.addForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.addLoading = true;
                            //NProgress.start();
                            let para = Object.assign({}, this.addForm);
                            para.draw_fees = para.draw_fees * 100;
                            para.draw_fees1 = para.draw_fees1 * 100;
                            //para.address = (!para.address || para.address == '') ? '' : util.formatDate.format(new Date(para.address), 'yyyy-MM-dd');
                            addMerchant(para).then((res) => {
                                this.addLoading = false;
                                //NProgress.done();
                                console.log("res data code addMerchant:" + res.data.code);
                                console.log("res data message addMerchant:" + res.data.message);
                                if (res.data.code == '000000') {
                                    this.$message({
                                        message: '提交成功',
                                        type: 'success'
                                    });
                                } else {
                                    this.$message({
                                        message: res.data.message,
                                        type: 'error'
                                    });
                                }
                                this.$refs['addForm'].resetFields();
                                this.addFormVisible = false;
                                this.getMerchant();
                            });
                        } );
                    }
                    });
            },
            //显示编辑界面
            handleEdit: function (index, row) {
                this.editFormVisible = true;
                this.editForm = Object.assign({}, row);
            },
            //显示费率列表
            handleBill: function (index, row) {
                this.BillListVisible = true;
                this.getMerchantBill(row.mch_id,row.channel_code);
            },
            //编辑费率界面
            handleBillEdit: function (index, row){
                this.editMerchantBill = true;
//                row.draw_fee = row.draw_fee/100;
                this.editMarchantForm = Object.assign({}, row);
            },
            //显示新增界面
            handleAdd: function () {
                this.addFormVisible = true;
                this.addForm = {
                    channel_code:'MS',
                    mch_name:'广州市标识数据处理有限公司',
                    mch_short_name:'中迅教育',
                    address:'广州市海珠区昌岗中路昌岗南街50号首层自编023房',
                    province:'440000',
                    city:'440100',
                    district:'440105',
                    customer_phone:'13291270198',
                    principal:'陈勇刚',
                    principal_mobile:'13291270198',
                    mch_type:'0',
                    tel:'13291270198',
                    email:'iwowo888@qq.com',
                    contact_type:'01',
                    mch_category:'208',
                    id_code:'429004198501290316',
                    account_code:'3602000709200278113',
                    account_name:'陈勇刚',
                    contact_line:'102581000152',
                    bank_name:'中国工商银行',
                    bill_rates:0.6,
                    bill_rates1:0.5,
                    categorys:'208',
                    categorys1:'2016042200000148',
                    draw_fees:0.2,
                    draw_fees1:0.2,
                    rate_types:1.0,
                    rate_types1:1.0,
                    busi_codes:'03',
                    busi_codes1:'06'



                //"account_code":"3602000709200278113","account_name":"陈勇刚","address":"广州市海珠区昌岗中路昌岗南街50号首层自编023房","bank_name":"中国工商银行","channel_code":"MS","city":"440100","contact_line":"102581000152","contact_type":"01","customer_phone":"13291270113","district":"440105","email":"iwowo888@qq.com","id_code":"429004198501290316","mch_name":"广州市标识数据处理有限公司","mch_short_name":"高德置地","mch_type":"0","merchant_bills":[{"bill_rate":"0.6","busi_code":"01","category":"208","draw_fee":"0.2","merchant_bill_id":"0","rate_type":"1"},{"bill_rate":"0.6","busi_code":"02","category":"208","draw_fee":"0.2","merchant_bill_id":"0","rate_type":"1"},{"$ref":"$.merchant_bills[0]"},{"$ref":"$.merchant_bills[1]"},{"bill_rate":"0.6","busi_code":"03","category":"208","draw_fee":"0.2","merchant_bill_id":"0","rate_type":"1"},{"bill_rate":"0.6","busi_code":"04","category":"2016042200000148","draw_fee":"0.2","merchant_bill_id":"0","rate_type":"1"},{"bill_rate":"0.6","busi_code":"05","category":"2016042200000148","draw_fee":"0.2","merchant_bill_id":"0","rate_type":"1"},{"bill_rate":"0.6","busi_code":"06","category":"2016042200000148","draw_fee":"0.2","merchant_bill_id":"0","rate_type":"1"}],"principal":"陈勇刚","principal_mobile":"13291270113","province":"440000","tel":"13291270113"
                 //      "account_code":"3602000709200278113","account_name":"陈勇刚","address":"广州市海珠区昌岗中路昌岗南街50号首层自编023房","bank_name":"中国工商银行","channel_code":"MS","city":"440100","contact_line":"102581000152","contact_type":"01","customer_phone":"13291270113","district":"440105","email":"iwowo888@qq.com","id_code":"429004198501290316","mch_name":"广州市标识数据处理有限公司","mch_short_name":"高德置地","mch_type":"0","merchant_bills":[{"bill_rate":"0.6","busi_code":"01","category":"208","draw_fee":"0.2","merchant_bill_id":"0","rate_type":"1"},{"bill_rate":"0.6","busi_code":"02","category":"208","draw_fee":"0.2","merchant_bill_id":"0","rate_type":"1"},{"bill_rate":"0.6","busi_code":"03","category":"208","draw_fee":"0.2","merchant_bill_id":"0","rate_type":"1"},{"bill_rate":"0.6","busi_code":"04","category":"2016042200000148","draw_fee":"0.2","merchant_bill_id":"0","rate_type":"1"},{"bill_rate":"0.6","busi_code":"05","category":"2016042200000148","draw_fee":"0.2","merchant_bill_id":"0","rate_type":"1"},{"bill_rate":"0.6","busi_code":"06","category":"2016042200000148","draw_fee":"0.2","merchant_bill_id":"0","rate_type":"1"}]
                };
            },
            //显示二维码界面
            handleQrcode: function (index, row) {
                this.useqrcode(row);
                this.qrcodeVisible = true;

            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            removeDomain(item) {
                var index = this.addForm.domains.indexOf(item)
                if (index !== -1) {
                    this.addForm.domains.splice(index, 1)
                }
            },
            addDomain() {
                this.addForm.domains.push({
                    value: '',
                    key: Date.now()
                });
            },
            //动态生成二维码
            useqrcode(row){
                //生成的二维码内容，可以添加变量                                      
                //this.QueryDetail='http://www.kspxzx.com/#/guard'+"?unique_code="+this.QueryDetail;
                this.QueryDetail='http://ymf.pospvip.com/test/cashierPay/index'+"?mch_id="+row.mch_id;
                var canvas = document.getElementById('canvas');
                //var canvas = this.query.canvas;
                QRCode.toCanvas(canvas, this.QueryDetail, function (error) {
                    if (error) console.error(error)
                    console.log('success!');
                })
            },
            //编辑
            editSubmit: function () {
                this.$refs.editForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.editLoading = true;
//                        //NProgress.start();
                            let para = Object.assign({}, this.editForm);
                            editMerchant(para).then((res) => {
                                this.editLoading = false;
                                if(res.data.code == '000000'){
                                    this.$message({
                                        message: '提交成功',
                                        type: 'success'
                                    });
                                    this.$refs['editForm'].resetFields();
                                    this.editFormVisible = false;
                                    this.getMerchant();
                                }else{
                                    this.$message({
                                        message: res.data.message,
                                        type: 'error'
                                    });
                                    this.$refs['editForm'].resetFields();
                                    this.editFormVisible = false;
                                }
                            });
                        });
                    }
                });


            },
            editMarchantSubmit: function () {
                this.$refs.editMarchantForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.editMerchantBillLoading = true;
//                        //NProgress.start();
                            let para = Object.assign({}, this.editMarchantForm);
                            para.draw_fee = para.draw_fee*100;
                            editMerchantBill(para).then((res) => {
                                this.editMerchantBillLoading = false;

                                if(res.data.code == '000000'){
                                    this.$message({
                                        message: '提交成功',
                                        type: 'success'
                                    });
                                    this.$refs['editMarchantForm'].resetFields();
                                    this.editMerchantBill = false;
                                    this.getMerchantBill(para.mch_id,para.channel_code);
                                }else{
                                    this.$message({
                                        message: res.data.message,
                                        type: 'error'
                                    });
                                    this.$refs['editMarchantForm'].resetFields();
                                    this.editMerchantBill = false;
                                }
                            });
                        });
                    }
                });
            },

        },
        mounted() {
            this.getMerchant();

        },


    }

</script>

<style scoped>
    #canvas{
        width: 100%!important;
        height: auto!important;
    }

</style>
