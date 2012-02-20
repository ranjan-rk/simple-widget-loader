$(document).ready(function() {
	
		$("#resultDiv").widgetLoader({
			url: "http://search.twitter.com/search.json?q=blue&callback=processResponse"
		});
});
