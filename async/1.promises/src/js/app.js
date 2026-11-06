import GameSavingLoader from './GameSavingLoader';

(async () => {
  const result = await GameSavingLoader.load();
  return result;
})();