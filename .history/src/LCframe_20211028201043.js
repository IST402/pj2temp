/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class LearningScaffold extends SimpleColors {
  constructor() {
    super();
    this.dark = false;
  }

  static get tag() {
    return 'learning-scaffold';
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String, reflect: true },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
        }

        #content {
          background-color: white;
          border: 1px solid black;
          border-top: transparent;
          padding-top: 5px;
          padding-bottom: 5px;
          padding-left: 150px;
          margin: 0px;
        }

        ul {
          margin: 0px;
          padding: 0px;
        }
      `,
    ];
  }

  render() {
    // Scaffold card
    return html`
      <div id="banner">
        <slot name="banner"></slot>
      </div>
      <div id="content">
        <slot name="content"></slot>
      </div>
    `;
  }
}
customElements.define(LearningScaffold.tag, LearningScaffold);
