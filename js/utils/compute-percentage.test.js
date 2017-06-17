import computePercentage from '../utils/compute-percentage';
import gameStatistics from '../data/game-statistics';
import assert from 'assert';

describe(`computePercentage`, () => {

  it(`computePercentage should return 90% for 1st`, () => {
    assert.equal(90, computePercentage({time: 45, score: 10, statistics: gameStatistics}));
  });

  it(`computePercentage should return 50% for 5st`, () => {
    assert.equal(50, computePercentage({time: 65, score: 6, statistics: gameStatistics}));
  });

  it(`computePercentage should return 0% for last st`, () => {
    assert.equal(0, computePercentage({time: 100, score: 1, statistics: gameStatistics}));
  });

});
