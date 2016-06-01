//自动运行函数：函数名前缀+下划线
//组件的脚本函数：函数名前缀+module
define(function(require,exports,module){
	var that;
	var base_index = new Base_index();
	var LayerM=require('./layer');
	var _Public = require('./public');
	function Save_order(){
		that=this;
	};
	Save_order.prototype={
		/**
		 * [getTip 根据errNo给出tip]
		 * @param errNo {num} 报错数字
		 * @param type {string} 当前单据类型
		 * @param errMsg {string} 提示报错内容
		 */
		getPower:function(errNo,type,errMsg){
			var powerVal=0;//默认为0
			var getP={};
			if(errNo==1401){
				if(type=="sale_del"||type=="cash_sale"){
					//销售发货/现款销售
					tip='以下货品的价格低于最低售价！';
				}else if(type=="pur_gain"||type=="cash_pur"){
					//采购收货/现款采购
					tip='以下货品的价格高于最高购货价！';
				}
			}else if(errNo==1402){
				if(type=="sale_del"||type=="cash_sale"){
					//销售发货/现款销售
					tip='以下货品的价格低于售货参考价！';
					powerVal=localStorage.getItem('CHECKMINSALEPRICE');
				}else if(type=="pur_gain"||type=="cash_pur"){
					//采购收货/现款采购
					tip='以下货品的价格高于购货参考价！';
					powerVal=localStorage.getItem('CHECKMAXBUYPRICE');
				}
			}else if(errNo==1051){
				tip='欠款超限！';
				powerVal=localStorage.getItem('SALECONTROL');
			}else if(errNo==1501){
				tip='颜色尺寸负库存！';
			}else if(errNo==1503){
				tip='库存不足！';
				powerVal=localStorage.getItem('ZEROONHAND');
			}else if(errNo==1504){
				tip='实际负库存！';
			}else if(errNo==1505){
				tip='超出库存限制！';
			}else if(errNo==2001){
				tip='提示：'+errMsg;
			}else if(errNo==2003){
				tip='提示：销售开单低于成本价';
				powerVal=localStorage.getItem('SALEPRICEGTAPRICE');
			}
			getP={'tip':tip,'powerVal':powerVal};
			return getP;	
		},
		/**
		 * [showMsg 保存单据后，后台返回的提示处理]
		 * @param data {[object]} ajax传输的数据
		 * @param retObj {[object]} ajax返回的数据
		 * @param type {string} 当前单据类型
		 */
		showMsg:function(data,retObj,type){
			console.log(retObj);
			var errNo=retObj.errNo;
			//var tip='';
			if(errNo==1501||errNo==1503||errNo==1504){
				
				//根据errNo给出tip
				var powerInfo=that.getPower(errNo,type,retObj.errMsg);
				if(powerInfo.powerVal==0){
					//为0时，直接给出提示
					_Public.d_alert(powerInfo.tip,{},'取消');
				}else if(powerInfo.powerVal==1){
					//为1时，有“忽略”和“取消”两个选择，点击“忽略”，则再次提交数据
					that.re_confirm(powerInfo,data,errNo,type);
			    }			
			}else if(errNo==2001){
				//根据errNo给出tip
				var powerInfo=that.getPower(errNo,type,retObj.errMsg);
				//2001时，要去掉其中的"<br>", "\n"这些符号
				var str=powerInfo.tip;
				str=str.replace(new RegExp(/(<br>)/g),'');
				powerInfo.tip=str.replace(new RegExp(/(\n)/g),'');
				that.re_confirm(powerInfo,data,errNo,type);
				
			}else if(errNo==1401||errNo==1402||errNo==2003){
				//根据errNo给出tip
				var powerInfo=that.getPower(errNo,type,retObj.errMsg);
				if(powerInfo.powerVal==0){
					//直接保存
					that.to_saving(data,errNo,type);
				}else if(powerInfo.powerVal==1){
					//为1时，有“忽略”和“取消”两个选择，点击“忽略”，则再次提交数据
					that.re_confirm(powerInfo,data,errNo,type);
				}else if(powerInfo.powerVal==2){
					//为2时，直接给出提示
					_Public.d_alert(powerInfo.tip,{},'取消');
				}
			}else if(errNo==1051){
				var powerInfo=that.getPower(errNo,type,retObj.errMsg);
				if(powerInfo.powerVal==1){
					//为1时，有“忽略”和“取消”两个选择，点击“忽略”，则再次提交数据
					that.re_confirm(powerInfo,data,errNo,type);
				}else if(powerInfo.powerVal==2){
					//为2时，直接给出提示
					_Public.d_alert(powerInfo.tip,{},'取消');
				}else  if(powerInfo.powerVal==3){
					//直接保存
					that.to_saving(data,errNo,type);
				}
			}else if(errNo==1505){
				var powerInfo=that.getPower(errNo,type,retObj.errMsg);
				if(powerInfo.powerVal==1){
					//为1时，有“忽略”和“取消”两个选择，点击“忽略”，则再次提交数据
					that.re_confirm(powerInfo,data,errNo,type);
				}else if(powerInfo.powerVal==0){
					//直接保存
					that.to_saving(data,errNo,type);
				}
			}else if(errNo==0){
				_Public.layerMsg("保存成功！");
				setTimeout(function(){
	    			that.jumpTolist(type);
	    		},800);
			}else if(errNo==1){
				_Public.layerMsg(retObj.errMsg);
				_Public.closeToLogin(retObj.errMsg);
			}else{
				var title=retObj.errMsg;
				if(title.indexOf("不支持颜色尺寸的货品")>0){
					title.replace("BS","移动端");
				}
				_Public.layerMsg(title);
			}
		},
		/*
		 * 根据权限的值，直接保存
		 */
		to_saving:function(data,errNo,type){
			_Public.showLoading();
         	//checkStep要改为errNo
         	data['data']['checkStep']=errNo+1;
         	$.ajax({
	            type: data['type'],
	            url: data['url'],
	            dataType: 'json',
	            data: data['data'],
	            timeout: 3000,
	            success: function (ret) {
	                _Public.hideProgress();
	                that.showMsg(data,ret,type);
	            },
	            error: function (xhr, type) {
	                _Public.hideProgress();
	                _Public.layerMsg('err:'+xhr.statusText);
	            }
	        });
		},
		/*
         * 再次确认框
         */
        re_confirm:function(powerInfo,data,errNo,type){
            LayerM.open({
                content: powerInfo.tip,
                btn: ['忽略', '取消'],
                shadeClose: false,
                yes: function(){
                    //忽略
		         	_Public.showLoading();
		         	//checkStep要改为errNo
		         	data['data']['checkStep']=errNo+1;
		         	$.ajax({
			            type: data['type'],
			            url: data['url'],
			            dataType: 'json',
			            data: data['data'],
			            timeout: 3000,
			            success: function (ret) {
			                _Public.hideProgress();
			                that.showMsg(data,ret,type);
			            },
			            error: function (xhr, type) {
			                _Public.hideProgress();
			                _Public.layerMsg('err:'+xhr.statusText);
			            }
			        });
                }, no: function(){
                	//取消
                }
            });
        },
		/**
		 * [newDetail 创建一条新的detail数据]
		 * @param detail {[object]} 当条货品传输的detail信息
		 * @param index {num} 表示索引
		 * @param index {new_detailcount} 表示新增的detail索引，从1开始
		 */
		newDetail:function(detail,index,type,new_detailcount){
			var detail_backup={};
			detail_backup['detail1['+index+'].a00OldJsonValue']=null;
			detail_backup['detail1['+index+'].amount']=detail['amount'];//货品金额
			detail_backup['detail1['+index+'].barcode']=detail['barcode'] || '';//二维码
			detail_backup['detail1['+index+'].batchcode']=detail['batchcode'];//批号
			detail_backup['detail1['+index+'].batchctrl']=detail['batchctrl'];//是否批号
			detail_backup['detail1['+index+'].disc']=detail['disc'] || 100.00;//折扣率
			detail_backup['detail1['+index+'].discamt']=detail['discamt'] || 0;//折扣金额
			detail_backup['detail1['+index+'].goodsamt']=detail['goodsamt'];//货品金额
			detail_backup['detail1['+index+'].goodscode']=detail['goodscode'];//货品编码
			detail_backup['detail1['+index+'].goodsid']=detail['goodsid'];//货品编码
			detail_backup['detail1['+index+'].goodsname']=detail['goodsname'];//货品名称
			detail_backup['detail1['+index+'].inf_costingtypeid']=detail['inf_costingtypeid'];//批号类型
			detail_backup['detail1['+index+'].ispresent']=detail['ispresent'];//是否赠品
			detail_backup['detail1['+index+'].memo']=detail['memo'] || '';//备注
			detail_backup['detail1['+index+'].nprice']=detail['price'];//原始单价
			detail_backup['detail1['+index+'].price']=detail['baseprice'] || 0.00;//基本单价
			detail_backup['detail1['+index+'].produceddate']=detail['produceddate'];//生产日期
			detail_backup['detail1['+index+'].quantity']=detail['quantity'] || 0;//基本数量（数量*单位比率）
			detail_backup['detail1['+index+'].specs']=detail['specs'];//货品规格
			detail_backup['detail1['+index+'].taxamt']=detail['taxamt'] || 0;//税额
			detail_backup['detail1['+index+'].taxprice']=detail['taxprice'];//含税单价
			detail_backup['detail1['+index+'].taxrate']=detail['taxrate'];//税率
			detail_backup['detail1['+index+'].unit']=detail['unit'];//单位
			detail_backup['detail1['+index+'].unitid']=detail['unitid'];//单位id
			detail_backup['detail1['+index+'].unitprice']=detail['unitprice'];//单价
			detail['qty']=0;
			detail_backup['detail1['+index+'].unitqty']=detail['qty'];//数量
			detail_backup['detail1['+index+'].unitrate']=detail['unitrate'];//单位比率（本单位相对于基本单位）
			detail_backup['detail1['+index+'].validdate']=detail['validdate'];//有效期至
			detail_backup['detail1['+index+'].itemno']=(-1)*new_detailcount;//？？
			switch(type){
				case 'pur_gain':
				    //采购收货
				    detail_backup['detail1['+index+'].refercount']=detail['refercount'] || 0;//引用次数
				    detail_backup['detail1['+index+'].returnqty']=detail['returnqty'] || 0.00;//退货数量
				break;
				case 'cash_sale':
					//现款销售
					detail_backup['detail1['+index+'].refercount']=detail['refercount'] || 0;//引用次数
					detail_backup['detail1['+index+'].returnqty']=detail['returnqty'] || 0.00;//退货数量
					detail_backup['detail1['+index+'].aprice']=detail['aprice'] || 0.00;//成本价
				break;
				case 'sale_order':
					//销售订单
					detail_backup['detail1['+index+'].ispresent']=detail['ispresent'] || 'F';//？？
					detail_backup['detail1['+index+'].refercount']=detail['refercount'] || 0;//引用次数
					detail_backup['detail1['+index+'].mnqty']=detail['mnqty'] || 0.0;
					detail_backup['detail1['+index+'].takeqty']=detail['takeqty'] || 0.0;
					detail_backup['detail1['+index+'].mrpsel']=detail['mrpsel'] || "";
				break;
				case 'pur_order':
					//采购订单
					detail_backup['detail1['+index+'].ispresent']=detail['ispresent'] || 'F';//？？
					detail_backup['detail1['+index+'].refercount']=detail['refercount'] || 0;//引用次数
				break;
				case 'cash_pur':
					//现款采购
					detail_backup['detail1['+index+'].refercount']=detail['refercount'] || 0;//引用次数
					detail_backup['detail1['+index+'].returnqty']=detail['returnqty'] || 0.00;//退货数量
				break;
				case 'sale_del':
					//销售发货
					detail_backup['detail1['+index+'].refercount']=detail['refercount'] || 0;//引用次数
					detail_backup['detail1['+index+'].returnqty']=detail['returnqty'] || 0.00;//退货数量
					detail_backup['detail1['+index+'].aprice']=detail['aprice'];
				break;
				case 'pur_return':
					//采购退货
					detail_backup['detail1['+index+'].refercount']=detail['refercount'] || 0;//引用次数
				break;
				case 'sale_return':
					//销售退货
					detail_backup['detail1['+index+'].refercount']=detail['refercount'] || 0;//引用次数
					detail_backup['detail1['+index+'].badqty']=detail['badqty'] || 0;
					detail_backup['detail1['+index+'].aprice']=detail['aprice'] || 0.00;//成本价
				default:
				break;
			}
			console.log(detail_backup);
			return detail_backup;

		},
		/**
		 * [newMaster 新增的现款采购的master备份]
		 * @param master {[object]} 新增时，传过来的master数据
		 */
		newMaster:function(master,type){
			var master_backup={};
			master_backup['master.a00OldJsonValue']=null;
			master_backup['master.amount']=master['amount']; //金额
			master_backup['master.opid']=localStorage.getItem('opID');//操作员id
			master_backup['master.opname']=localStorage.getItem('opName');//操作员name
			switch(type){
				case 'pur_gain':
				    //采购收货
				    master_backup['master.billdate']=master['billdate']; //单据日期
					master_backup['master.billtypeid']=master['billtypeid']; //发票类型id
					master_backup['master.clientid']=master['clientid']; //客户id
					master_backup['master.code']=master['code'];  //单号
					master_backup['master.checkamt']=master['checkamt'] || 0; //??
					master_backup['master.departmentid']=master['departmentid']; //部门id
					master_backup['master.discamount']=master['discamount'] || 0; //折扣金额
					master_backup['master.exemanid']=master['exemanid']; //业务员id
					master_backup['master.fax']=master['fax'] || ""; //传真
					master_backup['master.flag']=master['flag'] || 0; //？？
					master_backup['master.filecount']=master['filecount'] || 0; //？？
					master_backup['master.refercount']=master['refercount'] || 0; //？？
					master_backup['master.termdays']=master['termdays']; //付款期限
					master_backup['master.linkmanid']=master['linkmanid'] || 0; //联系人id
					master_backup['master.phone']=master['phone'] || ''; //电话
					master_backup['master.printcount']=master['printcount'] || 0; //？？
					master_backup['master.printed']=master['printed'] || false; //？？
					master_backup['master.shopid']=localStorage.getItem['shopID']; //分支机构id
					master_backup['master.storeid']=master['storeid']; //仓库id
					master_backup['master.termdays']=master['termdays']; //付款期限
					master_backup['master.totalpaid']=master['totalpaid']; //??
					master_backup['master.totalamt']=master['totalamt']; //??
				break;
				case 'cash_sale':
					//现款销售
					master_backup['master.bankid']=master['bankid']; //收款账户
					master_backup['master.billdate']=master['billdate']; //单据日期
					master_backup['master.billtypeid']=master['billtypeid']; //发票类型id
					master_backup['master.billtypename']=master['billtypename']; //发票类型name
					master_backup['master.clientid']=master['clientid']; //客户id
					master_backup['master.code']=master['code'];  //单号
					master_backup['master.checkamt']=master['checkamt'];  //??
					master_backup['master.departmentid']=master['departmentid']; //部门id
					master_backup['master.disc']=master['disc'] || 100; //折扣
					master_backup['master.discamount']=master['discamount'] || 0; //折扣金额
					master_backup['master.exemanid']=master['exemanid']; //业务员id
					master_backup['master.flag']=master['flag'];//??
					master_backup['master.factamount']=master['factamount']; //实付金额
					master_backup['master.filecount']=master['filecount'] || 0; //？？
					master_backup['master.printcount']=master['printcount'] || 0; //？？
					master_backup['master.printed']=master['printed'] || 0; //？？
					master_backup['master.paytypeid']=master['paytypeid']; //收款方式id
					master_backup['master.projectid']=master['projectid'];//项目id
					master_backup['master.refercount']=master['refercount'] || 0; //？？
					master_backup['master.score']=master['score']; //积分
					master_backup['master.shopid']=localStorage.getItem['shopID']; //分支机构id
					master_backup['master.storeid']=master['storeid']; //仓库id
					master_backup['master.subscore']=master['subscore']; //当前积分
					master_backup['master.taxrate']=master['taxrate'] || 0;//??
					master_backup['master.totalamt']=master['totalamt']; //总金额（所有明细金额相加）
					master_backup['master.totalreturn']=master['totalreturn'];//??
					master_backup['master.vipcode']=master['vipcode'];//vip码
				break;
				case 'sale_order':
					//销售订单
					master_backup['master.ackappr']=master['ackappr'] || '';
					master_backup['master.approveddate']=master['approveddate']; //有效期至
					master_backup['master.billdate']=master['billdate']; //单据日期
					master_backup['master.billstatus']=master['billstatus'] || 0; //单据状态
					master_backup['master.billtypeid']=master['billtypeid']; //发票类型id
					master_backup['master.clientid']=master['clientid']; //客户id
					master_backup['master.closed']=master['closed']; //中止
					master_backup['master.code']=master['code'];  //单号
					master_backup['master.contractno']=master['contractno'];  //合同号
					master_backup['master.departmentid']=master['departmentid']; //部门id
					master_backup['master.disc']=master['disc'] || 100; //折扣
					master_backup['master.dsorder']=master['dsorder'] || 'F'; //是否分销订单
					master_backup['master.exemanid']=master['exemanid']; //业务员id
					master_backup['master.fax']=master['fax']; //传真
					master_backup['master.filecount']=master['filecount'] || 0; //？？
					master_backup['master.finished']=master['finished'] || 'F'; //？？
					//alert("this is:"+master['linkmanid']);
					//master_backup['master.linkmanid']=master['linkmanid']; //联系人id
					master_backup['master.memo']=master['memo'] || ""; //备注
					master_backup['master.printed']=master['printed'] || 0; //？？
					master_backup['master.printcount']=master['printcount'] || 0; //？？
					master_backup['master.phone']=master['phone'] || ''; //电话
					master_backup['master.projectname']=master['projectname']; //项目name
					master_backup['master.projectid']=master['projectid'];//项目id
					master_backup['master.shipto']=master['shipto']; //送货地址
					master_backup['master.shopid']=localStorage.getItem['shopID']; //分支机构id
					master_backup['master.refercount']=master['refercount'] || 0; //？？
					master_backup['master.takedate']=master['takedate']; //交货日期
					master_backup['master.taxrate']=master['taxrate']; //税率
					master_backup['master.uploaded']=master['uploaded'] || 'F';
				break;
				case 'pur_order':
					//采购订单
					master_backup['master.ackappr']=master['ackappr'] || '';
					master_backup['master.billdate']=master['billdate']; //单据日期
					master_backup['master.billto']=master['billto']; //交货地址
					master_backup['master.billstatus']=master['billstatus'] || 0; //单据状态
					master_backup['master.clientid']=master['clientid']; //客户id
					master_backup['master.closed']=master['closed']; //中止
					master_backup['master.code']=master['code'];  //单号
					master_backup['master.departmentid']=master['departmentid']; //部门id
					master_backup['master.dsorder']=master['dsorder'] || 'F'; //是否分销订单
					master_backup['master.exemanid']=master['exemanid']; //业务员id
					master_backup['master.fax']=master['fax'] || ""; //传真
					master_backup['master.filecount']=master['filecount'] || 0; //？？
					master_backup['master.finished']=master['finished'] || 'F'; //？？
					master_backup['master.linkmanid']=master['linkmanid'] || 0; //联系人id
					master_backup['master.memo']=master['memo'] || ""; //备注
					master_backup['master.printed']=master['printed'] || 0; //？？
					master_backup['master.phone']=master['phone'] || ''; //电话
					master_backup['master.projectid']=master['projectid'];//项目id
					master_backup['master.revdate']=master['revdate']; //到货时间
					master_backup['master.refercount']=master['refercount'] || 0; //？？
					master_backup['master.shopid']=localStorage.getItem['shopID']; //分支机构id
					master_backup['master.uploaded']=master['uploaded'] || 'F';
				break;
				case 'sale_return':
					//销售退货
					master_backup['master.backmoney']=master['backmoney']; //是否返还现款
					master_backup['master.bankid']=master['bankid'] || 0; //收款账户
				break;
				case 'sale_del':
					//销售发货
					master_backup['master.billdate']=master['billdate']; //单据日期
					master_backup['master.billtypeid']=master['billtypeid']; //发票类型id
					master_backup['master.billtypename']=master['billtypename']; //发票类型name
					master_backup['master.clientid']=master['clientid']; //客户id
					master_backup['master.code']=master['code'];  //单号
					master_backup['master.ctermdays']=master['ctermdays'];  //收款日期
					master_backup['master.checkamt']=master['checkamt'];  //??
					master_backup['master.departmentid']=master['departmentid']; //部门id
					master_backup['master.discamount']=master['discamount'] || 0; //折扣金额
					master_backup['master.exemanid']=master['exemanid']; //业务员id
					master_backup['master.fax']=master['fax'] || ""; //传真
					master_backup['master.flag']=master['flag'] || 0; //？？
					master_backup['master.filecount']=master['filecount'] || 0; //？？
					master_backup['master.linkmanid']=master['linkmanid']; //联系人id
					if(master_backup['master.linkmanid']==null){
						delete master_backup['master.linkmanid'];
					}
					master_backup['master.phone']=master['phone'] || ''; //电话
					master_backup['master.printed']=master['printed'] || 0; //？？
					master_backup['master.projectid']=master['projectid'];//项目id
					master_backup['master.printcount']=master['printcount'] || 0; //？？
					master_backup['master.refercount']=master['refercount'] || 0; //？？
					master_backup['master.score']=master['score']; //积分
					master_backup['master.shipto']=master['shipto'] || ''; //送货地址
					master_backup['master.shopid']=localStorage.getItem['shopID']; //分支机构id
					master_backup['master.storeid']=master['storeid']; //仓库id
					master_backup['master.subscore']=master['subscore']; //当前积分
					master_backup['master.termdays']=master['termdays']; //付款期限
					master_backup['master.taxrate']=master['taxrate'];
					//master_backup['master.totalpaid']=master['totalpaid']; //??
					master_backup['master.totalrcvd']=master['totalrcvd']; //??
					master_backup['master.totalamt']=master['totalamt']; //??
					master_backup['master.vipcode']=master['vipcode'] || "";//vip码
				break;
				case 'pur_return':
					//采购退货
					master_backup['master.backmoney']=master['backmoney']; //是否返还现款
					master_backup['master.bankid']=master['bankid']; //收款账户
					if(master_backup['master.bankid']==null){
						delete master_backup['master.bankid'];
					}
					master_backup['master.billdate']=master['billdate']; //单据日期
					master_backup['master.billtypeid']=master['billtypeid']; //发票类型id
					master_backup['master.clientid']=master['clientid']; //客户id
					master_backup['master.checkamt']=master['checkamt'];  //??
					master_backup['master.departmentid']=master['departmentid']; //部门id
					master_backup['master.disc']=master['disc'] || 100; //折扣
					master_backup['master.discamount']=master['discamount'] || 0; //折扣金额
					master_backup['master.filecount']=master['filecount'] || 0; //？？
					master_backup['master.flag']=master['flag'] || 0;
					master_backup['master.exemanid']=master['exemanid']; //业务员id
					master_backup['master.paytypeid']=master['paytypeid']; //收款方式id
					master_backup['master.printcount']=master['printcount'] || 0; //？？
					master_backup['master.printed']=master['printed'] || 0; //？？
					master_backup['master.refercount']=master['refercount'] || 0;
					//alert(master_backup['master.refercount']);
					master_backup['master.shopid']=localStorage.getItem['shopID']; //分支机构id
					master_backup['master.storeid']=master['storeid']; //仓库id
					master_backup['master.taxrate']=master['taxrate'] || 0;//??
					master_backup['master.totalpaid']=master['totalpaid']; //??
					master_backup['master.totalamt']=master['totalamt'];
				break;
				case 'cash_pur':
					//现款采购
					master_backup['master.bankid']=master['bankid']; //付款账户id
					master_backup['master.billdate']=master['billdate']; //单据日期
					master_backup['master.billtypeid']=master['billtypeid']; //发票类型id
					master_backup['master.billtypename']=master['billtypename']; //发票类型name
					master_backup['master.clientid']=master['clientid']; //供应商id
					master_backup['master.code']=master['code'];  //单号
					master_backup['master.checkamt']=master['checkamt'] || 0; //??
					master_backup['master.departmentid']=master['departmentid']; //部门id
					master_backup['master.disc']=master['disc'] || 100; //折扣
					master_backup['master.discamount']=master['discamount'] || 0; //折扣金额
					master_backup['master.filecount']=master['filecount'] || 0; //？？
					master_backup['master.flag']=master['flag'] || 0; //？？
					master_backup['master.exemanid']=master['exemanid']; //业务员id
					master_backup['master.paytypeid']=master['paytypeid']; //收款方式id
					master_backup['master.printcount']=master['printcount'] || 0; //？？
					master_backup['master.printed']=master['printed'] || false; //？？
					master_backup['master.projectid']=master['projectid'];//项目id
					master_backup['master.shopid']=localStorage.getItem['shopID']; //分支机构id
					master_backup['master.shopname']=localStorage.getItem['shopName']; //分支机构name
					master_backup['master.storeid']=master['storeid']; //仓库id
					master_backup['master.totalamt']=master['totalamt']; //总金额
					master_backup['master.totalreturn']=master['totalreturn'] || 0; //??
					
					master_backup['master.refercount']=master['refercount'] || 0; //？？
				break;
				default:
					break;
			}
			return master_backup;
		},
		/**
		 * [sortData 整理detail]
		 * @param  {[json]} del_detail [json对象]
		 * @param  {num} index [detail索引]
		 * @param  {str} detail_type 单据处理的类型，有detail1，deletedetail1
		 */
	 	sortDetail:function(del_detail,index,detail_type,type){
	 		
	 		var key='';
	 		var	json_data={};
	 		if(type=='sale_return'){
	 			for(var x in del_detail){
					key=detail_type+'['+index+'].'+x;
					json_data[key]=del_detail[x];
					if(json_data[key]==null){
						delete json_data[key];
					}else if(json_data[detail_type+'['+index+'].sizeqty']==" "){
						json_data[detail_type+'['+index+'].sizeqty']='';
					}
				}
				
	 		}else{
	 			for(var x in del_detail){
					key=detail_type+'['+index+'].'+x;
					json_data[key]=del_detail[x];
				}
	 		}
			if(detail_type=='deletedetail1'){
				delete json_data[detail_type+'['+index+'].a00OldJsonValue'];
			}
	 		return json_data;
		},
		/**
		 * [sortMaster 整理master]
		 * @param  {[json]} master [json对象]
		 */
	 	sortMaster:function(master,type){
	 		var key='';
	 		var	json_data={};
			for(var x in master){
				key='master.'+x;
				json_data[key]=master[x];
				if(json_data[key]==null&&type=='sale_del'){
					delete json_data[key];
				}
			}
	 		return json_data;
		},
		/*
		 * 整理要保存时的detail
		 * @param  {[json]} detail_backup [json对象]
		 */
		get_saveDetail:function(edit_addCount,type,new_detailcount,delCount,cur_detailcount,oldCount){
			var detail_data={};//单据的数据，包括单据信息，单据各状态的条数
			var detail_backup={};//单据列表数据json
			var curDetail={};
			$('.goodsItem').each(function(index){
				var statusAttr=$(this).data('attr');
				var d=$(this).attr('data-json');
				var detail=JSON.parse(d);
				switch(statusAttr){
					case 'new':
						curDetail=that.newDetail(detail,edit_addCount,type,new_detailcount);
						$.extend(detail_backup,curDetail);
						edit_addCount++;
						cur_detailcount++;
						new_detailcount++;
					break;
					case 'edit':
						curDetail=that.sortDetail(detail,edit_addCount,'detail1',type);
						$.extend(detail_backup,curDetail);
						edit_addCount++;
						cur_detailcount++;
					break;
					case 'del':
						curDetail=that.sortDetail(detail,delCount,'deletedetail1',type);
						$.extend(detail_backup,curDetail);
						delCount++;
					break;
					case 'old':
					    oldCount++;
					    break;
					default:
						break;
				}
				
			});
			//但没对货品进行操作时，要模拟一条编辑过的货品数据
			if(JSON.stringify(detail_backup)=="{}"){
				$('.goodsItem').each(function(index){
					var d=$(this).attr('data-json');
					var detail=JSON.parse(d);
					curDetail=that.sortDetail(detail,edit_addCount,'detail1',type);
					$.extend(detail_backup,curDetail);
					edit_addCount++;
					cur_detailcount++;
					return;
				});
			}
			detail_data={'list':detail_backup,'edit_addCount':edit_addCount,'new_detailcount':new_detailcount,'oldCount':oldCount,'delCount':delCount,'cur_detailcount':cur_detailcount};
			return detail_data;
		},
		
		get_client:function(master_backup){
			//供应商及其联动
			master_backup['master.clientid']=$('#traderName').data('id');
			master_backup['master.clientshortname']=$('#traderName').val() || master_backup['clientshortname'];
			master_backup['master.clientname']=$('#traderName').val() || master_backup['clientname'];
			master_backup['master.phone']=master_backup['phone'];
			//alert($('#traderName').data('phone')+",,,,"+master_backup['phone']);
			master_backup['master.clientaddress']=$('#traderName').data('clientaddress') || master_backup['clientaddress'];
			master_backup['master.clienttaxid']=$('#traderName').data('clienttaxid') || master_backup['master.clienttaxid'];
			master_backup['master.clientbankid']=$('#traderName').data('clientbankid') || master_backup['master.clientbankid'];
			master_backup['master.clientphone']=$('#traderName').data('phone') || master_backup['master.clientphone'];
			master_backup['master.clientbank']=$('#traderName').data('clientbank') || master_backup['master.clientbank'];
			master_backup['master.linkmanid']=$('#traderName').data('linkmanid') || master_backup['master.linkmanid'];
			master_backup['master.linkmanname']=$('#traderName').data('linkmanname') || master_backup['master.linkmanname'];
			master_backup['master.shipto']=$('#traderName').data('shipto') || master_backup['master.shipto'];  //送货地址
			//alert(master_backup['master.shipto']);
			master_backup['master.balance']=$('#traderName').data('balance') || master_backup['master.balance'];  //应付余额
			master_backup['master.fax']=$('#traderName').data('fax') || master_backup['master.fax'];
		},
		/*
		 * 保存成功后，跳转到单据列表页
		 * type：单据类型
		 */
		jumpTolist:function(type){
			var pageName;
			switch(type){
				case 'sale_order':
					//销售订单
					pageName='sale_order';
				break;
				case 'pur_order':
					//采购订单
					pageName='pur_order';
				break;
				case 'pur_gain':
					//采购收货
					pageName='pur_gain';
				break;
				case 'sale_del':
					//销售发货
					pageName='sale_del';
				break;
				case 'pur_return':
					//采购退货
					pageName='pur_return';
				break;
				case 'cash_pur':
					//现款采购
					pageName='cash_pur';
				break;
				case 'cash_sale':
					//现款销售
					pageName='cash_sale';
				break;
				case 'sale_del':
					//销售发货
					pageName='sale_del';
				break;
				case 'sale_return':
					//销售退货
					pageName='sale_return';
				break;
				default:
				break;
			}
			//_basic.openModuleWin('base_index',pageName);
			console.log(base_index);
			setTimeout(function(){
                window.location='./'+base_index.listPageName[type];
            },2000);
		}

	};
	Save_order.prototype.constructor=Save_order;
	module.exports=new Save_order();
});