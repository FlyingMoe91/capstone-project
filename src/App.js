import { Routes, Route } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { useState } from 'react';

import Certifications from './pages/Certifications';
import Home from './pages/Home';
import Logbook from './pages/Logbook';
import Map from './pages/Map/Map';

export default function App() {
  const [diveData, setDiveData] = useLocalStorage('diveData', []);
  const [locationInfos, setLocationInfos] = useState('');
  const [viewPort, setViewPort] = useState('');

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
            locationInfos={locationInfos}
            setView={handleSetView}
          />
        }
      />
      <Route path="/certifications" element={<Certifications />} />
      <Route
        path="/src/pages/Map/Map"
        element={
          <Map
            onNewDiveClick={handleNewDiveClick}
            diveData={diveData}
            viewPort={viewPort}
          />
        }
      />
    </Routes>
  );

  function handleSetView(coordinates) {
    setViewPort(coordinates);
  }

  function handleNewDiveClick(locationInfos) {
    setLocationInfos(locationInfos);
  }

  function handleCreateDive(newData) {
    setDiveData([...diveData, newData]);
  }

  function handleDeleteDive(Id) {
    setDiveData(diveData.filter(dive => dive._id !== Id));
  }
}
