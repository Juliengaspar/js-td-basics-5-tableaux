/*
TABLEAUX - PRÉPA 4 : Date valide - version 3
- Déclarez deux fonctions :
    - La première fonction 'isBissextile' retourne true ou false selon que l'année est bissextile ou pas.
    - La deuxième fonction 'isValid' retourne true ou false selon que la date est valide ou pas.
    Stockez cette fois le nombre maximum de jours autorisé par mois dans un tableau (utilisez 'isBissextile' pour gérer le cas du mois de février).
- Utilisez 'isValid' pour décider si votre date est valide avant d'afficher votre message dans la console.
*/
const userDays = parseInt(prompt("Entrez le jour"));
const userMonth = parseInt(prompt("Entrez le mois"));
const userYear = parseInt(prompt("Entrez une année: "));

// Fonction pour vérifier si une année est bissextile
function isBissextile(annee) {
    // Code pour déterminer si 'annee' est bissextile
    return ((annee % 4 === 0 &&annee % 100 !== 0) || annee % 400 === 0);
}

// Fonction pour vérifier si une date est valide
function isValid(jour, mois, annee) {
    // Code pour vérifier si la date (jour, mois, annee) est valide
    let maxDays = 31;
    const joursMois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];//chaque jours max lors d'un mois

    if (annee <1 || mois < 1 || jour < 1) {
        console.log(`L’années , le mois , le jour doivent êtres positif : année ->${annee} moins ->${mois} -> jours ->${jour}`)
        return false
    }
    if (mois >12 ) {
        console.log('Le mois doit etres plus petit que 12')
        return false
    }
    if (mois ===4 || mois ===6 || mois ===9 || mois ===11) {
        maxDays = 30;
    }
    if (mois === 2) {
        if (isBissextile(annee)) {
            joursMois.splice(1, 1, 29);

            maxDays = 29;
        } else {
            maxDays = 28;
        }
    }
    if (jour>1 && jour<= joursMois[mois-1]){
        return true;
    }else {
        console.log(`le nombres de jours dans le mois dois etres inferior ou egale à ${maxDays} jours.`);

        return false;
    }

}

// Utilisez 'isValid' pour vérifier si une date est valide avant d'afficher un message dans la console
if (isValid(userDays,userMonth,userYear )) {
    console.log(`super c‘est une bonne ${userYear}, ${userMonth}, ${userDays} date`)
}else {
    console.log(`date invalid ${userYear}, ${userMonth}, ${userDays}`)

}