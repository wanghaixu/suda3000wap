define(function(require,exports,module){
	var _Public = require('./public');
	var selNum = 0;
	var filter = JSON.parse(localStorage.getItem('filter'));
	//接口地址
	var url_suffix = localStorage.getItem('sdIP');
	function _report(){};
	/*
	 * 设置筛选默认条件
	 * filType 筛选页面类型，'bill'表示单据筛选,'credit'表示财务汇总筛选,'product'表示货品筛选
	 */
	function defaultFilter(filType,selNum){
		var arg = [];
		//筛选条件显示个数（币种除外）
		var num = 2;
		if (filType == 'bill') {
			arg = ['supplier','client','goods'];
		} else if(filType == 'credit') {
			arg = ['supplier','client','contact'];
		} else {
			arg = ['filt_stock','filt_storeType','filt_product'];
			num = 3
		}
		//加载滚动选择插件
		if (selNum == num) {
			if((filter != null) && (filter.select.length != 0)) {
				var select,val;
				//设置筛选条件
				for (var i = 0; i < filter.select.length; i++) {
					select = document.getElementById(filter.select[i]._dom);
					val = filter.select[i]._val;
					for (var j = 0; j<select.length; j++) {
						if(select[j].value == val){
							select[j].selected = true;
							break;
						}
					};
				};
			}
			if (filter.storeid != null) {
				store = document.getElementById('filt_stock');
				for (var k = 0; k<store.length; k++) {
					if(store[k].value == filter.storeid){
						store[k].selected = true;
						break;
					}
				};
			}
			for (var i = 0; i < arg.length; i++) {
				$('#'+ arg[i]).mobiscroll().select({
					theme: 'mobiscroll',
					lang: 'zh',
					display: 'bottom',
					mode: 'selectBasic'
				});
			};
			setTimeout(function(){layer.closeAll();}, 1000);
			selNum = 0;
		}
	}
	_report.prototype={
		/*
		 * 报表页面数据获取拼接函数
		 * modId 页面获取数据id
		 * html 获取数据成功html拼接代码
		 * errHtml 获取数据失败html拼接代码
		 * type 报表页面类型，list: 单据页面；collect：财务汇总; product: 货品库存
		 * url 接口地址
		 */
		addData: function(modId, html, type, url){
			var filter = JSON.parse(localStorage.getItem('filter'));
			var sDate,eDate;
			//参数
			var postData={
			  'modId': modId,
			  'Unit': '0',
			  'iAllot': '12',
			  'isNotAmount': '0',
			  'isNotPrice': '0',
			  'filterItemRelation': '全部并且',
			  'storeid': 0
			};
			//判断是否有过滤条件缓存
			if ((filter == null) || (filter.length == 0)) {
				var dataArg = _Public.getDates();
				sDate = dataArg.eDate;
				eDate = dataArg.sDate;
			} else {
				sDate = filter.sDate;
				eDate = filter.eDate;
				var select = filter.select;
				//添加过滤输入参数
				for (var i = 0; i < select.length; i++) {
					postData['filterItems['+i+'].fieldtype'] = 'ft_ListStr';
					postData['filterItems['+i+'].fieldid'] = select[i]._id;
					postData['filterItems['+i+'].operate'] = select[i]._operate;
					postData['filterItems['+i+'].displayvalue'] = select[i]._val;
					postData['filterItems['+i+'].realvalue'] = select[i]._index;
					postData['filterItems['+i+'].itemno'] = 0;
					postData['filterItems['+i+'].fieldlabel'] = select[i]._label;
				};
				if (type == 'product') {
					postData['storeid']= filter.storeid;
					postData['Unit']= 1;
				}
			}
			postData['shopid']= localStorage.getItem('shopID');
			postData['beginDate'] = sDate;
			postData['endDate'] = eDate;
			$.ajax({
				type: 'post',
				url: 'http://'+url_suffix+ url,
				dataType: 'json',
				data: postData,
				timeout: 3000,
				success: function(data){
					var tip;
					//定义货币符号
					var moneyC = '￥';
					//判断是否有过滤条件缓存
					if ((filter == null) || (filter.length == 0)) {
						tip = '最近一个月内无数据';
					} else {
						tip = '暂无数据';
					}
					var arg = {
						tip: tip,
						moneyC: moneyC,
						data: data
					}
					html(arg);
				},
				error: function(xhr, type){
					console.log(xhr);
					console.log(type);
				}
			});
		},
		/*
		 * 加载过滤条件的数据
		 * dom 该过滤条件select的id
		 * type 该过滤条件viewName值（每个过滤条件值固定）
		 * num 可选值，0表示获取仓库数据, 1表示获取货品名称数据，2表示获取供应商/客户数据
		 * filType 筛选页面类型，'bill'表示单据筛选,'credit'表示财务汇总筛选,'product'表示货品筛选
		 */
		selectData:function(dom,type,num,filType) {
			var data = {
				'viewname': type,
				'filter':"1=1",
				'likeValue':'',
				'pageSize': 100000,
				'start': 0
			}
			$.ajax({
				type: 'post',
				url: 'http://'+ url_suffix +'/lookupdm/lookupdata.action',
				dataType: 'json',
				data: data,
				timeout: 3000,
				success: function(data){
					if (data.errNo) {
						if (data.errMsg != null){
							layer.closeAll();
							_Public.closeToLogin(data.errMsg);
						}
					} else {
						var list = data.listData;
						var str = '';
						//判断是否获取仓库数据，加载不同的数据
						if (num == 0) {
							for (var i = 0; i < list.length; i++) {
								str += '<option data-name="'+ list[i].name +'" value="'+ list[i].storeid +'">'+ list[i].name +'</option>';
							};
						} else if (num == 1) {
							for (var i = 0; i < list.length; i++) {
								str += '<option data-name="'+ list[i].name +'" value="'+ list[i].name +'">'+ list[i].name +'</option>';
							};
						} else {
							for (var i = 0; i < list.length; i++) {
								str += '<option data-name="'+ list[i].shortname +'" value="'+ list[i].shortname +'">'+ list[i].shortname +'</option>';
							};
						}
						dom.append(str);
						selNum = selNum + 1;
						defaultFilter(filType,selNum);
					}
				},
				error: function(xhr, type){
					console.log(xhr);
					console.log(type);
				}
			});
		},
		/*
		 * 获取往来类型，货品类型过滤条件数据
		 * dom 货币select 节点
		 * postId 输入参数
		 */
		selectContact:function(dom, postId,filType) {
			$.ajax({
				type: 'post',
				url: 'http://'+url_suffix+'/rpt/basefilter!doGetFilterValueList.action',
				dataType: 'json',
				data: {
				  'currFieldId': postId
				},
				timeout: 3000,
				success: function(data){
					if (data.errNo) {
						if (data.errMsg != null){
							layer.closeAll();
							_Public.closeToLogin(data.errMsg);
						}
					} else {
						var list = data.filterValues;
						var str = '';
						for (var i = 0; i < list.length; i++) {
							str += '<option data-name="'+ list[i].id +'" value="'+ list[i].name +'">'+ list[i].name +'</option>';
						};
						dom.append(str);
						selNum = selNum + 1;
						defaultFilter(filType,selNum);
					}
				},
				error: function(xhr, type){
					console.log(xhr);
					console.log(type);
				}
			});
		},
		/*
		 * 获取筛选条件
		 * arg 筛选条件select 节点
		 * 返回值result 数组包含过滤条件值value、显示名称text
		 */
		values:function(arg){
			var result= [];
			var v,t,index,dom;
			var arry;
			for (var i = 0; i < arg.length; i++) {
				dom = $('#'+arg[i]);
				v = dom.val();
				t = dom.find('option:selected').text();
				index = dom.find('option:selected').attr('data-name');
				if (v != 'null') {
					arry = {
						_dom: arg[i],
						_id: $('#'+arg[i]).attr('data-id'),
						_val: v,
						_index: index,
						_text: t,
						_operate: $('#'+arg[i]).attr('data-operate'),
						_label: $('#'+arg[i]).attr('data-label')
					};
					result.push(arry);
				}
			};
			return result;
		},
		/*
		 * 报表页面添加过滤条件
		 */
		setfilterName:function(){
			var filter = JSON.parse(localStorage.getItem('filter'));
			$('.filtCondition').remove();
			if ((filter != null) && (filter.length != 0)) {
				var str_fil = '';
				str_fil += '<span class="filtCondition">'+filter.sDate+'~'+filter.eDate+'</span>';
				var select = filter.select
				if (select.length !=0) {
					for (var i = 0; i < select.length; i++) {
						str_fil += '<span class="filtCondition">'+select[i]._text+'</span>';
					};
				}
				if (filter.storeid != 'null') {
					str_fil += '<span class="filtCondition">'+filter.stockName+'</span>';
				}
				$('.filterArea').append(str_fil);
				$('.filterArea').show();
			}
		},
		/*
		 * 设置默认时间
		 * start 开始时间input节点
		 * end   结束时间input节点
		 */
		setTimes:function(start,end){
			var data = _Public.getDates();
			var startTime = data.eDate;
			var endTime = data.sDate;
			if((filter != null) && (filter.length != 0)) {
				startTime = filter.sDate;
				endTime = filter.eDate;
			}
			//初始化日历插件
			/*startDate 开始日期*/
			_Public.selectDates(start,startTime);
			/*endDate 结束日期*/
			_Public.selectDates(end,endTime);
		}
	}
	_report.prototype.constructor=_report;
	module.exports=new _report();
});