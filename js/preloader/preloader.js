import PreloaderView from './preloader-view';
import {renderView} from '../utils';

class Preloader {
  constructor() {}
  show() {
    this.view = new PreloaderView();
    renderView(this.view.element);
  }
  hide() {}
}

const preloader = new Preloader();

export default preloader;
