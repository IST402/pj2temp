/* eslint-disable no-unused-vars */
import { LitElement, html, css } from 'lit';

export class LearningCard extends LitElement {
  static get tag() {
    return 'learning-card';
  }

  constructor() {
    super();

    this.type = 'math';
    this.subheader = 'MATHEMATICS';

    setTimeout(() => {
      import('./LCheader.js');
      import('./LCicon.js');
    }, 0);
  }

  static get properties() {
    return {
      type: { type: String, reflect: true },
      link: { type: String, reflect: true },
      subheader: { type: String, reflect: true },
    };
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'chem') {
        this.subheader = 'CHEMISTRY';
      } else if (propName === 'type' && this[propName] === 'math') {
        this.subheader = 'MATHEMATICS';
      } else if (propName === 'type' && this[propName] === 'tech') {
        this.subheader = 'TECHNOLOGY';
      }
    });
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: 'Open Sans', sans-serif;
        margin: 50px;
        border-width: 1px;
        border-color: black;
      }
      .entire-card {
        width: 700px;
        border: 2px solid #696966;
        font-family: 'Open Sans', sans-serif;
      }

      .main-header {
        font-weight: 300;
        font-size: 50px;
        margin: 0;
      }

      .sub-header {
        font-weight: 500;
        font-size: 50px;
        margin: 0;
        
      }
    `;
  }

  render() {
    // Entire Card
    return html`
      <div class="entire-card">
        <lc-frame type=${this.type}>
          <lc-header type=${this.type} slot="top-card">
            <lc-icon type=${this.type} slot="icon"></lc-icon>
            <h2 class="main-header" slot="main-header">UNIT 1</h2>
            <h3 class="sub-header" slot="sub-header">${this.subheader}</h3>
          </lc-header>
          <div slot="content">
            <slot name="content"></slot>
          </div>
  </lc-frame>
      </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return {
      canScale: false,
      canPosition: false,
      canEditSource: true,
      contentEditable: true,
      gizmo: {
        title: 'Learning Card',
        description: 'An element that you have to replace / fix / improve',
        icon: 'credit-card',
        color: 'blue',
        groups: ['Content', 'Presentation', 'Education'],
      },
      settings: {
        configure: [
          {
            property: 'type',
            title: 'Type',
            description: 'Identifies the card',
            inputMethod: 'select',
            options: {
              science: 'Science',
              math: 'Math',
            },
          },
        ],
        advanced: [],
      },
      demoSchema: [
        {
          tag: LearningCard.tag,
          properties: {
            type: 'science',
          },
          content:
            "<p slot='header'>This tag renders in the header</p><ul><li>This renders</li><li>Below the tag</li></ul>",
        },
      ],
    };
  }
}
