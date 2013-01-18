Ext.define('WSIS.view.clients.Edit', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.clientedit',
    
    layout: 'vbox',
    closable: true,
    title : 'Client details',
    
   	padding: '5 5 0 5',
   	
   	items: [{
   		xtype: 'form',
	    buttonAlign: 'left',
	    border: 0,
	
	    items: [{
	        xtype: 'textfield',
	        name : 'firstName',
	        fieldLabel: 'First Name'
	    },
	    {
	        xtype: 'textfield',
	        name : 'lastName',
	        fieldLabel: 'Last Name'
	    },
	    {
	        xtype: 'textfield',
	        name : 'email',
	        fieldLabel: 'Email'
	    }],
	    buttons: [{
	        text: 'Save',
	        id: 'btnSave',
	        action: 'save'
	    }, {
	        text: 'Cancel',
	        scope: this,
	        handler: this.close
	    }]
   	}],
    
    client: null,
    
    initComponent: function() {
    	this.callParent(arguments);
    },
    
    setClient: function(c) {
    	this.client = c;
    	var form = this.child('form');
    	if( this.client ) {
			form.child("[name='firstName']").setValue(this.client.firstname);    		
			form.child("[name='lastName']").setValue(this.client.lastname);    		
			form.child("[name='email']").setValue(this.client.email);
			this.setTitle(this.client.CFID + " " + this.client.firstname + " " + this.client.lastname);   		
    	} else {
			form.child("[name='firstName']").setValue('');    		
			form.child("[name='lastName']").setValue('');    		
			form.child("[name='email']").setValue('');    		
			this.setTitle("Client detail");   		
    	}
    },
    
    updateClient: function() {
    	var form = this.child('form');
    	this.client.firstname = form.child("[name='firstName']").getValue();
    	this.client.lastname = form.child("[name='lastName']").getValue();
    	this.client.email = form.child("[name='email']").getValue();
    	return this.client;
    }
});
