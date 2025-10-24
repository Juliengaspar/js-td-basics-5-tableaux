/*
TABLEAUX - PRÉPA 3 : Maximum d'un tableau
1. Initialisez un tableau qui contient les nombres 3, 11, 7, 2, 9 et 10.
2. Affichez le tableau.
3. Calculez et affichez ensuite la plus grande valeur présente dans le tableau (précédée du message "La plus grande valeur de mon tableau est …").
4. Changez quelques valeurs dans le tableau (par exemple, le 9 en 90) et retestez.

Aide :
- Initialisez une variable 'max' avec la première valeur du tableau.
- Parcourez le tableau à la recherche d'un nombre plus grand que 'max' en commençant au deuxième élément du tableau :
  - Si la valeur courante est supérieure à 'max', elle devient le nouveau 'max'.
- Affichez le résultat.
*/
const number = [3,11,7,2,9,10];//creation d'un tableaux
let max = 0;//initialisation une variable max
for (let i = 0; i < number.length; i++) {//parcourer le tableaux
    console.log(number[i]);
    if (number[i] > max) {//tester chaque element du tableaux et si plus grand que max il devien la nouvel valeur de max et il teste les suivante pour tester
        max = number[i];//on met la valeur la plus grand a max

    }
}
console.log(`La plus grande valeur de mon tableau est ${max}`);//on affiche
