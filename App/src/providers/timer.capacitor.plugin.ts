import { Plugins } from '@capacitor/core';

const { Timer } = Plugins;

export class TimerPlugin {
  constructor() {
  }
  echo(echo: string) {
    Timer.echo({ value: echo });
  }
}