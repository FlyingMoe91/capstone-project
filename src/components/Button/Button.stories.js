import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const Back = Template.bind({});
Back.args = {
  children: 'back',
  variant: 'back',
};

export const Round = Template.bind({});
Round.args = {
  children: 'round',
  variant: 'round',
};

export const Submit = Template.bind({});
Submit.args = {
  children: 'submit',
  variant: 'submit',
};
