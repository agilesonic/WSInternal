Ext.define('AM.controller.Clients', {
    extend: 'Ext.app.Controller',

    stores: ['Clients'],

    models: ['Client'],

    views: ['clients.List'],

    init: function() {
    	this.getClientsStore().load({
		    scope: this,
		    params: {
		    	keyword: 'Richard'
		    },
		    callback: function(records, operation, success) {
				console.log('Keyword: ' + operation.params.keyword + ' Count: ' + records.length);		    	
		    }
    	});
    },

});
