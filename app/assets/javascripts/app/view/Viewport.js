Ext.define('AM.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },
    items: [{
    	xtype: 'clientsearch',
    }, {
        xtype: 'clientlist'
    }]
});