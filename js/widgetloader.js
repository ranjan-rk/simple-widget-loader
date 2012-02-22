(function( $ ) {
	  $.fn.widgetLoader = function(settings) {
	  
			var defaults = {
				url: '',
				height: 200,
				width: 200,
				bgColor : 'white',
				border : 'lightgray',
				headerSize : 'h3', 		//html h1,h2,h3
				footerSize : 'h3', 		//html h1,h2,h3
				headerBgColor : 'lightGray',
				footerBgColor : 'lightGray',
				headerTitle : 'Header',
				footerTitle : 'Footer'
			},
			
			settings = $.extend(defaults, settings);
			
			return this.each(function(){
				
				var obj = $(this);
				
				loadWidget();
				
				function loadWidget(){
				
					obj.height(settings.height);
					obj.width(settings.width);
					obj.css('background-color', settings.bgColor);
					obj.css('border', 'solid 1px '+settings.border);
					
					obj.before('<' + settings.headerSize +' style="margin: 0px;'+'width: '+settings.width+';background-color: '+settings.headerBgColor+';"' +'>' +settings.headerTitle+'</'+ settings.headerSize +'>');
					obj.after('<' + settings.footerSize +' style="margin: 0px;'+'width: '+settings.width+';background-color: '+settings.footerBgColor+';"' +'>' +settings.footerTitle+'</'+ settings.footerSize +'>');
					
					processData();
				}
				
				// This function is to be replaced with user defined function for processing data.
				function processData(){
					obj.html('No data to process');
				}
				
			});

	  };
})( jQuery );