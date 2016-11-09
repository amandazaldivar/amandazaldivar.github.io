$(document).ready(function(){
	$("div").slideDown(1000).hide(300).show(1000).hide(300).show(1000).hide(300).show(1000).slideUp(2000);

	var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	jQuery("div").animate({color: newColor}, 2000);
});