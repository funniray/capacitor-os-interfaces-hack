import { registerPlugin } from '@capacitor/core';
const osPromises = registerPlugin('CapacitorOSHack', {});
let interfaceCache;
export async function prefetchNetworkInterfaces() {
    const { interfaces } = await osPromises.networkInterfaces();
    interfaceCache = interfaces;
    return interfaces;
}
export function networkInterfaces() {
    if (interfaceCache) {
        return interfaceCache;
    }
    else {
        throw new Error("You must await prefetchNetworkInterfaces first!");
    }
}
export * from './definitions';
export default { prefetchNetworkInterfaces, networkInterfaces };
export { osPromises };
//# sourceMappingURL=index.js.map