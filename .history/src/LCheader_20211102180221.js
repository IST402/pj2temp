/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class LCheader extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'blue';
    this.toggle = false;
  }

  static get tag() {
    return 'lc-header';
  }

  static get properties() {
    return {
      ...super.properties,
      image: { type: String, attribute: 'image' },
      type: { type: String, reflect: true },
    };
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'chem') {
        this.accentColor = 'green';
      } else if (propName === 'type' && this[propName] === 'math') {
        this.accentColor = 'orange';
      } else if (propName === 'type' && this[propName] === 'tech') {
        this.accentColor = 'blue';
      }
    });
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          background-color: var(--simple-colors-default-theme-accent-7);
        }
        :host([dark]) #banner {
          background-color: var(--simple-colors-default-theme-accent-4);
        }
        .top {
          background-color: var(--simple-colors-default-theme-accent-7);
          display: flex;
          color: white;
          font-family: 'Open Sans', sans-serif;
          border: 1px, solid, var(--simple-colors-default-theme-accent-7);
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 4fr;
        }
      `,
    ];

  }

  render() {
    return html`
      <div class="top">
        <div class="grid">
          <div class="section">
            <slot name="icon"></slot>
          </div>
          <div class="section">
            <slot name="main-header"></slot>
            <slot name="sub-header"></slot>
          </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define(LCheader.tag, LCheader);
