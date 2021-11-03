import { html } from 'lit-html';

import '../src/LCicon.js';

export default {
  title: 'Icon',
  component: 'lc-icon',
  argTypes: {
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


function LCIconTemplate({ type }) {
  return html` <div style="background-color: blue;">
    <lc-icon type=${type}></lc-icon>
  </div>`;
}

export const ChemIcon = LCIconTemplate.bind({});
ChemIcon.args = {
  type: 'chem',
};

export const MathIcon = LCIconTemplate.bind({});
MathIcon.args = {
  type: 'math',
};

export const TechIcon = LCIconTemplate.bind({});
TechIcon.args = {
  type: 'tech',
};
