/*
Ext.define('Client', {
    extend: 'Ext.data.Model',
    fields: ['CFID', 'firstname', 'lastname', 'email'],
    proxy: {
        type: 'rest',
        url: '/clients',
        reader: {
            type: 'json',
            root: 'clients',
            idProperty: 'CFID',
            successProperty: 'success'
        }
    }
});

Client.load('CF00000487', {
	success: function(client) {
		console.log('Hi, ' + client.get('firstname'));
	}
});

// another way
Ext.ModelManager.getModel('Client').load('CF00000487', {
	success: function(client) {
		console.log(client.data.firstname);
	}
});
*/

Ext.application({
    name: 'AM',
	appFolder: '/assets/app',

    // automatically create an instance of AM.view.Viewport
//    autoCreateViewport: true,

    controllers: [
        'Clients'
    ],
    
    launch: function() {
    	alert('launching');
/*    	
    	Ext.create('Ext.container.Viewport', {
    		layout: 'fit',
    		items: [{
    			xtype: 'clientlist'
    		}]
    	});
*/    	
    }
});
