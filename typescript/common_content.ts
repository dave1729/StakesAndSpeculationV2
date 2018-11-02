function goTo(htmlPartialRef: string)
{
    ensureAccessTokensAssigned();
    var queryStrings = new Array<String>();

    if(user != undefined && user.accessTokenOrNull() != null) {
        console.log("Preserving player access_token.");
       queryStrings.push("access_token=" + user.access_token);
    }

    if(game != undefined && !game.id.isNullOrEmpty()) {
        console.log("Preserving player access_token.");
        queryStrings.push("gameId=" + game.id);
    }

    var htmlRef = "../views/" + htmlPartialRef;

    if(queryStrings.length > 0) {
        htmlRef += `?${queryStrings[0]}`;

        for(var i = 1; i < queryStrings.length; i++) {
            htmlRef += `&${queryStrings[i]}`
        }
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

function ensureAccessTokensAssigned() {
    var accessToken = getQueryString("access_token");
    var gameId = getQueryString("gameId");
    
    var urlTokenExists = accessToken != null && accessToken != "";
    var gameIdExists = gameId != null && gameId != "";

    if(urlTokenExists) {
        var userExists = user != undefined;

        if(userExists) {
            user.access_token = accessToken || "";
        }
    }

    if(gameIdExists) {
        var gameExists = game != undefined;

        if(gameExists) {
            game.id = gameId;
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

    return "";
}