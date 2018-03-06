$().ready(function() {

	list()
	.done(function(res) {
		users = res;
		buildUTable(users);  //this call will build the User Table
		console.log(res);
	})
	.fail(function(err) {
		console.error(err);
	});

});

function buildUTable(users) {
	var tbody = $("#userlist");
	for(var user of users) {
		var row = "<tr>";
		row += "<td>" + user.ID + "</td>";  //the table data is built dynamically with this and the other rows listed below
		row += "<td>" + user.FirstName + " " + user.LastName + "</td>";
		row += "<td>" + user.UserName + "</td>";
		row += "<td>" + user.Phone + "</td>";
		row += "<td>" + user.Email + "</td>";
		row += "<td>" + (user.IsAdmin ? "Yes" : "No") + "</td>"; //ternary operator to show whether or not user is an Admin by using Yes or No
		row += "<td>" + (user.IsReviewer ? "Yes" : "No") + "</td>";  //ternary operator to show whether or not user is a Reviewer by using Yes or No
		//row += "<td>" + "<a href=''>Detail [Id= "+user.ID +"]</a>" + "</td>"; //this will show a link to the detail for a specific ID
		row += "</tr>";
		tbody.append(row);
	}	
}