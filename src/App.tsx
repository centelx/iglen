import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ServiceProvider } from './context/ServiceContext';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
      <ServiceProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-background">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </ServiceProvider>
    </BrowserRouter>
  );
}

export default App;
