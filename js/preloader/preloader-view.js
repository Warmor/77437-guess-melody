import View from '../view';

export default class PreloaderView extends View {
  constructor() {
    super();
  }

  get template() {
    return `
      <section class="main">
        <div class="cssload-loader">
          <div class="cssload-inner cssload-one"></div>
          <div class="cssload-inner cssload-two"></div>
          <div class="cssload-inner cssload-three"></div>
        </div>
      </section>
      `;
  }

}
