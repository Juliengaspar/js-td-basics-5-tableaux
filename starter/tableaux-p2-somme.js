/*
TABLEAUX - PRÉPA 2 : Somme des valeurs
1. Initialisez un tableau qui contient les nombres 11, 3, 7, 2, 9 et 10.
2. Affichez le tableau (précédé du texte : "Voici mon tableau de nombres :").
3. Calculez puis affichez la somme des valeurs du tableau 'nombres' :
   - Utilisez la méthode 'forEach()' pour afficher la somme des nombres dans le tableau (précédée du texte : "La somme des nombres de mon tableau est …").
   - Utilisez une boucle 'for/of' pour faire la même chose.

Version alternative (avec BONUS) :
1. Initialisez
   - une variable 'message' à une chaîne vide ;
   - une variable 'somme' à 0.
2. Parcourez votre tableau de nombres à l'aide d'une boucle 'for' pour construire le message : "… + … + … = ".
3. Parcourez votre tableau de nombres à l'aide d'une boucle 'for/of' pour calculer la somme des valeurs du tableau.
4. Affichez le message final : "… + … + … = …".
*/

const numbers = [11, 3, 7, 2, 9, 10];
let message = " "
let sum = 0;

console.log("Voici mon tableau de nombres :")
for (let i = 1; i < numbers.length; i++) {
    console.log(numbers[i]);
    sum +=  numbers[i];
    message +=  numbers[i];
    if (i < numbers.length - 1) {
        message += " + " ;
    }
}
    console.log(message+ ' =' + sum)
//boucle foreach
console.log("boucle foreach");
numbers.forEach(number => {
    //console.log(`${number}+`);
    sum += number;
})
    console.log(`somme des valeurs du tableau = ${sum}`);

console.log("boucle forof");

let sum2 = 0;
let message2 = " ";
for (const number of numbers) {
    //console.log(`${number}+`);
    sum2 += number;
    message2 +=   ' + ' + number;
    if (number < numbers.length - 1) {
        message2 += " + " ;
    }

}
    console.log(message2 + ' =' + sum);
    console.log(`somme des valeurs du tableau = ${sum2}`);
