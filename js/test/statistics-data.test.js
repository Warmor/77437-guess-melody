import statisticsData from '../data/statistics-data';

import assert from 'assert';

describe(`getPercentage`, () => {

  it(`percentage should return 90% for 1st`, () => {
    assert.equal(90, statisticsData.getPercentage(10, 10));
  });

  it(`percentage should return 50% for 5st`, () => {
    assert.equal(50, statisticsData.getPercentage(10, 6));
  });

  it(`percentage should return 0% for last st`, () => {
    assert.equal(0, statisticsData.getPercentage(10, 1));
  });

});
