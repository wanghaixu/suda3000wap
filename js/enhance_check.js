//自动运行函数：函数名前缀+下划线
//组件的脚本函数：函数名前缀+module
define(function(require,exports,module){
	function Check(){};
	Check.prototype={
		_pageReset:(function(){
			//清除手机浏览器原有的左右滑动事件
			var control=navigator.control||{};
			if(control.gesture){
				control.gesture(false);
			};
			//设置body最小值
			var resetHeight=94;
			//如果底部导航不存在
			if(!$('footer').text()){
				resetHeight=49;
				$('body').css('padding-bottom','0px');
				
			}else{
				/*清除因input获得焦点时，fixed元素被顶上去遮住其他元素的Bug*/
				$(window).resize(function() {
					if($(window).height()<400){
						$('footer').css('position','relative');
						$('body').css('padding-bottom','0px');
					}else{
						$('footer').css('position','fixed');
						$('body').css('padding-bottom','50px');
					}
				});
			}
			$('body').css('min-height',$(window).height()-resetHeight);
			$('body').removeClass('uhide');
			//遮蔽层禁止滑动
			if($('#shade')){
				$("#shade").on('touchmove',function(event){
					event.preventDefault();
				});
			};
		})(),
		/*点击跳转函数
	 	*传入dom元素(css选择器),可传入多个
		*/
		skipToHref:function(dom){
			$(document).on('tap',dom,function(event){
				location.href=$(this).attr('Data-href');
			})
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
		//组件module-form-t1的脚本
		moduleFormT1:function(){
			/*输入框获得焦点时，背景虚化-开始*/
			$('.focusShade').width($(window).width()).height($(window).height());
			$('.module-form-t1 input').focus(function(){
				$('.focusShade').removeClass('uhide');
			});
			$('.module-form-t1 input').blur(function(){
				$('.focusShade').addClass('uhide');
			})
			/*输入框获得焦点时，背景虚化-结束*/
			//组件module-form-t1：筛选功能样式的设置-开始
			$('.filtration').on('tap',function(){
				//设置遮蔽层的高度
				var shadeHeight=$('html').height()-$('header').height()-$('form').height()-4;
				$('#shade').height(shadeHeight);
				//显示，隐藏选项卡/切换遮蔽层
				$('.item-body,#shade').toggleClass('uhide');
				//小图标的切换（上，下）
				$('.filtration-icon').toggleClass('filtration-icon-active');
			});
			$('#shade').on('tap',function(){
				$('.item-body,#shade').toggleClass('uhide');
			});
			$('.item-body').on('tap','.item-1',function(){
				//获取文字
				selectType=$(this).find('.item-left').text();
				//设置文字
				$('#filtrateType').text(selectType);
				//图标样式改变
				$('.item-body').find('.item-1').removeClass('item-1-active');
				$(this).addClass('item-1-active');
				//选择后，关闭功能层
				$('.item-body,#shade').toggleClass('uhide');
				$('.filtration-icon').toggleClass('filtration-icon-active');
				/*切换内容-开始*/
				// $('.list').addClass('uhide');
				// $('[type="'+selectType+'"]').removeClass('uhide');
				/*切换内容结束*/
			});
			$('.module-form-t1 input').on('tap',function(){
				if(!$('.item-body,#shade').hasClass('uhide')){
					$('.item-body,#shade').addClass('uhide');
				}
			})
			//组件module-form-t1：筛选功能样式的设置-结束
		},
		//审核，反审核页面的选择审核项的事件，单选
		choiceItem:function(){
			/*资料列表项选择-开始*/
			$('.list').on('tap','.ul',function(){
				var isClass=$(this).find('.li-tips').hasClass('li-tips-active');
				$('.li-tips').removeClass('li-tips-active');
				if(!isClass){
					$(this).find('.li-tips').toggleClass('li-tips-active');
				}
			});
			/*资料列表项选择-结束*/
		}
	};
	Check.prototype.constructor=Check;
	module.exports=new Check();
})