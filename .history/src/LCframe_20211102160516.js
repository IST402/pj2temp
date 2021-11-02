/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';


export class LCframe extends SimpleColors {
  constructor() {
    super();
    this.dark = false;
    this.toggle = false;
  }

  static get tag() {
    return 'lc-frame';
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String, reflect: true },
      toggle: {type: Boolean},
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
        }
        :host([toggle]) .content{
            transition: max-height 0.75s linear 0s;
            max-height: var(--slime-card-bottom, 0);
            height: auto;
            overflow: hidden;
        }
        #content {
          background-color: white;
          border: 1px solid #676767;
          padding-top: 10px;
          padding-bottom: 5px;
          padding-left: 150px;
        }
      `,
    ];
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
        if(this.toggle===true && this.expanded===false){
            this.addEventListener('click',this.expand);
        }

        if(this.toggle===true && this.expanded===true){
            this.addEventListener('click',this.contract);
        }
    });
  }

  render() {
    // Scaffold card
    return html`
      <div id="top-card">
        <slot name="top-card"></slot>
      </div>
      <div id="content">
        <slot name="content" toggle="${this.toggle}"></slot>
      </div>
    `;
  }
}
customElements.define(LCframe.tag, LCframe);