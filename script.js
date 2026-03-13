function ouvrirPage(page){

let pages = document.querySelectorAll(".page")

pages.forEach(function(p){

p.style.display="none"

})

document.getElementById(page).style.display="block"

}

document.addEventListener("DOMContentLoaded",function(){

ouvrirPage("accueil")

})
const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let valeur = searchInput.value.toLowerCase();

let produits = document.querySelectorAll(".produit");

ouvrirPage("parfums");

produits.forEach(function(produit){

let marque = produit.dataset.marque.toLowerCase();

if(marque.includes(valeur)){

produit.style.display="block";

}

else{

produit.style.display="none";

}

});

});

}
let panier = []
let client = {}

function ajouterPanier(produit){

panier.push(produit)

document.getElementById("compteur-panier").textContent = panier.length

afficherPanier()

}

function enregistrerClient(){

client.nom = document.getElementById("nom").value
client.prenom = document.getElementById("prenom").value
client.telephone = document.getElementById("telephone").value
client.adresse = document.getElementById("adresse").value

alert("Informations enregistrées")

}
function afficherPanier(){

let liste = document.getElementById("liste-panier")

liste.innerHTML = ""

panier.forEach(function(p,index){

let li = document.createElement("li")

li.innerHTML = p + " <button onclick='supprimerProduit("+index+")'>❌</button>"

liste.appendChild(li)

})

let message = "Bonjour je souhaite commander :%0A%0A"

message += "Nom : " + (client.nom || "") + "%0A"
message += "Prénom : " + (client.prenom || "") + "%0A"
message += "Téléphone : " + (client.telephone || "") + "%0A"
message += "Adresse : " + (client.adresse || "") + "%0A%0A"

message += "Produits :%0A"

panier.forEach(function(p){

message += "- " + p + "%0A"

})

let lien = "https://wa.me/2250705910713?text=" + message

document.getElementById("commanderWhatsapp").href = lien

}
function ouvrirPanier(){

document.getElementById("panier-zone").style.display = "block"

}

function fermerPanier(){

document.getElementById("panier-zone").style.display = "none"

}
function supprimerProduit(index){

panier.splice(index,1)

document.getElementById("compteur-panier").textContent = panier.length

afficherPanier()

}
function ouvrirProduit(nom,image,accords,tete,coeur,fond){

let modal = document.getElementById("produit-modal")

modal.style.display = "flex"

document.getElementById("produit-nom").textContent = nom

document.getElementById("produit-image").src = image

document.getElementById("produit-accords").textContent = accords

document.getElementById("produit-tete").textContent = tete

document.getElementById("produit-coeur").textContent = coeur

document.getElementById("produit-fond").textContent = fond

document.getElementById("produit-panier").onclick = function(){

ajouterPanier(nom)

}

}
function fermerProduit(){

document.getElementById("produit-modal").style.display = "none"

}
if ("serviceWorker" in navigator) {

navigator.serviceWorker.register("service-worker.js")

.then(() => console.log("Service Worker activé"))

.catch(err => console.log("Erreur Service Worker", err))

}