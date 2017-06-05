import data from '../data/data';
import getRandomElement from '../utils/get-random-element';
import renderScreen from '../utils/render-screen';
import screenWelcome from '../screens/screen--welcome';
import screenLevelArtist from '../screens/screen--level-artist';
import screenLevelGenre from '../screens/screen--level-genre';
import screenLevelSuccess from '../screens/screen--result--success';
import screenLevelFail from '../screens/screen--result--fail';

const getRandomItem = function (array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const getUniqueSongs = function (size) {
  const songsSet = new Set();
  while (songsSet.size < size) {
    songsSet.add(getRandomItem(data.songs));
  }
  const songs = [...songsSet];
  return songs;
};

const generateLevelArtist = function () {
  const songs = getUniqueSongs(3);
  const trueSong = getRandomItem(songs);
  renderScreen(screenLevelArtist(songs, trueSong));
};

const generateLevelGenre = function () {
  const songs = getUniqueSongs(4);
  const trueSong = getRandomItem(songs);
  renderScreen(screenLevelGenre(songs, trueSong));
};

const setScreen = function (answer) {
  if (data.curentQuestion === 0) {
    renderScreen(screenWelcome());
    data.curentQuestion++;
    data.totalScore = 0;
    return;
  }
  if (answer) {
    data.totalScore++;
  }
  if (data.curentQuestion > data.maxQuestion) {
    if (data.totalScore > 0) {
      renderScreen(screenLevelSuccess(data.totalScore));
    } else {
      renderScreen(screenLevelFail());
    }
    data.curentQuestion = 0;
  } else {
    const screenLevelQuest = getRandomElement([generateLevelArtist, generateLevelGenre]);
    screenLevelQuest();
    data.curentQuestion++;
  }
};

export default setScreen;
