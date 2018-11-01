var game: Game;

class Game  {
    public id: string;
    public date: Date;
    public questionIndex: number;
    public waitingOn: WaitingOn;
    public players: Array<Player>;
    public winnings: number;
    public riddles: Array<Riddle>;
    public winner: Player;

    constructor (options:any) {
        this.id = options.id || getQueryString("gameId");

        this.date = options.date || Date.now();

        this.questionIndex = options.questionIndex || -1;

        this.waitingOn = options.waitingOn || "players";

        var thePlayers = Array<Player>();

        if(options.players && options.players.length > 0) {
            options.players.forEach(function(p: any){
                thePlayers.push(new Player(p));
            });
        }

        this.players = thePlayers;

        this.winnings = options.winnings || new Object();

        var riddlesFromOptions = Array<Riddle>();
        if(options.riddles && options.riddles.length > 0) {
            options.riddles.forEach(function(r: any){
                riddlesFromOptions.push(new Riddle(r));
            });
        }
        this.riddles = riddlesFromOptions;

        this.winner = options.winner || null;
    }
}