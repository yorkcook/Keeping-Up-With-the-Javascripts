// This file is the first HW assignment on Pirple Keeping Up With the JavaScripts

/*Find below some facts about Frank Sinatra,
some of which I made up*/

let artist = "Frank Sinatra";

let genre = "Vocal Jazz";

let topHit = "New York, New York";

let friends = ["Dean Martin", "Sammy Davis Jr.", "Joey Bishop"];

let singer = {
  firstName: "Frank",
  lastName: "Sinatra",
  nickname: "Frankie Blue Eyes",
  rank: "Legend"
};

let durationInSeconds = 206;

console.log(artist);
console.log("------");
console.log(genre);
console.log("------");
console.log(durationInSeconds);
console.log("------");
if (durationInSeconds > 150) {
  console.log("We moving and groovinnn!");
}

console.log(friends[1]);
console.log("------");
console.log(singer);
console.log("------");
console.log(singer.nickname);
console.log("------");

//adding a motto to the singer object
singer.motto = "Let the good times roll!";

console.log("------");
console.log(singer);

//updating the nickname in the singer object
singer.nickname = "The Bad Dude";

console.log("------");
console.log(singer);

delete singer.motto;

console.log(singer);
