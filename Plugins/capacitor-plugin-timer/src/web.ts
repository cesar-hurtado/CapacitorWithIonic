import { WebPlugin } from '@capacitor/core';
import { TimerPlugin } from './definitions';

export class TimerWeb extends WebPlugin implements TimerPlugin {
  constructor() {
    super({
      name: 'Timer',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const Timer = new TimerWeb();

export { Timer };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Timer);
