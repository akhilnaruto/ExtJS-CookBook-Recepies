/// <reference path="C:\Users\akhil\Documents\Visual Studio 2015\Projects\ExtJS CookBook\ExtJS CookBook\ExtJS/ext-all-debug.js" />
Ext.onReady(function () {

    var tabPanel = Ext.create('Ext.tab.Panel', {

        width: 500,
        height: 200,
        style: 'margin 50px',
        renderTo: Ext.getBody(),
        tabPosition: 'bottom',
        items: [
            {
                title: 'tab one',
                html: 'This is tab one',
            },
            {
                title: 'tab two - has very very log silly text',
                html:'this is tab two'
            },
            {
                title: 'tab three',
                html:'This is tab three'
            }
        ]
    });

});