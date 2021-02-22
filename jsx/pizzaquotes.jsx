export const __name = 'pizzaquotes';

export async function renderQuotes(container, url) {
	const { csv } = require('parse');

	console.log('Running!');

	const data = await csv(url);

	container.innerHTML = '';

	container.appendChild(<table><tbody>
		{
			data.map(quote =>
				<tr>
					<td>
						<q style="font-size: 20px">
							{quote[0]}
						</q>
					</td>
					<td>
						<em style="font-size: 16px">
							{quote[1]} — {quote[2]}
						</em>
					</td>
				</tr>
			)
		}
	</tbody></table>);
}

export async function randomQuote(container, url) {
	const quotes = await require('./parse').csv(url);

	const chosen = quotes[Math.floor(Math.random() * quotes.length)];

	container.innerHTML = '';

	container.appendChild(<div class="w3-panel w3-leftbar">
		<h2>{chosen[0]}</h2>
	</div>);
	container.appendChild(<div class="w3-container w3-right" style="font-family: 'Brush Script MT', cursive;">
		<h4>
			<em>{chosen[1]} — {chosen[2]}</em>
		</h4>
	</div>);
}

renderQuotes(document.querySelector('#quotes'), '/data/pizzaquotes.csv')
	.then(() => console.log('Done!'));