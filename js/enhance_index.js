define(function(require,exports,module){
	function enhance_index(){
		//列表接口地址
		this.listUrl = {
			'sorderList':'/sa/saorder/sorderList!doGetListData.action',//销售订单
			'saleList':'/sa/sale/saleList!doGetListData.action',//销售开单
			'porderList':'/pa/paorder/porderList!doGetListData.action',//采购订单
			'ppurchaseList':'/pa/papurchase/ppurchaseList!doGetListData.action'//采购开单
		}
		//详情接口地址
		this.detailUrl = {
			'sorderEdit':'/sa/saorder/sorderEdit!doGetEditData.action',//销售订单详情
			'saleEdit':'/sa/sale/saleEdit!doGetEditData.action',//销售开单详情
			'porderEdit':'/pa/paorder/porderEdit!doGetEditData.action',//采购订单详情
			'ppurchaseEdit':'/pa/papurchase/ppurchaseEdit!doGetEditData.action',//采购开单详情
			'sorderDel':'/sa/saorder/sorderEdit!Delete.action',//销售订单删除
			'saleDel':'/sa/sale/saleEdit!Delete.action',//销售开单删除
			'porderDel':'/pa/paorder/porderEdit!Delete.action',//采购订单删除
			'ppurchaseDel':'/pa/papurchase/ppurchaseEdit!Delete.action',//采购开单删除,
			'sorderAdd':'/sa/saorder/sorderEdit!doGetAddnewData.action',//销售订单新增
			'saleAdd':'/sa/sale/saleEdit!doGetAddnewData.action',//销售开单新增
			'paorderAdd':'/pa/paorder/porderEdit!doGetAddnewData.action',//采购订单新增
			'papurchaseAdd':'/pa/papurchase/ppurchaseEdit!doGetAddnewData.action'//采购开单新增
		}
	}
	enhance_index.prototype={
		init:(function(){
			$('body').removeClass('uhide');
		})(),

		useMask:function(){
			$('.focusShade').width($(window).width()).height($(window).height());
			$('.module-form-t1 input').focus(function(){
				$('.focusShade').removeClass('uhide');
				$('body').addClass('forbid-scroll');
			});
			$('.module-form-t1 input').blur(function(){
				$('.focusShade').addClass('uhide');
				$('body').removeClass('forbid-scroll');
			})
		},
		/**
		 * [setLocalStorage 设置本地存储]
		 * @param {[string]} name  [键名]
		 * @param {[string]} value [值]
		 */
		setLocalStorage:function(name,value){
			if(this.isJson(value)){
				value = JSON.stringify(value);
			}
		  	window.localStorage.setItem(name, value);
		},
		/**
		 * [getLocalStorage 获取本地存储]
		 * @param {[string]} name  [键名]
		 * @return {[string]}      [本地存储数据]
		 */
		getLocalStorage:function(name){
			var ls = window.localStorage.getItem(name);
			//判断是否存在
			if(!ls){
				ls = '';
			}
		  	return ls;
		},
		/**
		 * [isJson 判断是否为JSON格式]
		 * @param  {[var]}  obj [变量]
		 * @return {boolean}     [是否为JSON格式]
		 */
		isJson:function(obj){
			var bool = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;    
			return bool;
		},
          /**
           * [disMoscroll 设置下拉框不可选]
           * @param  {[object]} selObj [下拉框对象]
           * @param  {[string]} tipMsg [点击提示信息]
           */
		disMoscroll:function(selObj){
			selObj.prev('input').remove();
		},
		/**
		 * [layerMsg 弹窗提示]
		 * @param  {[string]} content [提示信息]
		 */
          layerMsg:function(content){
                layer.open({
                    content: content,
                    className:'layerMobile',
                    time:2
                });
          },
          /**
           * [layerJumpLogin 弹窗提示并跳转到登录页]
           * @param  {[string]} content [提示信息]
           */
          layerJumpLogin:function(content){
                layer.open({
                    content: content,
                    className:'layerMobile',
                    time:2, 
                    end :function(){
                        window.location.href = '/wap/suda5000/html/login/en_login.html';
                    }
                });
          },
		/**
		 * [getOneParam 根据URL获取传递的参数]
		 * @param  {[string]} href 	[地址]
		 * @return   {[json]}	param [传递的键和值]	
		 */
		getOneParam:function(href){
			var len=href.length;//获取url的长度
			var offset=href.indexOf("?");//设置参数字符串开始的位置
			var newsidinfo=href.substr(offset+1,len)//取出参数字符串 这里会获得类似“id=1”这样的字符串
			var paramArray=newsidinfo.split("=");//对获得的参数字符串按照“=”进行分割
			//得到参数值
			var name=paramArray[0];
			var value=paramArray[1];
			return param = {
				'name': name,
				'value': value
			}
		},
		//静态页面传值，Url传值解析
		getPageParams:function(key){
			var keyList=[];
			var valueList=[];
			var hrefStr=decodeURIComponent(window.location.href);
			var strArray=hrefStr.split("?");
			var paramStr=strArray[1];
			if(paramStr!=null&&paramStr!=""){
				var paramArray=paramStr.split("&");
				for(var i=0;i<paramArray.length;i++){
					var param=paramArray[i];
					valueList.push(param.substr(param.indexOf("=")+1));
					keyList.push(param.substr(0,param.indexOf("=")));
				}
				for(var j=0;j<keyList.length;j++){
					if(key==keyList[j]){
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
		DataCommand:function(url, type, data){
		    return{
				url: url,		//请求地址
				type: type,		//请求类型
				data: data,		//请求参数
				pageSize: 2,	//显示数量
				start: 0,	//开始序号
				pageNum: 0,	//页码
				nowPageNum: 0,	//当前页码
				beginDate: '',	//开始日期
				endDate: '',	//结束日期
				filterItems: {},	//筛选参数
				/**
				 * [init 初始化参数]
				 * @return {json} dataJson [请求参数]
				 */
				init: function(retCallback, errCallback){
					var dataJson = {
					    'type': this.type,
					    'url': this.url,
					    'data': this.data
					};
					this.get(dataJson, retCallback, errCallback);
				},
				/**
				 * [get 请求数据]
				 * @param {[json]} 		data 			[请求地址、类型、参数]
				 * @param {[function]} 	retCallback 	[请求成功函数]
				 * @param {[function]} 	errCallback 	[请求错误函数]
				 */
				get: function(data, retCallback, errCallback){
					$.ajax({
						type: data['type'],
						url: data['url'],
						data: data['data'],
						dataType: 'json',
						timeout: 3000,
						success: function(data){
							retCallback(data);
						},
						error: function(xhr, type){
							errCallback(xhr, type);
						}
					});
				},
				/**
				 * [setPageSize 设置显示列表元素数量]
				 * @param {[int]}	pageSize [数量]
				 */
				setPageSize: function(pageSize) {
					this.data.pageSize = this.pageSize = pageSize;
				},
				/**
				 * [setPageNum 设置页码]
				 * @param {[int]}	pageNum 	[页码]
				 */
				setPageNum: function(pageNum) {
					this.data.start = this.start;
					this.pageNum = pageNum;
				},
				/**
				 * [setStart 设置列表元素开始序号]
				 * @param {[int]}	start 	[开始序号]
				 */
				setStart: function(start) {
					this.start = start;
				},
				//
				/**
				 * [refreshPage 刷新]
				 * @param {[json]} 		dataStr 		[请求参数]
				 * @param {[function]} 	retCallback 	[请求成功函数]
				 * @param {[function]} 	errCallback 	[请求错误函数]
				 */
				refreshPage: function(dataStr, retCallback, errCallback){
					this.nowPageNum = 0;
					this.data = dataStr;
					this.data.pageSize = this.pageSize;
					this.data.start = this.start = 0;
					this.init(retCallback, errCallback);
				},
				/**
				 * [nextPage 下一页]
				 * @param {[function]} 	retCallback 	[请求成功函数]
				 * @param {[function]} 	errCallback 	[请求错误函数]
				 */
				nextPage: function(retCallback, errCallback) {
					if(this.nowPageNum <= this.pageNum){
						this.start = this.start + this.pageSize;
						this.data.start = this.start;
						this.data.pageSize = this.pageSize;
						this.init(retCallback, errCallback);
						this.nowPageNum += 1;
					}else{
						console.log('没有更多的数据了');
					}
				},
				/**
				 * [searchData 搜索]
				 * @param {[string]} 		text 			[搜索内容]
				 * @param {[function]} 	retCallback 	[请求成功函数]
				 * @param {[function]} 	errCallback 	[请求错误函数]
				 */
				searchData: function(text, retCallback, errCallback) {
					this.data.start = this.start = 0;
					this.nowPageNum = 0;
					this.filterItems['filterItems[0].value'] = text;
					this.filterItems['filterItems[1].value'] = text;
					this.filterItems['filterItems[2].value'] = text;
					this.filterItems['filterItems[3].value'] = text;
					this.filterItems['filterItems[4].value'] = text;
					this.filterItems['filterItems[5].value'] = text;
					this.filterItems['filterItems[6].value'] = text;
					$.extend(this.data, this.filterItems);
					this.init(retCallback, errCallback);
				},
				/**
				 * [initFilterItems 初始化搜索参数]
				 */
				initFilterItems: function(){
					this.filterItems = {
						'filterisOR': 'true',
						'iMoneyHeadType': '0',
						"filterItems[0].fieldType": 'ft_ListStr',
						"filterItems[0].id": '432',
						"filterItems[0].index": 'CG0001',
						"filterItems[0].name": '业务员',
						"filterItems[0].operatertitle": '包含',
						"filterItems[1].fieldType": 'ft_Str',
						"filterItems[1].id": '460',
						"filterItems[1].index": '',
						"filterItems[1].name": '单据编号',
						"filterItems[1].operatertitle": '包含',
						"filterItems[2].fieldType": 'ft_ListStr',
						"filterItems[2].id": '471',
						"filterItems[2].index": '1',
						"filterItems[2].name": '分支机构',
						"filterItems[2].operatertitle": '包含',
						"filterItems[3].fieldType": 'ft_ListStr',
						"filterItems[3].id": '476',
						"filterItems[3].index": 'null',
						"filterItems[3].name": '',
						"filterItems[3].operatertitle": '包含',
						"filterItems[4].fieldType": 'ft_ListStr',
						"filterItems[4].operatertitle": '包含',
						"filterItems[5].fieldType": 'ft_ListStr',
						"filterItems[5].id": '474',
						"filterItems[5].index": '1',
						"filterItems[5].name": '制单人',
						"filterItems[5].operatertitle": '包含',
						"filterItems[6].fieldType": 'ft_ListStr',
						"filterItems[6].id": '475',
						"filterItems[6].index": '1',
						"filterItems[6].name": '审核人',
						"filterItems[6].operatertitle": '包含'
					}
				},
				/**
				 * [saleFilterItem 销售搜索参数]
				 */
				saleFilterItem:function(){
					this.initFilterItems();
					var filterItem = {
						"filterItems[4].id": '473',
						"filterItems[4].index": 'K001',
						"filterItems[4].name": '客户'
					}
					$.extend(this.filterItems, filterItem);
				},
				/**
				 * [purchaseFilterItem 采购搜索参数]
				 */
				purchaseFilterItem:function(){
					this.initFilterItems();
					var filterItem = {
						"filterItems[4].id": '477',
						"filterItems[4].index": 'K0022',
						"filterItems[4].name": '供应商'
					}
					$.extend(this.filterItems, filterItem);
				}
		    }
		},
		/**
		 * [HtmlCommand HTML设置]
		 * @param {[string]} html [HTML模板]
		 */
		HtmlCommand:function(html){
		    return {
		        htmls: '',
		        set: function(json){
		           this.htmls += html(json);
		        },
		        appendIn: function(dom){
		           dom.append(this.htmls);
		           this.htmls = '';
		        },
		        clearConFrom: function(dom){
		           dom.children().remove();
		        }
		    }
		},
		/**
		 * [GetPageNum 获取页码]
		 * @param {[int]} 	count 		[元素总数]
		 * @param {[int]}	pageSize	[显示数量]
		 * @return  {int} 	pageNum 	[页码]
		 */
		GetPageNum:function(count, pageSize){
			var pageNum = Math.floor(count/pageSize);
			if(count%pageSize>0){
				pageNum+=1;
			}
			return pageNum;
		},
		/**
		 * [setText 设置标签元素的text]
		 * @param {[object]} dom [dom对象]
		 * @param {[string]}	text  [内容]
		 */
		setText:function(dom, text){
			if(dom){
				if(typeof(text)!='null'){
					dom.text(text);
				}
			}
		},
		/**
		 * [setValue 设置表单元素的value]
		 * @param {[object]} dom [dom对象]
		 * @param {[string]}	value  [内容]
		 */
		setValue:function(dom, value){
			if(dom){
				if(typeof(value)!='null' && value!='null'){
					dom.val(value);
				}
			}
		}

	}
	enhance_index.prototype.constructor=enhance_index;
	module.exports=new enhance_index();
})