/*
* name: LinkIt
* author: Nathan MacDonald
* version: 0.1.0
* license: MIT
*/

// this within the function refers to the element
// whereupon the jQuery is called.
(function($){
	$.fn.linkIt = function(options) {
	
		// default settings
		var settings = $.extend({
			href : null,
			text : null,
			target : '_self'
		}, options);
	
		// perform some validation
		if( settings.href == null )
		{
			console.log('You need an href option for LinkIt to work');
			return this;
		}
		
		return this.each(function() {
			var object = $(this);
			
			if(settings.text == null) {
				settings.text = object.text();
			}

		object.wrap('<a target="' + settings.target + '" href="' +
			settings.href + '"></a>').text(settings.text);
			
		});
		
		//var htmlString = this.html();
		//$(this).html('<a href="#">' + htmlString + '</a>');
	}
}(jQuery));