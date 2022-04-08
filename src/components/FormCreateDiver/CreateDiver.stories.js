import CreateDiver from './CreateDiver';

export default {
  title: 'components/CreateDiver',
  component: CreateDiver,
};

const Template = args => <CreateDiver {...args} />;

export const Default = Template.bind({});
Default.args = {};
