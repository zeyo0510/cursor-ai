((name) => {
  class $ extends HTMLElement
  {
    #shadow     = undefined;
    #background = undefined;
    #foregroundText = undefined;
    /************************************************/
    constructor()
    {
      super();
      /************************************************/
      this.#shadow = super.attachShadow({ mode: 'closed' })
      /************************************************/
      this.#init();
      /************************************************/
      console.log(`${name}: constructor`);
    }
    /************************************************/
    #init()
    {
      // var svg  = document.createElementNS('http://www.w3.org/2000/svg'.trim(), 'svg '.trim());
      // this.#background = document.createElementNS('http://www.w3.org/2000/svg'.trim(), 'rect'.trim());
      // this.#foregroundText = document.createElementNS('http://www.w3.org/2000/svg'.trim(), 'text'.trim());
      /************************************************/
      // svg
      // {
      //   svg.setAttributeNS(null, 'width  '.trim(), '100            '.trim());
      //   svg.setAttributeNS(null, 'height '.trim(), '050            '.trim());
      //   svg.setAttributeNS(null, 'viewBox'.trim(), '000 000 100 050'.trim());
      //   /************************************************/
      //   svg.appendChild(this.#background);
      //   svg.appendChild(this.#foregroundText);
      // }
      // rect
      // {
      //   this.#background.setAttributeNS(null, 'width       '.trim(), '100%   '.trim());
      //   this.#background.setAttributeNS(null, 'height      '.trim(), '100%   '.trim());
      //   this.#background.setAttributeNS(null, 'fill        '.trim(), '#3498db'.trim());
      //   this.#background.setAttributeNS(null, 'stroke      '.trim(), '#000000'.trim());
      //   this.#background.setAttributeNS(null, 'stroke-width'.trim(), '0      '.trim());
      // }
      // foregroundText
      // {
      //   this.#foregroundText.setAttributeNS(null, 'x                '.trim(), '50%   '.trim());
      //   this.#foregroundText.setAttributeNS(null, 'y                '.trim(), '50%   '.trim());
      //   this.#foregroundText.setAttributeNS(null, 'fill             '.trim(), 'white '.trim());
      //   this.#foregroundText.setAttributeNS(null, 'text-anchor      '.trim(), 'middle'.trim());
      //   this.#foregroundText.setAttributeNS(null, 'dominant-baseline'.trim(), 'middle'.trim());
      //   this.#foregroundText.textContent = 'Click Me';
      // }
      // shadow
      // {
      //   // this.#shadow.style.cursor = 'pointer';
      //   /************************************************/
      //   this.#shadow.appendChild(svg);
      //   /************************************************/
      //   this.#shadow.addEventListener('mousedown'.trim(), (event) => {
      //     this.#$_mousedown(this.#shadow, event);
      //   });
      //   this.#shadow.addEventListener('mouseup  '.trim(), (event) => {
      //     this.#$_mouseup  (this.#shadow, event);
      //   });
      // }
      /************************************************/






      this.#shadow.innerHTML += `
      <svg class="svg-button" width="100" height="50" viewBox="0 0 100 50">
      <defs>
        <style>
          /* Styling the button */
          .svg-button {
            cursor: pointer;
          }
          .svg-button:hover rect {
            fill: #1b63c1; /* Change background color on hover */
          }
          .svg-button:hover text {
            fill: white; /* Change text color on hover */
          }
          .svg-button:active rect {
            fill: #1b66c9; /* Change background color when clicked */
          }
          .svg-button:active text {
            fill: white; /* Change text color when clicked */
          }
        </style>
      </defs>
      <rect width="100%" height="100%" fill="#1a73e8" rx="10" ry="10"/> <!-- Background with rounded corners -->
      <text x="50%" y="50%" fill="white" text-anchor="middle" dominant-baseline="middle">Click Me</text> <!-- Text -->
    </svg>
      `;



      console.log(`${name}: init`);
    }
    /************************************************/
    #$_mousedown(sender, event)
    {
      console.log(event);
      /************************************************/
      console.log('mousedown');
    }
    /************************************************/
    #$_mouseup(sender, event)
    {
      console.log(event);
      /************************************************/
      console.log('mouseup');
    }




















  }
  /************************************************/
  globalThis.customElements.define(name, $);
})('zeyo-button');