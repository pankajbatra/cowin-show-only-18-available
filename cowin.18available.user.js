// ==UserScript==
// @name         CoWin: Only show 18+ and bookable center records
// @namespace    Improved on the version by jacobsingh
// @version      0.3
// @description  Only show 18+ and bookable records
// @author       Pankaj Batra (github.com/pankajbatra)
// @match        https://www.cowin.gov.in/*
// @match https://selfregistration.cowin.gov.in
// @match        https://selfregistration.cowin.gov.in/appointment
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==


'use strict';
var $ = jQuery;

(function() {
    'use strict';
    var mCoinSound = new Audio("https://soundbible.com/grab.php?id=2206&type=mp3");

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

    
    $(window).bind('beforeunload', function(){
        console.log("beforeunload");
        $('audio').each(function(){
            this.pause(); // Stop playing
            this.currentTime = 0; // Reset time
        });
    });

    onElementInserted('body', 'form.login-block', function(element) {
        console.log("Not logged in: on login page");
        mCoinSound.play();
    });

    onElementInserted('body', '.beneficiary-box', function(element) {
        console.log("Logged in: on beneficiary page");
        $('audio').each(function(){
            this.pause(); // Stop playing
            this.currentTime = 0; // Reset time
        });
    });
    
    onElementInserted('body', '.center-box', function(element) {
        console.log("center Box");
        setInterval(function() {
            mCoinSound.pause();
            mCoinSound.currentTime = 0;
            $(".pin-search-btn").click(); }, 3*1000);
        setInterval(function() {
            $.ajax({
                url: 'https://cdn-api.co-vin.in/api/v2/appointment/beneficiaries',
                type: 'GET',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Bearer '+sessionStorage.getItem("userToken").replaceAll('"', ''));
                },
                "headers": {
                    "accept": "application/json, text/plain, */*",
                    "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,hi-IN;q=0.6,hi;q=0.5"
                },
                dataType: 'json',
                timeout: 500,
                data: {},
               success: function (data,status,xhr) {
                    console.log("still logged in...");
                },
                error: function (jqXhr, textStatus, errorMessage) { // error callback
                    console.log("logged out ..., sending to login page");
                    mCoinSound.play();
                    window.location.href = "https://selfregistration.cowin.gov.in/";
                }
            });
           }, 60*1000);
    });

    onElementInserted('body', '.mat-list-text', function(element) {
        var slotFound = false;
        var is45Plus = false;
         $(element).find( "a[href$='/appointment']" ).each(function(i, linkObj) {
             var ageElem = $(linkObj).siblings('div.ng-star-inserted')[0];
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

})();
