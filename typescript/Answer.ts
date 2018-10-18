class Answer {
    public value: number;
    public unitType: UnitType;

    constructor (options: any) {
        shouldNotBeNull(options, 1);
        this.value = options.value;
        this.unitType = options.unitType;
    }
}