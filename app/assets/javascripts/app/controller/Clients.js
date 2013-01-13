Ext.define('AM.controller.Clients', {
    extend: 'Ext.app.Controller',

    stores: ['Clients'],

    models: ['Client'],

    views: ['clients.List'],

    init: function() {
//    	this.getClientsStore().load();
    	alert('loaded');
    },

});
