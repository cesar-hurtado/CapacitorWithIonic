declare module '@capacitor/core' {
  interface PluginRegistry {
    Timer: TimerPlugin;
  }
}

export interface TimerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
