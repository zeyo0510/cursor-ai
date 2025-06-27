class BoxView extends HTMLElement {
  #model = undefined;
  /************************************************/
  constructor() {
    super();
    /************************************************/
    this.#model = new BoxModel();
  }
  /************************************************/
  updateUI() {

  }
}
/************************************************/
customElements.define('box-view', BoxView);