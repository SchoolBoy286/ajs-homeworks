import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      async function main() {
        const data = await read();
        const value = await json(data);
        return resolve(JSON.parse(value));
      }
      main();
    });
  }
}