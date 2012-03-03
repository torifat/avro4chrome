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
/*global jQuery, chrome, console, document, window */
(function ($) {
    'use strict';

    function sendStatus(bangla) {
        chrome.extension.sendRequest({status: bangla});
    }

    var selector = 'textarea, input[type=text]';
    $.noConflict();
    $(function () {
        var callback = function (isBangla) {
            sendStatus(isBangla);
        };

        $(selector).avro({bangla: false}, callback);
        $(window).on('DOMNodeInserted', function () {
            $(selector).avro({bangla: false}, callback);
        });

        $(selector).on('blur', function () {
            sendStatus(false);
        });
    });
}(jQuery));