import PreloaderView from './preloader-view';

class Preloader {
  constructor() {
    this.view = new PreloaderView();
    this.app = document.querySelector(`.app`);

  }
  show() {
    this.app.appendChild(this.view.element);
    this.element = this.app.querySelector(`.cssload-loader`);
  }
  hide() {
    this.app.removeChild(this.element);
  }
}

const preloader = new Preloader();

export default preloader;
