'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const osPromises = core.registerPlugin('CapacitorOSHack', {});
let interfaceCache;
async function prefetchNetworkInterfaces() {
    const interfaces = await osPromises.networkInterfaces();
    interfaceCache = interfaces;
    return interfaces;
}
function networkInterfaces() {
    if (interfaceCache) {
        return interfaceCache;
    }
    else {
        throw new Error("You must await prefetchNetworkInterfaces first!");
    }
}
var index = { prefetchNetworkInterfaces, networkInterfaces };

exports["default"] = index;
exports.networkInterfaces = networkInterfaces;
exports.osPromises = osPromises;
exports.prefetchNetworkInterfaces = prefetchNetworkInterfaces;
//# sourceMappingURL=plugin.cjs.js.map
