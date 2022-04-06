import { Routes, Route } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';

import Home from './pages/home';
import Logbook from './pages/Logbook';

export default function App() {
  const [diveData, setDiveData] = useLocalStorage('diveData', []);
  return (
    <Routes>
      <Route path="/" element={<Home diveData={diveData} />} />
      <Route
        path="divelog"
        element={
          <Logbook
            diveData={diveData}
            onDelete={handleDeleteDive}
            onCreateDive={handleCreateDive}
          />
        }
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
