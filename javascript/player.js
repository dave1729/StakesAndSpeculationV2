"use strict";
var Player = /** @class */ (function () {
    function Player(options) {
        var _this = this;
        if (options == null) {
            this.user = new User(null);
            this.color = "red";
            this.money = 0;
            this.answers = new Array();
            this.bets = new Array();
        }
        else {
            this.user = options.user;
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
    Player.prototype.accessTokenOrNull = function () {
        if (this.user != null &&
            this.user.access_token != null &&
            this.user.access_token != "") {
            return this.user.access_token;
        }
        return null;
    };
    return Player;
}());
