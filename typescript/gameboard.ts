function generateGameId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').toUpperCase().substr(0, 4);
}

function createGame() {
    if(game != null && !game.id.isNullOrEmpty()) {
        var element = <HTMLDivElement> document.getElementById("game-id");
        element.innerText = `Already in Game: ${game.id}`;
        return;
    }

    var newId = generateGameId();

    game = new Game({id: newId});

    if (games == null || games == undefined || !(games instanceof Array) || games.length < 1) {
        games = new Array<Game>();
        games.push(game);
    }
    else {
        games.push(game);
    }

    saveGames(games, undefined);

    var element = <HTMLDivElement> document.getElementById("game-id");
    element.innerText = newId;
}

function encodeTextInTextArea() {
    if(game == undefined || game.id.isNullOrEmpty()) {
        alert("Cannot encode without game ID.");
    }

    console.log(`Ciphering with ${game.id}`);
    var element = <HTMLTextAreaElement> document.getElementById("text-area");
    var encodedText = encodeText(element.value, game.id);
    console.log(`Encoded. ${encodedText}`);
    element.value = encodedText;
    saveSessionDescriptions(new Array<string>(encodedText), undefined);
}

function encodeText(text: string, cipherKey: string) {
    var result = "";
    var cipherSeries = new CipherSeries(cipherKey);
    for(var i = 0 ; i < text.length; i++) {
        var code = text.charCodeAt(i);
        console.log(`charcode ${code}`);
        result += String.fromCharCode(code + cipherSeries.getNext());
    }
    return result;
}

function decodeTextInTextArea() {
    getSessionDescriptions(decodeTextInTextArea2);
}

function decodeTextInTextArea2(text: Array<string>) {
    if(game == undefined || game.id.isNullOrEmpty()) {
        alert("Cannot encode without game ID.");
    }

    console.log(`Ciphering with ${game.id}`);
    var element = <HTMLTextAreaElement> document.getElementById("text-area");
    element.value = decodeText(text[0], game.id);
}

function decodeText(text: string, cipherKey: string) {
    var result = "";
    var cipherSeries = new CipherSeries(cipherKey);
    for(var i = 0 ; i < text.length; i++) {
        var code = text.charCodeAt(i);
        result += String.fromCharCode(code - cipherSeries.getNext());
    }
    return result;
}