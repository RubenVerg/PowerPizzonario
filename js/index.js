"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderList = exports.SceltaRandom = exports.SceltaTutte = exports.toggleNavbar = exports.__name = void 0;
exports.__name = 'index';
// Apre e chiude il menu quando lo schermo è piccolino
function toggleNavbar() {
    document.querySelector('#navDemo').classList.toggle('w3-show');
}
exports.toggleNavbar = toggleNavbar;
// Bottone per tutte le Nickquotes
function SceltaTutte() {
    const tabellaQuote = document.querySelector('#stampaNickquotes');
    const btnAllQuote = document.querySelector('#btnvoci');
    if (tabellaQuote.style.display === 'none') {
        // Cambia il testo del bottone
        btnAllQuote.textContent = 'Nascondi pure tutte le quotes';
        // Mostra la tabella delle quotes
        tabellaQuote.style.display = 'block';
    }
    else {
        // Cambia il testo del bottone
        btnAllQuote.textContent = 'Sbircia tutte le voci!';
        // Nasconde la tabella delle quotes
        tabellaQuote.style.display = 'none';
    }
}
exports.SceltaTutte = SceltaTutte;
// Bottone per tutte le Nickquotes
function SceltaRandom() {
    const divRandom = document.getElementById('divRandomQuote');
    const btnRandom = document.getElementById('btnrandom');
    if (divRandom.style.display === 'none') {
        // Cambia il testo del bottone
        btnRandom.textContent = 'Nascondi la Nickquote!';
        // Mostra la tabella delle quotes
        divRandom.style.display = 'block';
    }
    else {
        // Cambia il testo del bottone
        btnRandom.textContent = 'Beccati una quote random!';
        // Nasconde la tabella delle quotes
        divRandom.style.display = 'none';
    }
}
exports.SceltaRandom = SceltaRandom;
async function renderList(container, toc, url) {
    const { csv, normalizeLetter: l } = require('parse');
    const data = await csv(url);
    const letters = data.reduce((obj, el) => {
        var _a;
        const first = l(el[0]);
        return { ...obj, [first]: [...((_a = obj[first]) !== null && _a !== void 0 ? _a : []), el] };
    }, {});
    container.innerHTML = '';
    toc.innerHTML = '';
    toc.appendChild(window.jsx.createElement("div", { class: 'w3-row' }, Object.keys(letters).map(l => window.jsx.createElement("a", { class: 'w3-col s2 m1', href: `#letter-${l}` }, l.toUpperCase()))));
    container.appendChild(window.jsx.createElement("table", null, Object.keys(letters).map(letter => window.jsx.createElement("tbody", null,
        window.jsx.createElement("tr", { id: `letter-${letter}` },
            window.jsx.createElement("th", { colspan: '3' },
                window.jsx.createElement("center", { style: "width: 100%;" }, letter.toUpperCase()))),
        letters[letter].map(entry => window.jsx.createElement("tr", null,
            window.jsx.createElement("td", null,
                window.jsx.createElement("strong", { style: "font-size: 20px;" }, entry[0]),
                window.jsx.createElement("em", { style: "font-size: 15px;" },
                    " \u2013 ",
                    entry[1])),
            window.jsx.createElement("td", null, entry[2]),
            window.jsx.createElement("td", null,
                window.jsx.createElement("em", { style: "font-size: 16px;" }, entry[3]))))))));
}
exports.renderList = renderList;
// Bottone in fondo a destra: inizializzazione
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'left',
        hoverEnabled: false,
    });
});
