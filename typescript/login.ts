function newPlayer(){
    var userNameElement = document.getElementById("user-name-input");
    var passwordElement = document.getElementById("password-input");

    var userName = userNameElement == null ? "" : userNameElement.innerHTML;
    var password = passwordElement == null ? "" : passwordElement.innerHTML;

    if(password != null && userName != null) {
        var saltedPassword = hash(password);
        player = new Player({name: userName, access_token: saltedPassword});
    }
    else {
        alert("Bad Password.");
    }
}