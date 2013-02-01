Ext.define('WSIS.model.ClientDetail', {
    extend: 'Ext.data.Model',
    fields: ['CFID', 'honorific', 'firstname', 'lastname', 'email', 'full_name', 'full_address', 'status', 'rate'],
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
