import Menu from './Menu';

export default {
  title: 'components/Menu',
  component: Menu,
};

const Template = args => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  diveData: [
    {
      length: '10',
      maxDepth: '22',
    },
  ],
};
