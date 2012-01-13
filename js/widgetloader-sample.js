$(document).ready(function() {


	$("#resultDiv").load('http://localhost:8080/consumer/state/TX/city/San%20Antonio/drugprices.html #topTenDrugsContainer',function(){
		alert('Done Loading');
	});
	
});



function processResponse(data){
	alert(data);
}
