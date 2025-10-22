/*****************************
* 022 - Les tableaux indicés (Arrays)
*/


// 8. Tableau à deux dimensions

/* 
Chaque élément d'un tableau peut lui-même être un tableau.
On parle alors de tableau à deux dimensions.
Voici un exemple de tableau à deux dimensions (un tableau de tableaux),
qui pourrait être utilisé comme tableau de positionnement des mines d'un jeu du démineur.
*/
//un tableaux dans un tableaux
const mines = [[0, 1, 0, 1],
             [1, 0, 0, 0], 
             [1, 0, 1, 0], 
             [0, 0, 0, 0]];
/* 
EXERCICE :
- évaluez chacune des expressions qui suivent
- vérifiez votre réponse en affichant la valeur de l'expression dans la console
*/
mines		// tous le tableaux
mines[1]	// tous la 2 lignes du tableaux  [1, 0, 0, 0],
mines[0][3] // 1



// EXERCICE 7 :
// Etape 1 :
// Pour récupérer la valeur à la deuxième ligne troisième colonne du tableau,
// utilisez les indices corrects (n'oubliez pas que les indices commencent à zéro).
console.log(mines[1][2]);

// Testez de la même manière l'emplacement situé en première ligne quatrième colonne
console.log(mines[0][3]);

//la longeur du premiers tableaux
console.log(mines[0].length);

console.log('parcourez tous les elements')
//parcourez tous les elements
//boucle imbriquer
for (let i = 0; i < mines.length; i++) {
    for (let j = 0; j < mines[i].length; j++) {
        console.log(mines[i][j]);
    }
}
// Etape 2 :
// Pour indiquer combien de mines contient la première ligne de ce tableau,
// vous devez parcourir les éléments de cette ligne et compter combien d'entre eux sont égaux à 1.
let count = 0;
for (let i = 0; i < mines[0].length; i++) {
    if (mines[0][i] === 1) {
        count++;//count = count +1
        console.log('touché une mine ');
    }
}
console.log(count);
console.log("boucle forof")
for (const l of mines) {
    for (const c of l) {
        console.log(c);
        console.log('touché une mine ');
    }
}
console.log(count);