import GameSavingLoader from './gameSavingLoader';

GameSavingLoader.load().then((saving) => {
  const object = JSON.parse(saving);
  Object.getPrototypeOf(object);
}, (error) => {
  throw (new Error(error));
});
