"use strict";
function newPlayer() {
    var userNameElement = document.getElementById("username-input");
    var passwordElement = document.getElementById("password-input");
    var userName = userNameElement == null ? "" : userNameElement.value;
    var password = passwordElement == null ? "" : passwordElement.value;
    if (password !== "" && userName !== "") {
        console.log("password and name accepted.");
        var saltedPassword = hash(password);
        var newUser = new User({ name: userName, access_token: saltedPassword });
        player = new Player({ user: newUser });
    }
    else {
        alert("Bad Password: " + password + ". Or user name: " + userName + ".");
    }
}
