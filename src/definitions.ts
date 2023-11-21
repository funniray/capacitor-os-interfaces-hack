export type Interface = {
  address: string,
  netmask: null, // Not Implemented
  family: string,
  mac: string,
  internal: boolean,
  cidr: string
}

export interface CapacitorOSHackPlugin {
  networkInterfaces(): Promise<{ [key: string]: Interface[] }>;
}
