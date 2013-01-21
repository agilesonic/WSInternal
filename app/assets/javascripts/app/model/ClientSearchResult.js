Ext.define('WSIS.model.ClientSearchResult', {
    extend: 'Ext.data.Model',
    fields: ['CFID', 'name', 'address', 'phone', 
    	{ name: 'valid', type: 'boolean', defaultValue: true },
    	'properties'],
    idProperty: 'CFID'
});
