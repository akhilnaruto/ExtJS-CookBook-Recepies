/// <reference path="C:\Users\akhil\Documents\Visual Studio 2015\Projects\ExtJS CookBook\ExtJS CookBook\ExtJS/ext-all-debug.js" />
var card1 = new Ext.panel.Panel({
    bodyStyle: 'padding : 20px',
    title: 'Personal Info',
    items: [
        {
            xtype: 'textfield',
            fieldLabel:'First Name'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Last Name'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Email Address',
            vtype:'email'

        }
    ]
});

var card2 = new Ext.panel.Panel({
    bodyStyle: 'padding : 20px',
    title: 'Account Info',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'User Name'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Password',
            inputType:'password'
        }
    ]
});

var card3 = new Ext.panel.Panel({
    bodyStyle: 'padding : 20px',
    title: 'Account Creation Successful',
    html:'Success !!'
});


Ext.onReady(function () {
    Ext.create('Ext.panel.Panel', {
        title: 'Account Creation Wizard - Card Layout',
        height: 350,
        width: 300,
        layout:'card',
        items:[card1,card2,card3],
        renderTo:Ext.getBody()
    });
});