/// <reference path="C:\Users\akhil\Documents\Visual Studio 2015\Projects\ExtJS CookBook\ExtJS CookBook\ExtJS/ext-all-debug.js" />
Ext.onReady(function () {

    Ext.create('Ext.panel.Panel', {
        title: 'Panel With Fbar',
        bodyPadding:20,
        height: 400,
        width: 300,
        html: 'Panel with Footer bar',
        fbar: [
            'Footer Bar', '->',
            {
                xtype: 'button',
                text: 'fbar button'
            }
        ],
        renderTo: Ext.getBody(),
        style: 'margin 50px'
    });
});