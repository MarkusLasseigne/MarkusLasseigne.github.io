/**Loop Controls*/
var lps = {
	stop:function(){},
	cTime:function(){},
	sTime:function(){},
	start:function(fun,Int,inP){
		var int;
		if(Array.isArray(fun)&&fun!==undefined){
			fun.forEach(function(a,b,c){c[b](inP);});
		}else{
			int=window.setInterval(fun, Int);
		}

	},
};
/**All Device Inputs*/
var allIns = {
	kBoard:[],
	mouse:[],
	inCheck:function(){},
};
/**HTML editing*/
var ht = {
	elNew:function(){},
	elGet:function(){},
	elGetA:function(){}
};