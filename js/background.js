/*
	=============================================================================
	*****************************************************************************
	The contents of this file are subject to the Mozilla Public License
	Version 1.1 (the "License"); you may not use this file except in
	compliance with the License. You may obtain a copy of the License at
	http://www.mozilla.org/MPL/

	Software distributed under the License is distributed on an "AS IS"
	basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
	License for the specific language governing rights and limitations
	under the License.

	The Original Code is Avro Keyboard for Google Chrome

	The Initial Developer of the Original Code is
	Rifat Nabi <to.rifat@gmail.com>

	Copyright (C) OmicronLab (http://www.omicronlab.com). All Rights Reserved.


	Contributor(s): ______________________________________.

	*****************************************************************************
	=============================================================================
*/
/*global jQuery, chrome, console, document, window, localStorage */
chrome.extension.onRequest.addListener(
    function (request, sender, sendResponse) {
        'use strict';
        switch(request.method) {
            case 'handleStatus':
                if (!!request.status) {
                    chrome.pageAction.setIcon({tabId: sender.tab.id, path: 'images/icon-16.png'});
                } else {
                    chrome.pageAction.setIcon({tabId: sender.tab.id, path: 'images/icon-16-dim.png'});
                }
                chrome.pageAction.show(sender.tab.id);
                sendResponse({});
                break;
            case 'popupCount':
                if(typeof localStorage.popupCount === 'undefined') {
                    localStorage.popupCount = 0;
                }
                localStorage.popupCount++;
                sendResponse({popupCount: localStorage.popupCount});
                break;
        }
    }
);

// http://stackoverflow.com/questions/2399389/chrome-extension-first-run
function onInstall() {
    console.log("Extension Installed");
}

function onUpdate() {
    console.log("Extension Updated");
}

function getVersion() {
    var details = chrome.app.getDetails();
    return details.version;
}

// Check if the version has changed.
var currVersion = getVersion(),
    prevVersion = localStorage.version;
if (currVersion != prevVersion) {
    // Check if we just installed this extension.
    if (typeof prevVersion == 'undefined') {
        onInstall();
    } else {
        onUpdate();
    }
    localStorage.version = currVersion;
}