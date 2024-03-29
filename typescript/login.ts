function newUser(){
    var userNameElement = document.getElementById("username-input");
    var passwordElement = document.getElementById("password-input");

    var userName = userNameElement == null ? "" : (<HTMLInputElement>userNameElement).value;
    var password = passwordElement == null ? "" : (<HTMLInputElement>passwordElement).value;

    if(password !== "" && userName !== "") {
        console.log("password and name accepted.");
        var saltedPasswordHash = hash(password);

        user = new User({ name: userName, access_token: saltedPasswordHash });\

        if(users == null || users == undefined) {
            console.log("Getting users.");
            getUsers(saveNewUser);
        }
        else {
            console.log("Saving Users.");
            saveNewUser(users);
        }
    }
    else {
        alert(`Bad Password: ${password}. Or user name: ${userName}.`);
    }
}

function saveNewUser(users: Array<User>) {
    var accessTokens = users.map(u => u.access_token);
    if(accessTokens.indexOf(user.access_token) == -1) {

        // Add to make every login attempt create a new account
        users.push(user);
        console.log("Saving new user.");
        saveUsers(users, undefined);
    }
    else {
        console.log("user not saved.");
    }
}

function hash(value: string) {
    var saltedString = `Salted${value}`;
    var hash = 0, i, chr;
    if (saltedString.length === 0) return hash;
    for (i = 0; i < saltedString.length; i++) {
      chr   = saltedString.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }

    return Math.abs(hash);
};

function serializeUsersFromJson(responseText: string) {
    if(responseText.length <= 0) console.log("Response Test is Empty.");
    var responseObject = JSON.parse(responseText);

    var users = Array<User>();
    if(responseObject instanceof Array) {
        responseObject.forEach(function(u: any){
            users.push(new User(u));
        });
    }
    else {
        users.push(new User(responseObject));
    }
    return users;
}