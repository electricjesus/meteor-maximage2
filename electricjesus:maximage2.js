// Write your package code here!
Meteor.startup(function() {

	(function($, undefined) {
	  window.MaxImage = function(el, options) {
		var element = el instanceof $ ? el : 
				(typeof el === 'string' ? $(el) : false)
			;
		if(!element) {
			throw "Must provide a string for a jQuery selector or a jQuery object";
		} else {
			if(!element.maximage) {
				throw "Library error.";
			} else {
				element.maximage(options);
			}
		}
	  };
	})(jQuery);
});
