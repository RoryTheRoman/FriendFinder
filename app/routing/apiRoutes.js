var friendsData = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });
    app.post("/api/friends", function(req, res){
        var currentUser = req.body;
        console.log(currentUser)
        var currentScores = currentUser.scores;
        var matchName = "";
        var matchImg = "";
        // var compareArray = [];
        // var bestMatch = 0;
        var compareDiff = 1000;
        for (var i = 0; i < friendsData.length; i++) {
            var compareScore = 0
            for (var j = 0; j < currentScores.length; j++) {
                compareScore += Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(currentScores[j]));


                }
            if (compareScore < compareDiff) {
                compareDiff = compareScore;
                matchName = friendsData[i].lovebird;
                matchImg = friendsData[i].photo;
                console.log(matchImg);
                console.log(matchName);
            }

        }
        friendsData.push(currentUser);// gonna want to put this at the end, otherwise i'm going to be comparing current user scores with themselves.
        res.json({status: 'OK', matchName: matchName, matchImg: matchImg });
    });

    
}



