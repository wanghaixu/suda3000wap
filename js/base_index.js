//define(function (require, exports, module) {
//    var _Public = require('./public');
function Base_index() {
    //列表接口地址
    this.listUrl = {
        'sale_order': '/sa/saorder/sorderList!doGetListData.action',//销售订单
        'pur_order': '/pe/peorder/porderList!doGetListData.action',//采购订单
        'pur_gain': '/pe/recieve/recieveList!doGetListData.action',//采购收货
        'pur_return': '/pe/preturn/preturnList!doGetListData.action',//采购退货
        'cash_pur': '/pe/cashrecieve/cashrecieveList!doGetListData.action',//现款采购
        'sale_del': '/sa/invoice/invoiceList!doGetListData.action',//销售发货
        'cash_sale': '/sa/cashsale/cashsaleList!doGetListData.action',//现款销售
        'sale_return': '/sa/sreturn/sreturnList!doGetListData.action'//销售退货
    }
    //添加
    this.billAddUrl = {
        'sale_order': '/sa/saorder/sorderEdit!doGetAddnewData.action',//销售订单
        'pur_order': '/pe/peorder/porderEdit!doGetAddnewData.action',//采购订单
        'pur_gain': '/pe/recieve/recieveEdit!doGetAddnewData.action',//采购收货
        'pur_return': '/pe/preturn/preturnEdit!doGetAddnewData.action',//采购退货
        'cash_pur': '/pe/cashrecieve/cashrecieveEdit!doGetAddnewData.action',//现款采购
        'sale_del': '/sa/invoice/invoiceEdit!doGetAddnewData.action',//销售发货
        'cash_sale': '/sa/cashsale/cashsaleEdit!doGetAddnewData.action',//现款销售
        'sale_return': '/sa/sreturn/sreturnEdit!doGetAddnewData.action'//销售退货
    }
    //保存
    this.billSaveUrl = {
        'sale_order': '/sa/saorder/sorderEdit!save.action',//销售订单
        'pur_order': '/pe/peorder/porderEdit!save.action',//采购订单
        'pur_gain': '/pe/recieve/recieveEdit!save.action',//采购收货
        'pur_return': '/pe/preturn/preturnEdit!save.action',//采购退货
        'cash_pur': '/pe/cashrecieve/cashrecieveEdit!save.action',//现款采购
        'sale_del': '/sa/invoice/invoiceEdit!save.action',//销售发货
        'cash_sale': '/sa/cashsale/cashsaleEdit!save.action',//现款销售
        'sale_return': '/sa/sreturn/sreturnEdit!save.action'//销售退货
    }
    //编辑
    this.billEditUrl = {
        'sale_order': '/sa/saorder/sorderEdit!doGetEditData.action',//销售订单
        'pur_order': '/pe/peorder/porderEdit!doGetEditData.action',//采购订单
        'pur_gain': '/pe/recieve/recieveEdit!doGetEditData.action',//采购收货
        'pur_return': '/pe/preturn/preturnEdit!doGetEditData.action',//采购退货
        'cash_pur': '/pe/cashrecieve/cashrecieveEdit!doGetEditData.action',//现款采购
        'sale_del': '/sa/invoice/invoiceEdit!doGetEditData.action',//销售发货
        'cash_sale': '/sa/cashsale/cashsaleEdit!doGetEditData.action',//现款销售
        'sale_return': '/sa/sreturn/sreturnEdit!doGetEditData.action'//销售退货
    }
    //删除
    this.billDelUrl = {
        'sale_order': '/sa/saorder/sorderEdit!Delete.action',//销售订单
        'pur_order': '/pe/peorder/porderEdit!Delete.action',//采购订单
        'pur_gain': '/pe/recieve/recieveEdit!Delete.action',//采购收货
        'pur_return': '/pe/preturn/preturnEdit!Delete.action',//采购退货
        'cash_pur': '/pe/cashrecieve/cashrecieveEdit!Delete.action',//现款采购
        'sale_del': '/sa/invoice/invoiceEdit!Delete.action',//销售发货
        'cash_sale': '/sa/cashsale/cashsaleEdit!Delete.action',//现款销售
        'sale_return': '/sa/sreturn/sreturnEdit!Delete.action'//销售退货
    }
    //获取价格接口
    this.priceUrl = {
        'sale_order': '/sa/saorder/sorderEdit!doGetGoodsPrice.action',//销售订单
        'pur_order': '/pe/peorder/porderEdit!doGetGoodsPrice.action',//采购订单
        'pur_gain': '/pe/recieve/recieveEdit!doGetGoodsPrice.action',//采购收货
        'pur_return': '/pe/preturn/preturnEdit!doGetGoodsPrice.action',//采购退货
        'cash_pur': '/pe/cashrecieve/cashrecieveEdit!doGetGoodsPrice.action',//现款采购
        'sale_del': '/sa/invoice/invoiceEdit!doGetGoodsPrice.action',//销售发货
        'cash_sale': '/sa/cashsale/cashsaleEdit!doGetGoodsPrice.action',//现款销售
        'sale_return': '/sa/sreturn/sreturnEdit!doGetGoodsPrice.action'//销售退货
    }
    //基础资料接口地址
    this.baseUrl = {
        'base': '/lookupdm/lookupdata.action',
        'bankName': '/common/bank/bankList!findById.action'//付款账号/收款账号
    }
    //billtype
    this.getBillType = {
        'sale_order': 1,//销售订单
        'pur_order': 6,//采购订单
        'pur_gain': 7,//采购收货
        'pur_return': 8,//采购退货
        'cash_pur': 26,//现款采购
        'sale_del': 2,//销售发货
        'cash_sale': 3,//现款销售
        'sale_return': 4//销售退货
    }
    //获取批号用到的modid
    this.modID = {
        'sale_order': 33,//销售订单
        'pur_order': 38,//采购订单
        'pur_gain': 39,//采购收货
        'pur_return': 41,//采购退货
        'cash_pur': 208,//现款采购
        'sale_del': 34,//销售发货
        'cash_sale': 36,//现款销售
        'sale_return': 37//销售退货
    }
    //列表页名称
    this.listPageName = {
        'sale_order': 'order_frame.html',//销售订单
        'pur_order': 'order_frame.html',//采购订单
        'pur_gain': 'billing_frame.html',//采购收货
        'pur_return': 'billing_frame.html',//采购退货
        'cash_pur': 'billing_frame.html',//现款采购
        'sale_del': 'billing_frame.html',//销售发货
        'cash_sale': 'billing_frame.html',//现款销售
        'sale_return': 'billing_frame.html'//销售退货
    }
    //列表详情页名称
    this.detailPageName = {
        'sale_order': 'order_edit_frame.html',//销售订单
        'pur_order': 'order_edit_frame.html',//采购订单
        'pur_gain': 'pur_sale_edit_frame.html',//采购收货
        'pur_return': 'return_edit_frame.html',//采购退货
        'cash_pur': 'cash_edit_frame.html',//现款采购
        'sale_del': 'pur_sale_edit_frame.html',//销售发货
        'cash_sale': 'cash_edit_frame.html',//现款销售
        'sale_return': 'return_edit_frame.html'//销售退货
    }
    //列表详情页编辑模式名称
    this.detailEditPageName = {
        'sale_order': './order_edit_frame.html?action=edit&type=sale_order&billId=',
        'pur_order': './order_edit_frame.html?action=edit&type=pur_order&billId=',
        'pur_gain': './pur_sale_edit_frame.html?action=edit&type=pur_gain&billId=',
        'pur_return': './return_edit_frame.html?action=edit&type=pur_return&billId=',
        'cash_pur': './cash_edit_frame.html?action=edit&type=cash_pur&billId=',
        'sale_del': './pur_sale_edit_frame.html?action=edit&type=sale_del&billId=',
        'cash_sale': './cash_edit_frame.html?action=edit&type=cash_sale&billId=',
        'sale_return': './return_edit_frame.html?action=edit&type=sale_return&billId='
    }
    //列表初始化参数
    this.initData = {
        'condition_txf': '',
        'filterItemRelation': '全部并且',
        'start': 0,
        'orderByField': 'm.billdate',
        'dir': 'DESC'
    }
    //根据请求类型获取主单据标题
    this.detailPageTitle = {
        'sale_order': '销售订单',
        'pur_order': '采购订单',
        'pur_gain': '采购收货',
        'pur_return': '采购退货',
        'cash_pur': '现款采购',
        'sale_del': '销售发货',
        'cash_sale': '现款销售',
        'sale_return': '销售退货'
    }
    //根据请求类型获取单据列表标题
    this.listPageTitle = {
        'sale_order': '销售订单列表',
        'pur_order': '采购订单列表',
        'pur_gain': '采购收货列表',
        'pur_return': '采购退货列表',
        'cash_pur': '现款采购列表',
        'sale_del': '销售发货列表',
        'cash_sale': '现款销售列表',
        'sale_return': '销售退货列表'
    }
    //根据请求类型获取主单据(供应商/客户)标题
    this.getTraderTypeTilte = function (type) {
        if (type.indexOf('sale') > -1) {
            return '客户';
        } else {
            return '供应商';
        }
    },
    //根据请求类型获取主单据(付款账户/收款账户)标题
    this.getPayAccountTitle = function (type) {
        if (type.indexOf('sale') > -1) {
            return '收款账户';
        } else {
            return '付款账户';
        }
    }
    //根据请求类型获取主单据(付款方式/收款方式)标题
    this.getPayTypeTitle = function (type) {
        if (type.indexOf('sale') > -1) {
            return '收款方式';
        } else {
            return '付款方式';
        }
    }
    //根据请求类型获取主单据(供应商/客户)标题
    this.getRevDateTitle = function (type) {
        if (type.indexOf('sale') > -1) {
            return '收货日期';
        } else {
            return '到货日期';
        }
    },
    //搜索初始化参数
    this.searchTypeItem = {
        //销售订单
        'sale_order': function (keyword) {
            var dataJson = {};
            dataJson.filterItemRelation = '全部或者';
            var fieldid = ['70303', '70304', '70305', '70306', '70307', '70309'];
            var fieldlabel = ['单据编号', '操作员', '分支机构', '客户', '客户编码', '业务员'];
            var fieldType = ['ft_Str', 'ft_ListStr', 'ft_ListStr', 'ft_ListStr', 'ft_Str', 'ft_ListStr'];
            var itemno = ['0', '1', '2', '3', '4', '5'];
            var operate = ['包含', '等于'];
            for (var i = 0; i < 6; i++) {
                var data = {};
                data["filterItems[" + i + "].displayvalue"] = keyword;
                data["filterItems[" + i + "].fieldid"] = fieldid[i];
                data["filterItems[" + i + "].fieldlabel"] = fieldlabel[i];
                data["filterItems[" + i + "].fieldtype"] = fieldType[i];
                data["filterItems[" + i + "].itemno"] = itemno[i];
                data["filterItems[" + i + "].operate"] = operate[0];
                data["filterItems[" + i + "].realvalue"] = keyword;
                $.extend(dataJson, data);
            }
            return dataJson;
        },
        //采购订单
        'pur_order': function (keyword) {
            var dataJson = {};
            dataJson.filterItemRelation = '全部或者';
            var fieldid = ['70322', '70323', '70324', '70325', '70326', '70328'];
            var fieldlabel = ['单据编号', '操作员', '分支机构', '供应商名称', '供应商编码', '业务员'];
            var fieldType = ['ft_Str', 'ft_ListStr', 'ft_ListStr', 'ft_ListStr', 'ft_Str', 'ft_ListStr'];
            var itemno = ['0', '1', '2', '3', '4', '5'];
            var operate = ['包含', '等于'];
            for (var i = 0; i < 6; i++) {
                var data = {};
                data["filterItems[" + i + "].displayvalue"] = keyword;
                data["filterItems[" + i + "].fieldid"] = fieldid[i];
                data["filterItems[" + i + "].fieldlabel"] = fieldlabel[i];
                data["filterItems[" + i + "].fieldtype"] = fieldType[i];
                data["filterItems[" + i + "].itemno"] = itemno[i];
                data["filterItems[" + i + "].operate"] = operate[0];
                data["filterItems[" + i + "].realvalue"] = keyword;
                $.extend(dataJson, data);
            }
            return dataJson;
        },
        //采购收货
        'pur_gain': function (keyword) {
            var dataJson = {};
            dataJson.filterItemRelation = '全部或者';
            var fieldid = ['70000', '70001', '70002', '70003', '70005', '70634', '70006'];
            var fieldlabel = ['单据编号', '供应商名称', '仓库', '业务员', '操作员', '分支机构', '供应商编码'];
            var fieldType = ['ft_Str', 'ft_ListStr', 'ft_ListStr', 'ft_ListStr', 'ft_ListStr', 'ft_ListStr', 'ft_Str'];
            var itemno = ['0', '1', '2', '3', '4', '5', '6'];
            var operate = ['包含', '等于'];
            for (var i = 0; i < 7; i++) {
                var data = {};
                data["filterItems[" + i + "].displayvalue"] = keyword;
                data["filterItems[" + i + "].fieldid"] = fieldid[i];
                data["filterItems[" + i + "].fieldlabel"] = fieldlabel[i];
                data["filterItems[" + i + "].fieldtype"] = fieldType[i];
                data["filterItems[" + i + "].itemno"] = itemno[i];
                data["filterItems[" + i + "].operate"] = operate[0];
                data["filterItems[" + i + "].realvalue"] = keyword;
                $.extend(dataJson, data);
            }
            return dataJson;
        },
        //采购退货
        'pur_return': function (keyword) {
            var dataJson = {};
            dataJson.filterItemRelation = '全部或者';
            var fieldid = ['70020', '70021', '70022', '70023', '70024', '70028', '70635'];
            var fieldlabel = ['单据编号', '供应商名称', '仓库', '业务员', '联系人', '首款账户', '分支机构'];
            var fieldType = ['ft_Str', 'ft_ListStr', 'ft_ListStr', 'ft_ListStr', 'ft_ListStr', 'ft_ListStr', 'ft_ListStr'];
            var itemno = ['0', '1', '2', '3', '4', '5', '6'];
            var operate = ['包含', '等于'];
            for (var i = 0; i < 7; i++) {
                var data = {};
                data["filterItems[" + i + "].displayvalue"] = keyword;
                data["filterItems[" + i + "].fieldid"] = fieldid[i];
                data["filterItems[" + i + "].fieldlabel"] = fieldlabel[i];
                data["filterItems[" + i + "].fieldtype"] = fieldType[i];
                data["filterItems[" + i + "].itemno"] = itemno[i];
                data["filterItems[" + i + "].operate"] = operate[0];
                data["filterItems[" + i + "].realvalue"] = keyword;
                $.extend(dataJson, data);
            }
            return dataJson;
        },
        //现款采购
        'cash_pur': function (keyword) {
            var dataJson = {};
            dataJson.filterItemRelation = '全部或者';
            var fieldid = ['70245', '70246', '70247', '70248', '70249', '70250', '70252', '70253'];
            var fieldlabel = ['单据编号', '仓库', '操作员', '分支机构', '供应商名称', '供应商编码', '业务员', '付款账户'];
            var fieldType = ['ft_Str', 'ft_ListStr', 'ft_ListStr', 'ft_ListStr', 'ft_ListStr', 'ft_Str', 'ft_ListStr', 'ft_ListStr'];
            var itemno = ['0', '1', '2', '3', '4', '5', '6', '7'];
            var operate = ['包含', '等于'];
            for (var i = 0; i < 8; i++) {
                var data = {};
                data["filterItems[" + i + "].displayvalue"] = keyword;
                data["filterItems[" + i + "].fieldid"] = fieldid[i];
                data["filterItems[" + i + "].fieldlabel"] = fieldlabel[i];
                data["filterItems[" + i + "].fieldtype"] = fieldType[i];
                data["filterItems[" + i + "].itemno"] = itemno[i];
                data["filterItems[" + i + "].operate"] = operate[0];
                data["filterItems[" + i + "].realvalue"] = keyword;
                $.extend(dataJson, data);
            }
            return dataJson;
        },
        //销售发货
        'sale_del': function (keyword) {
            var dataJson = {};
            dataJson.filterItemRelation = '全部或者';
            var fieldid = ['70039', '70040', '70042', '70043', '70044', '70036', '70041'];
            var fieldlabel = ['单据编号', '客户', '业务员', '联系人', '客户编码', '分支机构', '仓库'];
            var fieldType = ['ft_Str', 'ft_ListStr', 'ft_ListStr', 'ft_ListStr', 'ft_Str', 'ft_ListStr', 'ft_ListStr'];
            var itemno = ['0', '1', '2', '3', '4', '5', '6'];
            var operate = ['包含', '等于'];
            for (var i = 0; i < 7; i++) {
                var data = {};
                data["filterItems[" + i + "].displayvalue"] = keyword;
                data["filterItems[" + i + "].fieldid"] = fieldid[i];
                data["filterItems[" + i + "].fieldlabel"] = fieldlabel[i];
                data["filterItems[" + i + "].fieldtype"] = fieldType[i];
                data["filterItems[" + i + "].itemno"] = itemno[i];
                data["filterItems[" + i + "].operate"] = operate[0];
                data["filterItems[" + i + "].realvalue"] = keyword;
                $.extend(dataJson, data);
            }
            return dataJson;
        },
        //现款销售
        'cash_sale': function (keyword) {
            var dataJson = {};
            dataJson.filterItemRelation = '全部或者';
            var fieldid = ['70058', '70059', '70060', '70061', '70062', '70637', '70066', '70067'];
            var fieldlabel = ['单据编号', '客户', '仓库', '业务员', '联系人', '分支机构', '收款方式', '付款账户'];
            var fieldType = ['ft_Str', 'ft_ListStr', 'ft_ListStr', 'ft_ListStr', 'ft_ListStr', 'ft_ListStr', 'ft_ListStr', 'ft_ListStr'];
            var itemno = ['0', '1', '2', '3', '4', '5', '6', '7'];
            var operate = ['包含', '等于'];
            for (var i = 0; i < 8; i++) {
                var data = {};
                data["filterItems[" + i + "].displayvalue"] = keyword;
                data["filterItems[" + i + "].fieldid"] = fieldid[i];
                data["filterItems[" + i + "].fieldlabel"] = fieldlabel[i];
                data["filterItems[" + i + "].fieldtype"] = fieldType[i];
                data["filterItems[" + i + "].itemno"] = itemno[i];
                data["filterItems[" + i + "].operate"] = operate[0];
                data["filterItems[" + i + "].realvalue"] = keyword;
                $.extend(dataJson, data);
            }
            return dataJson;
        },
        //销售退货
        'sale_return': function (keyword) {
            var dataJson = {};
            dataJson.filterItemRelation = '全部或者';
            var fieldid = ['70080', '70081', '70082', '70083', '70084', '70085', '70100', '70089'];
            var fieldlabel = ['单据编号', '仓库', '客户名称', '分支机构', '业务员', '联系人', '客户编码', '付款帐户'];
            var fieldType = ['ft_Str', 'ft_ListStr', 'ft_ListStr', 'ft_ListStr', 'ft_ListStr', 'ft_Str', 'ft_ListStr'];
            var itemno = ['0', '1', '2', '3', '4', '5', '6', '7'];
            var operate = ['包含', '等于'];
            for (var i = 0; i < 8; i++) {
                var data = {};
                data["filterItems[" + i + "].displayvalue"] = keyword;
                data["filterItems[" + i + "].fieldid"] = fieldid[i];
                data["filterItems[" + i + "].fieldlabel"] = fieldlabel[i];
                data["filterItems[" + i + "].fieldtype"] = fieldType[i];
                data["filterItems[" + i + "].itemno"] = itemno[i];
                data["filterItems[" + i + "].operate"] = operate[0];
                data["filterItems[" + i + "].realvalue"] = keyword;
                $.extend(dataJson, data);
            }
            return dataJson;
        }
    }
    //条件筛选（供应商/客户）fieldid
    this.traderNameFieldid = {
        'sale_order': '70306',//销售订单
        'pur_order': '70325',//采购订单
        'pur_gain': '70001',//采购收货
        'pur_return': '70021',//采购退货
        'cash_pur': '70249',//现款采购
        'sale_del': '70040',//销售发货
        'cash_sale': '70059',//现款销售
        'sale_return': '70082'//销售退货
    }
    //根据请求类型获取（供应商/客户）搜索类型数组键名
    this.getTraderNameKey = {
        'sale_order': 'customer',//销售订单
        'pur_order': 'trader',//采购订单
        'pur_gain': 'trader',//采购收货
        'pur_return': 'trader',//采购退货
        'cash_pur': 'trader',//现款采购
        'sale_del': 'customer',//销售发货
        'cash_sale': 'customer',//现款销售
        'sale_return': 'customer'//销售退货
    }
    //基础资料参数
    this.baseData = {
        //供应商
        'trader': function (keyword) {
            return {
                'viewname': 'vendor_ds',
                'filter': 'CLOSED=\'F\' and phoneapply=\'T\'',
                'likeValue': keyword || ''
            }
        },
        //客户
        'customer': function (keyword) {
            return {
                'viewname': 'client_ds',
                'filter': 'CLOSED=\'F\' and phoneapply=\'T\'',
                'likeValue': keyword || ''
            }
        },
        //仓库
        'store': function () {
            return {
                'viewname': 'store_ds',
                'filter': 'CLOSED=\'F\'',
                'likeValue': ''
            }
        },
        //联系人
        'linkman': function () {
            return {
                'viewname': 'dslinkman',
                'filter': 'm.closed =0 and t.traderid=30',
                'likeValue': ''
            }
        },
        //部门
        'department': function () {
            return {
                'viewname': 'department_ds',
                'filter': '1=1',
                'likeValue': ''
            }
        },
        //业务员/员工
        'employ': function (keyword) {
            var shopid = window.localStorage.getItem('shopID') || '';
            return {
                'viewname': 'employ_ds',
                'filter': 'IsOperate=\'T\'and Sign=\'T\'and shopid =' + shopid,
                'likeValue': keyword || ''
            }
        },
        //发票类型
        'noteType': function () {
            return {
                'viewname': 'billtype_ds',
                'filter': '1=1',
                'likeValue': ''
            }
        },
        //退款类型
        'returnType': function () {
            return {
                'viewname': 'backmoney_ds',
                'filter': '1=1',
                'likeValue': ''
            }
        },
        //项目名称
        'project': function () {
            return {
                'viewname': 'jobproject_ds',
                'filter': '1=1',
                'likeValue': ''
            }
        },
        //付款账户
        'payAccount': function () {
            return {
                'viewname': 'bank_ds',
                'filter': '1=1',
                'likeValue': ''
            }
        },
        //付款方式
        'payType': function () {
            return {
                'viewname': 'paytype_ds',
                'filter': '1=1',
                'likeValue': ''
            }
        },
        //货品
        'goods': function (keyword) {
            return {
                'viewname': 'goods',
                'filter': 'closed=\'F\' and g.phoneapply=\'T\'',
                'likeValue': keyword || ''
            }
        },
        //会员信息(卡号、积分)
        'memberInfo': function () {
            var shopid = localStorage.getItem('shopID') || '';
            return {
                'viewname': 'Vip_DS',
                'filter': 'isvalidit=1 and shopid='+shopid
            }
        }
    }
    /**
     * [getBaseOptionHtml 基础optionHTML模版]
     * @param  {[json]} json [json数据]
     * @return {[html]}      [HTML模版]
     */
    this.getBaseOptionHtml = {
        //基础optionHTML模版
        'base': function (json) {
            return '<option data-id="' + json.id + '">' + json.name + '</option>';
        },
        //仓库(下拉选择框)HTML模版
        'store': function (json) {
            return '<option data-id="' + json.storeid + '">' + json.name + '</option>'
        },
        //项目(下拉选择框)HTML模版
        'project': function (json) {
            return '<option data-id="' + json.projectid + '">' + json.name + '</option>';
        },
        //业务员/员工(下拉选择框)HTML模版
        'employ': function (json) {
            return '<option data-id="' + json.empid + '">' + json.empcode + ' ' + json.name + '</option>';
        },
        //发票类型(下拉选择框)HTML模版
        'noteType': function (json) {
            return '<option data-id="' + json.billtypeid + '">' + json.name + '</option>';
        },
        //付款帐户(下拉选择框)HTML模版
        'payAccount':function(json){
            return '<option data-id="'+json.bankid+'">'+json.name+'</option>';
        },
        //付款方式(下拉选择框)HTML模版
        'payType':function(json){
            return '<option data-id="'+json.paytypeid+'" data-bankid="'+json.bankid+'" data-accountname="'+json.accountname+'">'+json.name+'</option>';
        },
    }
    /**
     * [getTaxrate 根据不同的开单类型获取税率]
     */
    this.getTaxrate = function (type, notetype) {
        if (type.indexOf('sale') > -1) {
            //销售开单
            if (notetype == 1) {
                //收据
                return 0;
            }
        } else {
            //采购开单
            if (notetype == 1 || notetype == 2) {
                //收据or普通发票
                return 0;
            }
        }
    }
}

Base_index.prototype = {
    init: (function () {
        $('body').removeClass('uhide');
        if (!localStorage.getItem('sdIP')) {
            layer.closeAll();
            closeToLogin('您没有登陆或长时间没使用,请重新登陆!');
            return false;
        }
    })(),

    useMask: function () {
        $('.focusShade').width($(window).width()).height($(window).height());
        $('.module-input-t1 input').focus(function () {
            $('.focusShade').removeClass('uhide');
            $('body').addClass('forbid-scroll');
        });
        $('.module-input-t1 input').blur(function () {
            $('.focusShade').addClass('uhide');
            $('body').removeClass('forbid-scroll');
        })
    },
    checkType: function (type) {
        var typeArr = ['sale_order', 'pur_order', 'pur_gain', 'pur_return', 'cash_pur', 'sale_del', 'cash_sale', 'sale_return'];
        if (typeArr.indexOf(type) == -1) {
            type = '';
        }
        return type;
    },
    checkAction: function (action) {
        var actionArr = ['edit', 'add', 'filter'];
        if (actionArr.indexOf(action) == -1) {
            action = '';
        }
        return action;
    },
    change_select: function (selObj) {
        selObj.prev('input').val(selObj.val());
        var selectId = selObj.find("option").not(function () { return !this.selected }).data('id');
        selObj.prev('input').data('id', selectId);
        selObj.data('id', selectId);
    },
    /**
     * [setLocalStorage 设置本地存储]
     * @param {[string]} name  [键名]
     * @param {[string]} value [值]
     */
    setLocalStorage: function (name, value) {
        if (this.isJson(value)) {
            value = JSON.stringify(value);
        }
        window.localStorage.setItem(name, value);
    },
    /**
     * [getLocalStorage 获取本地存储]
     * @param {[string]} name  [键名]
     * @return {[string]}      [本地存储数据]
     */
    getLocalStorage: function (name) {
        var ls = window.localStorage.getItem(name);
        //判断是否存在
        if (!ls) {
            ls = '';
        }
        return ls;
    },
    setSessionStorage: function (name, value) {
        if (this.isJson(value)) {
            value = JSON.stringify(value);
        }
        sessionStorage.setItem(name, value);
    },
    extendSessionStorage: function (name, json) {
        if (sessionStorage.getItem(name)) {
            sessionStorage.setItem(name, JSON.stringify($.extend(JSON.parse(sessionStorage.getItem('session_filterJson')), json)));
        }
    },
    /**
     * [readPattern 详情编辑模式]
     */
    readPattern: function () {
        $('input[type="text"]').attr('readonly', 'true');
        $('select').attr('disabled', 'true');
        $('.item-tilte').removeClass('tx-bla');
        $('.item-tilte').css('color', '#999!important');
        $('select').parent().parent().parent().removeClass('bg-f8-active');
        $('select').prev('input').attr('disabled', 'true');
        $('select').parent().after('<div class="ub ub-f1" style="position: absolute;width: 100%;height: 100%;left: 0;"></div>');
        $('input').parent().parent().parent().removeClass('bg-f8-active');
        $('#chooseGoodsBtn').removeClass('bg-f8-active');
    },
    /**
     * [offDatePicker 屏蔽日期选择器]
     * @param  {[type]} picker [日期选择器对象]
     */
    offDatePicker: function (picker) {
        picker.after('<div class="ub ub-f1" style="position: absolute;width: 100%;height: 100%;left: 0;"></div>');
        picker.parent().parent().parent().removeClass('bg-f8-active');
    },
    /**
     * [onInputText text输入框不可用]
     * @param  {[type]} inputObj [输入框对象]
     */
    offInputText:function(inputObj){
        inputObj.attr('readonly', 'true');
        inputObj.parent().parent().parent().addClass('bg-f8-active');
        inputObj.parent().prev('.item-tilte').removeClass('tx-bla');
        inputObj.parent().prev('.item-tilte').addClass('tx-gray');
    },
    /**
     * [onInputText text输入框可用]
     * @param  {[type]} inputObj [输入框对象]
     */
    onInputText:function(inputObj){
        inputObj.removeAttr('readonly');
        inputObj.parent().parent().parent().removeClass('bg-f8-active');
        inputObj.parent().prev('.item-tilte').removeClass('tx-gray');
        inputObj.parent().prev('.item-tilte').addClass('tx-bla');
    },
    /**
     * [onMobiscroll Mobiscroll可用]
     * @param  {[type]} selObj [下拉选择框对象]
     */
    onMobiscroll: function (selObj) {
        selObj.parent().prev().addClass('tx-bla');
        selObj.parent().prev().removeClass('tx-gray');
        selObj.parent().prev().parent().parent().addClass('bg-f8-active');
        selObj.addClass('hide');
        selObj.removeAttr('disabled');
        selObj.prev('input').removeAttr('disabled');
        selObj.prev('input').removeClass('tx-gray');
        // selObj.parent().after('<div class="ub ub-f1 sel-dis" style="position: absolute;width: 100%;height: 100%;left: 0;"></div>');
    },
    /**
     * [offMobiscroll Mobiscroll不可用]
     * @param  {[type]} selObj [下拉选择框对象]
     */
    offMobiscroll: function (selObj) {
        selObj.parent().prev().removeClass('tx-bla');
        selObj.parent().prev().addClass('tx-gray');
        selObj.parent().prev().parent().parent().removeClass('bg-f8-active');
        selObj.addClass('hide');
        selObj.attr('disabled', 'true');
        selObj.prev('input').attr('disabled', 'true');
        selObj.prev('input').addClass('tx-gray');
        // selObj.parent().after('<div class="ub ub-f1 sel-dis" style="position: absolute;width: 100%;height: 100%;left: 0;"></div>');
    },
    /**
     * [offSelecter 设置下拉框不可选]
     * @param  {[object]} selObj [下拉框对象]
     */
    offSelecter: function (selObj) {
        selObj.attr('disabled', 'true');
        selObj.parent().prev().removeClass('tx-bla');
        selObj.parent().prev().addClass('tx-gray');
        selObj.parent().prev().parent().parent().removeClass('bg-f8-active');
        selObj.addClass('hide');
        selObj.prev('input').attr('disabled', 'true');
    },
    /**
     * [onSelecter 设置下拉框可选]
       * @param  {[object]} selObj [下拉框对象]
     */
    onSelecter: function (selObj) {
        selObj.removeAttr('disabled');
        selObj.parent().prev().addClass('tx-bla');
        selObj.parent().prev().removeClass('tx-gray');
        selObj.parent().prev().parent().parent().addClass('bg-f8-active');
        selObj.removeClass('hide');
        selObj.prev('input').removeAttr('disabled');
    },
    /**
     * [offSelectPageBtn 设置跳转选择列表按钮不可用]
       * @param  {[object]} btnObj [按钮对象]
     */
    offSelectPageBtn: function (btnObj) {
        btnObj.data('on', '0');
        btnObj.removeClass('bg-f8-active');
        btnObj.children().children('.item-tilte').removeClass('tx-bla');
        btnObj.find('input').addClass('tx-gray');
        btnObj.children().children('.item-tilte').addClass('tx-gray');
    },
    /**
     * [onSelectPageBtn 设置跳转选择列表按钮可用]
     * @param  {[object]} btnObj [按钮对象]
     */
    onSelectPageBtn: function (btnObj) {
        btnObj.data('on', '1');
        btnObj.addClass('bg-f8-active');
        btnObj.children().children('.item-tilte').addClass('tx-bla');
        btnObj.find('input').removeClass('tx-gray');
        btnObj.children().children('.item-tilte').removeClass('tx-gray');

    },
    /**
     * [onSelectPageBtn 设置checkbox按钮可用]
     * @param  {[object]} CheckboxObj [checkbox对象]
     */
    onCheckboxBtn: function (CheckboxObj) {
        CheckboxObj.removeAttr('disabled');
        CheckboxObj.parent().parent().prev().removeClass('tx-gray');
        CheckboxObj.parent().parent().prev().addClass('tx-bla');
    },
    /**
     * [onSelectPageBtn 设置checkbox按钮不可用]
     * @param  {[object]} CheckboxObj [checkbox对象]
     */
    offCheckboxBtn: function (CheckboxObj) {
        CheckboxObj.attr('disabled', 'true');
        CheckboxObj.parent().parent().prev().addClass('tx-gray');
        CheckboxObj.parent().parent().prev().removeClass('tx-bla');

    },
    /**
     * [getSelectedAttr 获取下拉框被选中的属性]
       * @param  {[object]} selObj [下拉框对象]
     * @return {[string]}        [下拉框被选中的option的属性名称]
     */
    getSelectedAttr: function (selObj, attrName) {
        // return selObj.children('option:checked').attr(attrName);
        return selObj.find("option").not(function () { return !this.selected }).attr(attrName);
    },
    /**
     * [setSelectedText 获取下拉框被选中的text]
       * @param  {[object]} selObj [下拉框对象]
     * @return {[string]}        [下拉框被选中的option的text]
     */
    getSelectedText: function (selObj) {
        return selObj.find("option").not(function () { return !this.selected }).val();
        // return selObj.children('option:checked').val();
    },
    isEmpty: function(obj){
        if(obj==null || typeof(obj)=='undefined' || obj==''){
            return true;
        }else{
            return false;
        }
    },
    /**
     * [isJson 判断是否为JSON格式]
     * @param  {[var]}  obj [变量]
     * @return {boolean}     [是否为JSON格式]
     */
    isJson: function (obj) {
        var bool = typeof (obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
        return bool;
    },
    /**
     * [isEmptyJson 判断JSON对象是否为空]
     * @param  {[type]}  obj [JSON对象]
     * @return {Boolean}     [是否为空]
     */
    isEmptyJson: function (obj) {
        for (var name in obj) {
            return false;
        }
        return true;
    },
    /**
     * [layerMsg 弹窗提示]
     * @param  {[string]} content [提示信息]
     */
    layerMsg: function (content) {
        layer.open({
            content: content,
            className: 'layerMobile',
            time: 2
        });
    },
    /**
    * [layerJumpLogin 弹窗提示并跳转到登录页]
    * @param  {[string]} content [提示信息]
    */
    layerJumpLogin: function (content) {
        layer.open({
            content: content,
            className: 'layerMobile',
            time: 2,
            end: function () {
                setTimeout(function () {
                    window.location.href = '../login/en_login.html';
                }, 2000);
            }
        });
    },
    /**
     * [getOneParam 根据URL获取传递的参数]
     * @param  {[string]} href 	[地址]
     * @return   {[json]}	param [传递的键和值]	
     */
    getOneParam: function (href) {
        var len = href.length;//获取url的长度
        var offset = href.indexOf("?");//设置参数字符串开始的位置
        var newsidinfo = href.substr(offset + 1, len)//取出参数字符串 这里会获得类似“id=1”这样的字符串
        var paramArray = newsidinfo.split("=");//对获得的参数字符串按照“=”进行分割
        //得到参数值
        var name = paramArray[0];
        var value = paramArray[1];
        return param = {
            'name': name,
            'value': value
        }
    },
    //静态页面传值，Url传值解析
    getPageParams: function (key) {
        var keyList = [];
        var valueList = [];
        var hrefStr = decodeURIComponent(window.location.href);
        var strArray = hrefStr.split("?");
        var paramStr = strArray[1];
        if (paramStr != null && paramStr != "") {
            var paramArray = paramStr.split("&");
            for (var i = 0; i < paramArray.length; i++) {
                var param = paramArray[i];
                valueList.push(param.substr(param.indexOf("=") + 1));
                keyList.push(param.substr(0, param.indexOf("=")));
            }
            for (var j = 0; j < keyList.length; j++) {
                if (key == keyList[j]) {
                    return valueList[j];
                }
            }
        }
    },
    /**
     * [DataCommand 数据请求]
     * @param {[string]}	url		[请求地址]
     * @param {[string]}	type 	[请求类型]
     * @param {[json]}	data 	[请求参数]
     */
    DataCommand: function (url, type, data) {
        return {
            url: url,       //请求地址
            type: type,     //请求类型
            data: data || {},       //请求参数
            initData: $.extend({}, data || ''),
            pageSize: 5,    //显示数量
            start: 0,   //开始序号
            pageNum: 0, //页码
            nowPageNum: 1,  //当前页码
            filterItems: {},    //筛选参数
            /**
             * [init 初始化参数]
             * @return {json} dataJson [请求参数]
             */
            init: function (retCallback, errCallback) {
                showLoading();
                var dataJson = {
                    'type': this.type,
                    'url': this.url,
                    'dataType': 'json',
                    'data': this.data || {}
                }
                console.log(JSON.stringify(dataJson));
                Get_ajax(dataJson, retCallback, errCallback);
            },
            /**
             * [setData 设置参数]
             * @param {[json]} data [json参数]
             */
            setData: function (data) {
                this.data = $.extend({}, this.initData);
                this.nowPageNum = 1;
                this.data.pageSize = this.pageSize;
                this.data.start = this.start = 0;
                // this.data = $.extend({}, data || '');
            },
            /**
             * [setPageSize 设置显示列表元素数量]
             * @param {[int]}	pageSize [数量]
             */
            setPageSize: function (pageSize) {
                this.data.pageSize = this.pageSize = pageSize;
            },
            /**
             * [setPageNum 设置页码]
             * @param {[int]}	pageNum 	[页码]
             */
            setPageNum: function (pageNum) {
                this.data.start = this.start;
                this.pageNum = pageNum;
            },
            /**
             * [addNowPageNum 设置当前页码+1]
             */
            addNowPageNum: function () {
                this.nowPageNum += 1;
            },
            /**
             * [getPageNum 获取页码]
             * @return {int} [页码]
             */
            getPageNum: function () {
                return this.pageNum;
            },
            /**
             * [setStart 设置列表元素开始序号]
             * @param {[int]}	start 	[开始序号]
             */
            setStart: function (start) {
                this.start = start;
            },
            /**
             * [refreshPage 刷新]
             * @param {[function]} 	retCallback 	[请求成功函数]
             * @param {[function]} 	errCallback 	[请求错误函数]
             */
            refreshPage: function (retCallback, errCallback) {
                this.data = $.extend({}, this.initData);
                this.nowPageNum = 1;
                this.data.pageSize = this.pageSize;
                this.data.start = this.start = 0;
                this.init(retCallback, errCallback);
            },
            /**
             * [nextPage 下一页]
             * @param {[function]} 	retCallback 	[请求成功函数]
             * @param {[function]} 	errCallback 	[请求错误函数]
             */
            nextPage: function (retCallback, errCallback) {
                if (this.nowPageNum < this.pageNum) {
                    this.init(retCallback, errCallback);
                } else {
                    layer.open({
                        content: '已加载全部',
                        className: 'layerMobile',
                        time: 2
                    });
                }
            },
            /**
             * [setNextData 设置下一页]
             */
            setNextData: function () {
                if (this.pageNum > 0) {
                    this.start = this.start + this.pageSize;
                    this.data.start = this.start;
                    this.data.pageSize = this.pageSize;
                }
            },
            /**
             * [searchData 搜索]
             * @param {[function]} 	retCallback 	[请求成功函数]
             * @param {[function]} 	errCallback 	[请求错误函数]
             */
            sendSearch: function (retCallback, errCallback) {
                this.data.start = this.start = 0;
                this.nowPageNum = 1;
                $.extend(this.data, this.filterItems);
                this.init(retCallback, errCallback);
            },
            /**
             * [initSearchData 初始化搜索参数]
             */
            initSearchData: function (filterItem) {
                $.extend(this.filterItems, filterItem);
            },
            /**
             * [initSearchBaseData 初始化搜索基础资料模块]
             * @param  {[json]} baseFilterItem [搜索参数]
             */
            sendSearchBaseData: function (baseFilterItem, retCallback, errCallback) {
                this.data.start = this.start = 0;
                this.nowPageNum = 1;
                this.data = $.extend({}, baseFilterItem);
                this.init(retCallback, errCallback);
            },
            /**
             * [setFiterItem 设置筛选参数]
             * @param {[Json]} filterItem [筛选参数]
             */
            setFiterItem: function (filterItem) {
                $.extend(this.filterItems, filterItem);
            },
            /**
             * [filterData 过滤请求]
             * @param  {[json]} dataJson    [过滤参数]
             * @param  {[function]} retCallback [请求成功回调]
             * @param  {[function]} errCallback [请求失败回调]
             */
            filterData: function (dataJson, retCallback, errCallback) {
                this.filterItems = $.extend({}, {});
                var itemIndex = -1;
                //供应商/客户
                if (dataJson.traderId != '') {
                    itemIndex += 1;
                    var traderItem = {};
                    traderItem['filterItems[' + itemIndex + '].displayvalue'] = dataJson.traderName;
                    traderItem['filterItems[' + itemIndex + '].fieldid'] = dataJson.traderNameFieldid;//条件筛选（供应商/客户）fieldid
                    traderItem['filterItems[' + itemIndex + '].fieldlabel'] = dataJson.traderNameFieldlabel + '名称';//条件筛选（供应商/客户）fieldlabel
                    traderItem['filterItems[' + itemIndex + '].fieldtype'] = 'ft_ListStr';
                    traderItem['filterItems[' + itemIndex + '].itemno'] = itemIndex;
                    traderItem['filterItems[' + itemIndex + '].operate'] = '等于';
                    traderItem['filterItems[' + itemIndex + '].realvalue'] = dataJson.traderName;//供应商名称/客户名称
                    $.extend(this.filterItems, traderItem);
                }

                this.filterItems.filterItemRelation = '全部或者';
                //初始化数据
                this.data = $.extend({}, this.initData);
                this.data.start = this.start = 0;
                this.nowPageNum = 1;
                this.data.beginDate = dataJson.beginDate;//开始时间
                this.data.endDate = dataJson.endDate;//结束时间
                $.extend(this.data, this.filterItems);
                console.log(JSON.stringify(this.data));
                this.init(retCallback, errCallback);
            }
        }
    },
    /**
     * [HtmlCommand HTML设置]
     * @param {[string]} html [HTML模板]
     */
    HtmlCommand: function (html) {
        return {
            htmls: '',
            set: function (json) {
                this.htmls += html(json);
            },
            /**
             * [appendIn 追加元素]
             * @param  {[obj]} obj [需要添加的父节点对象]
             */
            appendIn: function (obj) {
                obj.append(this.htmls);
                this.htmls = '';
                hideProgress();
            },
            /**
             * [clearConFrom 清空节点]
             * @param  {[obj]} obj [需要清空的父节点对象]
             */
            clearConFrom: function (obj) {
                obj.children().remove();
            },
            /**
             * [setNoDataImg 设置缺省图]
             * @param {[obj]} obj [设置缺省图的父节点对象]
             */
            setNoDataImg: function (obj) {
                obj.html('<div class="none-icon"><img src="../../images/none.png"><div class="tx-gray">暂无数据</div></div>');
                hideProgress();
            }
        }
    },
    /**
     * [countPageNum 获取页码]
     * @param {[int]} 	count 		[元素总数]
     * @param {[int]}	pageSize	[显示数量]
     * @return  {int} 	pageNum 	[页码]
     */
    countPageNum: function (count, pageSize) {
        var pageNum = Math.floor(count / pageSize);
        if (count % pageSize > 0) {
            pageNum += 1;
        }
        return pageNum;
    },
    /**
     * [setText 设置标签元素的text]
     * @param {[object]} dom [dom对象]
     * @param {[string]}	text  [内容]
     */
    setText: function (dom, text) {
        if (dom) {
            if (typeof (text) != 'null') {
                dom.text(text);
            }
        }
    },
    /**
     * [setValue 设置表单元素的value]
     * @param {[object]} dom [dom对象]
     * @param {[string]}	value  [内容]
     */
    setValue: function (dom, value) {
        if (dom) {
            if (typeof (value) != 'null' && value != 'null') {
                dom.val(value);
            }
        }
    },
    /**
     * [initMobiscroll 初始化下拉选择]
     */
    initMobiscroll: function () {
        $('select').mobiscroll().select({
            theme: 'mobiscroll',
            lang: 'zh',
            display: 'bottom',
            mode: 'selectBasic'
        });
    },
    /**
     * [setValue 设置mobiscroll的id]
     * @param {[object]} obj [jquery对象]
     * @param {[string]}    value  [内容]
     */
    setMobiscrollId: function (obj, attrValue) {
        if (obj) {
            if (typeof (attrValue) != 'null' && attrValue != 'null') {
                obj.data('id', attrValue);
                obj.attr('real-id', attrValue);
                // console.log('real-id：' + obj.attr('real-id'));
            }
        }
    },
    /**
     * [setValue 设置mobiscroll的value]
     * @param {[object]} obj [jquery对象]
     * @param {[string]}	value  [内容]
     */
    setMobiscrollValue: function (obj, value) {
        if (obj) {
            if (typeof (value) != 'null' && value != 'null') {
                obj.attr('value', value);
                obj.mobiscroll().select({
                    theme: 'mobiscroll',
                    lang: 'zh',
                    display: 'bottom',
                    mode: 'selectBasic'
                });
                obj.prev('input').val(value);
                obj.prev('input').attr('value', value);
                obj.attr('real-value', value);
            }
        }
    },
    /**
     * [getMobiscrollValue 获取mobiscroll的value]
     * @param  {[type]} obj [description]
     * @return {[string]}     [value]
     */
    getMobiscrollValue: function (obj) {
        if (obj && obj.prev('input')) {
            return obj.prev('input').val();
        } else {
            return '';
        }
    },
    /**
     * [getBaseData 获取基础资料(选择框)]
     * @param  {[dom]} selObj [选择框对象]
     * @param  {[string]} base   [基础资料对象字符串]
     */
    getBaseData: function (selObj, base, htmlModeName) {
        var isLoad = selObj.data('load') || '';
        var isDisabled = selObj.attr('disabled');
        if (isLoad == '') {
            var dataJson = {
                'url': 'http://' + window.localStorage.getItem('sdIP') + '/lookupdm/lookupdata.action',
                'method': 'post',
                'data': this.baseData[base]() || ''
            }
            var htmlMode = this.getBaseOptionHtml[htmlModeName];//初始化HTML模版
            Get_ajax(dataJson, function (ret) {
                if (ret.errNo) {
                    //提示错误信息弹窗
                    closeToLogin(ret.errMsg);
                } else {
                    var optionHtml = '';
                    for (var k in ret.listData) {
                        optionHtml += htmlMode(ret.listData[k]);
                    }
                    selObj.append(optionHtml);
                    selObj.mobiscroll().select({
                        theme: 'mobiscroll',
                        lang: 'zh',
                        display: 'bottom',
                        mode: 'selectBasic'
                    });
                    console.log(selObj.find("option").not(function () { return !this.selected }).data('id'));
                    selObj.data('id', selObj.find("option").not(function () { return !this.selected }).data('id'));
                    var realValue = selObj.attr('real-value') || '';
                    console.log('realValue:' + realValue);
                    if (realValue != '') {
                        selObj.prev('input').val(selObj.attr('real-value'));
                        console.log('real_id:' + selObj.attr('real-id'));
                        selObj.data('id', selObj.attr('real-id'));
                    }
                    if (isDisabled == 'disabled') {
                        selObj.attr('disabled', 'true');
                        selObj.prev('input').attr('disabled', 'true');
                    }
                }
            }, function (ret) {
                layerMsg(ret.errMsg);
            });
        }
    },
    /**
     * [getMemberData 获取vip会员信息]
     * @param  {[type]} vipid [vipid]
     */
    getMemberData: function (vipid) {
        if (vipid != '') {
            var dataJson = {
                'url': 'http://' + localStorage.getItem('sdIP') + this.baseUrl['base'],
                'method': 'post',
                'data': this.baseData['memberInfo']() || ''
            };
            Get_ajax(dataJson, function (ret) {
                if (ret.listData) {
                    for (var k in ret.listData) {
                        if (vipid == ret.listData[k].vipid) {
                            $('#traderName').data('vipcode', ret.listData[k].code) || '';
                            // $('#traderName').data('currscore', ret.listData[k].currscore) || '';
                        }
                    }
                }
            }, function (ret) {

            });
        }
    },
    /**
     * [getBankNameById 通过id获取支付方式\收款方式]
     * @param  {[type]} bankObj [description]
     * @param  {[type]} bankId  [description]
     * @return {[type]}         [description]
     */
    getBankNameById: function(bankObj, bankId){
        var dataJson = {
            'url': 'http://' + localStorage.getItem('sdIP') + this.baseUrl['bankName'],
            'method': 'post',
            'data': {
                'id': bankId
            }
        }
        Get_ajax(dataJson, function(ret){
                if(ret.errNo){
                    layerMsg(ret.errMsg);
                }else{
                    var bankName = ret.list[0].name;
                    var bankid = ret.list[0].bankid;
                    bankObj.prev('input').val(bankName);
                    bankObj.val(bankName);
                    bankObj.data('id', bankid);
                    bankObj.attr('real-id', bankid);
                }
            }, function(ret){
                layerMsg(ret.errMsg);
            }
        );
    },
    /**
     * [hasprivileges 是否有权修改单号日期]
     * @return {[boolean]} [是否有权修改]
     */
    hasprivileges: function(){
        var dataJson = {
            'url': 'http://' + localStorage.getItem('sdIP') + '/mobile/hasprivileges.action',
            'method': 'post',
            'data': {
                'modId': '801',
                'privilegeType': '4'
            }
        };
        Get_ajax(dataJson, function(ret){
                if(!ret.hasPrivilege){
                    //日期选择器不可用
                    $('#billDate').after('<div class="ub ub-f1" style="position: absolute;width: 100%;height: 100%;left: 0;"></div>');
                    $('#billDate').parent().parent().parent().removeClass('bg-f8-active');
                    $('#billDate').parent().prev('.item-tilte').removeClass('tx-bla');
                    $('#billDate').parent().prev('.item-tilte').addClass('tx-gray');
                    //单号
                    $('#billCode').attr('readonly', 'true');
                    $('#billCode').parent().parent().parent().removeClass('bg-f8-active');
                    $('#billCode').parent().prev('.item-tilte').removeClass('tx-bla');
                    $('#billCode').parent().prev('.item-tilte').addClass('tx-gray');
                }
            }, function(ret){
                layerMsg(ret.errMsg);
            }
        );
    },
    /**
     * [change_trader 供应商/客户改变事件]
     * @param  {[type]} traderJson [JSON数据]
     */
    change_trader: function (traderJson) {
        $('#traderName').val(traderJson.traderName || '');
        $('#traderName').data('id', traderJson.traderId);
        console.log($('#traderName').data('id'));
        $('#traderName').data('code', traderJson.traderCode);
        $('#traderName').data('phone', traderJson.phone || '');
        $('#traderName').data('fax', traderJson.fax || '');
        $('#traderName').data('linkmanid', traderJson.linkmanid);
        $('#traderName').data('linkmanname', traderJson.linkmanname || '');
        $('#traderName').data('shipto', traderJson.shipto || '');
        $('#traderName').data('balance', traderJson.balance || '');
        $('#depName').data('id', traderJson.departmentid);
        this.setMobiscrollValue($('#depName'), traderJson.departmentname || '');
        $('#empName').data('id', traderJson.employid);
        this.setMobiscrollValue($('#empName'), traderJson.employname || '');
        $('#traderName').data('vipid', traderJson.vipid);
        $('#traderName').data('shortname', traderJson.shortname || '');
        $('#traderName').data('clientaddress', traderJson.clientaddress || '');
        $('#traderName').data('clienttaxid', traderJson.clienttaxid);
        $('#traderName').data('clientbankid', traderJson.clientbankid);
        $('#traderName').data('clientphone', traderJson.clientphone || '');
        $('#traderName').data('clientbank', traderJson.clientbank || '');
    },
    /**
     * [change_notetype 发票类型change事件]
     */
    change_notetype: function (type, noteType) {
        var setDetailFromTaxrate = function (goodObj, taxrate) {
            var goodsData = JSON.parse(goodObj.attr('data-json'));

            var qty = goodsData.unitqty;//业务数量

            //含税价=(1+税率)*业务单价
            var taxprice=(1+taxrate/100)*goodsData.unitprice;
            //税金=货款*税率
            var taxAmt =goodsData.goodsamt*taxrate/100;
            //价税合计=含税单价*业务数量
            var total = taxprice * qty;

            goodsData.total = total.toFixed(2);//金额
            goodsData.amount=total.toFixed(2);//保存的时候用的总额
            goodsData.taxprice = taxprice.toFixed(6);//含税单价
            goodsData.taxamt = taxAmt.toFixed(2);//税额
            goodsData.taxrate = taxrate;//税率

            goodObj.attr('data-json', JSON.stringify(goodsData));
            goodObj.find('.goodsTaxrate').text(taxrate);//税率
            goodObj.find('.goodsTaxprece').text(total.toFixed(2));//金额
            return total;
        }
        var getTaxrate = function (type, notetype) {
            if (type.indexOf('sale') > -1) {
                //销售开单
                if (notetype == 1) {
                    //收据
                    return 0;
                }
            } else {
                //采购开单
                if (notetype == 1 || notetype == 2) {
                    //收据or普通发票
                    return 0;
                }
            }
        }
        var taxrate = getTaxrate(type, noteType);
        var billAmount = 0;
        $('.goodsItem').each(function (index, el) {
            if (type.indexOf('sale') > -1) {
                var goodsData = JSON.parse($(el).attr('data-json'));
                var goodsTaxrate = goodsData.saletaxrate;
                //销售类
                if (noteType == 1) {
                    //收据
                    billAmount += setDetailFromTaxrate($(el), 0);
                } else if (noteType == 2) {
                    if (goodsTaxrate != '' && goodsTaxrate != null && goodsTaxrate != undefined) {
                        //使用货品带入的货品税率
                        billAmount += setDetailFromTaxrate($(el), goodsTaxrate);
                    } else {
                        //使用账套带入的销项税率
                        billAmount += setDetailFromTaxrate($(el), localStorage.getItem('saleTaxrate'));
                    }
                    //普通发票（货品税率）
                } else if (noteType == 3) {
                    //增值税发票（货品税率）
                    if (goodsTaxrate != '' && goodsTaxrate != null && goodsTaxrate != undefined) {
                        //使用货品带入的货品税率
                        billAmount += setDetailFromTaxrate($(el), goodsTaxrate);
                    } else {
                        //使用账套带入的销项税率
                        billAmount += setDetailFromTaxrate($(el), localStorage.getItem('saleTaxrate'));
                    }
                }
            } else {
                //开单类
                if (noteType == 1) {
                    //收据
                    billAmount += setDetailFromTaxrate($(el), 0);
                } else if (noteType == 2) {
                    //普通发票
                    if (type == 'pur_gain' || type == 'cash_pur') {
                        //采购收货和现款采购时，没有税率
                        billAmount += setDetailFromTaxrate($(el), 0);
                    } else {
                        billAmount += setDetailFromTaxrate($(el), localStorage.getItem('purTaxrate'));
                    }
                } else if (noteType == 3) {
                    //增值税发票（账套带入的）
                    billAmount += setDetailFromTaxrate($(el), localStorage.getItem('purTaxrate'));
                }
            }
        });
        $('#amount').text(billAmount.toFixed(2));//总价
    },
    /**
     * [change_empName 业务员改变事件]
     */
    change_empName: function(empObj){
        var selText = empObj.find("option").not(function(){ return !this.selected }).val();
        selText = selText.substring(selText.indexOf(' '), selText.length);
        empObj.prev('input').val(selText);
    },
    /**
     * [tempSessionStorage 单据修改临时缓存]
     */
    tempSessionStorage: function () {
        if (sessionStorage.getItem('session_billDataJson')) {
            ret = JSON.parse(sessionStorage.getItem('session_billDataJson'));
            if (sessionStorage.getItem('session_temp_billDataJson')) {
                ret = JSON.parse(sessionStorage.getItem('session_temp_billDataJson'));
            }
            $('select').each(function () {
                var keyName = $(this).attr('data-kname') || '';
                var keyId = $(this).attr('data-kid') || '';
                if (keyName != '') {
                    console.log(keyName + ':' + ret.master[keyName]);
                    ret.master[keyName] = $(this).prev('input').val();
                }
                if (keyId != '') {
                    // ret.master[keyId] = $(this).find("option:selected").attr('data-id');
                    ret.master[keyId] = $(this).data('id');
                    console.log($(this).data('id') + '  dsfdsfdsfdsfs');
                }
            });
            $('input').each(function () {
                var keyName = $(this).attr('data-kname') || '';
                var keyId = $(this).attr('data-kid') || '';
                if (keyName != '') {
                    console.log(keyName + ':' + ret.master[keyName]);
                    ret.master[keyName] = $(this).val();
                }
                if (keyId != '') {
                    console.log(keyId + ':' + $(this).data('id'));
                    ret.master[keyId] = $(this).data('id');
                }
            });
            sessionStorage.setItem('session_wasChange', true);
            sessionStorage.setItem('session_temp_billDataJson', JSON.stringify(ret));
        }
    },
    //删除商品处理
    deleteGoods: function (id) {
        //获取单据详情页面货品列表
        var session_billDataJson = JSON.parse(sessionStorage.getItem('session_temp_billDataJson'));
        var detail = session_billDataJson.detail1;
        var length = detail.length;

        //找出index
        var index = -1;
        for (var i = 0; i < length; i++) {
            if (detail[i].log_id == id) {
                index = i;
            }
        }

        if (index == -1) {
            layerMsg('索引商品失败');
            return false;
        }
        //逻辑判断 避免对数据造成破坏
        if (detail[index].log_oldGoods == true) {
            //原有的商品 将attr设置成del,但是不会删除
            session_billDataJson.detail1[index].log_attr = 'del';
            sessionStorage.setItem('session_temp_billDataJson', JSON.stringify(session_billDataJson));
        }
        else
            //不是原有的商品 直接删除
            session_billDataJson.detail1.splice(index, 1);

        sessionStorage.setItem('session_temp_billDataJson', JSON.stringify(session_billDataJson));
        this.countAmount();
        return true;
    },

    //增加商品处理
    addGoods: function (data) {
        //获取单据详情页面货品列表
        var session_billDataJson = JSON.parse(sessionStorage.getItem('session_temp_billDataJson'));
        var detail = session_billDataJson.detail1;
        var length = detail.length;
        var maxid = 0;
        //设置一些参数
        for (var i = 0; i < length; i++) {
            if (detail[i].log_id > maxid)
                maxid = detail[i].log_id;
        }
        data.log_id = maxid + 1;
        //设置attr
        data.log_attr = 'new';
        data.log_oldGoods = false;
        //向缓存里面添加信息并且保存
        session_billDataJson.detail1.splice(0, 0, data);
        sessionStorage.setItem('session_temp_billDataJson', JSON.stringify(session_billDataJson));
        this.countAmount();
        return true;
    },

    //编辑商品处理
    /*
    id 商品标识符
    data 商品数据
    */
    editGoods: function (id, data) {
        //获取单据详情页面的货品列表
        var session_billDataJson = JSON.parse(sessionStorage.getItem('session_temp_billDataJson'));
        var detail = session_billDataJson.detail1;
        var length = session_billDataJson.detail1.length;
        var index = -1;
        for (var i = 0; i < length; i++) {
            if (detail[i].log_id == id) {
                index = i;
            }
        }
        if (index == -1) {
            layerMsg('索引商品失败');
            return false;
        }

        //设置索引
        data.log_id = id;

        //逻辑判断,避免对数据造成破坏
        //判断是否是原有的商品
        if (detail[index].log_oldGoods == true) {
            data.log_oldGoods = 'true';
            //为商品增加attr-edit的属性
            data.log_attr = 'edit';
        }
        else {
            data.log_oldGoods = false;
            //为商品增加attr-new属性
            data.log_attr = 'new';
        }

        //替换原有的数据
        session_billDataJson.detail1.splice(index, 1, data);
        //保存数据
        sessionStorage.setItem('session_temp_billDataJson', JSON.stringify(session_billDataJson));
        this.countAmount();
        return true;
    },
    //计算总价
    countAmount: function () {
        var session_billDataJson = JSON.parse(sessionStorage.getItem('session_temp_billDataJson'));
        var detail = session_billDataJson.detail1;
        var amount = 0;
        for (var i = 0; i < detail.length; i++) {
            if (detail[i].log_attr != 'del') {
                var a;
                a = parseFloat(detail[i].amount);
                amount += a;
            }
        }
        session_billDataJson.master.amount = amount;
        sessionStorage.setItem('session_temp_billDataJson', JSON.stringify(session_billDataJson));
    },
    get_client: function (master_backup) {
        //供应商及其联动
        master_backup['master.clientid'] = $('#traderName').data('id');
        master_backup['master.clientshortname'] = $('#traderName').val() || master_backup['master.clientshortname'];
        master_backup['master.clientname'] = $('#traderName').val() || master_backup['master.clientname'];
        master_backup['master.phone'] = master_backup['master.phone'];
        master_backup['master.clientaddress'] = $('#traderName').data('clientaddress') || master_backup['master.clientaddress'];
        master_backup['master.clienttaxid'] = $('#traderName').data('clienttaxid') || master_backup['master.clienttaxid'];
        master_backup['master.clientbankid'] = $('#traderName').data('clientbankid') || master_backup['master.clientbankid'];
        master_backup['master.clientphone'] = $('#traderName').data('phone') || master_backup['master.clientphone'];
        master_backup['master.clientbank'] = $('#traderName').data('clientbank') || master_backup['master.clientbank'];
        master_backup['master.linkmanid'] = $('#traderName').data('linkmanid') || master_backup['master.linkmanid'];
        master_backup['master.linkmanname'] = $('#traderName').data('linkmanname') || master_backup['master.linkmanname'];
        master_backup['master.shipto'] = $('#traderName').data('shipto') || master_backup['master.shipto'];  //送货地址
        //alert(master_backup['master.shipto']);
        master_backup['master.balance'] = $('#traderName').data('balance') || master_backup['master.balance'];  //应付余额
        master_backup['master.fax'] = $('#traderName').data('fax') || master_backup['master.fax'];
    },
    //计算小数点后有几位
    countDotLength: function (n) {
        n = n.toString().split('.');
        if (n.length > 1) {
            return n[1].length;
        } else {
            return 0;
        }
    },
    //更改仓库之后 清空货品的批号和生产日期等信息
    clearBatchCode: function () {
        //遍历货品
        var billDataJson = JSON.parse(sessionStorage.getItem('session_temp_billDataJson'));
        var detail = billDataJson.detail1;
        alert(detail.length)
        for (var i = 0; i < detail.length; i++) {
            detail[i].batchcode = '';
            detail[i].produceddate = '';
            detail[i].validdate = '';
        }
        billDataJson.detail1 = detail;
        sessionStorage.setItem('session_temp_billDataJson', JSON.stringify(billDataJson));
    }
}

function showLoading() {
    layer.open({
        type: 2,
        shadeClose: false
    });
}

function hideProgress() {
    layer.closeAll();
}

function Get_ajax(data, retCallback, errCallback) {
    $.ajax({
        type: data['type'],
        url: data['url'],
        dataType: 'json',
        data: data['data'],
        timeout: 3000,
        success: function (data) {
            retCallback(data);
        },
        error: function (xhr, type) {
            errCallback(xhr, type);
        }
    });
}

function layerMsg(str, param) {
    var p = {
        content: str,
        className: 'layerMobile',
        time: 2
    }
    if (param)
        $.extend(p, param);
    layer.open(p);
}

function closeToLogin(str) {
    if (str.indexOf('当前会话已失效') > 0 || str.indexOf('重新登陆') > 0 || str.indexOf('重新登录') > 0) {
        //清除report模块缓存
        localStorage.removeItem("href");
        localStorage.removeItem("filter");
        layer.open({
            content: str,
            className: 'layerMobile',
            time: 2,
            end: function () {
                window.location = '../login/base_login.html';
            }
        })
    } else {
        layer.open({
            content: str,
            className: 'layerMobile',
            time: 2
        })
    }
}

//    base_index.prototype.constructor = base_index;
//    module.exports = new base_index();
//})