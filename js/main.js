// import 'babel-polyfill';
// import 'whatwg-fetch';

import gameData from './data/game-data';
import statisticsData from './data/statistics-data';
import Welcome from './welcome/welcome';
import Game from './game/game';
import Result from './result/result';
import Timer from './timer/timer';

const ControllerID = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`,
};

const getControllerIDFromHash = (hash) => hash.replace(`#`, ``);

class App {
  constructor() {}

  static async changeController(hash = ``) {
    const hashParams = hash.split(`;`);
    const mainUrl = hashParams[0];
    switch (mainUrl) {
      case ControllerID.GAME:
        await gameData.load();
        Game.init();
        Timer.init();
        break;
      case ControllerID.RESULT:
        Timer.stop();
        await statisticsData.load();
        const lives = atob(hashParams[1]);
        const time = atob(hashParams[2]);
        const score = atob(hashParams[3]);
        const trueAnswers = atob(hashParams[4]);
        Result.init(lives, time, score, trueAnswers);
        break;
      default:
        Timer.stop();
        Welcome.init();
        break;
    }
  }

  static showWelcome() {
    location.hash = ControllerID.WELCOME;
  }

  static showGame() {
    location.hash = ControllerID.GAME;
  }

  static showResult(lives, time, score, trueAnswers) {
    const hideLives = btoa(lives);
    const hideTime = btoa(time);
    const hideScore = btoa(score);
    const hideTrueAnswers = btoa(trueAnswers);
    location.hash = `${ControllerID.RESULT};${hideLives};${hideTime};${hideScore};${hideTrueAnswers}`;
  }

  static init() {
    window.onhashchange = () => {
      this.changeController(getControllerIDFromHash(location.hash));
    };
    this.changeController(getControllerIDFromHash(location.hash));
  }
}

App.init();

export default App;
