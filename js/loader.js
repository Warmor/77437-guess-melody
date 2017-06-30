import preloader from './preloader/preloader';
import preloadAudio from './preloader/preload-audio';

const SERVER_URL = `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody`;
const DEFAULT_NAME = `77437`;

export default class Loader {
  static async loadData() {
    preloader.show();
    const response = await fetch(`${SERVER_URL}/questions`);
    const data = await response.json();
    await preloadAudio.init(data);
    return data;
  }

  static async loadResults(name = DEFAULT_NAME) {
    preloader.show();
    const response = await fetch(`${SERVER_URL}/stats/${name}`);
    const data = await response.json();
    return data;
  }

  static async saveResults(data, name = DEFAULT_NAME) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return await fetch(`${SERVER_URL}/stats/${name}`, requestSettings);
  }

}
