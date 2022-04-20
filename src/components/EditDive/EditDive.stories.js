import EditDive from './EditDive';

export default {
  title: 'components/EditDive',
  component: EditDive,
};

const Template = args => <EditDive {...args} />;

export const Default = Template.bind({});
Default.args = {};
