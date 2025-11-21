import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
        <Route path="/polityka-cookies" element={<CookiePolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
