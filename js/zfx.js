$(function(){
	$(".topnav").hover(function(){
		if (!$(this).find("ul").is(":animated")) {
			$(this).find("ul").slideDown();
		}
	},function(){
		$(this).find("ul").slideUp();
	});

	// banner  横幅; 标语; 旗，旗帜; 大字标题;
	$(".banner").hover(function () {
        $(this).find(".prev,.next").fadeTo("slow", 0.5);
    }, function () {
        $(this).find(".prev,.next").hide();
    })
    $(".prev,.next").hover(function () {
        $(this).fadeTo("normal", 0.7);
    }, function () {
        $(this).fadeTo("normal", 0.5);
    })
    
    
	$(".prev").click(function(){
		// 获取当前的page
		var page=$(".banner .num .on").attr("title");   
		// 判断是否在动画
		if (!$(".pic").is(":animated")) {
			if (page==2){
				page=0;
				$(".pic").animate({left:'0px'},1000);
				$(".banner .num .on").removeClass("on").prev().prev().addClass("on");
			}else{
				page++
				$(".pic").animate({left:'-='+'1920px'},"slow");
				$(".banner .num .on").removeClass("on").next().addClass("on");
			}
    		
    	}
    });
	$(".next").click(function(){
		var page=$(".banner .num .on").attr("title");
		if (!$(".pic").is(":animated")) {
			if (page==0){
				page=2;
				$(".pic").animate({left:'-3840px'},1000);
				$(".banner .num .on").removeClass("on").next().next().addClass("on");
			}else{
				page--
				$(".pic").animate({left:'+='+'1920px'},"slow");
				$(".banner .num .on").removeClass("on").prev().addClass("on");
			}
    		
    	}
    });
 
    $(".banner .num li").hover(function(){
    	var n=$(this).attr("title")*1920;
    	// alert(n);
    	$(this).addClass("on")
    		.siblings().removeClass("on");
    	$(".pic").animate({left:-n+'px'},"normal");
    })
});