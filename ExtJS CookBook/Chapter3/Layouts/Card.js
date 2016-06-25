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
 var panel =Ext.create('Ext.panel.Panel', {
        title: 'Account Creation Wizard - Card Layout',
        height: 350,
        width: 300,
        layout: {
            type: 'card',
            deferredRender:true

        },
        items: [card1, card2, card3],
        bbar: ['->',
            {
                xtype: 'button',
                text: ' previous',
                handler: function (btn) {
                    var layout = panel.getLayout();
                    if (layout.getPrev()) {
                        layout.prev();
                    }
                }
            },
            {
                xtype: 'button',
                text: 'next',
                handler: function (btn) {
                    var layout = panel.getLayout();
                    if (layout.getNext()) {
                        layout.next();
                    }
                }
            }

        ],
        renderTo:Ext.getBody()
    });
});