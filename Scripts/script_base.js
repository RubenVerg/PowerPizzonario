// Cambia lo stile della navbar quando si scrolla
window.onscroll = function() {ScrollNavbar()};
function ScrollNavbar() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-black";
    } else {
        navbar.className = navbar.className.replace("w3-card w3-animate-top w3-black", "");
    }
}

// Apre e chiude il menu quando lo schermo è piccolino
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

//Aprono o chiudono la barra nella sezione dei credits
function apriNav() {
  document.getElementById("mySidebar").style.width = "60%";
  document.getElementById("mySidebar").style.display = "block";
}

function chiudiNav() {
  document.getElementById("mySidebar").style.display = "none";
}

// Bottone per tutte le Nickquotes
function SceltaTutte()
{
  var tabellaQuote = document.getElementById('stampaNickquotes');
  var btnAllQuote = document.getElementById('btnvoci');

  if (tabellaQuote.style.display === 'none'){
    // Cambia il testo del bottone
    btnAllQuote.innerHTML = "Nascondi pure tutte le quotes";
    // Mostra la tabella delle quotes
    tabellaQuote.style.display = 'block';
  } else {
    // Cambia il testo del bottone
    btnAllQuote.innerHTML = "Sbircia tutte le voci!";
    // Nasconde la tabella delle quotes
    tabellaQuote.style.display = 'none';
  }
}

// Bottone per la Nickquote randomica
function SceltaRandom()
{
  var randomQuote = document.getElementById('randomNickquotes');
  var btnRandomQuote = document.getElementById('btnrandom');
  var numQuotes = 69;   //Modificare questa a seconda di quante quotes ci sono

  //Controllo per mostrare o nascondere la sezione della quote
  if (randomQuote.style.display === 'none')
  {
    // Se il div è nascosto, allora fa tutto il processo per generare l'URL nuovo
    // per l'estrapolazione della quote
    // Dichiarazioni delle variabili
    var quoteScelta = Math.floor((Math.random() * numQuotes)+1);

    // Variabile per l'id della quote da mostrare
    var stringaUrl = "?ID=";
    stringaUrl += quoteScelta;

    // Genera un nuovo URL
    var nuovoUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + stringaUrl;
    window.history.replaceState(null , null , nuovoUrl);

    // Cambia il testo del bottone
    btnRandomQuote.innerHTML = "Nascondi la Nickquote!";
    // Mostra la quote random
    randomQuote.style.display = 'block';

    location.reload();
  }
  else{
    // Cambia il testo del bottone
    btnRandomQuote.innerHTML = "Beccati una quote random!";
    // Nasconde la quote random
    randomQuote.style.display = 'none';
  }
}
