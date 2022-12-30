let table = document.getElementById('tableau');
let recherche = document.getElementById('recherche');
let request = new XMLHttpRequest();//creer une requette 

request.responseType = 'json';
request.open('get',"films.json");//la methode open sert a ouvrir cette requette, elle a 2parametres au stricte minimum "get"=> pour recuperer les donnes
request.responseType ='text';//en signalant au serveur que on veut une format au type text
request.send();//envoyer la requette grace a la methode send

//Afficher les films
function AfficherFilm(jsonObj) {
    let films = jsonObj["Films"];
    for (let i = 0; i < films.length; i++) {
        //creer la ligne
        let ligne = document.createElement('tr');
        table.appendChild(ligne);//lier la ligne au table
        //creer la colonne du poster
        let colonneImg =document.createElement('td');
        //creer le lien
        let lien = document.createElement('a');
        lien.setAttribute('href',films[i].Image);
        //creer l'image
        let img = document.createElement('img');
        img.setAttribute('src',films[i].Image);
        img.setAttribute('width',100);
        img.setAttribute('height',150);
        lien.appendChild(img);//lier img au lien
        colonneImg.appendChild(lien);//lier le lien au colonne de l'image
        ligne.appendChild(colonneImg);//lier la colonne d l'image à la ligne
        //creer la colonne du titre
        let colonneTitre =document.createElement('td');
        colonneTitre.innerHTML = films[i].Titre;
        ligne.appendChild(colonneTitre);
        //creer la colonne du realisateur
        let colonneRealisateur =document.createElement('td');
        colonneRealisateur.innerHTML = films[i].Realisateur;
        ligne.appendChild(colonneRealisateur);
        //creer la colonne de la durée
        let colonneDuree =document.createElement('td');
        colonneDuree.innerHTML = films[i].Duree;
        ligne.appendChild(colonneDuree);
        //creer la colonne de l'année de production
        let colonneAP =document.createElement('td');
        colonneAP.innerHTML = films[i].anneeProduction;
        ligne.appendChild(colonneAP);
        //creer la Colonne festival
        let colonneFestivals =document.createElement('td');
        ligne.appendChild(colonneFestivals);//lier la ColFestival à la ligne
        let festival = films[i].Festivals;

        for (let j = 0; j < festival.length; j++) {//pour lire tout les donnees du tableau de festival
            let listeF = document.createElement('li');
            listeF.innerHTML = festival[j];
            colonneFestivals.appendChild(listeF);
        } 
        //creer la ColActeurs
        let colonneActeurs =document.createElement('td');
        ligne.appendChild(colonneActeurs);//la lier a la ligne 
        let acteur = films[i].Acteurs;
        for (let k = 0; k < acteur.length; k++) { //lire les donnees de tableau d'objet d'acteur
            let listeA = document
            .createElement('li');
            listeA.innerHTML = "Nom: "+acteur[k].Nom;
            colonneActeurs.appendChild(listeA);
            let listeAPrenom = document.createElement('li');
            listeAPrenom.innerHTML = "Prénom: "+acteur[k].Prenom;
            colonneActeurs.appendChild(listeAPrenom);
            let listeANationalite = document.createElement('li');
            listeANationalite.innerHTML = "Nationalité: "+acteur[k].Nationalite;
            colonneActeurs.appendChild(listeANationalite);
        }
       
    }
} 


request.onload = function (){
    let filmss = JSON.parse(request.responseText);//ouvrir le texte qui ce trouve dans la requette
    AfficherFilm(filmss);
}

//Rechercher
function Rechercher() {
    var data = JSON.parse(request.responseText);//ouvrir le texte qui ce trouve dans la requette
    table.innerHTML ="";
    for (let i = 0; i < data.Films.length; i++) {//
        if (data.Films[i].Titre.toLowerCase().includes(recherche.value.toLowerCase())) {
        //creer la ligne
        let ligne = document.createElement('tr');
        table.appendChild(ligne);//lier la ligne au table
        //creer la colonne du poster
        let colonneImg =document.createElement('td');
        let lien = document.createElement('a');//creer le lien
        lien.setAttribute('href',data.Films[i].Image);
        let img = document.createElement('img');//creer l'image
        img.setAttribute('src',data.Films[i].Image);
        img.setAttribute('width',100);
        img.setAttribute('height',150);
        lien.appendChild(img);//lier img au lien
        colonneImg.appendChild(lien);//lier le lien au colonne de l'image
        ligne.appendChild(colonneImg);//lier la colonne d l'image à la ligne
        //creer la colonne du titre
        let colonneTitre =document.createElement('td');
        colonneTitre.innerHTML = data.Films[i].Titre;
        ligne.appendChild(colonneTitre);
        //creer la colonne du realisateur
        let colonneRealisateur =document.createElement('td');
        colonneRealisateur.innerHTML = data.Films[i].Realisateur;
        ligne.appendChild(colonneRealisateur);
        //creer la colonne de la durée
        let colonneDuree =document.createElement('td');
        colonneDuree.innerHTML = data.Films[i].Duree;
        ligne.appendChild(colonneDuree);
        //creer la colonne de l'année de production
        let colonneAP =document.createElement('td');
        colonneAP.innerHTML = data.Films[i].anneeProduction;
        ligne.appendChild(colonneAP);
        //creer la Colonne festival
        let colonneFestivals =document.createElement('td');
        ligne.appendChild(colonneFestivals);//lier la ColFestival à la ligne
        let festival = data.Films[i].Festivals;

        for (let j = 0; j < festival.length; j++) {//pour lire tout les donnees du tableau de festival
          
            let listeF = document.createElement('li');
            listeF.innerHTML = festival[j];
            colonneFestivals.appendChild(listeF);
        } 
        //creer la ColActeurs
        let colonneActeurs =document.createElement('td');
        ligne.appendChild(colonneActeurs);//la lier a la ligne 
        let acteur = data.Films[i].Acteurs;
        for (let k = 0; k < acteur.length; k++) { //lire les donnees de tableau d'objet d'acteur
            let listeA = document
            .createElement('li');
            listeA.innerHTML = "Nom: "+acteur[k].Nom;
            colonneActeurs.appendChild(listeA);
            let listeAPrenom = document.createElement('li');
            listeAPrenom.innerHTML = "Prénom: "+acteur[k].Prenom;
            colonneActeurs.appendChild(listeAPrenom);
            let listeANationalite = document.createElement('li');
            listeANationalite.innerHTML = "Nationalité: "+acteur[k].Nationalite;
            colonneActeurs.appendChild(listeANationalite);
        }
        }    
    }
}
//Le tri
function sortTable(n) {
  var bool, i, x, y, boolTri, tri, count = 0;
  bool = true;
  tri = "asc";
  while (bool) { /* Fait une boucle qui continuera jusqu'aucune bool n'a été effectuée : */
    bool = false;
    for (i = 0; i < (table.rows.length - 1); i++) {/*Boucle sur toutes les lignes du tableau (tbody) : */
      boolTri = false;
      x = table.rows[i].getElementsByTagName("td")[n];//Obtenez les deux éléments que vous voulez comparer, une de la ligne actuelle 
      y = table.rows[i + 1].getElementsByTagName("td")[n];//et une de la ligne suivante 
      if (tri == "asc") {// Vérifiez si les deux rangées doivent changer de place, en fonction de la direction, asc ou desc
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { // Si c'est le cas, marquez le avec la boolTri et rompez la boucle avec break
          boolTri = true;
          break;
        }
      } else if (tri == "desc") {// Si c'est le cas, marquez le avec la boolTri et rompez la boucle avec break
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          boolTri = true;
          break;
        }
      }
    }
    if (boolTri) { // Si un boolTri est true, faites-le et marquez qu'un changement a été effectué 
      table.rows[i].parentNode.insertBefore(table.rows[i + 1], table.rows[i]);//parentNode le parent 
      bool = true;
      count ++;  // Chaque fois qu'un changement est effectué, augmentez ce nombre de 1
    } else {// Si aucune commutation n'a été effectuée ET le sens est "asc",définissez la direction sur "desc" et exécutez à nouveau la boucle while
       if (count == 0 && tri == "asc") {
        tri = "desc";
        bool = true;
      }
    }
  }
}
