/* index.js */

/**********************************************/
/*** basics - the ultimate html, css and js ***/
/*** framework for instant web page         ***/
/**********************************************/
/*** author: Rafa³ Selewoñko @ seler.info   ***/
/**********************************************/

/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */

function include(script) {
    document.write('<script type="text/javascript" src="'+script+'"></script>');
}
//include('http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js');	//jquery
include('scripts/jquery-1.6.1.min.js');
include('scripts/jquery.easing.1.3.js');	// Fancybox and cycle optional - Add transitions as jQuery by default supports only "swing" and "linear"
include('scripts/jquery.mousewheel-3.0.2.pack.js');	// Fancybox optional - Enable "mouse-wheel" to navigate throught gallery items
include('scripts/jquery.fancybox-1.3.1.pack.js');	// fancybox
include('scripts/jquery.cycle.all.min.js');	// slideshow
include('scripts/layout.js');	//script for gallery
include('scripts/gallery.js');	//script for gallery
include('scripts/navigation.js');	//script for gallery