/// <reference path="C:\Users\akhil\Documents\Visual Studio 2015\Projects\ExtJS CookBook\ExtJS CookBook\ExtJS/ext-all-debug.js" />
Ext.onReady(function () {

  var panel =  Ext.create('Ext.panel.Panel', {

        title: 'Panel With Dynamic Docking',
        height: 300,
        width: 400,
        html: 'Panel With Dynamic Docking',
        bodyPadding: 10,
        renderTo: Ext.getBody()
  });

  panel.addDocked({
      dock: 'bottom',
      xtype: 'toolbar',
      items: [
          '->',
          {
              xtype: 'button',
              text:'click me'
          }
      ]
  });
});