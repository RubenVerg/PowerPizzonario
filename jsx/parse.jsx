export const __name = 'parse';

export function csv(url) {
	return new Promise((res, rej) => {
		Papa.parse(url, {
			download: true,
			complete: data => {
				if (data?.errors?.length) rej(data.errors);
				else res(Array.isArray(data.data) && data.data[data.data.length - 1] == '' ? data.data.slice(0, -1) : data.data);
			}
		})
	})
}

export function normalizeLetter(letter) {
	const bare = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	if (bare.includes(latinize(letter[0].toLowerCase()))) return latinize(letter[0].toLowerCase());
	else return '#';
}
