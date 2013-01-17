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
    		},
    		'clientedit #btnSave': {
    			click: this.saveClientDetail
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
    	var client = record.data;
    	var clientPanel = this.getMainTabPanel().add({
    		xtype: 'clientedit'
    	});
    	clientPanel.setClient(client);
    	clientPanel.show();
    },
    
    saveClientDetail: function() {
    	var clientPanel = this.getMainTabPanel().getActiveTab();
    	var client = clientPanel.updateClient();
    	var ClientModel = Ext.ModelManager.getModel('AM.model.Client');
    	ClientModel.load(client.CFID, {
    		success: function(c) {
		    	c.set('firstname', client.firstname);
		    	c.set('lastname', client.lastname);
		    	c.set('email', client.email);
		    	alert(c.get('firstname'));
		    	c.save();
		    }
    	});
    	//this.getClientsStore().sync();
    }

});
