import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/LCicon.js';

describe('CardIcon', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html` 
    <lc-icon>
    <span><img src="${this.image}" alt="${this.alt}" /></span>
    </lc-icon>`);
  });
  it('renders the element', () => {
    const icon = document.querySelector('lc-icon');
    expect(icon).to.exist;
  });

  it('renders the icon img', () => {
    const img = element.shadowRoot.querySelector('img');
    expect(img).to.exist;
    expect(img.src).to.contain('beaker.svg');
  });

  it('checks updatedProperties', () => {
    const img = element.shadowRoot.querySelector('img');
    element.type = 'chem';
    expect(element.type).to.equal('chem');
    expect(element.icon).to.contain('beaker');
    expect(img.src).to.contain('beaker.svg');
    element.type = 'objective';
    setTimeout(() => {
      expect(element.type).to.equal('objective');
      expect(element.icon).to.contain('lightbulb');
      expect(img.src).to.contain('lightbulb.svg');
    }, 100);
    element.type = 'question';
    setTimeout(() => {
      expect(element.type).to.equal('question');
      expect(element.icon).to.contain('question');
      expect(img.src).to.contain('question.svg');
    }, 100);
  });

  it('passes the a11y audit', async () => {
    element.type = 'science';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
    element.type = 'objective';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
    element.type = 'question';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
  });
});