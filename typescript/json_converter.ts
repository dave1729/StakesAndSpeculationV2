function serializeFromJson(responseText: string, myJsonType: MyJsonType) {
    if(responseText.length <= 0) console.log("Response Test is Empty.");
    var responseObject = JSON.parse(responseText);

    if(myJsonType === MyJsonType.User) {
        var users = Array<User>();
        responseObject.forEach(function(u: any){
            users.push(new User(u));
        });
        return users;
    }
    else if(myJsonType === MyJsonType.Riddle) {
        var riddles = Array<Riddle>();
        responseObject.forEach(function(r: any){
            riddles.push(new Riddle(r));
        });
        return riddles;
    }
    else if(myJsonType === MyJsonType.Game) {
        var games = Array<Game>();
        responseObject.forEach(function(g: any){
            games.push(new Game(g));
        });
        return games;
    }
    else {
        return null;
    }
}