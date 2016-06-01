/*
*
*_public.js
*内容：
	1.数据存储(可用于页面之间传数据)
*/
define(function (require, exports, module) {
    function _Public() { };
    _Public.prototype = {
        /*
	 	*设置存储的数据
	 	*data:储存的数据,json格式
		*/
        Set_storage: function (data) {
            if (window.localStorage) {
                //储存时，json要转为字符串
                localStorage['pass_data'] = JSON.stringify(data);
            } else {
                alert("你的浏览器不支持本地存储");
            }
        },

        /*
	 	*获取存储的数据
		sdIP:端口 IP
		globalAccount:全局帐号
		globalPw全局密码
		globalPwRem 记住全局密码
		opCode 操作员编号
		opPw 操作员密码
		opPwRem 记住操作员密码
		eg:要获取操作员密码 var a=_Public.Get_storage('opPw')
		*/
        Get_storage: function (parm) {
            return localStorage.getItem(parm);
        },

        /*请求数据，获取返回的的信息
		 *参数说明：
		  data['type']:请求方式
		  data['url']:完整的接口地址
		  data['data']:传入参数
		  retCallback:成功的回调函数
	 	  errCallback:失败的回调函数
		  */
        Get_ajax: function (data, retCallback, errCallback) {
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
        },
        /*选择列表弹窗
		 *参数说明：
		  data['arg']:选择select节点
		  */
        Moscroll: function (arg) {
            arg.mobiscroll().select({
                theme: 'mobiscroll',
                lang: 'zh',
                display: 'bottom',
                mode: 'scroller',
                minWidth: 200
            });
        },
        /*
		 * 筛选页面默认开始时间为当前一个月前，结束日期为当前日期
		 * @return {[dateArr]} [返回开始时间sDate和结束时间eDate]
		 */
        getDates: function () {
            var eDate;
            var dateArr;
            var myDate = new Date();
            var nowYear, nowMoth, nowData, month;
            //获取当前日期
            nowYear = myDate.getFullYear();
            month = myDate.getMonth();
            nowData = addNum(myDate.getDate());
            nowMoth = addNum(month + 1);
            dateArr = {
                sDate: String(nowYear + '-' + nowMoth + '-' + nowData)
            };
            //判断是否有31号
            if (Number(nowData) == 31) {
                nowData = 30;
                if (Number(month) == 2) {
                    nowData = 28;
                }
            }
            month = addNum(month);
            //判断是否为上一年
            if (Number(month) == 0) {
                eDate = Number(nowYear) - 1;
                eDate = eDate + '-12-' + nowData;
            } else {
                eDate = nowYear + '-' + month + '-' + nowData;
            }
            function addNum(num) {
                if (num < 10) {
                    num = '0' + num;
                } else {
                    num;
                }
                return num;
            }
            dateArr.eDate = String(eDate);
            return dateArr;
        },
        /*选择时间函数
		 *参数说明：
		 *arg:选择时间input id节点
		 *time:选择时间input 默认时间
		 */
        selectDates: function (arg, time) {
            var times = time.split('-');
            var curr = new Date().getFullYear();
            var opt = {};
            opt.date = { preset: 'date' };
            opt.default = {
                theme: 'android-holo light',
                display: 'bottom',
                mode: 'scroller',
                dateFormat: 'yyyy-mm-dd',
                lang: 'zh',
                showNow: true,
                nowText: "今天",
                stepMinute: 5,
                startYear: curr - 50,
                defaultValue: new Date(times[0], times[1] - 1, times[2]),
                endYear: curr + 50
            };
            arg.scroller('destroy').scroller($.extend(opt['date'], opt['default']));
            arg.val(String(time));
        },
        /*两个日期的比较*/
        //a:开始时间
        //b:结束时间
        compareDate: function (a, b) {
            var arr = a.split("-");
            var starttime = new Date(arr[0], arr[1], arr[2]);
            var starttimes = starttime.getTime();
            var arrs = b.split("-");
            var lktime = new Date(arrs[0], arrs[1], arrs[2]);
            var lktimes = lktime.getTime();
            if (starttimes > lktimes) {
                return false;
            }
            else
                return true;
        },
        /*
        * 如返回信息为‘您没有登陆或长时间没使用，请重新登陆’或‘您的账号已在其它机器使用，请重新登录’时，要退到操作员的登录页
        * str:errMsg的内容
        */
        closeToLogin: function (str) {
            if (str.indexOf('当前会话已失效') > 0 || str.indexOf('重新登陆') > 0 || str.indexOf('重新登录')>0) {
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
        },
        /*
        * 弹出提示框,默认样式为layerMobile
        * str:提示内容的内容
        * param:一些参数,默认为空
        */
        layerMsg: function (str, param) {
            var p = {
                content: str,
                className: 'layerMobile',
                time: 2
            }
            if (param)
                $.extend(p, param);
            layer.open(p);
        },
       /*
        * 弹出提示框,默认样式为layerMobile
        * str:提示内容的内容
        * param:一些参数,默认为空
        * text:button显示的内容
        */
        d_alert: function (tit,str, param,text) {
            if (param)
                $.extend(p, param);
            layer.open({
                title: [
                    tit,
                    'background-color:#004527; color:#fff;'
                ],
                content: str,
                btn: [text]
            });
        },
        // /*
        //  * 再次确认框
        //  */
        // re_confirm:function(powerInfo,data,errNo,type,isAdd){
        //     layer.open({
        //         content: powerInfo.tip,
        //         btn: ['忽略', '取消'],
        //         shadeClose: false,
        //         yes: function(){

        //         },no: function(){
                    
        //         }
        //     });
        // });
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
        /*
        * 加载框,默认样式为layerMobile
        */
        showLoading: function () {
            layer.open({
                type: 2,
                shadeClose: false
            });
        },
        /*
       * 隐藏加载框
       */
        hideProgress: function () {
            layer.closeAll();
        },
         /*
         *确认框
         *str为提示内容
         *retCallback为成功的回调函数
         *errCallback为失败的回调函数
         */
        confirmLayer:function(str,retCallback,errCallback){
            layer.open({
                content: str,
                btn: ['确认', '取消'],
                shadeClose: false,
                yes: function(){
                    retCallback();
                }, no: function(){
                    errCallback();
                }
            });
    }
    };
    _Public.prototype.constructor = _Public;
    module.exports = new _Public();
});