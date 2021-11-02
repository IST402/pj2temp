/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class LCicon extends SimpleColors {
  constructor() {
    super();
    this.image = question;
    this.alt = 'question icon';
  }

  static get tag() {
    return 'lc-icon';
  }

  static get properties() {
    return {
      ...super.properties,
      image: { type: String },
      type: { type: String, reflect: true },
      alt: { type: String },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: inline-flex;
          flex-direction: row;
          height: var(--learning-card-height, 150px);
          width: var(--learning-card-width, 150px);
          background-color: var(--learning-card-banner-color);
        }
        span {
          display: inline-flex;
          height: var(--learning-card-height, 150px);
          width: var(--learning-card-width, 150px);
          justify-content: center;
          align-items: center;
          padding: 0px 10px;
        }
        img {
          display: inline-flex;
          height: var(--learning-card-height, 150px);
          width: var(--learning-card-width, 150px);
          background-color: var(--learning-banner-color);
        }
      `,
    ];
  }

  updated(changedProperties){
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'chem') {
        this.image = beaker;
        this.accentColor = 'green';
        this.alt = "beaker icon"
      } else if (propName === 'type' && this[propName] === 'math') {
        this.image = lightbulb;
        this.accentColor = 'orange';
        this.alt = 'lightbulb icon'
      } else if (propName === 'type' && this[propName] === 'tech') {
        this.image = question;
        this.accentColor = 'blue';
        this.alt = 
      }
    });
  }

  render() {
    console.log(this.image);
    return html`
      <div>
        <span><img src="${this.image}" alt="${this.alt}" /></span>
      </div>
    `;
  }
}
customElements.define(LCicon.tag, LCicon);