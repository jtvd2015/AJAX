var url ="http://prs.doudsystems.com";  //instead of duplicating the URL every time for POST and GET, just create a variable and enter the URL in that
var seg1 ="/Vendors";

$().ready(function() {
	

});

function list() {
	return $.getJSON(url+seg1+"/List");  //return is entered and not the .done or .fail because there is a promise between the server and the asynchronous call to return the .done and .fail	
}

function get(id) {
	return $.getJSON(url+seg1+"/Get/"+id);
}

