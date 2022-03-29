import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click me',
};

export const Back = Template.bind({});
Back.args = {
  children: 'back',
};

export const Add = Template.bind({});
Add.args = {
  children: 'add dive',
};
