Ext.define('AM.controller.Clients', {
    extend: 'Ext.app.Controller',

    stores: ['Clients'],

    models: ['Client'],

    views: ['clients.List', 'clients.Search', 'clients.Edit'],
    
    refs: [{
    	ref: 'mainTabPanel',
    	selector: 'tabpanel'
    }],

    init: function() {
    	this.control({
    		'viewport clientsearch button': {
    			click: this.onSearch
    		},
    		'viewport clientsearch textfield' : {
    			specialkey: function(field, event) {
    				if( event.getKey() == event.ENTER ) {
    					this.onSearch();
    				}
    			}
    		},
    		'viewport clientlist': {
    			itemclick: this.showClientDetail
    		}
    	});
    },
    
    onSearch: function() {
    	this.getClientsStore().load({
		    scope: this,
		    params: {
		    	keyword: Ext.ComponentQuery.query('viewport clientsearch textfield')[0].getValue()
		    },
		    callback: function(records, operation, success) {
				console.log('Keyword: ' + operation.params.keyword + ' Count: ' + records.length);		    	
		    }
    	});
    },
    
    showClientDetail: function(grid, record) {
    	client = record.data;
    	this.getMainTabPanel().add({
    		xtype: 'clientedit',
    		client: client
    	}).show();
    }

});
