class GameData {
  constructor() {
    this.songs = [
      {
        name: `Пелагея`,
        value: `val-1`,
        id: `a-1`,
        imgPath: `/img/default.png`,
        filePath: `/mp3/Пелагея`,
        genre: `Pop`
      },
      {
        name: `Crazy Town`,
        value: `val-2`,
        id: `a-2`,
        imgPath: `/img/default.png`,
        filePath: `/mp3/CrazyTown`,
        genre: `Rock`
      },
      {
        name: `Lorde`,
        value: `val-3`,
        id: `a-3`,
        imgPath: `/img/default.png`,
        filePath: `/mp3/Lorde`,
        genre: `Pop`
      },
      {
        name: `Skillet`,
        value: `val-4`,
        id: `a-4`,
        imgPath: `/img/default.png`,
        filePath: `/mp3/Skillet`,
        genre: `Rock`
      },
      {
        name: `Грибы`,
        value: `val-5`,
        id: `a-5`,
        imgPath: `/img/default.png`,
        filePath: `/mp3/Грибы`,
        genre: `Rap`
      },
      {
        name: `Noize MC`,
        value: `val-6`,
        id: `a-6`,
        imgPath: `/img/default.png`,
        filePath: `/mp3/Noize`,
        genre: `Rap`
      },
      {
        name: `Halestorm`,
        value: `val-7`,
        id: `a-7`,
        imgPath: `/img/default.png`,
        filePath: `/mp3/Halestorm`,
        genre: `Rock`
      },
      {
        name: `This Century`,
        value: `val-8`,
        id: `a-8`,
        imgPath: `/img/default.png`,
        filePath: `/mp3/ThisCentury`,
        genre: `Pop`
      }
    ];
  }

  getUniqueSongs(size) {
    const songsSet = new Set();
    while (songsSet.size < size) {
      songsSet.add(this.getRandomItem(this.songs));
    }
    const songs = [...songsSet];
    return songs;
  }

  getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  createScreenData(size) {
    const songs = this.getUniqueSongs(size)
    const trueSong = this.getRandomItem(songs)
    return {
      songs: songs,
      trueSong: trueSong
    }
  }

};
const gameData = new GameData();
export default gameData;
