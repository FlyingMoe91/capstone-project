import DiveLog from './DiveLog';

export default {
  title: 'components/DiveLog',
  component: DiveLog,
};

const Template = args => <DiveLog {...args} />;

export const Default = Template.bind({});
Default.args = {};
