$(function(){
	$(".topnav").hover(function(){
		if (!$(this).find("ul").is(":animated")) {
			$(this).find("ul").slideDown();
		}
	},function(){
		$(this).find("ul").slideUp();
	});
});