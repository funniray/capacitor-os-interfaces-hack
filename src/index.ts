import { registerPlugin } from '@capacitor/core';

import type {CapacitorOSHackPlugin, Interface} from './definitions';

const osPromises = registerPlugin<CapacitorOSHackPlugin>('CapacitorOSHack', {});

let interfaceCache: {[key: string]: Interface[]};

export async function prefetchNetworkInterfaces(): Promise<{[key: string]: Interface[]}> {
  const interfaces = await osPromises.networkInterfaces();
  interfaceCache = interfaces;
  return interfaces;
}

export function networkInterfaces(): {[key: string]: Interface[]} {
  if (interfaceCache) {
    return interfaceCache;
  } else {
    throw new Error("You must await prefetchNetworkInterfaces first!");
  }
}

export * from './definitions';
export default { prefetchNetworkInterfaces, networkInterfaces }
export { osPromises };
