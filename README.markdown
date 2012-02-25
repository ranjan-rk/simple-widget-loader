Simple Widget Loader
======

jQuery plugin to load a fully customizable widget.

Customization options provided uunder this plugin are as below:

*url:* 
--------------
	Specify the url from which you want to load your data.

*urlReturnType*: 
--------------
	Object type of the URL data. Currently only jsonp is supported. json and other types will be handeled soon
	
*height*: 
--------------
	Height of the widget.
	
*width*: 
--------------
	Height of the widget.
	
*bgColor* : 
--------------
	Background color of the widget.
	
*border* : 
--------------
	Border and border type for widget.
	
*headerSize* :
-------------- 
	Headersize of the widget. currently HTML h1,h2 and h3 options are supported. Headers cannot be edited as of now.
	This functionality will be added in next release.
	
*footerSize* :
-------------- 
	Footersize of the widget. currently HTML h1,h2 and h3 options are supported. Footers cannot be edited as of now.
	This functionality will be added in next release.
	
*headerBgColor* : 
--------------
	Header's background color.
	
*footerBgColor* : 
--------------
	Footer' s background color.
	
*headerTitle* : 
--------------
	Title for header. Alignment could be provided through css.
	
*footerTitle* : 
--------------
	Title for footer. Alignment could be provided through css.
	
*displayType*: 
--------------
	Currently only singleColumnType display is supported. More will be added soon.
	
	
Example code.
--------------
$("#resultDiv").widgetLoader({
				url: 'http://search.twitter.com/search.json?q=blue&callback=processData',
				urlReturnType: 'jsonp', 
				height: 500,
				width: 400,
				bgColor : 'lightblue',
				border : 'lightblue',
				headerSize : 'h3',
				footerSize : 'h3',		
				headerBgColor : 'lightblue',
				footerBgColor : 'lightblue',
				headerTitle : 'Twitter Search Results',
				footerTitle : 'Twitter'
		});
		
		

More customization options coming soon.
