/// <reference path="C:\Users\akhil\Documents\Visual Studio 2015\Projects\ExtJS CookBook\ExtJS CookBook\ExtJS/ext-all-debug.js" />
Ext.onReady(function () {
    Ext.create('Ext.panel.Panel', {

        title: 'Panel Header',
        width: 500,
        height: 200,
        bodyPadding: 10,
        html: 'Panel Content',
        dockedItems:[
            {
                xtype: 'toolbar',
                dock: 'top',
                items: [
                    {
                        xtype: 'button',
                        text:'click me'
                    }, '->','Docked Toolbar At Top'
                ]
            },
            {
                xtype: 'toolbar',
                dock: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        text:'click me'
                    },'->','Docked Items At Bottom'
                ]
            }
        ],
        renderTo: Ext.getBody(),
        style: 'margin 50px',
    });

}); 