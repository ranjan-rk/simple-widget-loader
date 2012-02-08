$(document).ready(function() {
	
		$("#resultDiv").widgetLoader({
			height: 300,
			url: "http://search.twitter.com/search.json?q=blue&callback=processResponse"
		});
});
