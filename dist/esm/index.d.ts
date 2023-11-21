import type { CapacitorOSHackPlugin, Interface } from './definitions';
declare const osPromises: CapacitorOSHackPlugin;
export declare function prefetchNetworkInterfaces(): Promise<Interface[]>;
export declare function networkInterfaces(): Interface[];
export * from './definitions';
declare const _default: {
    prefetchNetworkInterfaces: typeof prefetchNetworkInterfaces;
    networkInterfaces: typeof networkInterfaces;
};
export default _default;
export { osPromises };
