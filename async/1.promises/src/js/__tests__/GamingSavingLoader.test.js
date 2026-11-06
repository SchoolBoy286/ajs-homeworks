import GameSavingLoader from '../GameSavingLoader';

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