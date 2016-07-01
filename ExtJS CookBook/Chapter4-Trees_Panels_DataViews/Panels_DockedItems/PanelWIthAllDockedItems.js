/// <reference path="C:\Users\akhil\Documents\Visual Studio 2015\Projects\ExtJS CookBook\ExtJS CookBook\ExtJS/ext-all-debug.js" />
Ext.onReady(function () {

    Ext.create('Ext.panel.Panel', {

        title: 'Panel With Docked Items in All Sides',
        width: 500,
        height: 300,
        html: 'Panle With Docked Items in All Sides',
        bodyPadding: 10,
        lbar: ['lbar'],
        tbar: ['tbar'],
        rbar: ['rbar'],
        bbar: ['bbar'],
        renderTo: Ext.getBody(),
        style:'margin 50px'

    });

});