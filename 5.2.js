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