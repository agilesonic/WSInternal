Ext.define('AM.store.Clients', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Client',
    autoLoad: true,
    
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