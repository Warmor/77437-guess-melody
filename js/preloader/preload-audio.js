class LoaderAudio {

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

    return new Promise((resolve, reject) => {
      const audio = new Audio();

      // на случай если сервер завис и не отдаёт никакого ответа (вечный pending)
      const exclusionTimeout = setTimeout(() => {
        resolve();
      }, 10000);

      audio.addEventListener(`canplaythrough`, () => {
        clearTimeout(exclusionTimeout);
        resolve();
      }, false);

      // в текущем проекте не предусмотренно экрана ошибки загрузки
      audio.addEventListener(`error`, () => {
        clearTimeout(exclusionTimeout);
        resolve();
      }, false);
      audio.src = url;
    });
  }

  startPreloadAudio(audioFiles) {
    return Promise.all(audioFiles.map(this.preloadAudio))
      .catch(() => {
        throw new Error(`Ошибка загрузки аудио`);
      });
  }

  async init(data) {
    this.audioFiles = this.generateAudioFiles(data);
    await this.startPreloadAudio(this.audioFiles);
    return data;
  }
}

const preloadAudio = new LoaderAudio();

export default preloadAudio;
