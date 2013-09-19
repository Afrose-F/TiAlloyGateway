// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};


//Get the Business Partner List
getBusinessPartnerList();

function getBusinessPartnerList() {
	
	// Create HTTPClient for calling the Gateway Service
	var sendit=Ti.Network.createHTTPClient({
			onerror: function(e) {
				Ti.API.debug(e.error);
			},timeout:10000,
	});

	// Will need to add your username/passwor
	var username='XXXXXXX';
	var password='XXXXXXX';
	
	// Call NetWeaver Gateway Demo System to retrieve list of business partners
	sendit.open('GET','https://sapes1.sapdevcenter.com/sap/opu/odata/IWBEP/GWDEMO/BusinessPartnerCollection?$format=json&$top=5');
	sendit.setRequestHeader('Authorization','Basic '+Ti.Utils.base64encode(username+':'+password));
	sendit.send();

	// Function to be called upon a successful response
	sendit.onload= function() {
		var json = JSON.parse(this.responseText);
		
		json = json.d.results;
		
		var bpData = [];

			// Populate the Business Partners Array and store the result in Alloy Globals
		for (var i = 0, len = json.length; i < len; i++) {
    		var result = json[i];
    		bpData.push({ bp: result.BusinessPartnerID, company: result.Company, role: result.BusinessPartnerRoleText, email: result.EmailAddress, webaddress: result.WebAddress, phone: result.TelephoneNumber, hasChild:true });
		}

		Alloy.Globals.data = bpData;
			
		// Fire the BP Loaded Event
		Ti.App.fireEvent('BpDataLoaded', {
			loaded:true
	 	});		
	
	};
};