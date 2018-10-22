var users = Array<User>();
getUsers(validateUserHasAccess);

function validateUserHasAccess(theUsers: Array<User>) {
    debugger;
    users = theUsers;

    ensureAccessTokenAssigned();

    var hasGotAccess = hasAccess();
    console.log("has access: " + hasGotAccess);
    if (window.location.href.indexOf("login") === -1 && !hasGotAccess) {
        console.log("GoTo Login");
        window.location.href = "../views/login.html";
    }
}

function hasAccess() {
    var accessTokens = users.map(u => u.access_token);

    if(player != null) {
        var accessToken = player.accessTokenOrNull();
            if(accessToken != null) {
            return accessTokens.indexOf(accessToken) > -1;
        }
    }

    return false;
}

function shouldNotBeNull(options: any, lid: number) {
    if(!options) {
        throw new Error(`Unexpected Null. Lid: ${lid}`);
    }
}