/// <reference path="C:\Users\akhil\Documents\Visual Studio 2015\Projects\ExtJS CookBook\ExtJS CookBook\ExtJS/ext-all-debug.js" />

var nameLengthSorter = function (objectOne, objectTwo) {
    var objectOneLength = objectOne.get('text').length;
    var objectTwoLength = objectTwo.get('text').length;

    return (objectOneLength === objectTwoLength) ?
           0 : (objectOneLength < objectTwoLength ? -1 : 1);
};


var store = Ext.create('Ext.data.TreeStore', {
    proxy: {
        type: 'ajax',
        url: 'treeData.json'
    },
    root: {
        text: 'Contries',
        expanded: true
    },
    sorters: {
        //property: 'text',
        //direction: 'ASC' ////for descending change to 'DESC'

        sorterFn: nameLengthSorter,
        direction:'ASC'
    }
});

Ext.onReady(function () {
    Ext.create('Ext.tree.Panel', {
        title: 'Countries &amp; Cities',
        width: 500,
        height: 300,
        store: store,
        rootVisible: true, // hides main root node
        renderTo: Ext.getBody(),
        style:'margin 50px'
    });

    Ext.create('Ext.Button', {
        text: 'Sort',
        renderTo: Ext.getBody(),
        handler: function () {
            store.sort('text');
        }
    });

});