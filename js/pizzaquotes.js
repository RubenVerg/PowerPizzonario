"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomQuote = exports.renderQuotes = exports.__name = void 0;
exports.__name = 'pizzaquotes';
async function renderQuotes(container, url) {
    const { csv } = require('parse');
    console.log('Running!');
    const data = await csv(url);
    container.innerHTML = '';
    container.appendChild(window.jsx.createElement("table", null,
        window.jsx.createElement("tbody", null, data.map(quote => window.jsx.createElement("tr", null,
            window.jsx.createElement("td", null,
                window.jsx.createElement("q", { style: "font-size: 20px" }, quote[0])),
            window.jsx.createElement("td", null,
                window.jsx.createElement("em", { style: "font-size: 16px" },
                    quote[1],
                    " \u2014 ",
                    quote[2])))))));
}
exports.renderQuotes = renderQuotes;
async function randomQuote(container, url) {
    const quotes = await require('./parse').csv(url);
    const chosen = quotes[Math.floor(Math.random() * quotes.length)];
    container.innerHTML = '';
    container.appendChild(window.jsx.createElement("div", { class: "w3-panel w3-leftbar" },
        window.jsx.createElement("h2", null, chosen[0])));
    container.appendChild(window.jsx.createElement("div", { class: "w3-container w3-right", style: "font-family: 'Brush Script MT', cursive;" },
        window.jsx.createElement("h4", null,
            window.jsx.createElement("em", null,
                chosen[1],
                " \u2014 ",
                chosen[2]))));
}
exports.randomQuote = randomQuote;
renderQuotes(document.querySelector('#quotes'), '/data/pizzaquotes.csv')
    .then(() => console.log('Done!'));
