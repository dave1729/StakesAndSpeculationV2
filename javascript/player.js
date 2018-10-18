"use strict";
var Player = /** @class */ (function () {
    function Player(options) {
        var _this = this;
        if (options == null) {
            this.access_token = "1234";
            this.name = "Temp Player Name";
            this.color = "red";
            this.money = 0;
            this.answers = new Array();
            this.bets = new Array();
        }
        else {
            this.access_token = options.access_token;
            this.name = options.name;
            this.color = options.color;
            this.money = options.money;
            this.answers = new Array();
            this.bets = new Array();
            if (options.answers && options.answers.length > 0) {
                options.answers.forEach(function (answer) { return _this.answers.push(answer); });
            }
            if (options.bets && options.bets.length > 0) {
                options.bets.forEach(function (bet) { return _this.bets.push(bet); });
            }
        }
    }
    Player.prototype.addAnswer = function (answer, questionIndex) {
        this.answers[questionIndex] = answer;
    };
    return Player;
}());
