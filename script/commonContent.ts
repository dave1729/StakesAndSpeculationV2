console.log("Assigning Empty Player");
var player = new Player(null);

ensureAccessTokenAssigned();

var hasGotAccess = hasAccess();
console.log("has access: " + hasGotAccess);
if (window.location.href.indexOf("login") === -1 && !hasGotAccess) {
    console.log("GoTo Login");
    window.location.href = "../views/login.html";
}

function ensureAccessTokenAssigned()
{
    console.log("Ensure Token Assigned");
    if(!player) {
        console.log("Reassigning Player");
        player = new Player(null);
    }

    if(!player.access_token)
    {
        console.log("Getting token from URL");
        var accessToken = getQueryString("access_token");
        if(accessToken) player.access_token = accessToken;
    }
}

function hasAccess() {
    console.log("Just assigning token during has access...");
    return player.access_token === "1234";
}

function goTo(htmlPartialRef)
{
    var htmlRef = "../views/" + htmlPartialRef;

    htmlRef += "?access_token=" + player.access_token;

    window.location.href = htmlRef;
}

function commonContent() {
    var client = new XMLHttpRequest();
        client.open('GET', '../views/partialCommon.html');
        client.onreadystatechange = function() {
            var element = document.getElementById('common-content');
            if (element) element.innerHTML = client.responseText;
        }
        client.send();
}

function addNav() {
    var client = new XMLHttpRequest();
        client.open('GET', '../views/partialNav.html');
        client.onreadystatechange = function() {
            var element = document.getElementById('nav');
            if (element) element.innerHTML = client.responseText;
        }
        client.send();
}

function getQueryString(field) {
    var queryStrings = window.location.href.split('?')[1];
    if(queryStrings) {
        var pairsAsArray = queryStrings.split("&");
        if(pairsAsArray) {
            for(var i = 0; i < pairsAsArray.length; i++) {
                var pair = pairsAsArray[i].split("=");
                if(pair && pair[0].toUpperCase() === field.toUpperCase()) {
                    return pair[1];
                }
            }
        }
    }

    return null;
}