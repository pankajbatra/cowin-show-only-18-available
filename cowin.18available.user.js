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

    onElementInserted('body', '.center-box', function(element) {
        console.log("center Box");
        setInterval(function() {
            mCoinSound.pause();
            mCoinSound.currentTime = 0;
            $(".pin-search-btn").click(); }, 15*1000);
    });

    onElementInserted('body', '.mat-list-text', function(element) {
        var slotFound = false;
        var is45Plus = false;
         $(element).find( "a[href$='/appointment']" ).each(function(i, linkObj) {
             var ageElem = $(linkObj).siblings('div.ng-star-inserted')[0]
             //.children('span.age-limit')
             if (ageElem && ageElem.innerText != "Age 18+") {
                 if(linkObj.closest('div.row')) {
                     linkObj.closest('div.row').style.display = "none";
                 }
                 // for the authenticated list which uses different HTML
                 linkObj.closest('div.mat-list-item-content').parentNode.style.display = "none";
                 console.log(" No 18+ Slot in : "+$(element).find('h5.center-name-title')[0].innerText);
                 is45Plus = true;
                 return;
             }
             if (!linkObj.innerText.includes("NA") && !linkObj.innerText.includes("Booked")) {
                 slotFound = true;
             }
         });
        if(!slotFound && !is45Plus){
            console.log(" No available Slot in : "+$(element).find('h5.center-name-title')[0].innerText);
            element.style.display = "none";
        }
        else if(!is45Plus){
            console.log("Slot found in : "+$(element).find('h5.center-name-title')[0].innerText);
            mCoinSound.play();
        }
    });

    //first removing all 45+ slots
    /*onElementInserted('body', '.age-limit', function(element) {
        if (element.innerText != "Age 18+") {
            if(element.closest('div.row')) {
                element.closest('div.row').style.display = "none";
            }
            // for the authenticated list which uses different HTML
            element.closest('div.mat-list-item-content').parentNode.style.display = "none";
        }
    });*/

})();
