import GameSavingLoader from '../gameSavingLoader';

test('GameSavingLoader', (done) => {
  const result = JSON.stringify({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
  GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual(result);
    done();
  });
});
