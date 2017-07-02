import PreloaderView from './_preloader-view';
import {renderView} from '../utils';

class Preloader {
  constructor() {}
  show() {
    this.view = new PreloaderView();
    renderView(this.view.element);
  }
}

const preloader = new Preloader();

export default preloader;
