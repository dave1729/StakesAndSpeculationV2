var user = null;

function checkForAccessToken()
{
    if(no access token it's bad...)
    {
        
    }
}

function goToLogin()
{
    if(user === null)
    {
        console.log("assigning user");
        user = "user1";
    }
    else{
        console.log("user already assigned: " + user)
    }

    window.location.href = "../views/login.html";
}

function commonContent() {
    console.log("Running Common Content");
    var client = new XMLHttpRequest();
        client.open('GET', '../views/partialCommon.html');
        client.onreadystatechange = function() {
            document.getElementById('common-content').innerHTML = client.responseText;
        }
        client.send();
}