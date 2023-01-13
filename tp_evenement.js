function createDom(element_name, text, parent) {
        const markup = document.createElement(element_name);
        markup.textContent = text;
        parent.appendChild(markup);
        return markup;
     };
//------------------creation navbarre-------------------------

let navbarre = createDom("nav","",document.body);
navbarre.setAttribute("class","barreNave");
navbarre.style.background = 'black';
navbarre.style.height = '100px';
navbarre.style.color = "white";
navbarre.style.display = "fixed";

//------------------creation bouton ajouter--------------------

const boutonAjouter = createDom("button","nouvel article",document.body);
boutonAjouter.setAttribute("class","btnAjouter");
boutonAjouter.style.marginTop = "50px";
boutonAjouter.style.marginLeft = "20px";
boutonAjouter.style.width = '120px';
boutonAjouter.style.height = '30px';

//-------------------creation formulaire----------------------
const sectionForm = createDom("section","",document.body);
sectionForm.style.width = "505px";
sectionForm.style.height = "500px";
sectionForm.style.margin = "auto";
sectionForm.style.display = "none";
const formulaire = createDom("form","",sectionForm);
const titreArticle = createDom("input","",formulaire);
titreArticle.setAttribute("class","titre");
titreArticle.placeholder = "Titre";
titreArticle.style.width = "500px";
const paraArticle = createDom("textarea","",formulaire);
paraArticle.setAttribute("class","para");
paraArticle.style.width = "500px"
paraArticle.placeholder = "Renseigner les éléments";
const btnForm = createDom("button","Enregistrer",formulaire);
btnForm.style.width = "120px";
btnForm.style.height = "20px";

//-------------------evenement btn nouvel article--------------

boutonAjouter.addEventListener('click', () => {
    sectionForm.style.display = "block";
})

//--------------------evenement btn enregistrer----------------

btnForm.addEventListener('click', () => {
sectionForm.style.display = "none";   

const newTitre = createDom("h2",titreArticle.value,document.body);

})
console.log(titreArticle.value);