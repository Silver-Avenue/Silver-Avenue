/* ============================================
   SILVER AVENUE - script.js
   Parfumerie Arabe de Luxe · Since 2025
   ============================================ */

/* ── DONNÉES PARFUMS ── */
var PERFUMES = [
  {
    id: 1,
    name: "Bade'e Al Oud Amethyst",
    brand: "Lattafa",
    gender: "mixte",
    price: "Sur commande",
    inspiration: "Inspiration de Atomic Rose d'Initio",
    accords: [
      "rose",
      "oud",
      "ambre",
      "épicé doux",
      "floral",
      "vanille",
      "agrume",
      "épicé frais",
      "fleurs blanches",
    ],
    desc: "Une fragrance envoûtante alliant la rose éclatante à l'oud profond, avec des touches d'ambre et d'épices douces. Un chef-d'œuvre oriental unisexe.",
    img: "images/badeealoud-amethyst.jpg",
  },
  {
    id: 2,
    name: "Noble Blush",
    brand: "Lattafa",
    gender: "femme",
    price: "Sur commande",
    inspiration: null,
    accords: [
      "sucré",
      "poudré",
      "amande",
      "vanille",
      "musqué",
      "boisé",
      "fruits à coque",
      "fruité",
    ],
    desc: "Une fragrance féminine douce et élégante, dominée par des notes sucrées et poudrées avec une belle traîne de muscs blancs.",
    img: "images/noble-blush.jpg",
  },
  {
    id: 3,
    name: "Mohra Silky Rose",
    brand: "Lattafa",
    gender: "femme",
    price: "Sur commande",
    inspiration: "Dupe de Accento",
    accords: [
      "rose",
      "musqué",
      "fruité",
      "vanille",
      "poudré",
      "tropical",
      "frais",
      "épicé doux",
      "floral",
      "sucré",
    ],
    desc: "Une rose soyeuse enveloppée de muscs et de notes fruitées tropicales. Féminin, doux et irrésistiblement séduisant.",
    img: "images/mohra-silky-rose.jpg",
  },
  {
    id: 4,
    name: "Bade'e Al Oud Sublime",
    brand: "Lattafa",
    gender: "mixte",
    price: "Sur commande",
    inspiration: "Inspiration Kayali",
    accords: [
      "fruité",
      "frais",
      "tropical",
      "rose",
      "vert",
      "mousse",
      "terreux",
      "vanille",
    ],
    desc: "Une déclinaison vibrante et fruitée du classique Bade'e Al Oud. Fraîcheur tropicale rencontre profondeur orientale.",
    img: "images/badeealoud-sublime.jpg",
  },
  {
    id: 5,
    name: "Tharwah Gold",
    brand: "Lattafa",
    gender: "mixte",
    price: "Sur commande",
    inspiration: "Dupe de Libre Intense – Yves Saint Laurent",
    accords: [
      "fleurs blanches",
      "agrume",
      "vanille",
      "lavande",
      "ambre",
      "aromatique",
      "sucré",
      "épicé frais",
      "poudré",
      "animal",
    ],
    desc: "L'opulence à l'état pur. Tharwah Gold capture l'essence de la richesse orientale avec ses fleurs blanches, son ambre et ses épices précieuses.",
    img: "images/tharwah-gold.jpg",
  },
  {
    id: 6,
    name: "Vanilla Voyage",
    brand: "Maison Asrar",
    gender: "mixte",
    price: "Sur commande",
    inspiration: "Dupe de Bianco Latte",
    accords: [
      "vanille",
      "sucré",
      "caramel",
      "ambre",
      "poudré",
      "miel",
      "lactonique",
      "musqué",
      "balsamique",
    ],
    desc: "Un voyage gourmand et enveloppant. La vanille crémeuse rencontre le caramel doré et le miel dans une symphonie olfactive inoubliable.",
    img: "images/vanilla-voyage.jpg",
  },
  {
    id: 7,
    name: "Delilah Pour Femme",
    brand: "Maison Alhambra",
    gender: "femme",
    price: "400 ml – Renseignez-vous",
    inspiration: "Dupe de Delina – Parfums de Marly",
    accords: [
      "rose",
      "floral",
      "fruité",
      "musqué",
      "frais",
      "poudré",
      "vert",
      "aromatique",
      "agrume",
      "tropical",
    ],
    desc: "La version accessible de l'iconique Delina. Une rose lumineuse sur un fond fruité et poudré — élégance pure et féminine.",
    img: "images/delilah.jpg",
  },
  {
    id: 8,
    name: "Odyssey Marshmallow",
    brand: "Armaf",
    gender: "mixte",
    price: "Sur commande",
    inspiration: "Dupe de Kayali 81",
    accords: [
      "sucré",
      "fruité",
      "poudré",
      "vanille",
      "lactonique",
      "noix de coco",
    ],
    desc: "Gourmand, doux et addictif. Odyssey Marshmallow est une explosion de douceur — sucre, fruits et noix de coco dans un nuage de poudre.",
    img: "images/odyssey-marshmallow.jpg",
  },
  {
    id: 9,
    name: "Oud Mood",
    brand: "Lattafa",
    gender: "mixte",
    price: "Sur commande",
    inspiration: "Dupe de Lancôme Oud",
    accords: [
      "ambre",
      "oud",
      "boisé",
      "épicé chaud",
      "caramel",
      "balsamique",
      "rose",
      "fumé",
      "floral",
    ],
    desc: "Un oud majestueux rehaussé d'ambre chaud, d'épices et d'une touche de rose. Parfum mixte intense et raffiné — pas du tout agressif.",
    img: "images/oud-mood.jpg",
  },
  {
    id: 10,
    name: "Amber Oud Gold Edition",
    brand: "Al Haramain",
    gender: "mixte",
    price: "80 000 FCFA min. – Sur commande",
    inspiration: "La crème de la crème",
    accords: [
      "sucré",
      "fruité",
      "ozonique",
      "poudré",
      "vanille",
      "musqué",
      "frais",
      "ambre",
      "aquatique",
      "agrume",
    ],
    desc: "Le fleuron de Al Haramain. Un amber oud d'exception disponible sur commande uniquement — pour ceux qui ne veulent que le meilleur.",
    img: "images/amber-oud-gold.jpg",
  },
  {
    id: 11,
    name: "Ansaam Gold",
    brand: "Lattafa",
    gender: "femme",
    price: "Sur commande",
    inspiration: "Dupe de Oriana – Parfums de Marly",
    accords: [
      "sucré",
      "fruité",
      "agrume",
      "musqué",
      "vanille",
      "fleurs blanches",
      "rose",
      "poudré",
    ],
    desc: "Une fragrance féminine lumineuse et joyeuse. Les accords sucrés-fruités rencontrent la rose et la vanille pour un résultat irrésistible.",
    img: "images/ansaam-gold.jpg",
  },
  {
    id: 12,
    name: "Musamam White Intense",
    brand: "Lattafa",
    gender: "mixte",
    price: "Sur commande",
    inspiration: "Dupe de Imagination – Louis Vuitton",
    accords: [
      "boisé",
      "épicé chaud",
      "noix de coco",
      "sucré",
      "agrume",
      "poudré",
      "ambre",
      "fleurs jaunes",
      "musqué",
      "vanille",
    ],
    desc: "Un bois intense et épicé, enveloppé de noix de coco et d'agrumes. La version accessible du mythique Imagination de Louis Vuitton.",
    img: "images/musamam-white-intense.jpg",
  },
];

/* ── COULEURS DES ACCORDS ── */
var ACCORD_COLORS = {
  rose: "#FF4081",
  oud: "#8B5C2A",
  ambre: "#C97832",
  "épicé doux": "#E8936A",
  floral: "#FF80AB",
  vanille: "#FFE066",
  sucré: "#FF5252",
  poudré: "#D4B896",
  musqué: "#C4A0D8",
  boisé: "#7B4F2E",
  fruité: "#FF7043",
  frais: "#4DD0E1",
  tropical: "#FFB300",
  vert: "#66BB6A",
  agrume: "#FFEE58",
  aromatique: "#26A69A",
  balsamique: "#A1887F",
  fumé: "#90A4AE",
  lactonique: "#F8BBD0",
  "noix de coco": "#FFCC80",
  "fleurs blanches": "#E3F2FD",
  lavande: "#CE93D8",
  animal: "#BCAAA4",
  aquatique: "#80DEEA",
  ozonique: "#B2EBF2",
  miel: "#FFA000",
  caramel: "#D4872E",
  mousse: "#AED581",
  terreux: "#A1887F",
  "épicé chaud": "#FF7043",
  "épicé frais": "#66BB6A",
  "fleurs jaunes": "#FDD835",
  "fruits à coque": "#BCAAA4",
  amande: "#F5CBA7",
};

function accordColor(accord) {
  var keys = Object.keys(ACCORD_COLORS);
  for (var i = 0; i < keys.length; i++) {
    if (accord.toLowerCase().indexOf(keys[i].toLowerCase()) !== -1) {
      return ACCORD_COLORS[keys[i]];
    }
  }
  return "#888888";
}

function pillStyle(accord) {
  var c = accordColor(accord);
  return "background:" + c + "1A;color:" + c + ";border:1px solid " + c + "33;";
}

/* ── RENDU DES CARTES ── */
function renderGrid(list) {
  var grid = document.getElementById("perfumeGrid");
  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML =
      '<div class="no-results"><p>Aucun résultat</p><span style="font-size:0.78rem">Essayez une autre recherche.</span></div>';
    return;
  }

  if (list.length === PERFUMES.length) {
    var sel = document.getElementById("formPerfume");
    sel.innerHTML = '<option value="">Sélectionner un parfum</option>';
    for (var k = 0; k < PERFUMES.length; k++) {
      var opt = document.createElement("option");
      opt.value = PERFUMES[k].name;
      opt.textContent = PERFUMES[k].name + " – " + PERFUMES[k].brand;
      sel.appendChild(opt);
    }
  }

  for (var i = 0; i < list.length; i++) {
    var p = list[i];
    var pills = "";
    for (var j = 0; j < Math.min(4, p.accords.length); j++) {
      pills +=
        '<span class="accord-pill" style="' +
        pillStyle(p.accords[j]) +
        '">' +
        p.accords[j] +
        "</span>";
    }

    var badge = p.id === 10 ? '<div class="card-badge">Premium</div>' : "";
    var gender = p.gender === "femme" ? "♀ Femme" : "⚥ Mixte";
    var insp = p.inspiration
      ? '<div class="card-inspiration">✦ ' + p.inspiration + "</div>"
      : "";
    var priceHtml =
      p.price === "Sur commande" ? "<small>Sur commande</small>" : p.price;
    var safeName = p.name.replace(/'/g, "\\'");

    var card = document.createElement("div");
    card.className = "perfume-card";
    card.setAttribute("data-id", p.id);

    card.innerHTML =
      badge +
      '<div class="card-gender">' +
      gender +
      "</div>" +
      '<div class="card-img-wrap">' +
      '<img src="' +
      p.img +
      '" alt="' +
      p.name +
      '" class="card-img" onerror="this.style.display=\'none\';this.nextSibling.style.display=\'block\'">' +
      '<span class="card-fallback" style="display:none">🪬</span>' +
      "</div>" +
      '<div class="card-body">' +
      '<div class="card-brand">' +
      p.brand +
      "</div>" +
      '<div class="card-name">' +
      p.name +
      "</div>" +
      insp +
      '<div class="card-accords">' +
      pills +
      "</div>" +
      '<div class="card-footer">' +
      '<div class="card-price">' +
      priceHtml +
      "</div>" +
      '<button class="btn-order" onclick="event.stopPropagation();orderWA(\'' +
      safeName +
      "')\">Commander</button>" +
      "</div>" +
      "</div>";

    card.onclick = (function (pid) {
      return function () {
        openModal(pid);
      };
    })(p.id);

    grid.appendChild(card);
  }
}

/* ── FILTRES ── */
function filterPerfumes() {
  var q = document.getElementById("searchInput").value.toLowerCase();
  var brand = document.getElementById("brandFilter").value;
  var gender = document.getElementById("genderFilter").value;

  var filtered = PERFUMES.filter(function (p) {
    var matchQ =
      !q ||
      p.name.toLowerCase().indexOf(q) !== -1 ||
      p.brand.toLowerCase().indexOf(q) !== -1 ||
      p.accords.some(function (a) {
        return a.toLowerCase().indexOf(q) !== -1;
      }) ||
      (p.inspiration && p.inspiration.toLowerCase().indexOf(q) !== -1);
    var matchBrand = !brand || p.brand === brand;
    var matchGender = !gender || p.gender === gender;
    return matchQ && matchBrand && matchGender;
  });

  renderGrid(filtered);
}

function setTag(el, brand) {
  var tags = document.querySelectorAll(".brand-tag");
  for (var i = 0; i < tags.length; i++) tags[i].classList.remove("active");
  el.classList.add("active");
  document.getElementById("brandFilter").value = brand;
  document.getElementById("searchInput").value = "";
  filterPerfumes();
}

function goToBrand(brand) {
  document.getElementById("brandFilter").value = brand;
  var tags = document.querySelectorAll(".brand-tag");
  for (var i = 0; i < tags.length; i++) {
    tags[i].classList.toggle("active", tags[i].textContent.trim() === brand);
  }
  filterPerfumes();
  document.getElementById("parfums").scrollIntoView({ behavior: "smooth" });
}

/* ── MODAL ── */
function openModal(id) {
  var p = null;
  for (var i = 0; i < PERFUMES.length; i++) {
    if (PERFUMES[i].id === id) {
      p = PERFUMES[i];
      break;
    }
  }
  if (!p) return;

  var bars = "";
  for (var j = 0; j < p.accords.length; j++) {
    var w = Math.max(25, 100 - j * 8);
    bars +=
      '<div class="accord-bar-row">' +
      '<div class="accord-bar-label">' +
      p.accords[j] +
      "</div>" +
      '<div class="accord-bar-track">' +
      '<div class="accord-bar-fill" style="width:' +
      w +
      "%;background:" +
      accordColor(p.accords[j]) +
      '"></div>' +
      "</div>" +
      "</div>";
  }

  var genderTxt =
    p.gender === "femme" ? "♀ Pour Femme" : "⚥ Pour Homme et Femme";
  var inspHtml = p.inspiration
    ? '<div class="modal-inspiration">✦ ' + p.inspiration + "</div>"
    : "";
  var priceHtml =
    p.price === "Sur commande"
      ? '<small style="font-size:1rem;font-family:Montserrat;font-weight:300">Sur commande</small>'
      : p.price;
  var encName = encodeURIComponent(p.name);
  var encBrand = encodeURIComponent(p.brand);

  document.getElementById("mHead").innerHTML =
    '<div class="modal-img-wrap">' +
    '<img src="' +
    p.img +
    '" alt="' +
    p.name +
    '" onerror="this.style.display=\'none\'">' +
    "</div>" +
    "<div>" +
    '<div class="modal-brand">' +
    p.brand +
    "</div>" +
    '<div class="modal-name">' +
    p.name +
    "</div>" +
    '<div class="modal-gender">' +
    genderTxt +
    "</div>" +
    inspHtml +
    '<p class="modal-desc">' +
    p.desc +
    "</p>" +
    '<div class="modal-price">' +
    priceHtml +
    "</div>" +
    "</div>";

  document.getElementById("mBody").innerHTML =
    '<div class="modal-section-title" style="margin-top:0.5rem">Accords Principaux</div>' +
    '<div class="accord-bars">' +
    bars +
    "</div>" +
    '<div class="modal-actions">' +
    '<a href="https://wa.me/2250705910713?text=Bonjour%20Silver%20Avenue%2C%20je%20souhaite%20commander%20' +
    encName +
    "%20(" +
    encBrand +
    ')" target="_blank" class="btn-wa">' +
    '<img src="images/whatsapp.png" alt=""> Commander – CI' +
    "</a>" +
    '<a href="https://wa.me/221773982634?text=Bonjour%20Silver%20Avenue%2C%20je%20souhaite%20commander%20' +
    encName +
    "%20(" +
    encBrand +
    ')" target="_blank" class="btn-wa sn">' +
    '<img src="images/whatsapp.png" alt=""> Commander – SN' +
    "</a>" +
    '<a href="https://pay.wave.com/m/M_ci_DL4ZPW5vdhut/c/ci/" target="_blank" class="btn-wave">' +
    '<img src="images/wave.png" alt=""> Payer Wave' +
    "</a>" +
    "</div>";

  document.getElementById("overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(e) {
  if (e.target === document.getElementById("overlay")) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById("overlay").classList.remove("open");
  document.body.style.overflow = "";
}

/* ── WHATSAPP & WAVE ── */
function orderWA(name) {
  window.open(
    "https://wa.me/2250705910713?text=Bonjour%20Silver%20Avenue%2C%20je%20souhaite%20commander%20" +
      encodeURIComponent(name),
    "_blank",
  );
}

function sendWA() {
  var name = document.getElementById("fName").value;
  var tel = document.getElementById("fTel").value;
  var parfum = document.getElementById("formPerfume").value;
  var msg = document.getElementById("fMsg").value;
  var text =
    "Bonjour Silver Avenue !\n" +
    "Nom : " +
    (name || "Non renseigné") +
    "\n" +
    "Tél : " +
    (tel || "Non renseigné") +
    "\n" +
    "Parfum : " +
    (parfum || "Non renseigné") +
    "\n" +
    "Message : " +
    (msg || "—");
  window.open(
    "https://wa.me/2250705910713?text=" + encodeURIComponent(text),
    "_blank",
  );
}

/* ── MENU MOBILE ── */
function toggleNav() {
  document.getElementById("mobileNav").classList.toggle("open");
}
function closeNav() {
  document.getElementById("mobileNav").classList.remove("open");
}

/* ── INIT ── */
document.addEventListener("DOMContentLoaded", function () {
  renderGrid(PERFUMES);
});
