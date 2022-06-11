/* Create a function named askTvSerie() that will ask the user for the following data about its favorite TV 
serie:

Name
Production year
Names of the cast members (there can be as much as the user want)
That function must gather all the data in a single object and return it. 
The data structure must be elegant.

Create a program that use that function to generate a TV serie object and display it to the user in JSON 
format. */

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