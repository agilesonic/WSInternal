Ext.define('AM.store.Clients', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Client',
//    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: '/clients/search',
        reader: {
            type: 'json',
            root: 'clients',
            successProperty: 'success'
        }
    }
});
/*
var clientUpdater = Ext.create('Ext.data.proxy', {
	type: 'rest',
	url: '/clients',
	writer: {
		type: 'json'
	}
});
*/