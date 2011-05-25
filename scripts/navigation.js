/* navigation.js */

/**********************************************/
/*** basics - the ultimate html, css and js ***/
/*** framework for instant web page         ***/
/**********************************************/
/*** author: Rafa³ Selewoñko @ seler.info   ***/
/**********************************************/

$(document).ready(function(){
/*
	$('#mainmenu').append('<div id="slider"><div>&nbsp;</div></div>');
	var slider = $('#slider');
	slider.css({
		'left':		$('#mainmenu .active').position().left,
		'width':	$('#mainmenu .active').width(),
		'display':	'none'
	});
	$('#mainmenu .active').css({
		'background-image'	:	'url(images/menu/buttonbgleft.png)',
		'background-repeat'	:	'no-repeat'
	});
	$('#mainmenu .active a').css({
		'background-image'	:	'url(images/menu/buttonbgright.png)',
		'background-repeat'	:	'no-repeat',
		'background-position'	:	'right center',
		'color'			:	'#575757'
	});
	
	
	$('#mainmenu li').hover(function(){
		goto($(this).position().left, $(this).width(), this);
	}, function(){
		$(this).children('a').css({
			'color'	:	'#f2f2f2'
		});
	});
	$('#mainmenu').mouseleave(gotoactive);
	
	
	function goto(position, width, a){
		slider.stop(false,true).animate({
			'width'	:	width,
			'left'	:	position
		}, 400, 'easeOutBack');
		$('#mainmenu .active').children('a').css({
			'color'	:	'#f2f2f2'
		});
		$(a).children('a').css({
			'color'	:	'#575757'
		}, 200);
		$('#mainmenu .active, #mainmenu .active a').css({
			'background'	:	'none'
		});
	}
	
	function gotoactive(){
		goto($('#mainmenu .active').position().left,$('#mainmenu .active').width(), '#mainmenu .active');
		$('#mainmenu .active').children('a').css({
			'color'	:	'#575757'
		});
	}
*/
});