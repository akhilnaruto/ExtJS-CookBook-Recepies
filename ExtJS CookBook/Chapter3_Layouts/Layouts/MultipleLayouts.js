/// <reference path="C:\Users\akhil\Documents\Visual Studio 2015\Projects\ExtJS CookBook\ExtJS CookBook\ExtJS/ext-all-debug.js" />

var mainMenu = Ext.create('Ext.panel.Panel', {
    title: 'Main Menu',
    region: 'west',
    margins: '0 5 5 5',
    flex: .3,
    collapsible: true,
    titleCollapse: true,
    layout: 'accordion',
    layoutConfig: {
        animate: false,
        multi:true
    },
    items: [
        {
            title:'Product Management'
        },
        {
            title: 'User Management'
        },
        {
            title: 'Settings'
        }
    ]
});

var card1 = new Ext.panel.Panel({
    bodyStyle: 'padding 20px',
    title: 'Personal Info',
    border: false,
    items: [
        {
            xtype: 'textfield',
            fieldLabel:'FirstName'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'LastName'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Email Address',
            vType:'email'
           
        },
    ]
});

var card2 = new Ext.panel.Panel({
    title: 'Account Info',
    bodyStyle: 'padding 20px',
    border: false,
    items: [
        {
            xtype: 'textfield',
            fieldLabel:'User Name'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Password',
            inputType:'password'
        }
    ]
});

var card3 = new Ext.panel.Panel({
    title: 'Account Creation Successfull',
    border: false,
    html: 'Success!!',
    bodyStyle:'padding 20px'
});

var createUserWizard = Ext.create('Ext.panel.Panel', {
    title: 'Create Uzer Wizard',
    layout: 'card',
    deferredRenderer: 'true',
    items: [card1, card2, card3],
    bbar: ['->',
        {
            xtype: 'button',
            text: 'previous',
            handler: function (btn) {
                var layout = createUserWizard.getLayout();

                if (layout.getPrev()) {
                    layout.prev()
                }
            }
        },
        {
            xtype: 'button',
            text: 'next',
            handler: function (btn) {
                var layout = createUserWizard.getLayout();

                if (layout.getNext()) {
                    layout.next()
                }
            }
        }
    ]
});

var userManagementPanel = Ext.create('Ext.panel.Panel', {
    title: 'User Management',
    layout: {
        type: 'hbox',
        align: 'stretch',
        padding: 10
    },
    defaults: {
        flex: 1
    },
    items: [
        {
            xtype: 'container',
            margins: '0 5 0 0',
            layout: {
                type: 'vbox',
                align: 'stretch',
                animate: true
            },
            defaults: {
                flex: 1,
                frame: true
            },
            items: [
                {
                    title: 'User Contact Information',
                    margins: '0 0 5 0'
                },
                {
                    title: 'Session Log'
                }
            ]
        },
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch',
                animate: true
            },
            defaults: {
                flex: 1,
                frame: true
            },
            items: [
                {
                    title: 'Account Previlage',
                    margins: '0 0 5 0'

                },
                {
                    title: 'Purchase History'
                }

            ]
        }

    ]
});

var contentPanel = Ext.create('Ext.tab.Panel', {
    region: 'center',
    margins: ' 0 5 5 0',
    items: [createUserWizard, userManagementPanel]
});

Ext.onReady(function () {
    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [
            {
                region: 'north',
                margins: 5,
                height: 100,
                xtype: 'container',
                html: 'Logo here',
            },
            mainMenu,
            contentPanel
        ]
    });
});