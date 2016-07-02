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
            },
            {
                title: 'item3',
                tabConfig: {
                    tooltip: {
                        title: 'Tooltip Header',
                        text:'Tab three tooltip text'
                    }
                }
            }
        ],
        renderTo: Ext.getBody(),
        style: 'margin 50px'
    });

});