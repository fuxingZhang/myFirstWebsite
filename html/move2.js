// JavaScript Document
function getStyle(obj,name)             //获取非间样式
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];    //  IE
	}
	else
	{
		return getComputedStyle(obj,null)[name];     //FF
	}
}

function startMove(obj,json,fnEnd)   //执行完obj,json后，再执行fnEnd函数。就是链式运动。
{
	clearInterval(obj.timer);
	obj.timer=setInterval(move,30);
	
	function move()
	{
		var bStop=true;    //假设所有值都已经到了
		
		for(var attr in json)
		{
			var  curr=0;
			if(attr=='opacity')
			{
				curr=Math.round(parseFloat(getStyle(obj,attr))*100);   //四舍五入
			}
			else
			{
				curr=parseInt(getStyle(obj,attr));
			}
			
			if(curr!=json[attr])
			bStop=false;
			
			var speed=(json[attr]-curr)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
							
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(curr+speed)+')';
				obj.style.opacity=(curr+speed)/100;
			}
			else
			{
				obj.style[attr]=curr+speed+'px';
			}
		}
		
		if(bStop)
		{
			clearInterval(obj.timer);
			if(fnEnd)fnEnd(); //传进来才调用，防止出错。
	    }
	}
}                                     

/*
function startMove(obj,attr,iTarget)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(move,30);
	
	function move()
	{
		if(attr=='opacity')
		{   
		    var  curr=0;
			curr=Math.round(parseFloat(getStyle(obj,attr))*100);   //四舍五入
		    var speed=(iTarget*100-curr)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(curr==iTarget*100)
			{
				clearInterval(obj.timer);
			}
			else
			{
				obj.style.filter='alpha(opacity:'+(curr+speed)+')';
				obj.style.opacity=(curr+speed)/100;
			}
		}
		else
		{
			var  curr=0;
			curr=parseInt(getStyle(obj,attr));
			var speed=(iTarget-curr)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(curr==iTarget)
			{
				clearInterval(obj.timer);
			}
			else
			{
				obj.style[attr]=curr+speed+'px';
			}
		}
		
	}
}
*/