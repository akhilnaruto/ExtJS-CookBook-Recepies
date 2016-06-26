/// <reference path="C:\Users\akhil\Documents\Visual Studio 2015\Projects\ExtJS CookBook\ExtJS CookBook\ExtJS/ext-all-debug.js" />
var store = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [
            {
                text: 'Menu Item A',
                leaf:true
            },
             {
                 text: 'Menu Item B',
                 leaf: true
             },
             {
                 text: 'Menu Item C',
                 leaf: true
             },
             {
                 text: 'Menu Item D',
                 leaf: true
             },
        ]
    }
});

var westPanel = Ext.create('Ext.tree.Panel', {

    title: 'Application Menu',
    region: 'west',
    margins: '0 5 0 0',
    width: 200,
    store: store,
    rootVisible: false,
    listeners: {
        itemclick:function(tree,record,item,index,
            e, options) {

            var nodeText = record.data.text;
            var tabPanel = viewport.items.get(1);
            var tabBar = tabPanel.getTabBar();
            var tabIndex;


        }
    }
});