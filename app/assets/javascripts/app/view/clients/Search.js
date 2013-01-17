Ext.define('AM.view.clients.Search', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.clientsearch',

    items: [{
    		xtype: 'label',
    		text: 'Keyword'
    	}, {
    		xtype: 'textfield',
    		name: 'keyword',
    		id: 'keyword',
    		emptyText: 'Enter search keyword'
    	}, {
    		xtype: 'button',
    		id: 'searchBtn',
    		text: 'Search'
    	}]
    
});
