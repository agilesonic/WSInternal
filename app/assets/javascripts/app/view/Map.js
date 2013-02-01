Ext.define('WSIS.view.Map', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.map',
    
    title: 'Map',
    closable: true,
    layout: 'fit',
    items: [{
//    	xtype: 'panel',
    	name: 'map'
    }],
    
    address: null,
    
    setAddress: function(addr) {
    	this.address = addr;
    	//alert(this.down('[name=\'map\]').getEl().dom);
    	var o = {
    		center: new google.maps.LatLng(43.6703322),
    		zoom: 14,
    		mapTypeId: google.maps.MapTypeId.ROADMAP
    	};
    	var map = new google.maps.Map(this.down('[name=\'map\]').getEl().dom, o);
    }
});