var friendsData = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });
    app.post("/api/friends", function(req, res){
        var potentialMatch = req.body;
        console.log(potentialMatch)
        friendsData.push(potentialMatch);
        res.json(true);
        // var potentialScores = potentialMatch.scores;
        // console.log(potentialScores);  no idea why this is undefined,
        //but i'm getting a weird thing with the way my scores are returning in the object

    });
}
// loop through the friendsData arrays
// for(var i=0; i < friendsData.length; i ++){
// create a variable to store the compared scores    
//     var compare = 0;
// loop through scores of each     
//     for(var j=0; j < potentialScores.length; i++){
//         compare += Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(potentialScorej])) (i do think i need parse int b/c my values are integers)
//     }

// }

// here's where i'm lost, do i need another array to push all of the compared scores to?
// then i pick the lowest of that array using Math.min() to return the results to the modal?

