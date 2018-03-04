var friendsData = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });
    app.post("/api/friends", function(req, res){
        var currentUser = req.body;
        console.log(currentUser)
        friendsData.push(currentUser);
        res.json(true);
        var currentScores = currentUser.scores;
    });

    for(var i=0; i < friendsData.length; i ++){
        // for(var j=0; j < currentScores.length; j ++){

        // }
    }
}

// for(var i=0; i < friendsData.length; i ++){
// create a variable to store the compared scores    
//     var compare = 0;
   
//     for(var j=0; j < potentialScores.length; i++){
//         compare += Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(potentialScorej])) (i do think i need parse int b/c my values are integers)
//     }

// }

// here's where i'm lost, do i need another array to push all of the compared scores to?
// then i pick the lowest of that array using Math.min() to return the results to the modal?

