import {onQuestionAnswered} from '../controllers/logic-controller';
import {resetState} from '../data/game-state';

import assert from 'assert';

describe(`onQuestionAnswered`, () => {

  it(`should return "result-fail" because lives < 1`, () => {
    const state = resetState();
    state.lives = 0;
    state.time = 120;
    const isAnswerCorrect = false;
    const newState = onQuestionAnswered(state, isAnswerCorrect);
    assert.equal(`result-fail`, newState.screen);
  });

  it(`should return "result-success" because currentQuestion == question`, () => {
    const state = resetState();
    state.lives = 3;
    state.questions = 3;
    state.currentQuestion = 3;
    const isAnswerCorrect = false;
    const newState = onQuestionAnswered(state, isAnswerCorrect);
    assert.equal(`result-success`, newState.screen);
  });

  it(`should return "question-artist" or "question-genre"`, () => {
    const state = resetState();
    state.lives = 3;
    state.questions = 7;
    state.currentQuestion = 1;
    state.timer = 100;
    const isAnswerCorrect = false;
    const newState = onQuestionAnswered(state, isAnswerCorrect);
    assert(`question-artist` === newState.screen || `question-genre` === newState.screen);
  });

});
