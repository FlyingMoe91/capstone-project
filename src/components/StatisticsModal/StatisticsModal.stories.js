import StatisticsModal from './StatisticsModal';

export default {
  title: 'components/StatisticsModal',
  component: StatisticsModal,
};

const Template = args => <StatisticsModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  deepestDive: [
    {
      divenumber: 1,
      city: 'Orlando',
      country: 'USA',
      locationname: 'DevilsDen',
      date: '25.06.2013',
      typeOfDive: 'Fundive',
      timeIn: '07:45',
      timeOut: '08.40',
      bottomTime: '0h 55min',
      maxDepth: '21.4m',
      buddyName: 'JonDoe',
      notes: 'weights 1.5kg, vis. 8m, no current, seen: turtle, trigger',
    },
  ],
};
