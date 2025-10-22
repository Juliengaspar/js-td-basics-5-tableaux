/*****************************
* 029-2 - Boucles pour parcourir des tableaux
*/

// EXERCICE 1 :
// 1. Créez un tableau 'films' contenant les films "Forrest Gump", "Bohemian Rhapsody", "Le Seigneur des anneaux" et "Harry Potter".
const films = ["Forrest Gump", "Bohemian Rhapsody", "Le Seigneur des anneaux", "Harry Potter"];

// 2. Parcourez ce tableau pour afficher les films qu'il contient :
//    1°) avec une boucle for
console.log("Avec une boucle for :");
for (let i = 0; i < films.length; i++) {
    console.log(films[i]);
}

//    2°) avec une boucle while
console.log("Avec une boucle while :");
let i = 0;
while (i<films.length) {
    console.log(films[i]);
    i++;

}

//    3°) avec une boucle for of
console.log("Avec une boucle for of :");
for (const film of films) {
    console.log(film);
}

// EXERCICE 2 :
// - Stockez le tableau ['John', 'Smith', 1990, 'designer', false, 'blue'] dans une variable 'john'.
const john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
console.table(john);

// - Parcourez ce tableau pour afficher les informations qu'il contient :
//    1°) avec une boucle for
console.log("Avec une boucle for :");
for (let j = 0; j < john.length; j++) {
    console.log(john[j]);
}

//    2°) avec une boucle while
console.log("Avec une boucle while :");
let j = 0;
while (j<john.length) {
    console.log(john[j]);
    j++;

}

//    3°) avec une boucle for of
console.log("Avec une boucle for of:");
for (const prof of john) {
    console.log(prof);
}

// EXERCICE 3 :
// - Créez un tableau "nombres" contenant les 5 premiers entiers.
const nombres = [1, 2, 3, 4, 5];

// - Affichez "Voici mon tableau de nombres :" suivi du tableau.
for (let k = 0; k < nombres.length; k++) {
    console.log(`Voici mon tableau de nombres `);
    console.log(`${nombres[k]}`);
}

// - Créez un tableau vide "carres" qui contiendra les carrés de vos nombres.
const carres = [];

for (let i = 0; i <nombres.length ; i++) {
    //carres.push(nombres[i] * nombres[i]);//on ajout des donner d'un tableaux a un tableaux vide
    //ou
    carres.push(Math.pow(nombres[i], 2));//mettres les valeur aux carré avec l'obj Math.pow
}
// - Parcourez le tableau "nombres" avec une boucle forEach et ajoutez dans le tableau "carres" le carré de chaque nombre.
//pour le foreach faux une fn qui a pour paramtres un items, cet fn vas etres executer sur chaque elements on peux le reduire a
console.log('function foreach');
const toto =  (items) =>{
    console.log(items);
}
carres.forEach(toto);
console.log('boucle foreach');
//même chose plus cours
carres.forEach((item)=>{
    console.log(item);

});

// - Affichez "Voici mon tableau de nombres au carré :" suivi du tableau contenant les carrés.

