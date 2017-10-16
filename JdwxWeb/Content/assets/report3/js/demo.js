$(document).ready( function () {
//	var myChart = echarts.init($('.chart-show')[0]);
////	$.get('data/zhexiantu.json', function (data) {
//	    myChart.setOption(option = {
//		    title: {
//		        text: '工作量分布',
//		        left: 'right',
//		        textStyle:{
//		    		color: 'rgba(255, 255, 255, .87)',
//		    		fontStyle: '微软雅黑',
//		    		fontSize: '19'
//		        }
//		    },
//		    tooltip : {
//		        trigger: 'axis',
//		        axisPointer: {
//		            type: 'cross',
//		            label: {
//		                backgroundColor: 'rgba(255, 255, 255, .87)'
//		            }
//		        }
//		    },
//		    legend: {
//		    	left: "left",
//		        data:[
//		        	{
//			        	name: '药师',
//			        	icon: 'rect'
//		        	},
//		        	{
//		        		name: '物流',
//		        		icon: 'rect'
//		        	}
//		        ],
//		        textStyle:{
//		    		color: 'rgba(255, 255, 255, .87)',
//		    		fontSize: '14'
//		        }
//		    },
//		    grid: {
//		        left: '3%',
//		        right: '4%',
//		        bottom: '3%',
//		        containLabel: true
//		    },
//		    xAxis : [
//		        {
//		            type : 'category',
//		            boundaryGap : false,
//		            data : [
//		            	{
//		            		value: '8时',
//		            		textStyle: {
//			                	color: 'rgba(255, 255, 255, .5)',
//			                	fontSize: '14'
//		            		}
//		            	},
//		            	{
//		            		value: '9时',
//		            		textStyle: {
//			                	color: 'rgba(255, 255, 255, .5)',
//			                	fontSize: '14'
//		            		}
//		            	},
//		            	{
//		            		value: '10时',
//		            		textStyle: {
//			                	color: 'rgba(255, 255, 255, .5)',
//			                	fontSize: '14'
//		            		}
//		            	},
//		            	{
//		            		value: '11时',
//		            		textStyle: {
//			                	color: 'rgba(255, 255, 255, .5)',
//			                	fontSize: '14'
//		            		}
//		            	},
//		            	{
//		            		value: '12时',
//		            		textStyle: {
//			                	color: 'rgba(255, 255, 255, .5)',
//			                	fontSize: '14'
//		            		}
//		            	},
//		            	{
//		            		value: '13时',
//		            		textStyle: {
//			                	color: 'rgba(255, 255, 255, .5)',
//			                	fontSize: '14'
//		            		}
//		            	},
//		            	{
//		            		value: '14时',
//		            		textStyle: {
//			                	color: 'rgba(255, 255, 255, .5)',
//			                	fontSize: '14'
//		            		}
//		            	},
//		            	{
//		            		value: '15时',
//		            		textStyle: {
//			                	color: 'rgba(255, 255, 255, .5)',
//			                	fontSize: '14'
//		            		}
//		            	},
//		            	{
//		            		value: '16时',
//		            		textStyle: {
//			                	color: 'rgba(255, 255, 255, .5)',
//			                	fontSize: '14'
//		            		}
//		            	},
//		            	{
//		            		value: '17时',
//		            		textStyle: {
//			                	color: 'rgba(255, 255, 255, .5)',
//			                	fontSize: '14'
//		            		}
//		            	},
//		            	{
//		            		value: '18时',
//		            		textStyle: {
//			                	color: 'rgba(255, 255, 255, .5)',
//			                	fontSize: '14'
//		            		}
//		            	}
//		            ]
//		        }
//		    ],
//		    yAxis : [
//		        {
//		        	position : 'right',
//		            type : 'value',
//		            axisLine: {
//		                show: false
//		            },
//		            axisTick: {
//		                show: false
//		            },
//		            axisLabel:{
//		            	textStyle:{
//			                color: 'rgba(255, 255, 255, .5)',
//			                fontSize: '11'
//		            	}
//		            },
//		            splitLine:{
//		            	lineStyle:{
//		            		color: 'rgba(255, 255, 255, .25)'
//		            	}
//		            }
//		        }
//		    ],
//		    series : [
//		        {
//		            name:'物流',
//		            type:'line',
//	            	symbol: 'none',
//		            areaStyle: {
//		                normal: {
//		                    color: 'rgba(199, 193, 41, .87)'
//	                    }
//		            },
//		            data:[0, 0, 220, 182, 191, 234, 310, 230, 210, 0, 0]
//		        },
//		        {
//		            name:'药师',
//		            type:'line',
//	        		symbol: 'none',
//		            areaStyle: {
//		                normal: {
//		                    color: 'rgba(77, 146, 193, .87)'

//		                }
//		            },
//		            data:[0, 0, 120, 132, 101, 230, 210, 234, 290, 0, 0]
//		        }
//		    ],
//	    	color: ['rgba(199, 193, 41, .87)', 'rgba(77, 146, 193, .87)']
//		});
//	});

	//addborder();
	//autoscroll();

	function addborder(){
		var _htmlstr='';
		_htmlstr+='<li class="border"><div class="leftborder leftborder-blue">';
		_htmlstr+='<span class="font-white">北区01 心脑血管科</span>';
		_htmlstr+='<span class="margin-top-10 font-white-40">A-3-1 123456789</span>';
		_htmlstr+='</div><div class="rightborder"><div class="topborder">';
		_htmlstr+='<div class="ball ball-blue"><span>装</span></div>';
		_htmlstr+='<div class="arrow"><div class="stick stick-blue"></div><div class="arrow-right arrow-blue"></div></div>';
		_htmlstr+='<div class="ball ball-blue"><span>配</span></div>';
		_htmlstr+='<div class="arrow"><div class="stick stick-yellow"></div><div class="arrow-right arrow-yellow"></div></div>';
		_htmlstr+='<div class="ball ball-yellow"><span>签</span></div></div>';
		_htmlstr+='<div class="middleborder"><span class="font-white">10min</span><span class="font-yellow">21min</span></div>';
		_htmlstr+='<div class="bottomborder"><ul><li>呜呜呜 11:11</li><li>噜噜噜 12:12</li><li>卡卡卡 13:13</li></ul></div></div></li>';
		for (var i=0;i<10;i++){
			$(".borderlist").append(_htmlstr);
		}
	}
	
	function autoscroll(){
		var position=0;
		var height=0;
		var bordercheck=false;
		setInterval(function(){
			if ($(".borderlist").height()>$(".rightpart").height()){
				if (!bordercheck){
					$(".rightpart").append('<div class="mirror"></div>');
					$(".mirror").append($(".borderlist").html());
					$(".mirror").css("top",0);
					bordercheck=true;
				}
				height=$(".borderlist").height()+36;
				if (position<height){
					position+=1;
				}else{
					position=position-height+1;
				}
				$(".borderlist").css("top",-position+"px");
				$(".mirror").css("top",-position+"px");
			}else{
				$(".rightpart").remove(".mirror");
				bordercheck=false;
			}
		},50);
	}
	/*背景设置*/
	$(".config-background").click(function(){
		$(".changebackground").css("left",-$(".changebackground").width()+"px");
		$(".changebackground").show();
		$(".changebackground").animate({
			left:'0'
		},'fast');
		$(".changebackgroundback").show();
	})
	
	$(".background-blue").click(function(){
	    $("body").css("background", "url(/Administration/Content/assets/report3/img/background-blue.png)");
		hidechangebackground();
	})
	
	$(".background-black").click(function(){
	    $("body").css("background", "url(/Administration/Content/assets/report3/img/background-black.png)");
		hidechangebackground();
	})
	
	$(".background-green").click(function(){
	    $("body").css("background", "url(/Administration/Content/assets/report3/img/background-green.png)");
		hidechangebackground();
	})
	
	$(".changebackgroundback").click(function(){
		hidechangebackground();
	})
	
	function hidechangebackground(){
		$(".changebackground").animate({
			left:"-"+$(".changebackground").width()+"px"
		},'fast');
		$(".changebackground").animate({
			height:"hide"
		},'fast');
		$(".changebackgroundback").hide();
	}
})