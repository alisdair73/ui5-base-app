sap.ui.define([
	"sap/ui/core/UIComponent",
	"./model/models"
], function (UIComponent, models) {
	"use strict";

	return UIComponent.extend("<%= projectnamespace %>.<%= projectname %>.Component", {

		metadata : {
			manifest: "json"
		},

		init : function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// create the views based on the url/hash
			this.getRouter().initialize();
		},

		destroy : function () {
			this._oErrorHandler.destroy();
			// call the base component's destroy function
			UIComponent.prototype.destroy.apply(this, arguments);
		}

	});

});