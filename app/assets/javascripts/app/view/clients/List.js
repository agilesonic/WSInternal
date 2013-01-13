Ext.define('AM.view.clients.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.clientlist',

    title : 'Clients',
    store: 'Clients',

    columns: [
    
        {header: 'First Name',  dataIndex: 'firstname',  flex: 1},
        {header: 'Last Name',  dataIndex: 'lastname',  flex: 1},
        {header: 'Email', dataIndex: 'email', flex: 1}
        
    ]
    
});
