var friendsData = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friendsdata);
    });
    app.post("/api/friends", function(req, res){
        friendsData = [];
    });
}