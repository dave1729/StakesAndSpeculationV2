function shouldNotBeNull(options: any, lid: number) {
    if(!options) {
        throw new Error(`Unexpected Null. Lid: ${lid}`);
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

var hasGotAccess = hasAccess();
console.log("has access: " + hasGotAccess);
if (window.location.href.indexOf("login") === -1 && !hasGotAccess) {
    console.log("GoTo Login");
    window.location.href = "../views/login.html";
}

function hasAccess() {
    console.log("Just assigning token during has access...");
    if(player != null && player.accessTokenOrNull() != null) {
        return true;
    }

    return false;
}

function goTo(htmlPartialRef: string)
{
    var htmlRef = "../views/" + htmlPartialRef;
    if(player != null && player.accessTokenOrNull() != null) {
        console.log("Preserving player access_token.");
        htmlRef += "?access_token=" + player.user.access_token;
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