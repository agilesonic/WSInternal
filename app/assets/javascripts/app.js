Ext.application({
    name: 'AM',
	appFolder: '/assets/app',

    // automatically create an instance of AM.view.Viewport
    autoCreateViewport: true,

    controllers: [
        'Clients'
    ],
    
    launch: function() {
    }
});
