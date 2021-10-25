/*Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/


const teams = [
    {
        "nome": "Blu",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Verde",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Gialla",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Rossa",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
]

//1.creare un random number generator

function randomNumberGenerator(numMin, numMax) {
    let numRandom = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
    return numRandom;
}

//2.accedere ai punti fatti di ogni squadra e pushare un numero random
//3.accedere ai falli subiti di ogni squadra e pushare un numero random

function pushRandomValues(teams) {

    for (let index = 0; index < teams.length; index++) {
        const team = teams[index];
        //2
        team["puntiFatti"] = randomNumberGenerator(1, 6);
        //3
        team["falliSubiti"] = randomNumberGenerator(1, 6);

       // console.log(team["puntiFatti"]);
       // console.log(team["falliSubiti"])

    }
    return(teams);
}


pushRandomValues(teams);

console.log(teams)


//3. creazione di un nuovo array i cui elementi contengono solo nomi e falli subiti

let featuresToPrint = [];

