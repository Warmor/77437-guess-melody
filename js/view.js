export default class AbstractView {
  get template() {
    throw new Error(`need template`);
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }

  render() {
    const container = document.createElement(`div`);
    container.innerHTML = this.template;
    return container.children[0];
  }

  bind() {}

}
