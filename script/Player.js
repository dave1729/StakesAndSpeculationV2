var Player = /** @class */ (function () {
    function Player(options) {
        var _this = this;
        this.answers = new Array();
        this.bets = new Array();
        if (options) {
            this.access_token = options.access_token;
            this.name = options.name;
            this.color = options.color || null;
            this.money = options.money || [];
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
    return Player;
}());
