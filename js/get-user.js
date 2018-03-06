$().ready(function() {

get(2)  //this will get ID 2 and display on web page for user to view
	.done(function(res) {
		createUTable(res);
		console.log(res);
	})
	.fail(function(err) {
		console.error(err);
	});

});

function createUTable(user) {
	$("#idx").text(user.ID);  //text will grab the data and load it into the ID tags
	$("#name").text(user.FirstName + " " + user.LastName);
	$("#username").text(user.UserName);
	$("#phone").text(user.Phone);
	$("#email").text(user.Email);	
	$("#admin").text((user.IsAdmin ? "Yes" : "No"));
	$("#reviewer").text((user.IsReviewer ? "Yes" : "No"));
}