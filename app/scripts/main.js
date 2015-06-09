/* jshint devel:true */

/***************************************************
* PLUGINS
****************************************************/

/**
 * jQuery alterClass plugin
 *
 * Remove element classes with wildcard matching. Optionally add classes:
 *   $( '#foo' ).alterClass( 'foo-* bar-*', 'foobar' )
 *
 * Copyright (c) 2011 Pete Boere (the-echoplex.net)
 * Free under terms of the MIT license: http://www.opensource.org/licenses/mit-license.php
 *
*/
$.fn.alterClass = function ( removals, additions ) {

	var self = this;
	
	if ( removals.indexOf( '*' ) === -1 ) {
		// Use native jQuery methods if there is no wildcard matching
		self.removeClass( removals );
		return !additions ? self : self.addClass( additions );
	}
 
	var patt = new RegExp( '\\s' + 
			removals.
				replace( /\*/g, '[A-Za-z0-9-_]+' ).
				split( ' ' ).
				join( '\\s|\\s' ) + 
			'\\s', 'g' );
 
	self.each( function ( i, it ) {
		var cn = ' ' + it.className + ' ';
		while ( patt.test( cn ) ) {
			cn = cn.replace( patt, ' ' );
		}
		it.className = $.trim( cn );
	});
 
	return !additions ? self : self.addClass( additions );
};

/***************************************************
* GLOBAL VARIABLES
****************************************************/

var currentNum = 0;


/***************************************************
* JQUERY ON LOAD
****************************************************/

(function($) {
	setInterval(function(){
		$('body').alterClass('bg-*', getNewClass());
	}, 8000);

	$('body').on('click', function(){
		$(this).alterClass('bg-*', getNewClass());
	});

})(jQuery);

/***************************************************
* HELPER FUNCTIONS
***************************************************/

// Confirm we're on this section
function isSection(name) {
    return ($('.section-' + name).length) ? true : false;
}

// Return name of current section
function getSection() {
	var section = $('body').attr("class").match(/section[\w-]*\b/)[0];
	return section.split('section-')[1];
}

// Return random number from 0-9
function getRandomNumberFromRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUniqueRandom(min, max) {
	var randomNum = getRandomNumberFromRange(min, max),
		lastNum   = currentNum,
		newNum = (randomNum != lastNum) ? randomNum : getRandomNumberFromRange(min, max);

	currentNum = newNum;
	return newNum;
}

function getNewClass() {
	return 'bg-' + getSection() + '--' + getUniqueRandom(0, 9);
}