import { Routes, Route } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import Certifications from './pages/Certifications';

import Home from './pages/Home';
import Logbook from './pages/Logbook';

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
    </Routes>
  );

  function handleCreateDive(newData) {
    setDiveData([...diveData, newData]);
  }

  function handleDeleteDive(Id) {
    setDiveData(diveData.filter(dive => dive._id !== Id));
  }
}
