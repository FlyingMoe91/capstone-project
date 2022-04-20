import { Routes, Route } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { useState } from 'react';

import Certifications from './pages/Certifications';
import Home from './pages/Home';
import Logbook from './pages/Logbook';
import NewDiveForm from './pages/NewDiveForm';
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
            onHandleEditDive={handleEditDive}
            locationInfos={locationInfos}
            setView={handleSetView}
          />
        }
      />
      <Route
        path="/NewDiveForm"
        element={
          <NewDiveForm
            onCreate={handleCreateDive}
            locationInfos={locationInfos}
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

  function handleEditDive(newData) {
    console.log('FUUUUCK!!!!');
    console.log(newData._id);
    console.log(diveData[3]._id);
    const updatedArray = diveData.map(dive => {
      if (dive._id === newData._id) {
        return newData;
      }
      return dive;
    });
    setDiveData(updatedArray);
  }

  function handleDeleteDive(Id) {
    setDiveData(diveData.filter(dive => dive._id !== Id));
  }
}
