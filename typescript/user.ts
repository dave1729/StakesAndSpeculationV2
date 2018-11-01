var user: User;

class User {
    public access_token: string;
    public name: string;

    constructor(options: any) {
        if(options == null) {
            this.access_token = "";
            this.name = "";
        }
        else {
            this.access_token = options.access_token;
            this.name = options.name;
        }
    }

    accessTokenOrNull() {
        if(this.access_token != undefined &&
           this.access_token != null &&
           this.access_token != "") {
                return this.access_token;
        }

        return null;
    }
}