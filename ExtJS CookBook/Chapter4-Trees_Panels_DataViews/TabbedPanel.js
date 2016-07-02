/// <reference path="C:\Users\akhil\Documents\Visual Studio 2015\Projects\ExtJS CookBook\ExtJS CookBook\ExtJS/ext-all-debug.js" />

Ext.tip.QuickTipManager.init();

Ext.onReady(function () {

    Ext.create('Ext.tab.Panel', {

        title: 'Tabbed Panel',
        bodyPadding: 10,
        height: 200,
        width: 500,
        items: [
            {
                title: 'item1'
            },
            {
                title: 'item2',
                tabConfig: {
                    tooltip:'Tab two Tool tip Text'
                }
            }
        ],
        renderTo: Ext.getBody(),
        style: 'margin 50px'
    });

});