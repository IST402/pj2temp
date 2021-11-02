import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';
import '../src/LCframe.js';
import '../src/LCheader.js';
import '../src/LCicon.js';

describe('LearningCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html`<lc-frame type=chem>
      <lc-header type=chem slot="top-card">
        <lc-icon type=chem slot="icon"></lc-icon>
        <h2 class="main-header" slot="main-header">UNIT 1</h2>
        <h3 class="sub-header" slot="sub-header">CHEMISTRY</h3>
      </lc-header>
      <div slot="content">
        <slot name="content"></slot>
      </div>
      </lc-frame>`
    );
  });

  it('renders an learning-banner', () => {
    const banner = element.shadowRoot.querySelector('lc-frame');
    expect(banner).to.exist;
  });

  it('renders content', () => {
    const paragraph = element.shadowRoot.querySelector('slot[name="content"]');
    expect(paragraph.assignedElements({ flat: true })[0].innerText).to.equal(
      'I am content'
    );
  });

  it('renders the main header', () => {
    const h2 = element.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
    expect(h2.assignedElements({ flat: true })[0].innerText).to.equal(
      'UNIT 1'
    );
  });

  it('renders the sub header', () => {
    const h3 = element.shadowRoot.querySelector('h3');
    expect(h3).to.exist;
    // console.log(h2.assignedElements({flat: true}));
    expect(h3.assignedElements({ flat: true })[0].innerText).to.equal(
      "CHEMISTRY"
    );
  });


  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});