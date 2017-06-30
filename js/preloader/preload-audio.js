class Loader {

  constructor(data) {
    this.audioFiles = [];
    this.loaded = 0;
  }

  generateAudioFiles(data) {
    const audioFiles = [];
    data.forEach((question) => {
      if (question.type === `genre`) {
        question.answers.forEach((answer) => {
          audioFiles.push(answer.src);
        });
      } else {
        audioFiles.push(question.src);
      }
    });
    return audioFiles;
  }

  preloadAudio(url) {
    // c cервера иногда приходят пустые url
    if (url === ``) {
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      const audio = new Audio();
      audio.addEventListener(`canplaythrough`, () => {
        resolve();
      }, false);
      audio.src = url;
    });
  }

  startPreloadAudio(audioFiles) {
    return Promise.all(audioFiles.map(this.preloadAudio));
  }

  async init(data) {
    this.audioFiles = this.generateAudioFiles(data);
    await this.startPreloadAudio(this.audioFiles);
    return data;
  }
}

const preloadAudio = new Loader();

export default preloadAudio;
