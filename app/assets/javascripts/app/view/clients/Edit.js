Ext.define('AM.view.clients.Edit', {
    extend: 'Ext.form.Panel',
    alias : 'widget.clientedit',
    
    title : 'Client details',
//    height: 120,
//    width: 280,
   	padding: '5 5 0 5',
//		border: false,
//      style: 'background-color: #fff;',

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
        action: 'save'
    },
    {
        text: 'Cancel',
        scope: this,
        handler: this.close
    }],
    
    client: null,
    
    initComponent: function() {
    	this.setClient(this.getInitialConfig().client);
    	this.callParent(arguments);
    },
    
    setClient: function(c) {
    	this.client = c;
    	if( this.client ) {
			this.child("[name='firstName']").setValue(this.client.firstname);    		
			this.child("[name='lastName']").setValue(this.client.lastname);    		
			this.child("[name='email']").setValue(this.client.email);    		
    	} else {
			this.child("[name='firstName']").setValue('');    		
			this.child("[name='lastName']").setValue('');    		
			this.child("[name='email']").setValue('');    		
    	}
    }
});
