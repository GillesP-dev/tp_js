 let fruitsArray = ["fraise","pomme","coing","poire"];
// for (let fruit of fruitsArray){
// console.log(fruit);
//    document.write("<li<"+fruit+"</li>");
// }

// let semaine = ["lun","mra","mer","jeu","ven","sam","ddi"];
// let semaine6j = semaine.pop();
// document.write(semaine);
// document.write(semaine6j);
// semaine.push("dim");
// document.write(semaine);
// let pos = semaine.indexOf('mra');
// document.write(pos);
// semaine.splice(pos, 1, 'mar');
// document.write(semaine);
// document.write(semaine.length);
// document.write(semaine[2]);


// let longueurarray = fruitsArray.length;
// document.write(longueurarray);
// let fruitChoisie = prompt(fruitsArray,"choisir un fruit");
// for (let fruit of fruitsArray){
//     if (fruit == fruitChoisie){
//         let pos = fruitsArray.indexOf(fruitChoisie);
//         fruitsArray.splice(pos,1);
//         document.write("ok !");
//         console.log(fruitsArray);
//     }  
// } 
// if(fruitsArray.length == longueurarray){
//     document.write("Indisponible");
// };
// document.write(fruitsArray);

// let classe1 = [{nom:"pierre",note:[12,15,20]},{nom:"paul",note:[20,15,18]},{nom:"leon",note:[8,15,20]}];
// let classe2 = [{nom:"celine",note:[12,8,3]},{nom:"marc",note:[12,15,20]},{nom:"laurent",note:[12,15,20]}];
// let total= 0;
// function moyenne(a){
    
// for(key in a){
//     let ensemble = a[key].note;
//     console.log(ensemble);
//     let i = 0
//     let sum = 0
//     let len = ensemble.length;
//     let result = 0
//     while (i < len) {
//         sum = sum + ensemble[i++];
//     }
        
//       result = sum / len ;
//         total += result;
//       console.log(Math.round(result));
//     document.write("moyene de : "+a[key].nom+" est :  "+Math.round(result)+"  ;");
// }
    
// }
// moyenne(classe1);
// let totaleClasse1 = total;
// console.log(totaleClasse1);
// moyenne(classe2);
//  console.log(total);
//  let totaleClasse2 = totaleClasse1 - total ;
//   if(totaleClasse1 > totaleClasse2) {
//     document.write("la classe vainqeur est : la classe1"+classe1[0].nom+" ,"+classe1[1].nom+" ,"+classe1[2].nom);
//   } else{
//      document.write("la classe vainqeur est :"+classe2[0].nom+classe2[1].nom+classe2[2].nom) ;
//   }

//-----------------------------------------

// let numberArray = [12,54,32,10,4,65];
// let plusgrand = 0;
// for (let num of numberArray ){
    
//     if(num > plusgrand){
//         plusgrand = num;
//     }
    
// }
// document.write("<p>"+plusgrand+"</p>");

//---------------------------------------------

// let tab1 = [1,2,3];
// let copie = [...tab1];
// let copierenvercer = copie.reverse();
// tab1.pop();
// let tabReverse = tab1.concat(copierenvercer);
// console.log(tabReverse);

// //--------------------------------------------

// let tab2 = [50,-10,32,-14,15,68,-74,65,21,30,0];

//  function numberPositif(array){
  
//     if (array >= 0){
//         return true;
//     }else {
//         return false;
//     }
  
//  }
//  let array2 = tab2.filter(numberPositif);
//  console.log(array2);

// //---------------------------------------------
     
//     let array3 = (array,numbers) => array.filter(number => number%numbers == 0); 
     

//  console.log(array3(tab2,2));

 //--------------------------------------------

// let tab4 = ["Le soleil rouge","les pommes d'Adan","Le jour se léve","L'aube rouge"];
// let motCherch = prompt("donner un mot pour rechercher un film:");
// let filmRecherch = (Array,motCherch) => Array.filter(mot =>{
//     let motMaj = mot.toUpperCase();
//     let motRechercher = motCherch.toUpperCase();
//     return motMaj.includes(motRechercher);
// } )
// console.log(filmRecherch(tab4,motCherch));

//----------------------------------------------

// let tab5 = ["mot","quatre","cinq","six","sept"];
// let tabLength = Array => Array.map(mot => mot + ": La chaine contient "+mot.length+" caractéres");
// console.log(tabLength(tab5));

//--------------------------------------------

// let foodVege = [{food:"banane",isVegetarian:true},{food:"cote de boeuf",isVegetarian:false},{food:"patates",isVegetarian:true}];

// let vegetarianFood = (objet) => objet.map(obj => {
//     if(obj.isVegetarian == true){
//        return obj.food + " est consommable par les végetariens";
//     }else { return obj.food + " n'est pas consommable par les vegetariens"}
//     });

// console.log(vegetarianFood(foodVege)) ;   

//------------------------------------------

// let listFilm = [{name:"le justicier",rating:70},{name:"ungame",rating:10},{name:"blackman",rating:80}];


// let ratingtab = (tab) => {return tab.map(objet => {objet.label = rajoutLabel(objet.rating);return objet;})};


// let rajoutLabel = rating => {
//     console.log(rating);
//     if(rating < 60){
//         return "rotten";
//     }else if((rating >= 60) && (rating <= 75 )) {
//         return "fresh";}
//     else if(rating > 75) {
//         return "certified fresh";}
//     }

   
// console.log(ratingtab(listFilm));

//---------------------------------------------------

// let cercles = [20,50,24,65,78,10];

// let surface = (tab) => tab.map(elem => {
//     2*Math.pi*elem.toFixed(3) 
//      Math.PI*elem*elem.toFixed(3));}
//--------------------------------------------------     

// class Personne{
//     constructor(nom,prenom){
//         this.nom = nom;
//         this.prenom = prenom
//     }
//     direBonjour(){
//         console.log("Salut "+this.nom);
//     }
// }

// class Walk extends Personne{
//     constructor(nom,prenom,marche){
//         super(nom,prenom);
//         this.marche = marche;
//     }
//     isWalk(){

//     }
// }
// let nicolas = new Personne("jean","pierre");
// nicolas.direBonjour();

//-----------------------------------------------

//  class Velo{
//      constructor(nom,poids,couleur){
//          this.nom = nom;
//          this.poids = poids;
//          this.couleur = couleur;
//      }
//      move(start,end){
//          console.log("Je me deplace de "+start+" à "+end+" avec mon "+this.nom+" "+this.couleur)
//      }
//  }
//  let cyclo = new Velo("peugeot","25kg","rouge");
//  cyclo.move("montpellier","sete");

// //-------------------------------------------------

// class VeloElectrique extends Velo{
//     constructor(nom,poids,couleur,puissance,vitesse){
//         super(nom,poids,couleur);
//         this.puissance = puissance;
//         this.vitesse = vitesse;
//     }
//     moveElect(start,end){
//         console.log(`Je me déplace de ${start} à ${end} avec mon ${this.nom} ${this.couleur} à ${this.vitesse} km/h.Mon vélo fait ${this.puissance} Watt, c'est une bombe !`)
//     }
// }
// cyclo = new VeloElectrique("peugeot","25kg","rouge","500","180");
// cyclo.moveElect("montpellier","gigean");

//------------------------------------------------------

// class ParentTitulaire{
//     constructor(nom,prenom){
//         this.nom = nom;
//         this.prenom = prenom;
//     }
//     sePresenter(){
//         console.log("Bonjour, je m'appele "+this.prenom+" "+this.nom);
//     }
// }
// class Compte{
//     constructor(titulaire,montant = 0){
//         this.titulaire = titulaire;
//         this.montant = montant;
//     }
//     afficherSolde(){
//         document.write("Votre solde est de "+this.montant+" €"+"<br/>");
//     }
//     crediter(valeur){
//         this.montant = this.montant + valeur;
//     }
//     debit(valeur){
//         this.montant = this.montant - valeur;
//     }
// }

// class CompteEpargne extends Compte{
//     constructor(titulaire,montant = 50,taux = 0.05){
//         super(titulaire,montant);
//         this.taux = taux;
//         const interet = () => (this.montant = this.montant+this.montant*this.taux).toFixed(2);
//         setInterval(interet,1000);
        
//     }
    
//     }
        



// let paul = new ParentTitulaire("jaume","paul");
// let pierre = new ParentTitulaire("malire","pierre");
// let joanna = new ParentTitulaire("launiss","joanna");
// console.log(paul);
// pierre.sePresenter();
// let compteJoanna = new Compte(joanna,50);
// console.log(compteJoanna);
// compteJoanna.crediter(150);
// console.log(compteJoanna);
// compteJoanna.debit(20);
// console.log(compteJoanna);
// compteJoanna.afficherSolde();
// let epargneJoanna = new CompteEpargne(joanna,15);
// epargneJoanna.afficherSolde();
// console.log(epargneJoanna);
// epargneJoanna.crediter(50);
// epargneJoanna.crediter(50);
// epargneJoanna.crediter(50);
// epargneJoanna.crediter(50);
// epargneJoanna.afficherSolde();

//----------------------------------------------------------

function Voiture(element){
    this.element = element;
   
};
function Voiture2(marque,modele,carburant,couleur){
    this.marque = marque;
    this.modele = modele;
    this.carburant = carburant;
    this.couleur = couleur;
}
let cars = [new Voiture2("peugeot","206","essence","bleu")];
    cars.push(new Voiture2("citroen","2CV","essence","Jaune"));
    cars.push(new Voiture2("porche","911","essence","bleu"));        
    cars.push(new Voiture2("renaud","super5","diesel","rouge"));        
 console.log(cars);   
 
 let filmRecherch = (Array,motCherch) => Array.filter(mot =>{
    //     let motMaj = mot.toUpperCase();
    //     let motRechercher = motCherch.toUpperCase();
    //     return motMaj.includes(motRechercher)

Voiture.prototype.retour = function(){
    
    console.log("bonjour ca marche");
} 
/*
Voiture.prototype.filtrage = function(mot){
    element.filter(ele => ele == this.element.inclued(mot));

}*/

 
 
Voiture.retour(nouvellevoiture);


