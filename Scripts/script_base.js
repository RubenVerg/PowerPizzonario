
// Apre e chiude il menu quando lo schermo è piccolino
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

//Aprono o chiudono la barra nella pagina dei credits
function apriNav() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("mySidebar").style.display = "block";
}

function chiudiNav() {
  document.getElementById("mySidebar").style.display = "none";
}

// Bottone per tutte le Nickquotes
function SceltaTutte() {
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

// Bottone per tutte le Nickquotes
function SceltaRandom(){
  var divRandom = document.getElementById('divRandomQuote');
  var btnRandom = document.getElementById('btnrandom');

  if (divRandom.style.display === 'none'){
    // Cambia il testo del bottone
    btnRandom.innerHTML = "Nascondi la Nickquote!";
    // Mostra la tabella delle quotes
    divRandom.style.display = 'block';
  } else {
    // Cambia il testo del bottone
    btnRandom.innerHTML = "Beccati una quote random!";
    // Nasconde la tabella delle quotes
    divRandom.style.display = 'none';
  }
}

// Bottone in fondo a destra: inizializzazione
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'left',
    hoverEnabled: false,
  });
});
