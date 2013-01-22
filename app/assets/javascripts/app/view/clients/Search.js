Ext.define('WSIS.view.clients.Search', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.smartsearch',

	title: 'Smart Search',
	
	layout: 'border',

	tbar: [{
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
	}],
	
    items: [{
    	xtype: 'panel',
    	id: 'resultMsg',
    	tpl: '<h1>Found {result_size} client(s) matching \'{keyword}\'</h1>',
    	data: {
    		result_size: 0,
    		keyword: ''
    	},
    	hidden: true,
    	style: {
    		padding: 10
    	},
    	region: 'north'
    }, {
    	xtype: 'grid',
    	region: 'center',
	    store: 'Clients',
	
	    columns: [
	    
	        {header: 'CFID',  dataIndex: 'CFID',  flex: 1},
	        {header: 'Name',  dataIndex: 'name',  flex: 1},
	        {header: 'Address',  dataIndex: 'address',  flex: 1},
	        {header: 'Phone', dataIndex: 'phone', flex: 1},
	        {header: 'Valid ?', dataIndex: 'valid', flex: 1, xtype: 'booleancolumn', trueText: 'Yes', falseText: 'No'},
	        {header: 'Properties', dataIndex: 'properties', flex: 1,
	        	renderer: function(props) {
	        		if( props.length > 1 ) {
		        		var s = "<select>";
		        		Ext.each(props, function(prop) {
		        			s += Ext.String.format("<option value='{0}'>{1}</option>", prop.id, prop.address);
		        		});
		        		s += "</select>";
		        		return s;
		        	} else {
		        		return props[0].address;
		        	}
	        	} 
	        }
	        
	    ],
	    
	    viewConfig: {
	    	getRowClass: function(rec, rowIndex, params, store) {
	    		var cls = rowIndex % 2 == 1 ? 'odd-row' : 'even-row';
	    		if( !rec.data.valid ) {
	    			cls += ' invalid-row';
	    		}
	    		return cls;
	    	}
	    }
    }]
    
});
