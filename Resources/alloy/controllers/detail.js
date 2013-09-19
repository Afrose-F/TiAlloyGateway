function Controller() {
    function handleDetailClick() {
        var value = arguments[0].source.text.substring(arguments[0].source.text.indexOf(" ") + 1);
        switch (arguments[0].source.id) {
          case "phone":
            Titanium.Platform.openURL("tel:" + value);
            break;

          case "webaddress":
            Titanium.Platform.openURL(value);
            break;

          case "email":
            var emailDialog = Titanium.UI.createEmailDialog();
            emailDialog.setSubject("TiAlloy Gateway!");
            emailDialog.setToRecipients([ value ]);
            emailDialog.setMessageBody("Hello TiAlloy Gateway!");
            emailDialog.open();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.detail = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        layout: "vertical",
        id: "detail"
    });
    $.__views.detail && $.addTopLevelView($.__views.detail);
    $.__views.name = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        left: 15,
        top: 10,
        font: {
            fontSize: "18dp",
            fontWeight: "normal"
        },
        textAlign: "left",
        id: "name"
    });
    $.__views.detail.add($.__views.name);
    $.__views.bp = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        left: 15,
        top: 10,
        font: {
            fontSize: "18dp",
            fontWeight: "normal"
        },
        textAlign: "left",
        id: "bp"
    });
    $.__views.detail.add($.__views.bp);
    $.__views.role = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        left: 15,
        top: 10,
        font: {
            fontSize: "18dp",
            fontWeight: "normal"
        },
        textAlign: "left",
        id: "role"
    });
    $.__views.detail.add($.__views.role);
    $.__views.webaddress = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        left: 15,
        top: 10,
        font: {
            fontSize: "18dp",
            fontWeight: "normal"
        },
        textAlign: "left",
        id: "webaddress"
    });
    $.__views.detail.add($.__views.webaddress);
    handleDetailClick ? $.__views.webaddress.addEventListener("click", handleDetailClick) : __defers["$.__views.webaddress!click!handleDetailClick"] = true;
    $.__views.phone = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        left: 15,
        top: 10,
        font: {
            fontSize: "18dp",
            fontWeight: "normal"
        },
        textAlign: "left",
        id: "phone"
    });
    $.__views.detail.add($.__views.phone);
    handleDetailClick ? $.__views.phone.addEventListener("click", handleDetailClick) : __defers["$.__views.phone!click!handleDetailClick"] = true;
    $.__views.email = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        left: 15,
        top: 10,
        font: {
            fontSize: "18dp",
            fontWeight: "normal"
        },
        textAlign: "left",
        id: "email"
    });
    $.__views.detail.add($.__views.email);
    handleDetailClick ? $.__views.email.addEventListener("click", handleDetailClick) : __defers["$.__views.email!click!handleDetailClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.setBpDetail = function(bp) {
        var bpData = _.find(Alloy.Globals.data, function(bpData) {
            return bpData.bp == bp;
        });
        $.name.text = "BP: " + bpData.company;
        $.bp.text = "No: " + bpData.bp;
        $.role.text = "Role: " + bpData.role;
        $.webaddress.text = "Website: " + bpData.webaddress;
        $.phone.text = "Phone: " + bpData.phone;
        $.email.text = "Email: " + bpData.email;
    };
    __defers["$.__views.webaddress!click!handleDetailClick"] && $.__views.webaddress.addEventListener("click", handleDetailClick);
    __defers["$.__views.phone!click!handleDetailClick"] && $.__views.phone.addEventListener("click", handleDetailClick);
    __defers["$.__views.email!click!handleDetailClick"] && $.__views.email.addEventListener("click", handleDetailClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;