import { registerPlugin } from '@capacitor/core';

import type { CapacitorOSHackPlugin } from './definitions';

const CapacitorOSHack = registerPlugin<CapacitorOSHackPlugin>('CapacitorOSHack', {
  web: () => import('./web').then(m => new m.CapacitorOSHackWeb()),
});

export * from './definitions';
export { CapacitorOSHack };
