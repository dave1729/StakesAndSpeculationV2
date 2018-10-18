"use strict";
console.log("Assigning Empty Player");
var player;
ensureAccessTokenAssigned();
function ensureAccessTokenAssigned() {
    // ToDo: Get Player Info From Storage Here, using access_token. 
    // if(player && !player.access_token)
    // {
    console.log("Getting token from URL");
    var accessToken = getQueryString("access_token");
    player = new Player({ name: "Temp Name", access_token: accessToken });
    // }
}
function getQueryString(field) {
    var queryStrings = window.location.href.split('?')[1];
    if (queryStrings) {
        var pairsAsArray = queryStrings.split("&");
        if (pairsAsArray) {
            for (var i = 0; i < pairsAsArray.length; i++) {
                var pair = pairsAsArray[i].split("=");
                if (pair && pair[0].toUpperCase() === field.toUpperCase()) {
                    return pair[1];
                }
            }
        }
    }
    return null;
}
function shouldNotBeNull(options, lid) {
    if (!options) {
        throw new Error("Unexpected Null. Lid: " + lid);
    }
}
function hash(value) {
    var saltedString = "Salted" + value;
    var hash = 0, i, chr;
    if (saltedString.length === 0)
        return hash;
    for (i = 0; i < saltedString.length; i++) {
        chr = saltedString.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
}
;
var hasGotAccess = hasAccess();
console.log("has access: " + hasGotAccess);
if (window.location.href.indexOf("login") === -1 && !hasGotAccess) {
    console.log("GoTo Login");
    window.location.href = "../views/login.html";
}
function hasAccess() {
    console.log("Just assigning token during has access...");
    if (player && player.access_token) {
        return true;
    }
    return false;
}
function goTo(htmlPartialRef) {
    var htmlRef = "../views/" + htmlPartialRef;
    if (player != null && player.access_token != null) {
        console.log("Preserving player access_token.");
        htmlRef += "?access_token=" + player.access_token;
    }
    else {
        console.log("Not preserving player access_token. ");
    }
    window.location.href = htmlRef;
}
function commonContent() {
    var client = new XMLHttpRequest();
    client.open('GET', '../views/partial_common.html');
    client.onreadystatechange = function () {
        var element = document.getElementById('common-content');
        if (element)
            element.innerHTML = client.responseText;
    };
    client.send();
}
