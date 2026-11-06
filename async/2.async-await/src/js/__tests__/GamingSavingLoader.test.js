import GameSavingLoader from '../GameSavingLoader';
/*
import read from '../reader';

jest.mock('../reader');
test('Должен выбрасывать ошибку, если чтение файла завершилось сбоем', async () => {
  read.mockRejectedValue(new Error('Ошибка чтения файла'));

  await expect(GameSavingLoader.load()).rejects.toThrow('Ошибка чтения файла');
});
*/
test('Должен загружать сохранение игры', async () => {
  const result = await GameSavingLoader.load();
  expect(result).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000
    }
  });
});
