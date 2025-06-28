class BoxModel extends EventTarget{
  #_boxSizing = '';

  #_width = 0;
  #_height = 0;
  
  #_marginTop = 0;
  #_marginRight = 0;
  #_marginBottom = 0;
  #_marginLeft = 0;
  
  #_paddingTop = 0;
  #_paddingRight = 0;
  #_paddingBottom = 0;
  #_paddingLeft = 0;

  #_borderTop = 0;
  #_borderRight = 0;
  #_borderBottom = 0;
  #_borderLeft = 0;

  constructor() {
    super();
  }
  /************************************************/
  get BoxSizing() {
    let retValue = this.#_boxSizing;
    /************************************************/
    return retValue;
  }
  /************************************************/
  set BoxSizing(value) {
    this.#_boxSizing = value;
    /************************************************/
    this.#handleProperttChanged('boxSizing', this.#_boxSizing);
  }
  /************************************************/
  get Width() {
    let retValue = this.#_width;
    /************************************************/
    return retValue;
  }
  /************************************************/
  set Width(value) {
    if (value == this.#_width) return;
    /************************************************/
    this.#_width = value;
    /************************************************/
    this.#handleProperttChanged('width', this.#_width);
  }
  /************************************************/
  get Height() {
    let retValue = this.#_height;
    /************************************************/
    return retValue;
  }
  /************************************************/
  set Height(value) {
    if (value == this.#_height) return;
    /************************************************/
    this.#_height = value;
    /************************************************/
    this.#handleProperttChanged('height', this.#_height);
  }
  /************************************************/
  get MarginTop() {
    let retValue = this.#_marginTop;
    /************************************************/
    return retValue;
  }
  /************************************************/
  set MarginTop(value) {
    if (value == this.#_marginTop) return;
    /************************************************/
    this.#_marginTop = value;
    /************************************************/
    this.#handleProperttChanged('marginTop', this.#_marginTop);
  }
  /************************************************/
  get MarginRight() {
    let retValue = this.#_marginRight;
    /************************************************/
    return retValue;
  }
  /************************************************/
  set MarginRight(value) {
    if (value == this.#_marginRight) return;
    /************************************************/
    this.#_marginRight = value;
    /************************************************/
    this.#handleProperttChanged('marginRight', this.#_marginRight);
  }
  /************************************************/
  get MarginBottom() {
    let retValue = this.#_marginBottom;
    /************************************************/
    return retValue;
  }
  /************************************************/
  set MarginBottom(value) {
    if (value == this.#_marginBottom) return;
    /************************************************/
    this.#_marginBottom = value;
    /************************************************/
    this.#handleProperttChanged('marginBottom', this.#_marginBottom);
  }
  /************************************************/
  get MarginLeft() {
    let retValue = this.#_marginLeft;
    /************************************************/
    return retValue;
  }
  /************************************************/
  set MarginLeft(value) {
    if (value == this.#_marginLeft) return;
    /************************************************/
    this.#_marginLeft = value;
    /************************************************/
    this.#handleProperttChanged('marginLeft', this.#_marginLeft);
  }
  /************************************************/
  get BorderTop() {
    let retValue = this.#_borderTop;
    /************************************************/
    return retValue;
  }
  /************************************************/
  set BorderTop(value) {
    if (value == this.#_borderTop) return;
    /************************************************/
    this.#_borderTop = value;
    /************************************************/
    this.#handleProperttChanged('borderTop', this.#_borderTop);
  }
  /************************************************/
  get BorderRight() {
    let retValue = this.#_borderRight;
    /************************************************/
    return retValue;
  }
  /************************************************/
  set BorderRight(value) {
    if (value == this.#_borderRight) return;
    /************************************************/
    this.#_borderRight = value;
    /************************************************/
    this.#handleProperttChanged('borderRight', this.#_borderRight);
  }
  /************************************************/
  get BorderBottom() {
    let retValue = this.#_borderBottom;
    /************************************************/
    return retValue;
  }
  /************************************************/
  set BorderBottom(value) {
    if (value == this.#_borderBottom) return;
    /************************************************/
    this.#_borderBottom = value;
    /************************************************/
    this.#handleProperttChanged('borderBottom', this.#_borderBottom);
  }
  /************************************************/
  get BorderLeft() {
    let retValue = this.#_borderLeft;
    /************************************************/
    return retValue;
  }
  /************************************************/
  set BorderLeft(value) {
    if (value == this.#_borderLeft) return;
    /************************************************/
    this.#_borderLeft = value;
    /************************************************/
    this.#handleProperttChanged('borderLeft', this.#_borderLeft);
  }
  /************************************************/
  get PaddingTop() {
    let retValue = this.#_paddingTop;
    /************************************************/
    return retValue;
  }
  /************************************************/
  set PaddingTop(value) {
    if (value == this.#_paddingTop) return;
    /************************************************/
    this.#_paddingTop = value;
    /************************************************/
    this.#handleProperttChanged('paddingTop', this.#_paddingTop);
  }
  /************************************************/
  get PaddingRight() {
    let retValue = this.#_paddingRight;
    /************************************************/
    return retValue;
  }
  /************************************************/
  set PaddingRight(value) {
    if (value == this.#_paddingRight) return;
    /************************************************/
    this.#_paddingRight = value;
    /************************************************/
    this.#handleProperttChanged('paddingRight', this.#_paddingRight);
  }
  /************************************************/
  get PaddingBottom() {
    let retValue = this.#_paddingBottom;
    /************************************************/
    return retValue;
  }
  /************************************************/
  set PaddingBottom(value) {
    if (value == this.#_paddingBottom) return;
    /************************************************/
    this.#_paddingBottom = value;
    /************************************************/
    this.#handleProperttChanged('paddingBottom', this.#_paddingBottom);
  }
  /************************************************/
  get PaddingLeft() {
    let retValue = this.#_paddingLeft;
    /************************************************/
    return retValue;
  }
  /************************************************/
  set PaddingLeft(value) {
    if (value == this.#_paddingLeft) return;
    /************************************************/
    this.#_paddingLeft = value;
    /************************************************/
    this.#handleProperttChanged('paddingLeft', this.#_paddingLeft);
  }
  /************************************************/
  generateShorthand(t, r, b, l) {
    let retValue = `${t}px ${r}px ${b}px; ${l}px;\n`;
    /************************************************/
    if ((l == r)                        ) { retValue = `${t}px ${l}px ${b}px;\n`; }
    if ((l == r) && (t == b)            ) { retValue = `${t}px ${l}px;\n`;        }
    if ((l == r) && (t == b) && (t == l)) { retValue = `${t}px;\n`;               }
    /************************************************/
    return retValue;
  }
  /************************************************/
  generateCode() {
    var retValue;

    retValue = '.box {\n';

    if (this.BoxSizing === 'border-box') {
      retValue += '    -moz-box-sizing: border-box;\n';
      retValue += '         box-sizing: border-box;\n';
      retValue += '\n';
    }

    retValue += '    width: <span contenteditable type="number" pattern="[0-9]{1,3}">' + this.Width + '</span>px;\n';
    retValue += '    height: ' + this.Height + 'px;\n';

    retValue += '    margin: ' + this.generateShorthand(this.MarginTop, this.MarginRight, this.MarginBottom, this.MarginLeft);
    retValue += '    border-width: ' + this.generateShorthand(this.BorderTop, this.BorderRight, this.BorderBottom, this.BorderLeft);
    retValue += '    padding: ' + this.generateShorthand(this.PaddingTop, this.PaddingRight, this.PaddingBottom, this.PaddingLeft);
    retValue += '}';

    return retValue;
  }
  /************************************************/
  #handleProperttChanged(property, value) {
    this.dispatchEvent(new CustomEvent('propertyChanged', {
      detail: {
        property,
        value
      }
    }));
  }
}