var users = Array<User>();
var games = Array<Game>();
getGames(assignNewGames);
getUsers(validateUserHasAccess);

function assignNewGames(storedGames: Array<Game>) {
    if (games == null || games == undefined || !(games instanceof Array) || games.length < 1) {
        games = storedGames;
    }

    findGameFromToken();
}

function validateUserHasAccess(theUsers: Array<User>) {
    users = theUsers;

    findUserFromToken();

    var hasGotAccess = hasAccess();
    console.log("has access: " + hasGotAccess);
    if (window.location.href.indexOf("login") === -1 && !hasGotAccess) {
        console.log("GoTo Login");
        window.location.href = "../views/login.html";
    }
}

function findUserFromToken() {
    var accessToken: string = getQueryString("access_token");
    var tokens: string[] = users.map(u => u.access_token.toString());
    var locator = tokens.indexOf(accessToken);
    if(locator > -1) {
        user = users[locator];
    }
    else {
        console.log("Could not find user.");
    }
}

function findGameFromToken() {
    var gameId: string = getQueryString("gameId");
    var gameIds: string[] = games.map(g => g.id.toString());
    var locator = gameIds.indexOf(gameId);
    if(locator > -1) {
        game = games[locator];
    }
    else {
        console.log("Could not find game.");
    }
}

function hasAccess() {
    var accessTokens = users.map(u => u.access_token);

    if(user != null && user.access_token != null && user.access_token !== "") {
        return accessTokens.indexOf(user.access_token) > -1;
    }

    return false;
}

function shouldNotBeNull(options: any, lid: number) {
    if(!options) {
        throw new Error(`Unexpected Null. Lid: ${lid}`);
    }
}