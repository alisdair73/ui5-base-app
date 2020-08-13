sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("<%= projectnamespace %>.<%= projectname %>.controller.App", {

		onInit : function () {

				this.setModel( new JSONModel({
					busy : false,
					delay : 0
				}), "appView");

		}
	});

});