function saveUsers(users: Array<User>, callbackOnSuccess: Function | undefined) {
    var objectAsString = JSON.stringify(users);
    saveJson(objectAsString, MyJsonType.User, callbackOnSuccess)
}

function getJson(myJsonType: MyJsonType, callbackOnSuccess: Function | undefined) {
    var isAsync = true;
    var xmlHttp = new XMLHttpRequest();
    var myJsonId = getMyJsonBinId(myJsonType);
    var theUrl = "https://api.myjson.com/bins/" + myJsonId;
    xmlHttp.open( "GET", theUrl, isAsync ); // false for synchronous request true for async
    xmlHttp.onreadystatechange = function() {//Call a function when the state changes.
        if(xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == 200) {
            console.log(`Get on ${theUrl} succeeded.`);
            var responseObject = serializeFromJson(xmlHttp.responseText, myJsonType);
            if(callbackOnSuccess !== undefined) callbackOnSuccess(responseObject);
        }
        else {
            console.log(`Get on ${theUrl} failed. Status: ${xmlHttp.status}.`);
        }
    }
    xmlHttp.send( undefined );
}

function saveJson(objectAsJson: string, myJsonType: MyJsonType, callbackOnSuccess: Function | undefined) {
    var xmlHttp = new XMLHttpRequest();
    var myJsonId = getMyJsonBinId(myJsonType);
    var theUrl = "https://api.myjson.com/bins/" + myJsonId;
    xmlHttp.open( "PUT", theUrl, true ); // false for synchronous request
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.onreadystatechange = function() {//Call a function when the state changes.
        if(xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == 200) {
            console.log(`Put on ${theUrl} succeeded.`);
            if(callbackOnSuccess !== undefined) callbackOnSuccess();
        }
        else {
            console.log(`Put on ${theUrl} failed. Status: ${xmlHttp.status}.`);
        }
    }

    xmlHttp.send(objectAsJson);
}

function getMyJsonBinId(myJsonType: MyJsonType) {
    if(myJsonType === MyJsonType.User) {
        return "10teas";
    }
}