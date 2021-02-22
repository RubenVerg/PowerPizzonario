"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeLetter = exports.csv = exports.__name = void 0;
exports.__name = 'parse';
function csv(url) {
    return new Promise((res, rej) => {
        Papa.parse(url, {
            download: true,
            complete: data => {
                var _a;
                if ((_a = data === null || data === void 0 ? void 0 : data.errors) === null || _a === void 0 ? void 0 : _a.length)
                    rej(data.errors);
                else
                    res(Array.isArray(data.data) && data.data[data.data.length - 1] == '' ? data.data.slice(0, -1) : data.data);
            }
        });
    });
}
exports.csv = csv;
function normalizeLetter(letter) {
    const bare = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    if (bare.includes(latinize(letter[0].toLowerCase())))
        return latinize(letter[0].toLowerCase());
    else
        return '#';
}
exports.normalizeLetter = normalizeLetter;
