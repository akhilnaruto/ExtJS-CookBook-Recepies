/// <reference path="C:\Users\akhil\Documents\Visual Studio 2015\Projects\ExtJS CookBook\ExtJS CookBook\ExtJS/ext-all-debug.js" />
Ext.onReady(function () {

    Ext.create('Ext.panel.Panel', {
        title: 'Accordian Layout',
        width: 350,
        height: 400,
        layout: 'accordion',
        renderTo: Ext.getBody(),
        items: [
            {
                title: 'Naruto Uzumaki',
                html: 'Naruto Uzumaki'
            },
            {

                title: 'Sasuke Uchicha',
                html: 'Sasuke Uchicha'
            },
            {

                title: 'Madara Uchicha',
                html: 'Madara Uchicha'
            }
        ]
       

    });

});