const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('ID');

if (myParam != null) {
  var randomQuote = document.getElementById('randomNickquotes');
  randomQuote.style.display = 'block';
}
