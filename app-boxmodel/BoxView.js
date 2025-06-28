class BoxView extends HTMLElement {
  #model = undefined;

  #box         = undefined;
  #boxInner    = undefined;
  #boxMargin   = undefined;
  #boxMarginV  = undefined;
  #boxMarginH  = undefined;
  #boxBorder   = undefined;
  #boxBorderV  = undefined;
  #boxBorderH  = undefined;
  #boxPadding  = undefined;
  #boxPaddingV = undefined;
  #boxPaddingH = undefined;

  /************************************************/
  /**
   * @type {ShadowRoot}
   */
  #shadow = undefined;
  /************************************************/
  constructor() {
    super();
    /************************************************/
    this.#model = new BoxModel();
    this.#model.addEventListener('propertyChanged', (e) => {
      // console.log(`propertyChanged: { property: ${e.detail.property}, value: ${e.detail.value} }`);
      this.updateUI();
    });
    /************************************************/
    this.#shadow = this.attachShadow({ mode: "open" });
    /************************************************/
    this.#shadow.innerHTML = this.render();

    this.#box         = this.#shadow.querySelector('.box');
    this.#boxInner    = this.#shadow.querySelector('.box-inner');
    this.#boxMargin   = this.#shadow.querySelector('.box-margin');
    this.#boxMarginV  = this.#boxMargin.querySelector('.box-property-vertical'  );
    this.#boxMarginH  = this.#boxMargin.querySelector('.box-property-horizontal');
    this.#boxBorder   = this.#shadow.querySelector('.box-border');
    this.#boxBorderV  = this.#boxBorder.querySelector('.box-property-vertical'  );
    this.#boxBorderH  = this.#boxBorder.querySelector('.box-property-horizontal');
    this.#boxPadding  = this.#shadow.querySelector('.box-padding');
    this.#boxPaddingV = this.#boxPadding.querySelector('.box-property-vertical'  );
    this.#boxPaddingH = this.#boxPadding.querySelector('.box-property-horizontal');

    // #boxMargin
    this.#boxMargin.addEventListener('mouseenter', () => {
      this.#boxInner.dataset.hoverProperty = this.#boxMargin.dataset.property;
    });
    // #boxBorder
    this.#boxBorder.addEventListener('mouseenter', () => {
      this.#boxInner.dataset.hoverProperty = this.#boxBorder.dataset.property;
    });
    // #boxPadding
    this.#boxPadding.addEventListener('mouseenter', () => {
      this.#boxInner.dataset.hoverProperty = this.#boxPadding.dataset.property;
    });
    // #boxInner
    this.#boxInner.addEventListener('mouseenter', () => {
      this.#boxInner.dataset.hoverProperty = this.#boxInner.dataset.property;
    });
  }
  /************************************************/
  render() {
    return `
<link rel="stylesheet" href="BoxView.css">

<div class="box">
  <div class="box-margin box-property" data-property="margin">
    <span class="box-property-vertical"></span>
    <span class="box-property-horizontal"></span>
  </div>
  <div class="box-border box-property" data-property="border">
    <span class="box-property-vertical"></span>
    <span class="box-property-horizontal"></span>
  </div>
  <div class="box-padding box-property" data-property="padding">
    <span class="box-property-vertical"></span>
    <span class="box-property-horizontal"></span>
  </div>
  <div class="box-inner box-property" data-property="content">
    <span class="box-property-vertical"></span>
    <span class="box-property-horizontal"></span>
  </div>
</div>
    `;
  }
  /************************************************/
  updateUI() {
    var boxMarginLeft = this.#model.MarginLeft;
    var boxMarginTop  = this.#model.MarginTop;
    /************************************************/
    var boxMarginLeftRight = this.#model.MarginLeft + this.#model.MarginRight;
    var boxMarginTopBottom = this.#model.MarginTop  + this.#model.MarginBottom;
    /************************************************/
    var boxBorderLeft = this.#model.BorderLeft;
    var boxBorderTop  = this.#model.BorderTop;
    /************************************************/
    var boxBorderLeftRight = this.#model.BorderLeft + this.#model.BorderRight;
    var boxBorderTopBottom = this.#model.BorderTop  + this.#model.BorderBottom;
    /************************************************/
    var boxPaddingLeft = this.#model.PaddingLeft;
    var boxPaddingTop  = this.#model.PaddingTop;
    /************************************************/
    var boxPaddingLeftRight = this.#model.PaddingLeft + this.#model.PaddingRight;
    var boxPaddingTopBottom = this.#model.PaddingTop  + this.#model.PaddingBottom;
    /************************************************/
    var boxLeft = boxMarginLeft + boxBorderLeft + boxPaddingLeft;
    var boxTop  = boxMarginTop  + boxBorderTop  + boxPaddingTop;
    /************************************************/
    var boxWidth  = this.#model.BoxSizing === 'border-box' ? this.#model.Width  - boxPaddingLeftRight - boxBorderLeftRight : this.#model.Width;
    var boxHeight = this.#model.BoxSizing === 'border-box' ? this.#model.Height - boxPaddingTopBottom - boxBorderTopBottom : this.#model.Height;
    /************************************************/
    var boxMarginWidth  = boxWidth  + boxMarginLeftRight + boxPaddingLeftRight + boxBorderLeftRight;
    var boxMarginHeight = boxHeight + boxMarginTopBottom + boxPaddingTopBottom + boxBorderTopBottom;
    /************************************************/
    var boxBorderWidth  = boxWidth  + boxPaddingLeftRight + boxBorderLeftRight;
    var boxBorderHeight = boxHeight + boxPaddingTopBottom + boxBorderTopBottom;
    /************************************************/
    var boxPaddingWidth  = boxWidth  + boxPaddingLeftRight;
    var boxPaddingHeight = boxHeight + boxPaddingTopBottom;
    /************************************************/
    if (boxMarginTop   >= 0) boxMarginTop   = boxMarginTop   * -1 - boxPaddingTop  - boxBorderTop;
    if (boxMarginLeft  >= 0) boxMarginLeft  = boxMarginLeft  * -1 - boxPaddingLeft - boxBorderLeft;
    if (boxBorderTop   >= 0) boxBorderTop   = boxBorderTop   * -1 - boxPaddingTop;
    if (boxBorderLeft  >= 0) boxBorderLeft  = boxBorderLeft  * -1 - boxPaddingLeft;
    if (boxPaddingTop  >= 0) boxPaddingTop  = boxPaddingTop  * -1;
    if (boxPaddingLeft >= 0) boxPaddingLeft = boxPaddingLeft * -1;
    /************************************************/
    this.#box.style.width  =  `${boxWidth}px`;
    this.#box.style.height =  `${boxHeight}px`;
    this.#box.style.top    =  `${boxTop}px`;
    this.#box.style.left   =  `${boxLeft}px`;
    /************************************************/
    this.#boxInner.style.width  = `${boxWidth}px`;
    this.#boxInner.style.height = `${boxHeight}px`;
    /************************************************/
    this.#boxInner.dataset.width  = this.#model.Width;
    this.#boxInner.dataset.height = this.#model.Height;
    /************************************************/
    this.#boxMargin.style.width  =  `${boxMarginWidth}px`;
    this.#boxMargin.style.height =  `${boxMarginHeight}px`;
    this.#boxMargin.style.top    =  `${boxMarginTop}px`;
    this.#boxMargin.style.left   =  `${boxMarginLeft}px`;
    /************************************************/
    this.#boxMarginV.dataset.top    = this.#model.MarginTop;
    this.#boxMarginV.dataset.bottom = this.#model.MarginBottom;
    this.#boxMarginH.dataset.left   = this.#model.MarginLeft;
    this.#boxMarginH.dataset.right  = this.#model.MarginRight;
    /************************************************/
    this.#boxBorder.style.width  = `${boxBorderWidth}px`;
    this.#boxBorder.style.height = `${boxBorderHeight}px`;
    this.#boxBorder.style.top    = `${boxBorderTop}px`;
    this.#boxBorder.style.left   = `${boxBorderLeft}px`;
    /************************************************/
    this.#boxBorderV.dataset.top    = this.#model.BorderTop;
    this.#boxBorderV.dataset.bottom = this.#model.BorderBottom;
    this.#boxBorderH.dataset.left   = this.#model.BorderLeft;
    this.#boxBorderH.dataset.right  = this.#model.BorderRight;
    /************************************************/
    this.#boxPadding.style.width  =  `${boxPaddingWidth}px`;
    this.#boxPadding.style.height =  `${boxPaddingHeight}px`;
    this.#boxPadding.style.top    =  `${boxPaddingTop}px`;
    this.#boxPadding.style.left   =  `${boxPaddingLeft}px`;
    /************************************************/
    this.#boxPaddingV.dataset.top    = this.#model.PaddingTop;
    this.#boxPaddingV.dataset.bottom = this.#model.PaddingBottom;
    this.#boxPaddingH.dataset.left   = this.#model.PaddingLeft;
    this.#boxPaddingH.dataset.right  = this.#model.PaddingRight;
  }

  get Model() {
    return this.#model;
  }
}
/************************************************/
customElements.define('box-view', BoxView);