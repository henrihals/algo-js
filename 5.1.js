const readlineSync = require("readline-sync");

let anotherCast = "";
let cast = [];

function askTvSerie() {

    let serieName = readlineSync.question('Quel est le nom de la serie ?');
    let year = readlineSync.question('Quel est l\'annee de production ?');

    do {
        let castMember = readlineSync.question('Quel est le nom du cast ?');
        cast.push(castMember);
        anotherCast = readlineSync.question('Voulez vous ajouter un autre cast ? (oui/non)');
    } while (anotherCast !== 'non');

    return {
        "Name of the serie": serieName,
        "Production Year": year,
        "Cast members": cast,
    };
}

console.log(JSON.stringify(askTvSerie()));