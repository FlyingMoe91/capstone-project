import { Routes, Route } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';

import Certifications from './pages/Certifications';
import Map from './pages/Map/Map';
import Home from './pages/Home';
import Logbook from './pages/Logbook';
import CurrentPosition from './pages/Map/CurrentPosition';

export default function App() {
  const [diveData, setDiveData] = useLocalStorage('diveData', []);

  return (
    <Routes>
      <Route path="/" element={<Home diveData={diveData} />} />
      <Route
        path="/divelog"
        element={
          <Logbook
            diveData={diveData}
            onDelete={handleDeleteDive}
            onCreateDive={handleCreateDive}
          />
        }
      />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/map" element={<Map />} />
      <Route
        path="/src/pages/Map/CurrentPosition"
        element={<CurrentPosition />}
      />
    </Routes>
  );

  function handleCreateDive(newData) {
    setDiveData([...diveData, newData]);
  }

  function handleDeleteDive(Id) {
    setDiveData(diveData.filter(dive => dive._id !== Id));
  }
}
