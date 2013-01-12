Ext.application({
    name: 'AM',
	appFolder: '/assets/app',
	dataFolder: '/assets/data',
    // automatically create an instance of AM.view.Viewport
    autoCreateViewport: true,

    controllers: [
        'Users'
    ]
});
