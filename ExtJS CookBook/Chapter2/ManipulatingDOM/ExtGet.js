/// <reference path="c:\users\akhil\documents\visual studio 2015\Projects\ExtJS CookBook\ExtJS CookBook\ExtJS/ext-all-debug.js" />
Ext.onReady(function () {
    var bookTitleEl = Ext.get('book-title');
    alert('Book Title ID: ' + bookTitleEl.id);
    bookTitleEl.hide();
})