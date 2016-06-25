/// <reference path="C:\Users\akhil\Documents\Visual Studio 2015\Projects\ExtJS CookBook\ExtJS CookBook\ExtJS/ext-all-debug.js" />
Ext.onReady(function () {
    var win = Ext.create('Ext.window.Window', {
        x: 500, // these are for positioning of window in browser X:0 Y:0 indicated window will be positioned top most left corner
        y: 0,
        width: 400,
        height: 400,
        title: 'Anchor Layout Panel - Offsets',
        layout: 'anchor',
        items: [
            {
                xtype: 'panel',
                title: 'offsets',
                html: 'Naruto Uzumaki',
                anchor: '-150 -100' // first is width and second is height

            }
        ]


    });

    win.show();
});