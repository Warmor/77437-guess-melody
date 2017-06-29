import {convertTime} from '../utils';
import assert from 'assert';

describe(`computePercentage`, () => {
  it(`convert 120 sec to 02 min, 00 sec`, () => {
    assert.deepEqual({min: `02`, sec: `00`}, convertTime(120));
  });

  it(`convert 75 sec to 01 min, 15 sec`, () => {
    assert.deepEqual({min: `01`, sec: `15`}, convertTime(75));
  });

});
