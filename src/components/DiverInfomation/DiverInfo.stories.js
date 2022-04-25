import DiverInfo from './DiverInfo';

export default {
  title: 'components/DiverInfo',
  component: DiverInfo,
};

const Template = args => <DiverInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  diverInfo: {
    name: 'Patrick',
    organization: 'Padi',
    certification: 'Divemaster',
    cert_nr: '234234',
  },
};
