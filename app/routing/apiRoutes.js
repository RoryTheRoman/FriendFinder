var friendsData = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });
    app.post("/api/friends", function(req, res){
        var userInput = req.body;
        friendsData.push(userInput);
        res.json(true);
        var userScore = req.scores;

    });
}