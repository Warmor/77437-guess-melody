import gameStatistics from '../data/game-statistics';
import getRandomItem from '../utils/get-random-item';
import getRandomScreenName from '../utils/get-random-screen-name';
import computePercentage from '../utils/compute-percentage';
import getUniqueSongs from '../utils/get-unique-songs';


export function nextQuestion(state) {
  // const newScreen = getRandomScreenName();
  const newScreen = `question-genre`;
  let screenData;

  if (newScreen === `question-artist`) {
    const songs = getUniqueSongs(3);
    const trueSong = getRandomItem(songs);
    screenData = {
      songs,
      trueSong,
    };
  } else {
    const songs = getUniqueSongs(4);
    const trueSong = getRandomItem(songs);
    screenData = {
      songs,
      trueSong,
    };
  }

  return Object.assign({}, state, {
    currentQuestion: state.currentQuestion + 1,
    screen: newScreen,
    screenData,
  });
}

export function onQuestionAnswered(state, isAnswerCorrect) {
  const {currentQuestion, questions, lives} = state;

  const isFinalQuestion = currentQuestion === questions;
  const newScore = state.score + (isAnswerCorrect ? 1 : 0);
  const newLives = isAnswerCorrect ? lives : lives - 1;

  if (newLives < 1) {
    return Object.assign({}, state, {
      lives: newLives,
      score: newScore,
      screen: `result-fail`,
    });
  }

  if (isFinalQuestion) {
    return Object.assign({}, state, {
      lives: newLives,
      score: newScore,
      screen: `result-success`,
      screenData: {
        percentage: computePercentage({
          time: state.time,
          score: newScore,
          statistics: gameStatistics,
        }),
      },
    });
  }


  return Object.assign({}, nextQuestion(state), {
    lives: newLives,
    score: newScore,
  });
}

// this is it! (almost) all the logic in 3 functions, testable!
export default {
  nextQuestion,
  onQuestionAnswered,
};
