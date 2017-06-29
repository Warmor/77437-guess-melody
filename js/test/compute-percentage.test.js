import {computePercentage} from '../utils';
import assert from 'assert';

describe(`computePercentage`, () => {

  const statistics = [
    {time: 50, score: 10},
    {time: 55, score: 9},
    {time: 60, score: 8},
    {time: 65, score: 7},
    {time: 70, score: 6},
    {time: 75, score: 5},
    {time: 80, score: 4},
    {time: 85, score: 3},
    {time: 90, score: 2},
  ];

  it(`computePercentage should return 90% for 1st`, () => {
    assert.equal(90, computePercentage(45, 10, statistics));
  });

  it(`computePercentage should return 50% for 5st`, () => {
    assert.equal(50, computePercentage(65, 6, statistics));
  });

  it(`computePercentage should return 0% for last st`, () => {
    assert.equal(0, computePercentage(100, 1, statistics));
  });

});
