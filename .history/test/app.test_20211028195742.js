import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';
import '../src/LearningScaffold.js';
import '../src/LearningIcon.js';
import '../src/LearningBanner.js';

describe('LearningCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html` <learning-card type="DID YOU KNOW?"
        ><p slot="content">I am content</p></learning-card
      >`
    );
  });

  it('renders an learning-banner', () => {
    const banner = element.shadowRoot.querySelector('learning-banner');
    expect(banner).to.exist;
  });

  it('renders content', () => {
    const paragraph = element.shadowRoot.querySelector('slot[name="content"]');
    expect(paragraph.assignedElements({ flat: true })[0].innerText).to.equal(
      'I am content'
    );
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});

describe('Learning-Scaffold', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html`<learning-scaffold type="chem"
        ><learning-banner type="chem" slot="banner"></learning-banner>
        <p slot="content">What am I thinking</p></learning-scaffold
      >`
    );
  });

  it('renders a paragraph', () => {
    const parag = element.shadowRoot.querySelector('slot[name="content"]');
    expect(parag.assignedElements({ flat: true })[0].innerText).to.equal(
      'What am I thinking'
    );
  });

  it('renders an learning-banner', () => {
    const banner = element.shadowRoot.querySelector('slot[name="banner"]');
    expect(banner).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});

describe('Learning-Icon', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html`<learning-icon type="DID YOU KNOW?"></learning-icon>`
    );
  });

  it('renders a paragraph', () => {
    const img = element.shadowRoot.querySelector('img');
    expect(img).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});

describe('Learning-Banner', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html`<learning-banner type="LEARNING OBJECTIVES">
        <learning-icon type="LEARNING OBJECTIVES" slot="icon"></learning-icon>
        <h2 id="main-header" slot="heading">Unit 1</h2>
        <h3 id="sub-header" slot="subHeading">LEARNING OBJECTIVES</h3>
      </learning-banner>`
    );
  });

  // Fails, how come this does not find the icon, it's passed in as a slot?
  it('renders a learning-icon', () => {
    const icon = element.shadowRoot.querySelector(`slot[name="icon"]`);
    expect(icon.assignedElements({ flat: true })[0]).to.exist;
  });

  it('renders a main heading', () => {
    const heading = element.shadowRoot.querySelector(`slot[name="heading"]`);
    expect(heading.assignedElements({ flat: true })[0].innerText).to.equal(
      'Unit 1'
    );
  });
  it('renders a sub heading', () => {
    const heading = element.shadowRoot.querySelector(`slot[name="subHeading"]`);
    expect(heading.assignedElements({ flat: true })[0].innerText).to.equal(
      'LEARNING OBJECTIVES'
    );
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
