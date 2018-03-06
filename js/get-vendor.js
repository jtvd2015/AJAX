$().ready(function() {

get(4)  //this will get ID 2 and display on web page for user to view
	.done(function(res) {
		createUTable(res);
		console.log(res);
	})
	.fail(function(err) {
		console.error(err);
	});

});

function createUTable(vendor) {
	$("#idx").text(vendor.ID);  //text will grab the data and load it into the ID tags
	$("#code").text(vendor.Code);
	$("#name").text(vendor.Name);
	$("#address").text(vendor.Address);
	$("#City").text(vendor.City);
	$("#State").text(vendor.State);
	$("#Zip").text(vendor.Zip);
	$("#phone").text(vendor.Phone);
	$("#email").text(vendor.Email);	
	$("#recommended").text((vendor.IsRecommended ? "Yes" : "No"));
}