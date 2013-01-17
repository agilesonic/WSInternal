Ext.define('AM.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout: {
    	type: 'fit'
    },
    items: [{
    	xtype: 'tabpanel',
    	activetab: 0,
    	items: [{
    		layout: {
    			type: 'vbox',
    			align: 'stretch'
    		},
    		title: 'Smart Search',
    		items: [{
    			xtype: 'clientsearch'
    		}, {
    			xtype: 'clientlist'
    		}]
    	}]
    }]
});