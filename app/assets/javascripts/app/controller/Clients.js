Ext.define('WSIS.controller.Clients', {
    extend: 'Ext.app.Controller',
/*
    stores: ['Clients'],

    models: ['Client'],

    views: ['clients.List', 'clients.Search', 'clients.Edit'],
    
    refs: [{
    	ref: 'mainTabPanel',
    	selector: 'tabpanel'
    }],
*/
    init: function() {
    	alert('init');
/*    	
    	this.control({
    		'clientsearch button': {
    			click: this.onSearch
    		},
    		'clientsearch textfield' : {
    			specialkey: function(field, event) {
    				if( event.getKey() == event.ENTER ) {
    					this.onSearch();
    				}
    			}
    		},
    		'clientlist': {
    			itemclick: this.showClientDetail
    		},
    		'clientedit #btnSave': {
    			click: this.saveClientDetail
    		}
    	});
*/    	
    },
    
    onSearch: function() {
    	this.getClientsStore().load({
		    scope: this,
		    params: {
		    	keyword: Ext.ComponentQuery.query('clientsearch').child('textfield').getValue()
		    },
		    callback: function(records, operation, success) {
				console.log('Keyword: ' + operation.params.keyword + ' Count: ' + records.length);		    	
		    }
    	});
    },
    
    showClientDetail: function(grid, record) {
    	var client = record.data;
    	var clientPanel = this.findPanel(client.CFID);
    	if( !clientPanel ) {
    		this.loadClient(client.CFID, {
    			success: function(c) {
		    		clientPanel = this.getMainTabPanel().add({
			    		xtype: 'clientedit',
			    		id: client.CFID
			    	});
			    	clientPanel.setClient(c);
    			}  
    		}) 
	    }
    	clientPanel.show();
    },
    
    saveClientDetail: function() {
    	var clientPanel = this.getMainTabPanel().getActiveTab();
    	var client = clientPanel.updateClient();
    	this.loadClient(client.CFID, { 
    		success: function(c) {
		    	c.set('firstname', client.firstname);
		    	c.set('lastname', client.lastname);
		    	c.set('email', client.email);
		    	c.save({
		    		success: function(record) {
		    			clientPanel.setClient(client);
		    		}
		    	});
		    }
    	});
    },
    
    findPanel: function(id) {
    	var p = null;
    	Ext.each(this.getMainTabPanel().items.items, function(panel) {
    		if( panel.xtype == 'clientedit' && panel.id == id ) {
    			p = panel;
    			return false;
    		}
    	});
    	return p;
    },
    
    loadClient: function(cfid, opt) {
    	var ClientModel = Ext.ModelManager.getModel('WSIS.model.ClientDetail');
    	ClientModel.load(cfid, opt);
    }

});
