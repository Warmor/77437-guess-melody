import WelcomeView from './welcome-view';
import App from '../main';
import {renderView} from '../utils';


class Welcome {
  constructor() {}

  init() {
    this.view = new WelcomeView();

    this.view.onPlayClick = () => {
      App.showGame();
    };
    renderView(this.view.element);
  }
}
const welcome = new Welcome();

export default welcome;
