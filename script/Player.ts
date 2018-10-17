class Player {
    access_token!: string;
    name!: string;
    color!: string;
    money!: number;
    answers: Array<number>;
    bets: Array<Bet>;

    constructor(options: any) {
        this.answers = new Array<number>();
        this.bets = new Array<Bet>();

        if(options) {
            this.access_token = options.access_token;
            this.name = options.name;
            this.color = options.color || null;
            this.money = options.money || [];
            this.answers = new Array<number>();
            this.bets = new Array<Bet>();
            if(options.answers && options.answers.length > 0) {
                options.answers.forEach((answer: any) => this.answers.push(answer));
            }
            if(options.bets && options.bets.length > 0) {
                options.bets.forEach((bet: any) => this.bets.push(bet));
            }
        }
    }
}