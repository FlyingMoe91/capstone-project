import Logbook from './pages/Logbook';

export default function App() {
  return (
    <>
      <Logbook
        divenumber="1"
        city="Orlando"
        country="USA"
        locationname="DevilsDen"
        date="23.06.2013"
        typeOfDive="Fundive"
        timeIn="07:45"
        timeOut="08.40"
        bottomTime="0h 55min"
        maxDepth="21.4m"
        buddyName="JonDoe"
        notes="weights 1.5kg, vis. 8m, no current, seen: turtle, trigger"
      />
    </>
  );
}
