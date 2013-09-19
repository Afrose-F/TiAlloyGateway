exports.setBpDetail = function(bp) {
	
	// Use the underscore.js "find" function to retrieve the Business Parter record using the BP ID
	var bpData = _.find(Alloy.Globals.data, function(bpData) {
		return bpData.bp == bp;
	});
	
	
	// Set the applicable label text properties with the BP Details
	if (OS_ANDROID) {
		$.name.text = 'BP: ' + bpData.company;
	} else {
		$.detail.title = bpData.company;
	}
	
	$.bp.text = 'No: ' + bpData.bp;
	$.role.text = 'Role: ' + bpData.role;
	$.webaddress.text = 'Website: ' + bpData.webaddress;
	$.phone.text = 'Phone: ' + bpData.phone;
	$.email.text = 'Email: ' + bpData.email;

};

// Handle Click Events on Detail Page
function handleDetailClick(e) {
	
	var value = arguments[0].source.text.substring((arguments[0].source.text.indexOf(" ")+1));
	
	// Depending on which label was clicked execute the appropriate action
	switch(arguments[0].source.id){
		case 'phone':
		
			// Dial the phone no. with the native dialer
			Titanium.Platform.openURL('tel:' + value);
			break;
		
		case 'webaddress':
		
			// Launch the BP's website in the phone's browser
			Titanium.Platform.openURL(value);
			break;
		
		case 'email':
			
			// Launch the Email Dialog, pre-populating the fields 
			var emailDialog = Titanium.UI.createEmailDialog();
    		emailDialog.setSubject('TiAlloy Gateway!');
    		emailDialog.setToRecipients([value]);

		    if (OS_IOS) {
		        emailDialog.setMessageBody('<b>Hello TiAlloy Gateway!</b>');
		        emailDialog.setHtml(true);
		        emailDialog.setBarColor('#336699');
		    } else {
		        emailDialog.setMessageBody('Hello TiAlloy Gateway!');
		    }

    		emailDialog.open();
    		break;			
	}
}
