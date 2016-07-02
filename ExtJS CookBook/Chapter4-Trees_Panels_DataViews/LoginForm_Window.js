/// <reference path="C:\Users\akhil\Documents\Visual Studio 2015\Projects\ExtJS CookBook\ExtJS CookBook\ExtJS/ext-all-debug.js" />

var form = Ext.create('Ext.form.Panel', {
    bodyPadding: 10,
    border: false,
    defaultType: 'textfield',
    items: [
        {
            fieldLabel: 'Username',
            name: 'username',
            allowBlank: false
        },
        {
            fieldLabel: 'password',
            name: 'password',
            inputType: 'password',
            allowBlank: false
        }
    ],
    buttons: [
        {
            text: 'Login',
            formBind: true, //this ensures button is enabled only if form is valid
            disabled: true,
            handler: function () {
                alert('Login Button Clicked')
            }

        }
    ]

});




Ext.onReady(function () {

    Ext.create('Ext.window.Window', {

        title: 'Login Window',
        height: 140,
        width: 300,
        layout: 'fit',
        items:[form]
    }).show();
});