import {getState, setState, resetState} from '../data/game-state';
import LogicController from './logic-controller';
import screenWelcome from '../screens/screen--welcome';
import screenLevelArtist from '../screens/screen--level-artist';
import screenLevelGenre from '../screens/screen--level-genre';
import screenLevelSuccess from '../screens/screen--result--success';
import screenLevelFail from '../screens/screen--result--fail';

const app = document.querySelector(`.app`);
let currentScreen;

const renderScreen = function (template) {
  currentScreen = app.querySelector(`.main`);
  app.replaceChild(template, currentScreen);
};

/*
 * This is a wrapper around renderState() and the pure LogicController.
 * It's difficult to test in comparison to LogicController, but it doesn't do much on its own anyway...
 */

export function renderState() {
  const state = getState();

  switch (state.screen) {
    case `welcome`:
      return renderScreen(screenWelcome({
        onPlayClick: () => {
          setState(LogicController.nextQuestion(getState()));
          renderState();
        }
      }));
    case `question-artist`:
      return renderScreen(screenLevelArtist({
        songs: state.screenData.songs,
        trueSong: state.screenData.trueSong,
        answerCallback: (isAnswerCorrect) => {
          setState(LogicController.onQuestionAnswered(getState(), isAnswerCorrect));
          renderState();
        }
      }));
    case `question-genre`:
      return renderScreen(screenLevelGenre({
        songs: state.screenData.songs,
        trueSong: state.screenData.trueSong,
        answerCallback: (isAnswerCorrect) => {
          setState(LogicController.onQuestionAnswered(getState(), isAnswerCorrect));
          renderState();
        }
      }));
    case `result-success`:
      return renderScreen(screenLevelSuccess({
        totalScore: state.score,
        percentage: state.screenData.percentage,
        onClickReplay: () => {
          resetState();
          renderState();
        }
      }));
    case `result-fail`:
      return renderScreen(screenLevelFail({
        onClickReplay: () => {
          resetState();
          renderState();
        }
      }));
    default:
      return false;
  }
}
