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
    var element = <HTMLTextAreaElement> document.getElementById("text-area");
    element.value = encodeText(element.value);
}

function encodeText(text: string) {
    var result = "";
    for(var i = 0 ; i < text.length; i++) {
        var code = text.charCodeAt(i);
        console.log(`charcode ${code}`);
        result += String.fromCharCode(code + 11);
    }
    return result;
}

function decodeTextInTextArea() {
    var element = <HTMLTextAreaElement> document.getElementById("text-area");
    element.value = decodeText(element.value);
}

function decodeText(text: string) {
    var result = "";
    for(var i = 0 ; i < text.length; i++) {
        var code = text.charCodeAt(i);
        result += String.fromCharCode(code - 11);
    }
    return result;
}