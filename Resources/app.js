function getBusinessPartnerList() {
    var sendit = Ti.Network.createHTTPClient({
        onerror: function(e) {
            Ti.API.debug(e.error);
        },
        timeout: 1e4
    });
    var username = "P805722";
    var password = "Helen2301";
    sendit.open("GET", "https://sapes1.sapdevcenter.com/sap/opu/odata/IWBEP/GWDEMO/BusinessPartnerCollection?$format=json&$top=5");
    sendit.setRequestHeader("Authorization", "Basic " + Ti.Utils.base64encode(username + ":" + password));
    sendit.send();
    sendit.onload = function() {
        var json = JSON.parse(this.responseText);
        json = json.d.results;
        var bpData = [];
        for (var i = 0, len = json.length; len > i; i++) {
            var result = json[i];
            bpData.push({
                bp: result.BusinessPartnerID,
                company: result.Company,
                role: result.BusinessPartnerRoleText,
                email: result.EmailAddress,
                webaddress: result.WebAddress,
                phone: result.TelephoneNumber,
                hasChild: true
            });
        }
        Alloy.Globals.data = bpData;
        Ti.App.fireEvent("BpDataLoaded", {
            loaded: true
        });
    };
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

getBusinessPartnerList();

Alloy.createController("index");