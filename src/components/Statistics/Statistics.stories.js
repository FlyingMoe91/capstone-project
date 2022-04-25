import Statistics from './Statistics';

export default {
  title: 'components/Statistics',
  component: Statistics,
};

const Template = args => <Statistics {...args} />;

export const Default = Template.bind({});
Default.args = {
  diveData: [
    {
      length: '10',
      maxDepth: '22',
    },
  ],
};
