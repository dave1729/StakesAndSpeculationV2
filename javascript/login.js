"use strict";
function newUser() {
    var userNameElement = document.getElementById("username-input");
    var passwordElement = document.getElementById("password-input");
    var userName = userNameElement == null ? "" : userNameElement.value;
    var password = passwordElement == null ? "" : passwordElement.value;
    if (password !== "" && userName !== "") {
        console.log("password and name accepted.");
        var saltedPassword = hash(password);
        user = new User({ name: userName, access_token: saltedPassword });
        if (users == null || users == undefined) {
            getUsers(saveNewUser);
        }
        else {
            saveNewUser(users);
        }
    }
    else {
        alert("Bad Password: " + password + ". Or user name: " + userName + ".");
    }
}
function saveNewUser(users) {
    var accessTokens = users.map(function (u) { return u.access_token; });
    if (accessTokens.indexOf(user.access_token) == -1) {
        users.push(user);
        saveUsers(users, undefined);
    }
    else {
        console.log("user not saved.");
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
function getUsers(callbackOnSuccess) {
    var isAsync = true;
    var xmlHttp = new XMLHttpRequest();
    var theUrl = "https://api.myjson.com/bins/10teas";
    xmlHttp.open("GET", theUrl, isAsync); // false for synchronous request true for async
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == 200) {
            console.log("Get on " + theUrl + " succeeded.");
            var responseObject = serializeUsersFromJson(xmlHttp.responseText);
            if (callbackOnSuccess !== undefined)
                callbackOnSuccess(responseObject);
        }
        else {
            console.log("Get on " + theUrl + " has state changed. Status: " + xmlHttp.status.toString() + ".");
        }
    };
    xmlHttp.send(undefined);
}
function serializeUsersFromJson(responseText) {
    if (responseText.length <= 0)
        console.log("Response Test is Empty.");
    var responseObject = JSON.parse(responseText);
    var users = Array();
    if (responseObject instanceof Array) {
        responseObject.forEach(function (u) {
            users.push(new User(u));
        });
    }
    else {
        users.push(new User(responseObject));
    }
    return users;
}
