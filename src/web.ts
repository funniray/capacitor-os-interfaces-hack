import { WebPlugin } from '@capacitor/core';

import type { CapacitorOSHackPlugin } from './definitions';

export class CapacitorOSHackWeb extends WebPlugin implements CapacitorOSHackPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
