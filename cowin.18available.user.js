// ==UserScript==
// @name         CoWin: Only show 18+ and bookable center records
// @namespace    Improved on the version by jacobsingh
// @version      0.2
// @description  Only show 18+ and bookable records
// @author       Pankaj Batra (github.com/pankajbatra)
// @match        https://www.cowin.gov.in/*
// @match        https://selfregistration.cowin.gov.in/appointment
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Probably could remove this, but it makes the element mutation finder code easier.
    var $ = jQuery;
    var mCoinSound = new Audio("http://soundbible.com/grab.php?id=2206&type=mp3");

    function onElementInserted(containerSelector, elementSelector, callback) {

        var onMutationsObserved = function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length) {
                    var elements = $(mutation.addedNodes).find(elementSelector);
                    for (var i = 0, len = elements.length; i < len; i++) {
                        callback(elements[i]);
                    }
                }
            });
        };

        var target = $(containerSelector)[0];
        var config = { childList: true, subtree: true };
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        var observer = new MutationObserver(onMutationsObserved);
        observer.observe(target, config);
    }

    //first removing all 45+ slots
    onElementInserted('body', '.age-limit', function(element) {
        if (element.innerText != "Age 18+") {
            if(element.closest('div.row')) {
                element.closest('div.row').style.display = "none";
            }
            // for the authenticated list which uses different HTML
            element.closest('div.mat-list-item-content').parentNode.style.display = "none";
        }
    });

    // removing all fully booked centers
    onElementInserted('body', '.no-seat', function(element) {
        if(element.closest('div.row')) {
            element.closest('div.row').style.display = "none";
        }
        // for the authenticated list which uses different HTML
        element.closest('div.mat-list-item-content').parentNode.style.display = "none";
    });

})();
