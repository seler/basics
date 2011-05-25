/* gallery.js */

/**********************************************/
/*** basics - the ultimate html, css and js ***/
/*** framework for instant web page         ***/
/**********************************************/
/*** author: Rafa³ Selewoñko @ seler.info   ***/
/**********************************************/

$(function(){
	$(".gallery a, .text .image a").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	true,
		'titlePosition'	:	'inside'
	});
	$(".gallery img, .text .image img").each(function(){
		$(this).prev("span").css({
			"width"		:	$(this).width(),
			"height"		:	$(this).height(),
		})
	});
});