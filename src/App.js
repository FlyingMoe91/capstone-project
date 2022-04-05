import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Logbook from './pages/Logbook';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="divelog" element={<Logbook />} />
    </Routes>
  );
}
