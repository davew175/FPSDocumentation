

var data = [{
        label: 'Package Description',
        folder: false,
        id: 0
    },{
        label : 'License Information',
        folder: false,
        id: 1
    } , {
		label : 'Release Notes',
        folder : true,
        id : 0,
        children : [{
                label : 'Version 1.2',
                folder : false,
                id : 1
                },
                {label : 'Version 1.1',
                folder : false,
                id : 2
                },                
                {label : 'Version 1.0',
                folder : false,
                id : 3
                }, {
                    label : 'Test2',
                    folder : false,
                    id : 4
                }]
            }, {
                label : 'Importing and Configuring',
                folder : true,
                id : 5,
                children : [{
                    label : 'Importing the Package',
                    folder: false,
                    id : 6
                }, {
                    label: 'Importing into an Existing Project',
                    folder: false,
                    id : 7
                }, {
                    label: 'Initial Configuration',
                    folder: false,
                    id: 8
                }]
            }];