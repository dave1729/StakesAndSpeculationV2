"use strict";
function generateGameId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').toUpperCase().substr(0, 4);
}
function createGame() {
    if (game != null && !game.id.isNullOrEmpty()) {
        var element = document.getElementById("game-id");
        element.innerText = "Already in Game: ".concat(game.id);
        return;
    }
    var newId = generateGameId();
    game = new Game({ id: newId });
    if (games == null || games == undefined || !(games instanceof Array) || games.length < 1) {
        games = new Array();
        games.push(game);
    }
    else {
        games.push(game);
    }
    saveGames(games, undefined);
    var element = document.getElementById("game-id");
    element.innerText = newId;
}
function encodeTextInTextArea() {
    if (game == undefined || game.id.isNullOrEmpty()) {
        alert("Cannot encode without game ID.");
    }
    console.log("Ciphering with ".concat(game.id));
    var element = document.getElementById("text-area");
    var encodedText = encodeText(element.value, game.id);
    console.log("Encoded. ".concat(encodedText));
    element.value = encodedText;
    saveSessionDescriptions(new Array(encodedText), undefined);
}
function encodeText(text, cipherKey) {
    var result = "";
    var cipherSeries = new CipherSeries(cipherKey);
    for (var i = 0; i < text.length; i++) {
        var code = text.charCodeAt(i);
        console.log("charcode ".concat(code));
        result += String.fromCharCode(code + cipherSeries.getNext());
    }
    return result;
}
function decodeTextInTextArea() {
    getSessionDescriptions(decodeTextInTextArea2);
}
function decodeTextInTextArea2(text) {
    if (game == undefined || game.id.isNullOrEmpty()) {
        alert("Cannot encode without game ID.");
    }
    console.log("Ciphering with ".concat(game.id));
    var element = document.getElementById("text-area");
    element.value = decodeText(text[0], game.id);
}
function decodeText(text, cipherKey) {
    var result = "";
    var cipherSeries = new CipherSeries(cipherKey);
    for (var i = 0; i < text.length; i++) {
        var code = text.charCodeAt(i);
        result += String.fromCharCode(code - cipherSeries.getNext());
    }
    return result;
}
