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

const choiceCurentAnswer = function (songs) {
  return getRandomItem(songs);
};

const createStackSoung = function (quantity) {
  const songsSet = new Set();
  for (; songsSet.size < quantity;) {
    songsSet.add(getRandomItem(data.songs));
  }
  const songs = [...songsSet];
  return songs;
};

const generateLevelArtist = function () {
  const songs = createStackSoung(3);
  const trueSoung = choiceCurentAnswer(songs);
  renderScreen(screenLevelArtist(songs, trueSoung));
};

const generateLevelGenre = function () {
  const songs = createStackSoung(4);
  const trueSoung = choiceCurentAnswer(songs);
  renderScreen(screenLevelGenre(songs, trueSoung));
};

const setScreen = function (answer) {
  if (answer) {
    ++data.totalScore;
  }
  if (data.curentQuest === 0) {
    renderScreen(screenWelcome());
    ++data.curentQuest;
    data.totalScore = 0;
    return;
  } else if (data.curentQuest > data.maxQuest) {
    if (data.totalScore > 0) {
      renderScreen(screenLevelSuccess(data.totalScore));
    } else {
      renderScreen(screenLevelFail());
    }
    data.curentQuest = 0;
  } else {
    const screenLevelQuest = getRandomElement([generateLevelArtist, generateLevelGenre]);
    generateLevelGenre();
    ++data.curentQuest;
  }
  console.log('totalScore =>', data.totalScore)
};

export default setScreen;
