"use strict";
function newGame() {
    var objectAsString = '{"owner": "dave","id": "poop8","value": "words and what not7"}';
    postGame(objectAsString, printCrap);
}
function printCrap(object) {
    console.log("object: " + object);
}
function printCrap2(object) {
    console.log("object: " + object);
}
function joinGame(id) {
    getGame(id, printCrap2);
}
