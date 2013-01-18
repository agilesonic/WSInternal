Ext.define('WSIS.model.ClientSearchResult', {
    extend: 'Ext.data.Model',
    fields: ['CFID', 'name', 'address', 'phone', 'valid', 'properties'],
    idProperty: 'CFID'
});

Ext.define('WSIS.model.ClientDetail', {
    extend: 'Ext.data.Model',
    fields: ['CFID', 'firstname', 'lastname', 'email'],
    idProperty: 'CFID',

    proxy: {
        type: 'rest',
        url: '/clients',
        reader: {
            type: 'json',
            root: 'clients',
            successProperty: 'success'
        },
        writer: {
        	type: 'json',
        	root: 'client'
        }
    }
    
});