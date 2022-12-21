function postGame(objectAsJson: string, callbackOnSuccess: Function | undefined) {
    var xmlHttp = new XMLHttpRequest();
    var theUrl = "https://davesjson.azurewebsites.net/api/DavesIce?client-server-type=server";
    xmlHttp.open("POST", theUrl, true); // false for synchronous request
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.setRequestHeader("x-functions-key", "EP2a5vlXVOQ/ECl9Ri1T2z9eLMSwY/AkdM3l0VCa8ce7wXEiRA9CZw==");
    xmlHttp.onreadystatechange = function() {//Call a function when the state changes.
        if(xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status >= 200 && xmlHttp.status < 300) {
            console.log(`Post on ${theUrl} succeeded.`);
            if(callbackOnSuccess !== undefined) callbackOnSuccess(xmlHttp.responseText);
        }
        else if (xmlHttp.status < 200 && xmlHttp.status >= 300){
            console.log(`Post on ${theUrl} failed. Status: ${xmlHttp.status}.`);
            console.log(`    Response Text ${xmlHttp.responseText}`);
            console.log(`    Response ${xmlHttp.response}`);
        }
    }

    xmlHttp.send(objectAsJson);
}

function getGame(id: string, callbackOnSuccess: Function | undefined) {
    var isAsync = true;
    var xmlHttp = new XMLHttpRequest();
    var theUrl = "https://davesjson.azurewebsites.net/api/DavesIce?id=" + id + "&client-server-type=server";
    xmlHttp.open( "GET", theUrl, isAsync ); // false for synchronous request true for async
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.setRequestHeader("x-functions-key", "EP2a5vlXVOQ/ECl9Ri1T2z9eLMSwY/AkdM3l0VCa8ce7wXEiRA9CZw==");
    xmlHttp.onreadystatechange = function() {//Call a function when the state changes.
        if(xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == 200) {
            console.log(`Get on ${theUrl} succeeded.`);
            if(callbackOnSuccess !== undefined) callbackOnSuccess(xmlHttp.responseText);
        }
        else if (xmlHttp.status !== 200){
            console.log(`Get on ${theUrl} failed. Status: ${xmlHttp.status}.`);
        }
    }
    xmlHttp.send( undefined );
}