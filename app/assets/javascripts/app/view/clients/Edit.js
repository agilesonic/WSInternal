Ext.define('WSIS.view.clients.Edit', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.clientedit',
    
    layout: 'border',
    closable: true,
    title : 'Client details',
    border: 0,
    
   	padding: '5 5 0 5',
   	
   	items: [{
   		xtype: 'panel',
   		id: 'overview',
   		region: 'north',
   		tpl: '<h1>{fullName}</h1><h2>{status}&nbsp;&nbsp;&nbsp;Rate: {rate}</h2><hr/>',
   		data: {
   			fullName: '',
   			status: '',
   			rate: 0.0
   		},
   		border: 0,
   		hidden: true
   	}, {
   		xtype: 'form',
   		region: 'center',
	    buttonAlign: 'left',
	    border: 0,
	
	    items: [{
	    	layout: 'hbox',
	    	border: 0,
	    	items: [{
		        xtype: 'textfield',
		        name : 'honorific',
		        fieldLabel: 'Honorific'
		    }, {
		        xtype: 'textfield',
		        name : 'firstName',
		        fieldLabel: 'First Name'
		    }, {
		        xtype: 'textfield',
		        name : 'lastName',
		        fieldLabel: 'Last Name'
		    }]
	    }, {
	    	layout: 'hbox',
	    	border: 0,
	    	items: [{
		        xtype: 'textfield',
		        name : 'email',
		        fieldLabel: 'Email'
	    	}]
	    }],
	    
	    buttons: [{
	        text: 'Save',
	        id: 'btnSave',
	        action: 'save'
	    }, {
	        text: 'Cancel',
	        scope: this,
	        handler: this.close
	    }],
    
   	}],

    client: null,
    
    initComponent: function() {
    	this.callParent(arguments);
    },
    
    setClient: function(c) {
    	this.client = c;
    	if( this.client ) {
			this.down("[name='honorific']").setValue(this.client.honorific);    		
			this.down("[name='firstName']").setValue(this.client.firstname);    		
			this.down("[name='lastName']").setValue(this.client.lastname);    		
			this.down("[name='email']").setValue(this.client.email);
			this.setTitle(this.client.CFID + " " + this.client.firstname + " " + this.client.lastname);
			this.child('#overview').update({
				fullName: this.client.full_name,
				status: this.client.status,
				rate: this.client.rate
			});
			
			this.child('#overview').show();
    	} else {
			this.down("[name='honorific']").setValue('');    		
			this.down("[name='firstName']").setValue('');    		
			this.down("[name='lastName']").setValue('');    		
			this.down("[name='email']").setValue('');    		
			this.setTitle("Client detail"); 
			this.child('#overview').hide();		
    	}
    },
    
    updateClient: function() {
    	this.client.honorific = this.down("[name='honorific']").getValue();
    	this.client.firstname = this.down("[name='firstName']").getValue();
    	this.client.lastname = this.down("[name='lastName']").getValue();
    	this.client.email = this.down("[name='email']").getValue();
    	return this.client;
    }
});
