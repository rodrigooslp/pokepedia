import { startCase } from 'lodash';

export abstract class Formatter {
  public static toStartCase (text: string) {
    return startCase(text);
  }
};
