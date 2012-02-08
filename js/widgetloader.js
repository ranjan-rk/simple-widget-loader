(function( $ ) {
	  $.fn.widgetLoader = function(settings) {
	  
			var defaults = {
				url: '',
				height: 200,
				width: 200,
				bgColor : 'white',
				border : 'lightgray'
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
					
					var script = document.createElement('script');
					script.setAttribute('src', settings.url);
					document.getElementsByTagName('head')[0].appendChild(script); 
					
					processResponse=function (data){
						obj.html(data.query);
					}
					
				}
				
				
				function customizeYourWidget(){
					//TODO : parse your response
				}
				
				
			});

	  };
})( jQuery );