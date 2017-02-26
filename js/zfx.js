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
        $(this).find(".prev,.next").fadeTo("show", 0.1);
    }, function () {
        $(this).find(".prev,.next").hide();
    })
    $(".prev,.next").hover(function () {
        $(this).fadeTo("show", 0.7);
    }, function () {
        $(this).fadeTo("show", 0.1);
    })
    $(".banner").slide({ titCell: ".num ul", mainCell: ".51buypic", effect: "left", autoPlay: true, delayTime: 700, autoPage: "<li><a></a></li>" });

});