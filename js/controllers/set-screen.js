import data from '../data/data';
import getRandomElement from '../utils/get-random-element';
import renderScreen from '../utils/render-screen';
import screenWelcome from '../screens/screen--welcome';
import screenLevelArtist from '../screens/screen--level-artist';
import screenLevelGenre from '../screens/screen--level-genre';
import screenLevelSuccess from '../screens/screen--result--success';
import screenLevelFail from '../screens/screen--result--fail';

const setScreen = function () {
  if (data.curentQuest === 0) {
    renderScreen(screenWelcome());
    ++data.curentQuest
    return;
  } else if(data.curentQuest > data.maxQuest) {
    const screenLevelResult = getRandomElement([screenLevelSuccess, screenLevelFail]);
    renderScreen(screenLevelResult());
    data.curentQuest = 0;
  } else {
    const screenLevelQuest = getRandomElement([screenLevelArtist, screenLevelGenre]);
    renderScreen(screenLevelQuest(data.songs));
    ++data.curentQuest
  }
};

export default setScreen;
