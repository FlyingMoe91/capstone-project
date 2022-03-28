import DiveLog from './DiveLog';

export default {
  title: 'components/DiveLog',
  component: DiveLog,
};

const Template = args => <DiveLog {...args} />;

export const Default = Template.bind({});
Default.args = {
  divenumber: 1,
  city: 'Orlando',
  country: 'USA',
  locationname: 'DevilsDen',
  date: '25.06.2013',
};
