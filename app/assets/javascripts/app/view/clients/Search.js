Ext.define('WSIS.view.clients.Search', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.smartsearch',

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
