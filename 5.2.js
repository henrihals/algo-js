/* Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined 
in the previous exercise and return a list of the same cast but in a random order.

Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie 
then display a randomized list of the previous cast that will form the new cast of your next serie. */

const readlineSync = require("readline-sync");

function askTvSerie() {
  let name = readlineSync.question("what's your favorite Tv Show?");
  let time = readlineSync.question("What was the year of its production?");
  let cast = [];

  do {
    let castAsk = readlineSync.question("Who was in the main cast");
    cast.push(castAsk);
    askAgain = readlineSync.question("Wanna add another actors?");
  } while (askAgain === "yes");

  let castList = cast.toString();

  const tvSerie = {
    "TV Show": name,
    "Years of production": time,
    "cast members": castList,
  };

  return tvSerie;
}

let tvShow = askTvSerie();

function randomizeCast(tvShow) {}