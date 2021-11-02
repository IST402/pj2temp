/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class LearningIcon extends SimpleColors {
  constructor() {
    super();
    this.image = question;
    this.alt = 'question icon';
  }

  static get tag() {
    return 'learning-icon';
  }

  static get properties() {
    return {
      ...super.properties,
      image: { type: String },
      type: { type: String, reflect: true },
      alt: { type: String },
    };
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      console.log(`Prop name:${propName}Value: ${this[propName]}`);
      if (propName === 'type' && this[propName] === 'chem') {
        this.image = new URL('../assets/beaker.svg', import.meta.url).href;
        this.alt = this[propName];
        this.accentColor = 'green';
      } else if (propName === 'type' && this[propName] === 'know') {
        this.image = new URL('../assets/question.svg', import.meta.url).href;
        this.alt = this[propName];
        this.accentColor = 'blue';
      } else if (propName === 'type' && this[propName] === 'objectives') {
        this.image = new URL('../assets/lightbulb.svg', import.meta.url).href;
        this.alt = this[propName];
        this.accentColor = 'orange';
      }
    });
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

  render() {
    console.log(this.image);
    return html`
      <div>
        <span><img src="${this.image}" alt="${this.alt}" /></span>
      </div>
    `;
  }
}
customElements.define(LearningIcon.tag, LearningIcon);
