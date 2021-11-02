import { html } from 'lit-html';

import '../src/LearningIcon.js';

export default {
  title: 'Learning Icon',
  component: 'learning-icon',
  argTypes: {
    type: {
      control: 'select',
      options: {
        chem: 'chem',
        objectives: 'objectives',
        know: 'know',
      },
    },
  },
};

// Learning Icon
function LearningIconTemplate({ type }) {
  return html` <learning-icon type=${type}></learning-icon>`;
}

export const ChemIcon = LearningIconTemplate.bind({});
ChemIcon.args = {
  type: 'chem',
};

export const KnowIcon = LearningIconTemplate.bind({});
KnowIcon.args = {
  type: 'know',
};

export const ObjectiveIcon = LearningIconTemplate.bind({});
ObjectiveIcon.args = {
  type: 'objectives',
};
