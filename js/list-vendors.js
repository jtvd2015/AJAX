$().ready(function() {

	list()
	.done(function(res) {		
		buildUTable(res);  //this call will build the User Table
		console.log(res);
	})
	.fail(function(err) {
		console.error(err);
	});

});

function buildUTable(vendors) {
	var tbody = $("#vendorlist");
	for(var vendor of vendors) {  //foreach loop
		var row = "<tr>";
		row += "<td>" + vendor.ID + "</td>";  //the table data is built dynamically with this and the other rows listed below		
		row += "<td>" + vendor.Code + "</td>";
		row += "<td>" + vendor.Name + "</td>";
		row += "<td>" + vendor.Address + "</td>";
		row += "<td>" + vendor.City + "</td>";
		row += "<td>" + vendor.State + "</td>";
		row += "<td>" + vendor.Zip + "</td>";
		row += "<td>" + vendor.Phone + "</td>";
		row += "<td>" + vendor.Email + "</td>";		
		row += "<td>" + (vendor.IsRecommended ? "Yes" : "No") + "</td>";
		row += "</tr>";
		tbody.append(row);
	}	
}