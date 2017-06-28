import preloader from './preloader/preloader';

const SERVER_URL = `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody`;
const DEFAULT_NAME = `77437`;

export default class Loader {
  static async loadData() {
    preloader.show();
    const response = await fetch(`${SERVER_URL}/questions`);
    return response.json();
  }

  static async loadResults(name = DEFAULT_NAME) {
    preloader.show();
    const response = await fetch(`${SERVER_URL}/stats/${name}`);
    return response.json();
  }

  static async saveResults(data, name = DEFAULT_NAME) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${SERVER_URL}/stats/${name}`, requestSettings);
  }

}
