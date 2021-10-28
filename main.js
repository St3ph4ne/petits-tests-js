// déclaration des variables :
let a = 10;
let b = 20;

console.log("a = " + a);
console.log("b = " + b);
// structures de controle : Les conditions :
/**
 * Dès qu'une condition est remplie, il n'exécute pas les autres
 */

if(a === b) {
    // ici le code est exécuté si a égal b.
    console.log("a est égal à b.");
} else if (a > b) {
    // si a n'est pas égal à b et si a>b exécute le code ici.
    console.log("a est supérieur à b.");
} else if (a < b) {
    // si a n'est pas égal à b et si a<b exécute le code ici.
    console.log("a est inférieur à b.");
}else if (a >= b) {
    // si a n'est pas égal à b et si a est supérieur ou égal à b
    // mais le code ne sera pas exécuté car le 1er if '(a===b)' a été validé.
    console.log("a est supérieur ou égal à b.");
} else if (a <= b) {
    // si a n'est pas égal à b et si a est inférieur ou égal à b
    // mais le code ne sera pas exécuté car le 1er if '(a===b)'a été validé.
    console.log("a est inférieur ou égal à b.");
} else if (a != b) {
    // si a n'est pas égal à b et si a est différent de b. hihi
    // mais n'exécute pas ce code car un premier else if est validé avant
    // le else if (a<b)
    // il serait exécuté si ce 'else if' était placé avant le 'else if (a<b)'
        console.log("a n'est pas égal à b, tout en étant différent de b.");
        console.log("hihi");
}






