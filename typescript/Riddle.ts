class Riddle {
    public id: string;
    public question: string;
    public answer: Answer;
    public funfact: string;
    public sourceName: string;
    public source: string;
    public sourceDate: Date;
    public creationDate: Date;
    public createdBy: string;
    public lastUsedDate: Date;

    constructor (options: any) {
        this.id = options.id;
        this.question = options.question;
        this.answer = options.answer;
        this.funfact = options.funfact;
        this.sourceName = options.sourceName;
        this.source = options.source;
        this.sourceDate = options.sourceDate;
        this.creationDate = options.creationDate;
        this.createdBy = options.createdBy;
        this.lastUsedDate = options.lastUsedDate;
    }
 }