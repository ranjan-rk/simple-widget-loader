$(document).ready(function() {
	
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
		
		
});
