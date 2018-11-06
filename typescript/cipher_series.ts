class CipherSeries {
    private cipherValues: Array<number>;
    private index: number;

    constructor(secret: string) {
        if(secret == "" || secret.length < 2) {
            throw new Error(`Invalid secret for Cipher. Value: ${secret}`);
        }

        this.cipherValues = this.createCipherValues(secret);
        this.index = this.cipherValues.length - 1;
    }

    getNext() {
        if(this.index === (this.cipherValues.length - 1)) {
            this.index = 0;
        }
        else {
            this.index++;
        }

        return this.cipherValues[this.index];
    }

    private createCipherValues(secret: string) {
        secret = this.doubleSecretLength(this.doubleSecretLength(secret));

        var cipherValues = new Array<number>();
        for(var i = 0; i < secret.length; i++) {
            cipherValues.push(secret.charCodeAt(i));
        }

        return cipherValues;
    }

    private doubleSecretLength(secret: string) {
        var secretHash = hash(secret);
        var hashPart1 = secretHash % 100;
        secretHash = Math.round(secretHash / 100);
        var hashPart2 = secretHash % 100;
        secretHash = Math.round(secretHash / 100);
        var hashPart3 = secretHash % 100;
        secretHash = Math.round(secretHash / 100);
        var hashPart4 = secretHash % 100;
        var hashPart: number = 0;

        var secretLength = secret.length;
        var hashPartCounter = 1;
        for(var i = 0; i < secretLength; i++) {
            hashPart =
                hashPart === hashPart1 ?
                hashPart2 :
                hashPart === hashPart2 ?
                hashPart3 :
                hashPart === hashPart3 ?
                hashPart4 :
                hashPart1;
            var newChar = String.fromCharCode(hashPart * secret.charCodeAt(i));
            secret = `${secret}${newChar}`;
        }
        
        return secret;
    }
}