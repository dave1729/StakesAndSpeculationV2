"use strict";
function serializeFromJson(responseText, myJsonType) {
    if (responseText.length <= 0)
        console.log("Response Test is Empty.");
    var responseObject = JSON.parse(responseText);
    if (myJsonType === MyJsonType.User) {
        var users = Array();
        responseObject.forEach(function (u) {
            users.push(new User(u));
        });
        return users;
    }
    else if (myJsonType === MyJsonType.Riddle) {
        var riddles = Array();
        responseObject.forEach(function (r) {
            riddles.push(new Riddle(r));
        });
        return riddles;
    }
    else if (myJsonType === MyJsonType.Game) {
        var games = Array();
        responseObject.forEach(function (g) {
            games.push(new Game(g));
        });
        return games;
    }
    else {
        return null;
    }
}
