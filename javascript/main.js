"use strict";
var users = Array();
var games = Array();
getGames(assignNewGames);
getUsers(validateUserHasAccess);
function assignNewGames(storedGames) {
    if (games == null || games == undefined || !(games instanceof Array) || games.length < 1) {
        games = storedGames;
    }
    findGameFromToken();
}
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
function findGameFromToken() {
    var gameId = getQueryString("gameId");
    var gameIds = games.map(function (g) { return g.id.toString(); });
    var locator = gameIds.indexOf(gameId);
    if (locator > -1) {
        game = games[locator];
    }
    else {
        console.log("Could not find game.");
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
