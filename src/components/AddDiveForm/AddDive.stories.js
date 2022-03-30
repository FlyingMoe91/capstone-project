import AddDive from './AddDive';

export default {
  title: 'components/AddDive',
  component: AddDive,
};

const Template = args => <AddDive {...args} />;

export const Default = Template.bind({});
Default.args = {};
