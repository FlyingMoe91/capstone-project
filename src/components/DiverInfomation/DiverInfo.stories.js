import DiverInfo from './DiverInfo';

export default {
  title: 'components/DiverInfo',
  component: DiverInfo,
};

const Template = args => <DiverInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Patrick',
  organization: 'Padi',
  certification: 'Divemaster',
  date: '01.01.2000',
  certnr: '234234',
};
