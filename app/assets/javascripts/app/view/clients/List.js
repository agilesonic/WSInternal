Ext.define('WSIS.view.clients.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.clientlist',

    title : 'Clients',
    store: 'Clients',

    columns: [
    
        {header: 'CFID',  dataIndex: 'CFID',  flex: 1},
        {header: 'Name',  dataIndex: 'name',  flex: 1},
        {header: 'Address',  dataIndex: 'address',  flex: 1},
        {header: 'Phone', dataIndex: 'phone', flex: 1},
        {header: 'Phone', dataIndex: 'valid', flex: 1},
        {header: 'Properties', dataIndex: 'properties', flex: 1}
        
    ]
    
});
