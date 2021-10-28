/* 1- CONNEXION UTILISATEUR    */
// information stockée en BDD
let email = "trou@bado.fr";
let password = "passe";

//Informations recues du formulaire de connexion
let inputEmail = "";
let inputPassword = "";

//Ecrire le code qui renvoie en console l'état de l'utilisateur apres le processus de conexion.

if (inputEmail === email) {
    if (inputPassword === password) {
        console.log("Vous êtes bien connecté. Bienvenue !");
    } else console.log("Erreur de mot de passe");
} else console.log("Il n'y a aucun compte lié à cette adresse mail.");



/* 2- TEST DE PARTIE */

let input = 0;
// si input est pair, parite sera égal à 0.
let parite = input % 2;

// écrire le code qui affiche en console la parité de input
if (parite === 0) {
    console.log("La valeur de la variable input est paire.");
} else console.log("La valeur de la variable input est impaire.");



/* 3- CONSOMMATION D'ENERGIE */

let isShinning = false;
let isLighten = false;

// renvoyer sur l' UI l'état de la lumière lors de la gestion de l'énergie...

// si le soleil brille, si la lumière est allumée : vous devriez...
//                      sinon (donc lumière éteinte) : bravo...
// si le soleil ne brille pas, si la lumière est éteinte : vous pouvez...
//                             si lumière allumée ne fait rien.
if (isShinning === true) {
    if (isLighten === true) {
        console.log("Vous devriez éteindre la lumière.");
    } else console.log("Bravo, vous économisez l'énergie.");
} else {
    if (isLighten === false) {
        console.log("Vous pouvez allumer la lumière.");
    }
}



/* 4- FIZZBUZZ */
/** Generer un nombre aléatoire 
 *  - Si le nombre est un multiple de 3 afficher en console fizz
 *  - Si le nombre est un multiple de 5 afficher en console buzz
 *  - Si le nombre est un multiple de de 3 et de 5 afficher en console fizzbuzz
 */

// On affecte à la variable r un entier aléatoire compris entre 0 et 99
let r = Math.round(Math.random() * 100);

// On regarde si r est multiple de 3,
// On affecte à mdtrois la valeur du modulo3.
// s'il est multiple, le modulo est 0.
let mdtrois = r % 3;

// On regarde si r est multiple de 5,
// On affecte à mdcinq la valeur du modulo5.
// s'il est multiple, le modulo est 0.
let mdcinq = r % 5;

// si r est multiple de 3 et de 5, affiche fizzbuzz
// sinon s'il est multiple de 3, affiche fizz
// sinon s'il est multiple de 5, affiche buzz
// sinon rien.
if (mdtrois === 0 && mdcinq === 0) {
    console.log("fizzbuzz");
} else if (mdtrois === 0) {
    console.log("fizz");
} else if (mdcinq === 0) {
    console.log("buzz");
}