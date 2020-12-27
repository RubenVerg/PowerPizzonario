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

//Bottoni Nickquotes
function SceltaRandom()
{
  alert("ciaone randome");
}

function SceltaTutte()
{
  var tabellaQuote = document.getElementById('stampaNickquotes');
  if (tabellaQuote.style.display === 'none') {
    tabellaQuote.style.display = 'block';
  } else {
    tabellaQuote.style.display = 'none';
  }
}
