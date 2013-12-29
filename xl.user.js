// ==UserScript==
// @name         XL sauce
// @match        *://boards.4chan.org/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    var d = document,
        doc = d.documentElement;
    var id = function(id) {
       return d.getElementById(id);
    };
    var el = function(el) {
        return d.querySelector(el);
    };
    var on = function(root, event, handle) {
        if (!handle) {
            handle = function() {
               console.log('we fired ' + event);
            };
        };
        root.addEventListener(event, handle, false);
    };
    
    doc.classList.add('chanx-loading');
    var chanXLoaded = function() {
        doc.classList.remove('chanx-loading');
    };
    // this won't fire a thread though!
    
    /*
    var styleRemoval = function() {
        var styles = d.querySelectorAll('style');
        for (var i = 0, j = styles.length; i < j; i++) {
            styles[i].remove();
        };
    };
    */
    
    var main = function() {
        
        var styles = d.querySelectorAll('style');
        for (var i = 0, j = styles.length; i < j; i++) {
            styles[i].remove();
        };
        
        var scrollage = d.createElement('progress');
        scrollage.id = 'scroll-progress';
        scrollage.value = 0;
        scrollage.max = 100;
        d.body.appendChild(scrollage);

        var headerSticky = function() {
            var Y = window.pageYOffset;
            if (Y >= 496) {
                doc.classList.add('bannered');
            } else {
                doc.classList.remove('bannered');
            }
        };
        on(window, 'scroll', headerSticky);
        
        var progressScroll = function() {
            var s = window.pageYOffset, dHeight = d.body.clientHeight, wHeight = window.innerHeight, scrollPercent, pos;
            scrollPercent = (s / (dHeight - wHeight)) * 100;
            pos = scrollPercent;
            id('scroll-progress').value = pos;
        };
        on(window, 'scroll', progressScroll);
    };
    
    on(d, 'DOMContentLoaded', main);
    //on(d, '4chanXInitFinished');
    //on(d, '4chanMainInit');
    //on(d, '4chanParsingDone');
    on(d, 'IndexBuild', chanXLoaded);
    //on(d, 'IndexRefresh');
})();