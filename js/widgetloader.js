(function( $ ) {
	  $.fn.widgetLoader = function(settings) {
	  
			var defaults = {
				url: '',
				urlReturnType: 'jsonp', // this can be json, jsonp, xml or html
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
				
				$.fn.widgetLoader.loadWidgetFrame(obj,settings);
				$.fn.widgetLoader.loadWidget(obj,settings);
				
			});
			
	  };
	  
	  $.fn.widgetLoader.loadWidgetFrame=function(obj,settings){
				obj.height(settings.height);
					obj.width(settings.width);
					obj.css('background-color', settings.bgColor);
					obj.css('border', 'solid 1px '+settings.border);
					
					obj.before('<' + settings.headerSize +' style="margin: 0px;'+'width: '+settings.width+';background-color: '+settings.headerBgColor+';"' +'>' +settings.headerTitle+'</'+ settings.headerSize +'>');
					obj.after('<' + settings.footerSize +' style="margin: 0px;'+'width: '+settings.width+';background-color: '+settings.footerBgColor+';"' +'>' +settings.footerTitle+'</'+ settings.footerSize +'>');
		};
		
		 $.fn.widgetLoader.loadWidget=function(obj,settings){
		 
			if(settings.urlReturnType='jsonp'){
				 $.fn.widgetLoader.processJSONPResponse(obj,settings);
			}
			
		 };
		 
		 $.fn.widgetLoader.processJSONPResponse=function(obj,settings){
			var callbackFun = 
				decodeURI(
					(RegExp('callback' + '=' + '(.+?)(&|$)').exec(settings.url)||[,null])[1]);
					
			var script = document.createElement('script');
			script.setAttribute('src', settings.url);
			
			document.getElementsByTagName('head')[0].appendChild(script); 
			
			
		 };
	  
})( jQuery );