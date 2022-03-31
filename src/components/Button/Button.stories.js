import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const Back = Template.bind({});
Back.args = {
  children: 'back',
};
