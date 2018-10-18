class Player {
    public access_token: string;
    public name: string;
    public color: string;
    public money: number;
    public answers: Array<Answer>;
    public bets: Array<Bet>;

    constructor(options: any) {
        if(options == null) {
            this.access_token = "1234";
            this.name = "Temp Player Name";
            this.color = "red";
            this.money = 0;
            this.answers = new Array<Answer>();
            this.bets = new Array<Bet>();
        }
        else {
            this.access_token = options.access_token;
            this.name = options.name;
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
}