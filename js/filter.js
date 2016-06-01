define(function(require,exports,module){
	function Filter(){};
	Filter.prototype={
		judgeDate:function(id1,id2){
			console.log(arguments.length,arguments[0],arguments[1]);
			var startDateArr=$('#'+id1).val().split('-');
			var endDateArr=$('#'+id2).val().split('-');
			var startDate=new Date(parseInt(startDateArr[0]),parseInt(startDateArr[1]-1),parseInt(startDateArr[2]));
			var endDate=new Date(parseInt(endDateArr[0]),parseInt(endDateArr[1]-1),parseInt(endDateArr[2]));
			if(startDate>endDate){
				alert('开始日期必须小于终止日期');
				return false;
			}else{
				var startDate=startDate;
				var endDate=endDate;
				console.log(startDate,endDate);
			}
		}
	};
	Filter.prototype.constructer=Filter;
	module.exports=new Filter();
});