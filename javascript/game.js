"use strict";
var Game = /** @class */ (function () {
    function Game(options) {
        this.id = options.id || getQueryString("gameId");
        this.date = options.date || Date.now();
        this.questionIndex = options.questionIndex;
        if (this.questionIndex == null || this.questionIndex == undefined)
            this.questionIndex = -1;
        this.waitingOn = options.waitingOn || "players";
        var thePlayers = Array();
        if (options.players && options.players.length > 0) {
            options.players.forEach(function (p) {
                thePlayers.push(new Player(p));
            });
        }
        this.players = thePlayers;
        this.winnings = options.winnings || new Object();
        var riddlesFromOptions = Array();
        if (options.riddles && options.riddles.length > 0) {
            options.riddles.forEach(function (r) {
                riddlesFromOptions.push(new Riddle(r));
            });
        }
        this.riddles = riddlesFromOptions;
        this.winner = options.winner || null;
    }
    return Game;
}());
