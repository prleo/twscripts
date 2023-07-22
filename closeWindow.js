// ==UserScript==
// @name               Close window after attack
// @include            https://*/*screen=place&village=*
// @version            1.0 (28/04/2022)
// @grant              window.close
// @author             prleo
/*
*/
// ==/UserScript==

var refreshTime = 10000
//convert here https://convertlive.com/u/convert/milliseconds/to/seconds#10000

doc = getGameDoc(window);

if (doc.URL.match(/screen=place&village/)) {
    setTimeout(function() {
        window.close();
    }, refreshTime);
}

function getGameDoc(winvar) {
    getdoc = winvar.document;
    if (!getdoc.URL.match('game\.php')) {
        for (var i = 0; i < winvar.frames.length; i++) {
            if (winvar.frames[i].document.URL.match('game\.php')) {
                getdoc = winvar.frames[i].document;
            }
        }
    }
    return getdoc;
}
