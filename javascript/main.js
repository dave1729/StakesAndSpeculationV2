"use strict";
var users = Array();
getUsers(validateUserHasAccess);
function validateUserHasAccess(theUsers) {
    debugger;
    users = theUsers;
    ensureAccessTokenAssigned();
    var hasGotAccess = hasAccess();
    console.log("has access: " + hasGotAccess);
    if (window.location.href.indexOf("login") === -1 && !hasGotAccess) {
        console.log("GoTo Login");
        window.location.href = "../views/login.html";
    }
}
function hasAccess() {
    var accessTokens = users.map(function (u) { return u.access_token; });
    if (player != null) {
        var accessToken = player.accessTokenOrNull();
        if (accessToken != null) {
            return accessTokens.indexOf(accessToken) > -1;
        }
    }
    return false;
}
function shouldNotBeNull(options, lid) {
    if (!options) {
        throw new Error("Unexpected Null. Lid: " + lid);
    }
}
