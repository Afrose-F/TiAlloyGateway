	var data = [];

// Open the Index View and show the Loading Widget
$.index.open();
$.loading.show('Loading Business Partners', false);


// Add an Event Listener for the BP Data Load Even
Ti.App.addEventListener('BpDataLoaded', function(e){
	
	// Loop through the BP Data using the underscore.js "each" function 
	// and create a new row controller&view 
	_.each(Alloy.Globals.data, function(bp) {
	data.push(Alloy.createController('row', {
		bp: bp.bp,
		company: bp.company
	}).getView());

	});
	
	// Hide the Loading widget after creating the table rows
	$.loading.hide();
	
	$.MasterTable.setData(data);

});


// Handle when a row is clicked in the BP table and open the Detail View
// with the selected Business Partner Record
function doClick(e){
	
	// Create Detail Controller
	var detailController = Alloy.createController('detail');

	// Set the BP Details passing the unique BP No.
	detailController.setBpDetail(e.row.bp);
	
	// Open the Detail View
	if(OS_IOS || OS_MOBILEWEB){
		$.NavGroup.open(detailController.getView());
	} else {
		detailController.getView().open();
	}
}
