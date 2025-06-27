document.addEventListener('DOMContentLoaded', function() {
  let model = new BoxModel();

  const $box         = document.querySelector('.box');
  const $boxInner    = document.querySelector('.box-inner');
  const $boxMargin   = document.querySelector('.box-margin');
  const $boxMarginV  = $boxMargin.querySelector('.box-property-vertical'  );
  const $boxMarginH  = $boxMargin.querySelector('.box-property-horizontal');
  const $boxBorder   = document.querySelector('.box-border');
  const $boxBorderV  = $boxBorder.querySelector('.box-property-vertical'  );
  const $boxBorderH  = $boxBorder.querySelector('.box-property-horizontal');
  const $boxPadding  = document.querySelector('.box-padding');
  const $boxPaddingV = $boxPadding.querySelector('.box-property-vertical'  );
  const $boxPaddingH = $boxPadding.querySelector('.box-property-horizontal');

  const $controlContentBox           = document.querySelector("#controlContentBox");
  const $controlBorderBox            = document.querySelector("#controlBorderBox");
  const $controlBoxWidth             = document.querySelector("#controlBoxWidth");
  const $controlBoxHeight            = document.querySelector("#controlBoxHeight");
  const $controlLinkPaddingNone      = document.querySelector("#controlLinkPaddingNone");
  const $controlLinkPaddingTopBottom = document.querySelector("#controlLinkPaddingTopBottom");
  const $controlLinkPaddingRightLeft = document.querySelector("#controlLinkPaddingRightLeft");
  const $controlLinkPaddingAll       = document.querySelector("#controlLinkPaddingAll");
  const $controlBoxPaddingTop        = document.querySelector("#controlBoxPaddingTop");
  const $controlBoxPaddingRight      = document.querySelector("#controlBoxPaddingRight");
  const $controlBoxPaddingBottom     = document.querySelector("#controlBoxPaddingBottom");
  const $controlBoxPaddingLeft       = document.querySelector("#controlBoxPaddingLeft");
  const $controlLinkMarginNone       = document.querySelector("#controlLinkMarginNone");
  const $controlLinkMarginTopBottom  = document.querySelector("#controlLinkMarginTopBottom");
  const $controlLinkMarginRightLeft  = document.querySelector("#controlLinkMarginRightLeft");
  const $controlLinkMarginAll        = document.querySelector("#controlLinkMarginAll");
  const $controlBoxMarginTop         = document.querySelector("#controlBoxMarginTop");
  const $controlBoxMarginRight       = document.querySelector("#controlBoxMarginRight");
  const $controlBoxMarginBottom      = document.querySelector("#controlBoxMarginBottom");
  const $controlBoxMarginLeft        = document.querySelector("#controlBoxMarginLeft");
  const $controlLinkBorderNone       = document.querySelector("#controlLinkBorderNone");
  const $controlLinkBorderTopBottom  = document.querySelector("#controlLinkBorderTopBottom");
  const $controlLinkBorderRightLeft  = document.querySelector("#controlLinkBorderRightLeft");
  const $controlLinkBorderAll        = document.querySelector("#controlLinkBorderAll");
  const $controlBoxBorderTop         = document.querySelector("#controlBoxBorderTop");
  const $controlBoxBorderRight       = document.querySelector("#controlBoxBorderRight");
  const $controlBoxBorderBottom      = document.querySelector("#controlBoxBorderBottom");
  const $controlBoxBorderLeft        = document.querySelector("#controlBoxBorderLeft");


  function init() {
    model.addEventListener('propertyChanged', (e) => {
      console.log(`propertyChanged: { property: ${e.detail.property}, value: ${e.detail.value} }`);
    });
    /************************************************/
    getBoxProperties();
    /************************************************/
    // $boxMargin
    $boxMargin.addEventListener('mouseenter', () => {
      $boxInner.dataset.hoverProperty = $boxMargin.dataset.property;
    });
    // $boxBorder
    $boxBorder.addEventListener('mouseenter', () => {
      $boxInner.dataset.hoverProperty = $boxBorder.dataset.property;
    });
    // $boxPadding
    $boxPadding.addEventListener('mouseenter', () => {
      $boxInner.dataset.hoverProperty = $boxPadding.dataset.property;
    });
    /************************************************/
    // $controlContentBox
    $controlContentBox.addEventListener('input', getBoxProperties);
    // $controlBorderBox
    $controlBorderBox.addEventListener('input', getBoxProperties);
    // $controlBoxWidth
    $controlBoxWidth.addEventListener('input', getBoxProperties);
    // $controlBoxHeight
    $controlBoxHeight.addEventListener('input', getBoxProperties);
    // $controlLinkPaddingNone
    $controlLinkPaddingNone.addEventListener('input', getBoxProperties);
    // $controlLinkPaddingTopBottom
    $controlLinkPaddingTopBottom.addEventListener('input', getBoxProperties);
    // $controlLinkPaddingRightLeft
    $controlLinkPaddingRightLeft.addEventListener('input', getBoxProperties);
    // $controlLinkPaddingAll
    $controlLinkPaddingAll.addEventListener('input', getBoxProperties);
    // $controlBoxPaddingTop
    $controlBoxPaddingTop.addEventListener('input', getBoxProperties);
    // $controlBoxPaddingRight
    $controlBoxPaddingRight.addEventListener('input', getBoxProperties);
    // $controlBoxPaddingBottom
    $controlBoxPaddingBottom.addEventListener('input', getBoxProperties);
    // $controlBoxPaddingLeft
    $controlBoxPaddingLeft.addEventListener('input', getBoxProperties);
    // $controlLinkMarginNone
    $controlLinkMarginNone.addEventListener('input', getBoxProperties);
    // $controlLinkMarginTopBottom
    $controlLinkMarginTopBottom.addEventListener('input', getBoxProperties);
    // $controlLinkMarginRightLeft
    $controlLinkMarginRightLeft.addEventListener('input', getBoxProperties);
    // $controlLinkMarginAll
    $controlLinkMarginAll.addEventListener('input', getBoxProperties);
    // $controlBoxMarginTop
    $controlBoxMarginTop.addEventListener('input', getBoxProperties);
    // $controlBoxMarginRight
    $controlBoxMarginRight.addEventListener('input', getBoxProperties);
    // $controlBoxMarginBottom
    $controlBoxMarginBottom.addEventListener('input', getBoxProperties);
    // $controlBoxMarginLeft
    $controlBoxMarginLeft.addEventListener('input', getBoxProperties);
    // $controlLinkBorderNone
    $controlLinkBorderNone.addEventListener('input', getBoxProperties);
    // $controlLinkBorderTopBottom
    $controlLinkBorderTopBottom.addEventListener('input', getBoxProperties);
    // $controlLinkBorderRightLeft
    $controlLinkBorderRightLeft.addEventListener('input', getBoxProperties);
    // $controlLinkBorderAll
    $controlLinkBorderAll.addEventListener('input', getBoxProperties);
    // $controlBoxBorderTop
    $controlBoxBorderTop.addEventListener('input', getBoxProperties);
    // $controlBoxBorderRight
    $controlBoxBorderRight.addEventListener('input', getBoxProperties);
    // $controlBoxBorderBottom
    $controlBoxBorderBottom.addEventListener('input', getBoxProperties);
    // $controlBoxBorderLeft
    $controlBoxBorderLeft.addEventListener('input', getBoxProperties);
  }

  function getBoxProperties() {
    model.BoxSizing = $controlBorderBox.checked ? 'border-box' : 'content-box';
    /************************************************/
    var linkMarginTB  = $controlLinkMarginTopBottom.checked;
    var linkMarginRL  = $controlLinkMarginRightLeft.checked;
    var linkMarginAll = $controlLinkMarginAll.checked;

    if (linkMarginTB) {
      $controlBoxMarginBottom.value = $controlBoxMarginTop.value;
    }
    if (linkMarginRL) {
      $controlBoxMarginLeft.value = $controlBoxMarginRight.value;
    }
    if (linkMarginAll) {
      $controlBoxMarginRight.value  = $controlBoxMarginTop.value;
      $controlBoxMarginBottom.value = $controlBoxMarginTop.value;
      $controlBoxMarginLeft.value   = $controlBoxMarginTop.value;
    }
    /************************************************/
    var linkBorderTB  = $controlLinkBorderTopBottom.checked;
    var linkBorderRL  = $controlLinkBorderRightLeft.checked;
    var linkBorderAll = $controlLinkBorderAll.checked;

    if (linkBorderTB) {
      $controlBoxBorderBottom.value = $controlBoxBorderTop.value;
    }
    if (linkBorderRL) {
      $controlBoxBorderLeft.value = $controlBoxBorderRight.value;
    }
    if (linkBorderAll) {
      $controlBoxBorderRight.value  = $controlBoxBorderTop.value;
      $controlBoxBorderBottom.value = $controlBoxBorderTop.value;
      $controlBoxBorderLeft.value   = $controlBoxBorderTop.value;
    }
    /************************************************/
    var linkPaddingTB  = $controlLinkPaddingTopBottom.checked;
    var linkPaddingRL  = $controlLinkPaddingRightLeft.checked;
    var linkPaddingAll = $controlLinkPaddingAll.checked;

    if (linkPaddingTB) {
      $controlBoxPaddingBottom.value = $controlBoxPaddingTop.value;
    }
    if (linkPaddingRL) {
      $controlBoxPaddingLeft.value = $controlBoxPaddingRight.value;
    }
    if (linkPaddingAll) {
      $controlBoxPaddingRight.value  = $controlBoxPaddingTop.value;
      $controlBoxPaddingBottom.value = $controlBoxPaddingTop.value;
      $controlBoxPaddingLeft.value   = $controlBoxPaddingTop.value;
    }
    /************************************************/
    updateModel();
    /************************************************/
    updateUI();
  }

  function updateModel() { // model
    model.Width         = parseInt($controlBoxWidth        .value, 10);
    model.Height        = parseInt($controlBoxHeight       .value, 10);
    model.MarginTop     = parseInt($controlBoxMarginTop    .value, 10);
    model.MarginRight   = parseInt($controlBoxMarginRight  .value, 10);
    model.MarginBottom  = parseInt($controlBoxMarginBottom .value, 10);
    model.MarginLeft    = parseInt($controlBoxMarginLeft   .value, 10);
    model.PaddingTop    = parseInt($controlBoxPaddingTop   .value, 10);
    model.PaddingRight  = parseInt($controlBoxPaddingRight .value, 10);
    model.PaddingBottom = parseInt($controlBoxPaddingBottom.value, 10);
    model.PaddingLeft   = parseInt($controlBoxPaddingLeft  .value, 10);
    model.BorderTop     = parseInt($controlBoxBorderTop    .value, 10);
    model.BorderRight   = parseInt($controlBoxBorderRight  .value, 10);
    model.BorderBottom  = parseInt($controlBoxBorderBottom .value, 10);
    model.BorderLeft    = parseInt($controlBoxBorderLeft   .value, 10);
  }

  function updateUI() { // view
    var boxMarginLeft = model.MarginLeft;
    var boxMarginTop  = model.MarginTop;
    /************************************************/
    var boxMarginLeftRight = model.MarginLeft + model.MarginRight;
    var boxMarginTopBottom = model.MarginTop  + model.MarginBottom;
    /************************************************/
    var boxBorderLeft = model.BorderLeft;
    var boxBorderTop  = model.BorderTop;
    /************************************************/
    var boxBorderLeftRight = model.BorderLeft + model.BorderRight;
    var boxBorderTopBottom = model.BorderTop  + model.BorderBottom;
    /************************************************/
    var boxPaddingLeft = model.PaddingLeft;
    var boxPaddingTop  = model.PaddingTop;
    /************************************************/
    var boxPaddingLeftRight = model.PaddingLeft + model.PaddingRight;
    var boxPaddingTopBottom = model.PaddingTop  + model.PaddingBottom;
    /************************************************/
    var boxLeft = boxMarginLeft + boxBorderLeft + boxPaddingLeft;
    var boxTop  = boxMarginTop  + boxBorderTop  + boxPaddingTop;
    /************************************************/
    var boxWidth  = model.BoxSizing === 'border-box' ? model.Width  - boxPaddingLeftRight - boxBorderLeftRight : model.Width;
    var boxHeight = model.BoxSizing === 'border-box' ? model.Height - boxPaddingTopBottom - boxBorderTopBottom : model.Height;
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
    $box.style.width  =  `${boxWidth}px`;
    $box.style.height =  `${boxHeight}px`;
    $box.style.top    =  `${boxTop}px`;
    $box.style.left   =  `${boxLeft}px`;
    /************************************************/
    $boxInner.style.width  = `${boxWidth}px`;
    $boxInner.style.height = `${boxHeight}px`;
    /************************************************/
    $boxInner.dataset.width  = $controlBoxWidth.value;
    $boxInner.dataset.height = $controlBoxHeight.value;
    /************************************************/
    $boxMargin.style.width  =  `${boxMarginWidth}px`;
    $boxMargin.style.height =  `${boxMarginHeight}px`;
    $boxMargin.style.top    =  `${boxMarginTop}px`;
    $boxMargin.style.left   =  `${boxMarginLeft}px`;
    /************************************************/
    $boxMarginV.dataset.top    = model.MarginTop;
    $boxMarginV.dataset.bottom = model.MarginBottom;
    $boxMarginH.dataset.left   = model.MarginLeft;
    $boxMarginH.dataset.right  = model.MarginRight;
    /************************************************/
    $boxBorder.style.width  = `${boxBorderWidth}px`;
    $boxBorder.style.height = `${boxBorderHeight}px`;
    $boxBorder.style.top    = `${boxBorderTop}px`;
    $boxBorder.style.left   = `${boxBorderLeft}px`;
    /************************************************/
    $boxBorderV.dataset.top    = model.BorderTop;
    $boxBorderV.dataset.bottom = model.BorderBottom;
    $boxBorderH.dataset.left   = model.BorderLeft;
    $boxBorderH.dataset.right  = model.BorderRight;
    /************************************************/
    $boxPadding.style.width  =  `${boxPaddingWidth}px`;
    $boxPadding.style.height =  `${boxPaddingHeight}px`;
    $boxPadding.style.top    =  `${boxPaddingTop}px`;
    $boxPadding.style.left   =  `${boxPaddingLeft}px`;
    /************************************************/
    $boxPaddingV.dataset.top    = model.PaddingTop;
    $boxPaddingV.dataset.bottom = model.PaddingBottom;
    $boxPaddingH.dataset.left   = model.PaddingLeft;
    $boxPaddingH.dataset.right  = model.PaddingRight;
    /************************************************/
    document.querySelector('#generatedWidth' ).textContent = boxBorderWidth;
    document.querySelector('#generatedHeight').textContent = boxBorderHeight;
    /************************************************/
    document.querySelector('#boxCode').innerHTML = model.generateCode();
  }

  globalThis.A = globalThis.A || {};
  globalThis.A.Model = model;

  init();
});