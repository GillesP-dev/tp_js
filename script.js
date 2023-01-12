/*
let firs1tvar = "42";
let variable2 = 42;
console.log(parseInt(firs1tvar));
variable2.toString();
console.log(variable2);
firstvar=parseInt(firs1tvar);
console.log(typeof(firs1tvar));
let number1 = "bonjour ";
let number2 = "tout le monde";
let number3 = number1+number2;

console.log(number3);
let number4 = 45;
let number5 = "45";
console.log(number4==number5);
console.log(number4===number5);*/
//------------------------excercices---------------
/*
let firstVar = 25;
let secondVar = 25;
let thirdVar = 25;

if (firstVar == secondVar && firstVar == thirdVar ){
    console.log("Les trois valeurs sont égales");
} else if(firstVar == secondVar || firstVar == thirdVar || secondVar == thirdVar){
    console.log("Au moin 2 valeurs sont égales");
    } else{
    console.log("elle sont toutes differentes");
};*/
/*
let value
value = prompt("saisir une valeur:");
if(value >= 100){
    console.log("Votre chiffre est supérieur à 100");
} else {
    console.log("La valeur est inferieur à 100");
};*/
/*
let age;
age = prompt("Saisir votre age:");
if(age < 18){
    console.log("Vous êtes mineur");
    }else if(age > 18 && age < 65){
        console.log("tu es majeur");
    }else if(age >= 65 && age <= 67){
        console.log("Tu es Super c'est la retraite");
    }else if (age > 67){
        console.log("RIP");
    }else {
        console.log("tu peux picoler")
    };*/
/*
let firstColor = prompt("Saisir une couleur primaire");
let secondColor = prompt("saisir une deuxieme couleur primaire");
if(firstColor === "rouge" && secondColor === "bleu" || firstColor === "bleu" && secondColor === "rouge"){
    console.log("le melange fait violet" );
    }else if(firstColor === "bleu" && secondColor === "jaune" || firstColor === "jaune" && secondColor === "bleu"){
    console.log("le melange fait vert");
        }else if(firstColor === "jaune" && secondColor === "rouge" || firstColor === "rouge" && secondColor === "jaune"){
            console.log("le melange fait orange");
        else {
            alert("ce n'est pas les bonne couleur");
        }*/
     /*   let age;
age = prompt("Saisir votre age:");
 switch(true){
    case age < 18:
        console.log("Vous étes mineur");break;
    case age > 18 && age < 65:
        console.log("tu es majeur");break;
    case age >= 65 && age <= 67:
        console.log("c'est la retraite");break;
    case age > 67:
        console.log("RIP");break;    
    default:
        console.log("tu peux picoler") ;          
 };*/
//  let nom = "dubuc" ;
//  let prenom = "toto";
 /*
 function userName(a,b){
   
    return console.log(a+" "+b);
 };
 userName(nom,prenom);*/

//  let userName = (a,b) =>{
//     return console.log(a+" "+b);
//  }
//  userName(nom,prenom);

/*
let i = 0;

const intervalID = setInterval(count,1000);

 function count(){
    i++;
    if(i==5){
        clearInterval(intervalID);
    }
    console.log(i);
 };
 */
// let a=0;

// function count(){
//     setTimeout(()=>{
//         a++;
//         console.log(a);
//         if(a<=5){
//             count();
//         }
//     },1000)
    
    
// }
// count();

// annee = prompt("saisir une valeur:");
// a = parseInt(annee)
// function anneeBix(a){
//     if(a%4 !== 0){
//         console.log(false);
//     }else if(a%100 !== 0 && a%4 === 0){
//         console.log(true);
//     }else if(a%400 !== 0 && a%100 === 0 && a%4 === 0){
//         console.log(false);
//     }else {
//         console.log(true);
//     }
// }
// anneeBix(a);


let chiffreAleatoire = Math.round(Math.random()*10);
console.log(chiffreAleatoire);
chiffre = prompt("Trouver un chiffre entre 1 et 10");
    chiffreUtilisateur = parseInt(chiffre); 
 
let count = 3;
while(count > 0 && chiffreUtilisateur !== chiffreAleatoire){
    count--;
     if(chiffreUtilisateur < chiffreAleatoire){
        console.log("le chiffre est trop bas");
    }else {
        console.log("le chiffre est trop haut");
     } 
     if(count>0){
        chiffre = prompt("Trouver un chiffre entre 1 et 10");
    chiffreUtilisateur = parseInt(chiffre);
     }
     
    }
 
