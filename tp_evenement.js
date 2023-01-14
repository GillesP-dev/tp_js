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
navbarre.style.width = '100%';
navbarre.style.color = "white";
navbarre.style.position = "fixed";
let titrenavbarre = createDom("h1","TP-Evénement",navbarre);
titrenavbarre.style.textAlign = "center";
let listeNav = createDom("ul","",navbarre);
listeNav.style.display = "flex";
listeNav.style.flexdirection = "row";
listeNav.style.listStyleType = "none";

//------------------creation bouton ajouter--------------------

const boutonAjouter = createDom("button","nouvel article",document.body);
boutonAjouter.setAttribute("id","btnAjouter");
boutonAjouter.style.marginTop = "150px";
boutonAjouter.style.marginLeft = "20px";
boutonAjouter.style.width = '120px';
boutonAjouter.style.height = '30px';

//-------------------creation formulaire----------------------

const sectionForm = createDom("section","",document.body);
sectionForm.setAttribute("class","section1");
sectionForm.style.width = "505px";
sectionForm.style.height = "200px";
sectionForm.style.margin = "auto";
sectionForm.style.display = "none";
const formulaire = createDom("form","",sectionForm);
formulaire.setAttribute("id","form")
formulaire.setAttribute("method","get");
const titreArticle = createDom("input","",formulaire);
titreArticle.setAttribute("type","text");
titreArticle.setAttribute("name","titre");
titreArticle.setAttribute("class","titre");
titreArticle.placeholder = "Titre";
titreArticle.style.width = "500px";
const paraArticle = createDom("textarea","",formulaire);
paraArticle.setAttribute("type","text");
paraArticle.setAttribute("name","para");
paraArticle.setAttribute("class","para");
paraArticle.style.width = "500px";
paraArticle.style.height = "150px";
paraArticle.placeholder = "Renseigner les éléments";
const btnForm = createDom("input","",formulaire);
btnForm.setAttribute("type","submit");
btnForm.setAttribute("value","Enregistrer");
btnForm.setAttribute("class","enregistrement");
btnForm.style.width = "120px";
btnForm.style.height = "20px";
btnForm.style.position = "relative";
btnForm.style.left = "77%";
const section2 = createDom("section","",document.body);

//-------------------evenement btn nouvel article--------------
let element = document.getElementById('btnAjouter');
    element.addEventListener("click",() => {
        sectionForm.style.display = "";
    })


//--------------------evenement btn enregistrer----------------
let tableauArticle = [];
 
 formulaire.addEventListener('submit', (e) => {
     e.preventDefault();
    let article = createDom("article","",section2);
    tableauArticle.push(article) ;
    article.style.border = "2px solid grey";
    article.style.marginTop = "200px";
    article.style.display = "flex";
    article.style.flexDirection = "column";
    article.style.borderRadius = "5px";
    
    let titres = createDom("h2","",article);
    titres.textContent = titreArticle.value;
    titres.style.textAlign = "center";
    titres.style.borderBottom = "1px solid gray";
    titres.style.marginTop = "0";
    titres.style.background = "gainsboro";

    let paragraphe = createDom("p","",article);
    paragraphe.textContent = paraArticle.value;
    paragraphe.style.margin = "20px";

    let boutonSupp = createDom("button","",article);
    boutonSupp.textContent = "Supprimer";
    
    //----------listes et ancres---------------------
    

    let titreNav = createDom("li","",listeNav);
    titreNav.style.marginLeft = "10px";
    let ancres = createDom("a","",titreNav);
    ancres.textContent = titreArticle.value;
    ancres.style.color = "white";

    let i = 0;
    tableauArticle.forEach(elem => {
        elem.id = "article"+i;
        let id = "#"+elem.id;
        let classAncre = "ancre"+i;
        ancres.setAttribute("href",id);
        titreNav.setAttribute("id",classAncre)
        let incsup = "sup("+i+')';
        boutonSupp.setAttribute("onclick",incsup);
        i++;
    })

    viderForm = () => { document.getElementById("form").reset(); }
    viderForm();

    sectionForm.style.display = "none";
   
});

//---------------btn supprimer-----------------------
    function sup(n) {
        document.getElementById("article"+n).remove();
        document.getElementById("ancre"+n).remove();
        
    }



    


