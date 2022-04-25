import CreateDiver from './CreateDiver';

export default {
  title: 'components/CreateDiver',
  component: CreateDiver,
};

const Template = args => <CreateDiver {...args} />;

export const Default = Template.bind({});
Default.args = {
  diverInfo: {
    name: 'Patrick',
    organization: 'Padi',
    certification: 'Divemaster',
    cert_nr: '234234',
  },
};
