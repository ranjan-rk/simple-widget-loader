(function( $ ) {
		
	  $.fn.widgetLoader = function(settings) {
	  
			var defaults = {
				url: 'http://search.twitter.com/search.json?q=twitter&callback=processData',
				urlReturnType: 'jsonp', // this can be json, jsonp, xml or html
				height: 400,
				width: 400,
				bgColor : 'white',
				border : 'lightblue',
				headerSize : 'h3', 		//html h1,h2,h3
				footerSize : 'h3', 		//html h1,h2,h3
				headerBgColor : 'lightblue',
				footerBgColor : 'lightblue',
				headerTitle : 'Header',
				footerTitle : 'Footer',
				displayType: 'singleColumnType' // can be multicoulmn
			},
			
			settings = $.extend(defaults, settings);
			
			return this.each(function(){
				
				var obj = $(this);
				obj.css("overflow-y","scroll");
				$.fn.widgetLoader.loadWidgetFrame(obj,settings);
				$.fn.widgetLoader.loadWidget(obj,settings);
				
			});
			
	  };
	  
	  /* Function defining the basic frame of the widget */
	  $.fn.widgetLoader.loadWidgetFrame=function(obj,settings){
				obj.height(settings.height);
					obj.width(settings.width);
					obj.css('background-color', settings.bgColor);
					obj.css('border', 'solid 1px '+settings.border);
					
					obj.before('<' + settings.headerSize +' style="margin: 0px;'+'width: '+settings.width+';background-color: '+settings.headerBgColor+';"' +'>' +settings.headerTitle+'</'+ settings.headerSize +'>');
					obj.after('<' + settings.footerSize +' style="margin: 0px;'+'width: '+settings.width+';background-color: '+settings.footerBgColor+';"' +'>' +settings.footerTitle+'</'+ settings.footerSize +'>');
		};
		
		/* This function loads the widegt in web page  */
		 $.fn.widgetLoader.loadWidget=function(obj,settings){
		 
			if(settings.urlReturnType=='jsonp'){
				 $.fn.widgetLoader.processJSONPResponse(obj,settings);
			}
			
		 };
		 
		 $.fn.widgetLoader.processJSONPResponse=function(obj,settings){
			
			var callbackFun = 
				decodeURI(
					(RegExp('callback' + '=' + '(.+?)(&|$)').exec(settings.url)||[,null])[1]);
					
			// TO DO :- add param to options callback param name.
				
			var script = document.createElement('script');
			script.setAttribute('src', settings.url);
			
			var script2 = document.createElement('script');
			script2.innerHTML="var obj="+obj.attr('id')+"; function "+callbackFun +"(data){$.fn.widgetLoader.responseProcessor(data,obj,'"+settings.displayType+"');}";

			document.getElementsByTagName('head')[0].appendChild(script2); 
			document.getElementsByTagName('head')[0].appendChild(script); 
		 };
		 
		 /* Generic function to process response obtained by hitting the URL */
		 $.fn.widgetLoader.responseProcessor=function(data,obj,displayType){
			$(obj).html(data);
			if(displayType=='singleColumnType'){
				$.fn.widgetLoader.singleColumnDisplay(data,obj);
			}
		 };
		 
		 
		 /* This function is to be edited by the user to display his/her own data in accordance with css style */
		 $.fn.widgetLoader.singleColumnDisplay=function(data,obj){
			var table= document.createElement('table');
			
			var resultLength =  data.results.length;
			
			for(var i=0;i<resultLength;i++){
				var tr = document.createElement('tr');
				
				var td1 = document.createElement('td');
				var td2 = document.createElement('td');
				
				var img = document.createElement('img');
				img.setAttribute("src",data.results[i].profile_image_url);
				
				td2.innerHTML='<b><i>'+data.results[i].from_user+'</i></b>'+'<br>'+data.results[i].text;
				td1.appendChild(img);
				
				tr.appendChild(td1);
				tr.appendChild(td2);
				
				tr.setAttribute("style","background-color:lightyellow;");
				
				table.setAttribute("border","0");
				
				table.appendChild(tr);
			}
			
			$(obj).html(table);
		 }
	  
})( jQuery );