export declare type Interface = {
    address: string;
    netmask: null;
    family: string;
    mac: string;
    internal: boolean;
    cidr: string;
};
export interface CapacitorOSHackPlugin {
    networkInterfaces(): Promise<{
        interfaces: Interface[];
    }>;
}
