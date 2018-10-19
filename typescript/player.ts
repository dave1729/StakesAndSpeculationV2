class Player {
    public user: User;
    public color: string;
    public money: number;
    public answers: Array<Answer>;
    public bets: Array<Bet>;

    constructor(options: any) {
        if(options == null) {
            this.user = new User(null);
            this.color = "red";
            this.money = 0;
            this.answers = new Array<Answer>();
            this.bets = new Array<Bet>();
        }
        else {
            this.user = options.user;
            this.color = options.color;
            this.money = options.money;
            this.answers = new Array<Answer>();
            this.bets = new Array<Bet>();
            if(options.answers && options.answers.length > 0) {
                options.answers.forEach((answer: any) => this.answers.push(answer));
            }
            if(options.bets && options.bets.length > 0) {
                options.bets.forEach((bet: any) => this.bets.push(bet));
            }
        }
    }

    addAnswer(answer: Answer, questionIndex: number) {
        this.answers[questionIndex] = answer;
    }

    accessTokenOrNull() {
        if(this.user != null &&
           this.user.access_token != null &&
           this.user.access_token != "") {
                return this.user.access_token;
        }

        return null;
    }
}