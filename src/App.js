import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Mode from './pages/Mode';
import Recommandations from './pages/Recommandations';
import Themes from './pages/Themes';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modes" element={<Mode />} />
          <Route path="recommandations" element={<Recommandations />} />
          <Route path="/themes" element={<Themes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
