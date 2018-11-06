"use strict";
function saveUsers(users, callbackOnSuccess) {
    var objectAsString = JSON.stringify(users);
    saveJson(objectAsString, MyJsonType.User, callbackOnSuccess);
}
function getGames(callbackOnSuccess) {
    getJson(MyJsonType.Game, callbackOnSuccess);
}
function saveGames(games, callbackOnSuccess) {
    var objectAsString = JSON.stringify(games);
    saveJson(objectAsString, MyJsonType.Game, callbackOnSuccess);
}
function getSessionDescriptions(callbackOnSuccess) {
    getJson(MyJsonType.RtcSessionDescription, callbackOnSuccess);
}
function saveSessionDescriptions(descriptions, callbackOnSuccess) {
    var objectAsString = JSON.stringify(descriptions);
    saveJson(objectAsString, MyJsonType.RtcSessionDescription, callbackOnSuccess);
}
function getJson(myJsonType, callbackOnSuccess) {
    var isAsync = true;
    var xmlHttp = new XMLHttpRequest();
    var myJsonId = getMyJsonBinId(myJsonType);
    var theUrl = "https://api.myjson.com/bins/" + myJsonId;
    xmlHttp.open("GET", theUrl, isAsync); // false for synchronous request true for async
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == 200) {
            console.log("Get on " + theUrl + " succeeded.");
            var responseObject = serializeFromJson(xmlHttp.responseText, myJsonType);
            if (callbackOnSuccess !== undefined)
                callbackOnSuccess(responseObject);
        }
        else if (xmlHttp.status !== 200) {
            console.log("Get on " + theUrl + " failed. Status: " + xmlHttp.status + ".");
        }
    };
    xmlHttp.send(undefined);
}
function saveJson(objectAsJson, myJsonType, callbackOnSuccess) {
    var xmlHttp = new XMLHttpRequest();
    var myJsonId = getMyJsonBinId(myJsonType);
    var theUrl = "https://api.myjson.com/bins/" + myJsonId;
    xmlHttp.open("PUT", theUrl, true); // false for synchronous request
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status === 200) {
            console.log("Put on " + theUrl + " succeeded.");
            if (callbackOnSuccess !== undefined)
                callbackOnSuccess();
        }
        else if (xmlHttp.status !== 200) {
            console.log("Put on " + theUrl + " failed. Status: " + xmlHttp.status + ".");
        }
    };
    xmlHttp.send(objectAsJson);
}
function getMyJsonBinId(myJsonType) {
    if (myJsonType === MyJsonType.User) {
        return "10teas";
    }
    if (myJsonType === MyJsonType.Game) {
        return "giikk";
    }
    if (myJsonType === MyJsonType.RtcSessionDescription) {
        return "12uhh0";
    }
}
