function globalizePath(path) {
    const ary = [];
    for (let piece of path.split('/')) {
        const p = piece.trim();
        if (p == '' || p == '.' || p == '..')
            continue;
        else
            ary.push(p);
    }
    return ary.join('.');
}
function deepTraverse(o, p) {
    if (!(Array.isArray(p)))
        return;
    else if (p.length == 0)
        return o;
    else
        return deepTraverse(o === null || o === void 0 ? void 0 : o[p[0]], p.slice(1));
}
const modules = {};
window.require = (path) => { var _a; return (_a = modules === null || modules === void 0 ? void 0 : modules[globalizePath(path)]) !== null && _a !== void 0 ? _a : null; };
let currentModule = {};
function finalizeModule() {
    if (currentModule.__name) {
        if (currentModule.__name in modules)
            throw new Error(`Duplicate module ${currentModule__name}`);
        else {
            modules[currentModule.__name] = currentModule;
            currentModule = {};
        }
    }
}
window.module = { exports: new Proxy({}, {
        set: function (obj, prop, value) {
            if (value == void 0)
                return true;
            if (prop == '__esModule')
                return true;
            if (prop == '__name' && '__name' in currentModule)
                finalizeModule();
            currentModule[prop] = value;
            return true;
        }
    }) };
window.exports = window.module.exports;
