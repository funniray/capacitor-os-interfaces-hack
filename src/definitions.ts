export interface CapacitorOSHackPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
