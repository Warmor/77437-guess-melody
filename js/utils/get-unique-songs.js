import songsData from '../data/songs-data';
import getRandomItem from '../utils/get-random-item';

const getUniqueSongs = function (size) {
  const songsSet = new Set();
  while (songsSet.size < size) {
    songsSet.add(getRandomItem(songsData));
  }
  const songs = [...songsSet];
  return songs;
};

export default getUniqueSongs;
