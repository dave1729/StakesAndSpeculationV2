function newGame(){
    var objectAsString = '{"owner": "dave","id": "poop8","value": "words and what not7"}';
    postGame(objectAsString, printCrap);
}

function printCrap(object: object) {
    console.log("object: " + object);
}
function printCrap2(object: string) {
    console.log("object: " + object);
}

function joinGame(id: string) {
    getGame(id, printCrap2);
}