import gameData from '../data/game-data';
import songsData from '../data/songs-data';
import getRandomElement from '../utils/get-random-element';
import getRandomItem from '../utils/get-random-item';
import renderScreen from '../utils/render-screen';
import screenWelcome from '../screens/screen--welcome';
import screenLevelArtist from '../screens/screen--level-artist';
import screenLevelGenre from '../screens/screen--level-genre';
import screenLevelSuccess from '../screens/screen--result--success';
import screenLevelFail from '../screens/screen--result--fail';
import timer from '../module/module-timer';

let actualGameData = {};

const getUniqueSongs = function (size) {
  const songsSet = new Set();
  while (songsSet.size < size) {
    songsSet.add(getRandomItem(songsData));
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

const setWelcomeScreen = function () {
  renderScreen(screenWelcome());
};

const setGameScreen = function () {
  const screenLevelQuest = getRandomElement([generateLevelArtist, generateLevelGenre]);
  generateLevelArtist();
};

const setResultScreen = function () {
  if (actualGameData.score > 0 && actualGameData.lives > 0 && actualGameData.timer > 0) {
    renderScreen(screenLevelSuccess(actualGameData.score));
  } else {
    renderScreen(screenLevelFail());
  }
};

const switchScreen = function () {
  switch (actualGameData.screen) {
    case 'window':
      setWelcomeScreen();
      break;
    case 'level':
      setGameScreen();
      break;
    case 'result':
      setResultScreen();
      break;
  }
};

const startGame = function () {
  actualGameData = {
    screen: gameData.screen,
    questions: gameData.questions,
    timer: gameData.timer,
    lives: gameData.lives,
    score: gameData.score
  };
  actualGameData.screen = 'level';
  timer.init();
  switchScreen();
};

const stopGame = function () {
  timer.destroy();
  actualGameData.screen = 'result';
  setResultScreen();
};

const onQuestionAnswered = function (answer) {
  actualGameData.questions--;
  if (answer) {
    actualGameData.score++;
  } else {
    actualGameData.lives--;
  }
  if(actualGameData.lives === 0 || actualGameData.questions === 0) {
    stopGame();
    return;
  }
  switchScreen();
};

const onRepeatGame = function () {
  actualGameData.screen = 'window';
  switchScreen();
};

export {setWelcomeScreen};
export {startGame};
export {onQuestionAnswered};
export {onRepeatGame};
