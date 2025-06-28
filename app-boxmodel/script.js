document.addEventListener('DOMContentLoaded', function() {
  const test = document.querySelector('box-view');

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
    getBoxProperties();
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
   // updateUI();
  }

  function updateModel() { // model
    test.Model.BoxSizing     = $controlBorderBox.checked ? 'border-box' : 'content-box';
    test.Model.Width         = parseInt($controlBoxWidth        .value, 10);
    test.Model.Height        = parseInt($controlBoxHeight       .value, 10);
    test.Model.MarginTop     = parseInt($controlBoxMarginTop    .value, 10);
    test.Model.MarginRight   = parseInt($controlBoxMarginRight  .value, 10);
    test.Model.MarginBottom  = parseInt($controlBoxMarginBottom .value, 10);
    test.Model.MarginLeft    = parseInt($controlBoxMarginLeft   .value, 10);
    test.Model.PaddingTop    = parseInt($controlBoxPaddingTop   .value, 10);
    test.Model.PaddingRight  = parseInt($controlBoxPaddingRight .value, 10);
    test.Model.PaddingBottom = parseInt($controlBoxPaddingBottom.value, 10);
    test.Model.PaddingLeft   = parseInt($controlBoxPaddingLeft  .value, 10);
    test.Model.BorderTop     = parseInt($controlBoxBorderTop    .value, 10);
    test.Model.BorderRight   = parseInt($controlBoxBorderRight  .value, 10);
    test.Model.BorderBottom  = parseInt($controlBoxBorderBottom .value, 10);
    test.Model.BorderLeft    = parseInt($controlBoxBorderLeft   .value, 10);
  }

  function updateUI() { // view
    test.updateUI();
    /************************************************/
    // document.querySelector('#generatedWidth' ).textContent = boxBorderWidth;
    // document.querySelector('#generatedHeight').textContent = boxBorderHeight;
    /************************************************/
    document.querySelector('#boxCode').innerHTML = test.Model.generateCode();
  }
  /************************************************/
  init();
});