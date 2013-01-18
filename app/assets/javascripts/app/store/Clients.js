Ext.define('WSIS.store.Clients', {
    extend: 'Ext.data.Store',
    model: 'WSIS.model.ClientSearchResult',
    
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
