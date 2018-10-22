"use strict";
var users = Array();
getUsers(validateUserHasAccess);
function validateUserHasAccess(theUsers) {
    users = theUsers;
    findUserFromToken();
    var hasGotAccess = hasAccess();
    console.log("has access: " + hasGotAccess);
    if (window.location.href.indexOf("login") === -1 && !hasGotAccess) {
        console.log("GoTo Login");
        window.location.href = "../views/login.html";
    }
}
function findUserFromToken() {
    var accessToken = getQueryString("access_token");
    var tokens = users.map(function (u) { return u.access_token.toString(); });
    var locator = tokens.indexOf(accessToken);
    if (locator > -1) {
        user = users[locator];
    }
    else {
        console.log("Could not find user.");
    }
}
function hasAccess() {
    var accessTokens = users.map(function (u) { return u.access_token; });
    if (user != null && user.access_token != null && user.access_token !== "") {
        return accessTokens.indexOf(user.access_token) > -1;
    }
    return false;
}
function shouldNotBeNull(options, lid) {
    if (!options) {
        throw new Error("Unexpected Null. Lid: " + lid);
    }
}
