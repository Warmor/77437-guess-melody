import Welcome from './welcome/welcome';
import Game from './game/game';
import Result from './result/result';

const ControllerID = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`,
};

const getControllerIDFromHash = (hash) => hash.replace(`#`, ``);

class App {
  constructor() {}

  static changeController(hash = ``) {
    const hashParams = hash.split(`;`);
    const mainUrl = hashParams[0];
    switch (mainUrl) {
      case ControllerID.GAME:
        Game.init();
        break;
      case ControllerID.RESULT:
        const lives = atob(hashParams[1]);
        const time = atob(hashParams[2]);
        const score = atob(hashParams[3]);
        Result.init(lives, time, score);
        break;
      default:
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

  static showResult(lives, time, score) {
    const hideLives = btoa(lives);
    const hideTime = btoa(time);
    const hideScore = btoa(score);
    location.hash = `${ControllerID.RESULT};${hideLives};${hideTime};${hideScore}`;
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
