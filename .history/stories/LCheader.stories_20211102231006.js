import { html } from 'lit-html';

import '../src/LCheader';
import '../src/LCicon';

export default {
  title: 'Header',
  component: 'lc-header',
  argTypes: {
    heading: { control: 'text' },
    type: {
      control: 'select',
      options: {
        chem: 'chem',
        math: 'math',
        tech: 'tech',
      },
    },
  },
};

function LCheaderTemplate({ type, heading }) {
  return html`
    <lc-header type=${type} slot="top">
      <lc-icon type=${type} slot="icon"></lc-icon>
      <h2 slot="heading">${heading}</h2>
      <h3 slot="subHeading">${type}</h3>
    </lc-header>
  `;
}

export const Chemheader = LCheaderTemplate.bind({});
Chemheader.args = {
  type: 'chem',
  heading: 'UNIT 1',
};

export const Mathheader = LCheaderTemplate.bind({});
Mathheader.args = {
  type: 'math',
  heading: 'UNIT 1',
};

export const Techheader = LCheaderTemplate.bind({});
Techheader.args = {
  type: 'tech',
  heading: 'UNIT 1',
};
