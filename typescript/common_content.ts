function goTo(htmlPartialRef: string)
{
    ensureAccessTokenAssigned();
    var htmlRef = "../views/" + htmlPartialRef;
    if(user != undefined && user.accessTokenOrNull() != null) {
        console.log("Preserving player access_token.");
        htmlRef += "?access_token=" + user.access_token;
    }
    else {
        console.log("Not preserving player access_token. ");
    }

    window.location.href = htmlRef;
}

function commonContent() {
    var client = new XMLHttpRequest();
        client.open('GET', '../views/partial_common.html');
        client.onreadystatechange = function() {
            var element = document.getElementById('common-content');
            if (element) element.innerHTML = client.responseText;
        }
        client.send();
}

function ensureAccessTokenAssigned() {
    var accessToken = getQueryString("access_token");
    
    var urlTokenExists = accessToken != null && accessToken != "";

    if(urlTokenExists) {
        var userExists = user != undefined;

        if(userExists) {
            user.access_token = accessToken || "";
        }
        else {
            var newUser = new User({ name: "Temp Name", access_token: accessToken });
            user = newUser;
            user = newUser;
        }
    }
}

function getQueryString(field: string) {
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