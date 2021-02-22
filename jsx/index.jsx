export const __name = 'index';

// Apre e chiude il menu quando lo schermo è piccolino
export function toggleNavbar() {
  document.querySelector('#navDemo').classList.toggle('w3-show');
}

// Bottone per tutte le Nickquotes
export function SceltaTutte() {
  const tabellaQuote = document.querySelector('#stampaNickquotes');
  const btnAllQuote = document.querySelector('#btnvoci');

  if (tabellaQuote.style.display === 'none'){
    // Cambia il testo del bottone
    btnAllQuote.textContent = 'Nascondi pure tutte le quotes';
    // Mostra la tabella delle quotes
    tabellaQuote.style.display = 'block';
  } else {
    // Cambia il testo del bottone
    btnAllQuote.textContent = 'Sbircia tutte le voci!';
    // Nasconde la tabella delle quotes
    tabellaQuote.style.display = 'none';
  }
}

// Bottone per tutte le Nickquotes
export function SceltaRandom(){
  const divRandom = document.getElementById('divRandomQuote');
  const btnRandom = document.getElementById('btnrandom');

  if (divRandom.style.display === 'none'){
    // Cambia il testo del bottone
    btnRandom.textContent = 'Nascondi la Nickquote!';
    // Mostra la tabella delle quotes
    divRandom.style.display = 'block';
  } else {
    // Cambia il testo del bottone
    btnRandom.textContent = 'Beccati una quote random!';
    // Nasconde la tabella delle quotes
    divRandom.style.display = 'none';
  }
}

export async function renderList(container, toc, url) {
	const { csv, normalizeLetter: l } = require('parse');

	const data = await csv(url);

    const letters = data.reduce((obj, el) => {
        const first = l(el[0]);
        return { ...obj, [first]: [ ...(obj[first] ?? []), el ] }
    }, { });

	container.innerHTML = '';
    toc.innerHTML = '';

    toc.appendChild(<div class='w3-row'>
		{ Object.keys(letters).map(l => <a class='w3-col s2 m1' href={ `#letter-${l}` }>{ l.toUpperCase() }</a>) }
	</div>);

	container.appendChild(<table>
		{Object.keys(letters).map(letter => <tbody>
				<tr id={ `letter-${letter}` }><th colspan='3'><center style="width: 100%;">{ letter.toUpperCase() }</center></th></tr>
				{ letters[letter].map(entry => <tr>
					<td>
						<strong style="font-size: 20px;">{ entry[0] }</strong>
						<em style="font-size: 15px;"> – { entry[1] }</em>
					</td>
					<td>{ entry[2] }</td>
					<td><em style="font-size: 16px;">{ entry[3] }</em></td>
				</tr>) }
			</tbody>)
		}
	</table>);
}

// Bottone in fondo a destra: inizializzazione
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'left',
    hoverEnabled: false,
  });
});
