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
