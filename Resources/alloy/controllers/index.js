function Controller() {
    function doClick(e) {
        var detailController = Alloy.createController("detail");
        detailController.setBpDetail(e.row.bp);
        detailController.getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.MasterTable = Ti.UI.createTableView({
        id: "MasterTable"
    });
    $.__views.index.add($.__views.MasterTable);
    $.__views.header = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: "50dp",
        color: "#fff",
        textAlign: "center",
        backgroundColor: "#44f",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Business Partners",
        id: "header"
    });
    $.__views.MasterTable.headerView = $.__views.header;
    doClick ? $.__views.MasterTable.addEventListener("click", doClick) : __defers["$.__views.MasterTable!click!doClick"] = true;
    $.__views.loading = Alloy.createWidget("nl.fokkezb.loading", "widget", {
        id: "loading",
        __parentSymbol: $.__views.index
    });
    $.__views.loading.setParent($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    $.index.open();
    $.loading.show("Loading Business Partners", false);
    Ti.App.addEventListener("BpDataLoaded", function() {
        _.each(Alloy.Globals.data, function(bp) {
            data.push(Alloy.createController("row", {
                bp: bp.bp,
                company: bp.company
            }).getView());
        });
        $.loading.hide();
        $.MasterTable.setData(data);
    });
    __defers["$.__views.MasterTable!click!doClick"] && $.__views.MasterTable.addEventListener("click", doClick);
    __defers["$.__views.MasterTable!click!doClick"] && $.__views.MasterTable.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;