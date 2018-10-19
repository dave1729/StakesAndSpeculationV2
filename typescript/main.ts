console.log("Assigning Empty Player");
var player: Player;
ensureAccessTokenAssigned();

function ensureAccessTokenAssigned()
{
    // ToDo: Get Player Info From Storage Here, using access_token. 

    // if(player && !player.access_token)
    // {
        console.log("Getting token from URL");
        var accessToken = getQueryString("access_token");
        var newUser = new User({ name: "Temp Name", access_token: accessToken });
        player = new Player({ user: newUser });
    // }
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