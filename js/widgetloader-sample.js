$(document).ready(function() {


	$("#resultDiv").load('http://search.twitter.com/search.json?q=twitter&callback=processResponse"',function(){
		alert('Done Loading');
	});
	
});



function processResponse(data){
	alert(data);
}
