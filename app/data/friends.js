// makes sure a differenceis always positive
function difference(a, b) {
    return Math.abs(a - b);
}
  
  
  // adds up all of the scores
function arraylength(friends) {
  for (var i = 0; i < friends.length; i++) { 
    var friendScore = friends[i].scores;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(friendScore.reduce(reducer));

  }
}
  
var friends = [
    {
        name: "Dude WhoWorks For Microsoft",
        photo: "../public/images/DudeWhoWorksForMicrosoft.jpg",
        scores: [
            5,
            1,
            2,
            4,
            3,
            5,
            1,
            4,
            1,
            3
        ]
    },
    {
        name: "Tessa Bridges Time Travel Required!",
        photo: "../public/images/TessaBridgesTimeTravelReq.jpg",
        scores: [
            1,
            1,
            2,
            1,
            3,
            1,
            1,
            4,
            1,
            2
        ]
    },
    {
        name: "Bill Moe",
        photo: "../public/images/billMoe.jpg",
        scores: [
            5,
            3,
            3,
            4,
            3,
            3,
            3,
            4,
            1,
            2
        ]
    },
    {
        name: "Shela",
        photo: "../public/images/shela.jpg",
        scores: [
            1,
            1,
            1,
            1,
            5,
            5,
            1,
            4,
            4,
            4
        ]
    },
    {
        name: "Richard",
        photo: "../public/images/Richard.jpg",
        scores: [
            1,
            1,
            1,
            1,
            5,
            5,
            1,
            4,
            4,
            4
        ]
    }

];
  
arraylength(friends);
// console.log(friends[1].scores);

module.exports = friends;
