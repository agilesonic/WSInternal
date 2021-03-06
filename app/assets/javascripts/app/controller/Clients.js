Ext.define('WSIS.controller.Clients', {
    extend: 'Ext.app.Controller',
    
    models: ['ClientSearchResult', 'ClientDetail'],

    stores: ['Clients'],

    views: ['clients.Search', 'clients.Edit', 'Map'],

    refs: [{
    	ref: 'mainTabPanel',
    	selector: 'tabpanel'
    }],

    init: function() {
    	this.control({
    		'smartsearch toolbar button': {
    			click: this.onSearch
    		},
    		'smartsearch toolbar textfield' : {
    			specialkey: function(field, event) {
    				if( event.getKey() == event.ENTER ) {
    					this.onSearch();
    				}
    			}
    		},
    		'smartsearch grid': {
    			itemclick: this.showClientDetail
    		},
    		'clientedit #btnSave': {
    			click: this.saveClientDetail
    		},
    		'clientedit #btnMap': {
    			click: this.showAddressMap
    		}
    	});
    },
    
    onSearch: function() {
    	var keyword = Ext.ComponentQuery.query('smartsearch toolbar')[0].child('textfield').getValue();
    	this.getClientsStore().load({
		    scope: this,
		    params: {
		    	keyword: keyword
		    },
		    callback: function(records, operation, success) {
		    	var resultMsg = Ext.ComponentQuery.query('smartsearch')[0].down('#resultMsg');
		    	resultMsg.update({
					result_size: records.length,
					keyword: keyword
				});
				resultMsg.show();
		    }
    	});
    },
    
    showClientDetail: function(grid, record) {
    	var client = record.data;
    	var clientPanel = this.findPanel('clientedit', client.CFID);
    	if( !clientPanel ) {
    		this.loadClient(client.CFID, {
    			scope: this,
    			success: function(record) {
		    		clientPanel = this.getMainTabPanel().add({
			    		xtype: 'clientedit',
			    		id: 'clientedit' + '-' + client.CFID
			    	});
			    	clientPanel.setClient(record.data);
			    	clientPanel.show();
    			}  
    		}) 
	    } else {
    		clientPanel.show();
    	}
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
    
    findPanel: function(xtype, id) {
    	var p = null;
    	Ext.each(this.getMainTabPanel().items.items, function(panel) {
    		if( panel.id == xtype + '-' + id ) {
    			p = panel;
    			return false;
    		}
    	});
    	return p;
    },
    
    loadClient: function(cfid, opt) {
    	var ClientModel = Ext.ModelManager.getModel('WSIS.model.ClientDetail');
    	ClientModel.load(cfid, opt);
    },
    
    showAddressMap: function() {
    	var client = this.getMainTabPanel().getActiveTab().client;
    	var mapPanel = this.findPanel('map', client.CFID);
    	if( mapPanel == null ) {
			mapPanel = this.getMainTabPanel().add({
	    		xtype: 'map',
	    		id: 'map-' + client.CFID
	    	});
	    	mapPanel.show();
	    	mapPanel.setAddress(client.full_address);
	    } else {
    		mapPanel.show();
    	}
    }

});
