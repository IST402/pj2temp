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
    this.toggle = false;
    this.expanded = false;
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
      toggle: { type: Boolean, reflect: true},
      expanded: { type: Boolean }
    };
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'chem') {
        this.subheader = 'CHEMISTRY';
      } else if (propName === 'type' && this[propName] === 'math') {
        this.subheader = 'MATHEMATICS ↓';
      } else if (propName === 'type' && this[propName] === 'tech') {
        this.subheader = 'TECHNOLOGY';
      }
    });

    if(this.toggle===true && this.expanded===false){
      this.addEventListener('click',this.expand);
  }

  if(this.toggle===true && this.expanded===true){
      this.addEventListener('click',this.contract);
  }

  }

  expand(){
    this.removeEventListener('click',this.expand);
    this.addEventListener('click',this.contract);
    this.expanded = true;
    this.style.setProperty('--slime-card-bottom',"1000px");
}

contract(){
    this.removeEventListener('click',this.contract);
    this.addEventListener('click',this.expand);
    this.expanded = false;
    this.style.setProperty('--slime-card-bottom',"0px");
    
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
      :host([toggle]) .slime-card-bottom{
            transition: max-height 0.75s linear 0s;
            max-height: var(--slime-card-bottom, 0);
            height: auto;
            overflow: hidden;
        }
      .entire-card {
        width: 700px;
        border: 1px solid #696966;
        font-family: 'Open Sans', sans-serif;
      }
      .main-header {
        font-weight: 350;
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
          <lc-header @click=${clickToggle()} type=${this.type} slot="top-card">
            <lc-icon type=${this.type} slot="icon"></lc-icon>
            <h2 class="main-header" slot="main-header">UNIT 1</h2>
            <h3 class="sub-header" slot="sub-header">${this.subheader}</h3>
          </lc-header>
          <div slot="content">
            <slot name="content" toggle="${this.toggle}"></slot>
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