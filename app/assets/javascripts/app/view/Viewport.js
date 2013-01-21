Ext.define('WSIS.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout: {
    	type: 'fit'
    },
    items: [{
    	xtype: 'tabpanel',
    	activetab: 0,
    	items: [{
    		id: 'smartSearch',
    		xtype: 'smartsearch'
    	}]
    }]
});