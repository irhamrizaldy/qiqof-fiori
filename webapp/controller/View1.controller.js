sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("firstfiori.controller.View1", {
            onInit: function () {

            },

            onClick: function () {
                alert('Hello World!')
            },

            githubAccount: function () {
                window.location.href = 'http://www.github.com'
            }
            
        });
    });
