/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const bikes = [
    {
        "nome": "Tarmac SL7",
        "peso": 800
    },
    {
        "nome": "Wilier Filante SLR",
        "peso": 870
    },
    {
        "nome": "Argon 18 Gallium Pro Disc",
        "peso": 760
    },
    {
        "nome": "Giant TCR 2021",
        "peso": 765
    },
]


let allBikesWheight = [];
let lowestWeight = bikes[0];


for (let index = 0; index < bikes.length; index++) {
    const bikeFeatures = bikes[index];


    if (lowestWeight.peso > bikeFeatures.peso) {
        lowestWeight = bikeFeatures;
    }

}


const {nome, peso} = lowestWeight;


document.getElementById(bestBike);

bestBike.innerHTML = `The lowest weight bike is:  ${nome}. It weights ${peso}grams`
