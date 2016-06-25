/// <reference path="C:\Users\akhil\Documents\Visual Studio 2015\Projects\ExtJS CookBook\ExtJS CookBook\ExtJS/ext-all-debug.js" />
Ext.onReady(function () {
    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [
            {
                region: 'north',
                height: 100,
                margins:5,
                xtype:'container'
            },
            {
                region: 'west',
                title: 'west',
                margins: '0 5 0 5',
                collapsible: true,
                split: true,
                titleCollapse:true,
                flex:.3
            },
            {
                title: 'center',
                region: 'center'
              
            },
            {
                title: 'east',
                region: 'east',
                margins:'0 5 0 5',
                width: 200,
                collapsible: true,
                collapsed: true,
                titleCollapse: true
            },
            {
                title: 'south',
                region: 'south',
                margins:' 0 5 5 5',
                flex:.3
            }
        ]

    });

});