function SaveJson(objectAsJson: string, objectTypeName: string, callbackOnSuccess: Function) {
    var xmlHttp = new XMLHttpRequest();
    var myJsonId = getMyJsonBinId(objectTypeName);
    var theUrl = "https://api.myjson.com/bins/" + myJsonId;
    xmlHttp.open( "PUT", theUrl, true ); // false for synchronous request
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.onreadystatechange = function() {//Call a function when the state changes.
        if(xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == 200) {
            console.log("Put Success " + xmlHttp.responseText.substr(0, 50));
            if(callbackOnSuccess) callbackOnSuccess();
        }
        else {
            console.log("XML ReadyState: " + xmlHttp.readyState + " Status: " + xmlHttp.status);
        }
    }

    xmlHttp.send(objectAsJson);
}

function getMyJsonBinId(objectTypeName: string) {
    if(objectTypeName.toUpperCase() == "RIDDLES") {
        return "10teas";
    }
    else {
        alert("Error: " + objectTypeName + " isn't a stored MyJson type.");
    }
}