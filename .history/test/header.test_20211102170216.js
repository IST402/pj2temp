import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/LCheader.js';

describe('CardHeader', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
    <card-header slot="banner" type="science">
      <h2 slot="main-header">UNIT 1</h2>
      <h3 slot="sub-header">CHEMISTRY</h3>
    </card-header>`);
  });
  it('renders the header element', () => {
    const header = document.querySelector('card-header');
    expect(header).to.exist;
  });

  it('renders the main header', () => {
    const h2 = element.querySelector('h2');
    expect(h2).to.exist;
    expect(h2.innerText).to.equal('UNIT 1');
  });

  it('renders the sub header', () => {
    const h3 = element.querySelector('h3');
    expect(h3).to.exist;
    expect(h3.innerText).to.equal('CHEMISTRY');
  });

  it('passes the a11y audit', async () => {
    element.type = 'chem';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
    element.type = 'math';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
    element.type = 'tech';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
  });
});