/// <reference path="C:\Users\akhil\Documents\Visual Studio 2015\Projects\ExtJS CookBook\ExtJS CookBook\ExtJS/ext-all-debug.js" />
var storeForTreeA = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [{
            text: "Item 1",
            leaf: true
        }, {
            text: "Item 2",
            leaf: true
        }, {
            text: "Item 3",
            leaf: true
        }, {
            text: "Item 4",
            leaf: true
        }]
    }
});

var storeForTreeB = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [{
            text: "Item 5",
            leaf: true
        }]
    }
});

Ext.onReady(function () {
    var treeA = Ext.create('Ext.tree.Panel', {
        title: 'Tree A',
        store: storeForTreeA,
        width: 500,
        height: 200,
        viewConfig: {
            plugins: {
                ptype: 'treeviewdragdrop'
            }
        },
        renderTo: Ext.getBody(),
        style: 'margin 50px'

    });

    var treeB = Ext.create('Ext.tree.Panel', {
        title: 'Tree B',
        width: 500,
        height: 200,
        store: storeForTreeB,
        viewConfig: {
            plugins: {
                ptype: 'treeviewdragdrop',
                enableDrop: true,
                enableDrag: true,
                allowContainerDrop:true
            }
        },
        renderTo: Ext.getBody(),
        style:'margin 50px'
    });


});