import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const result = await GameSavingLoader.load();
    console.log('Данные успешно загружены:', result);
    return result;
  } catch (error) {
    console.error('Произошла ошибка при загрузке сохранения:', error);
  }
})();