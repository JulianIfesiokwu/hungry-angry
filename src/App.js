import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout.component';
import HomePage from './pages/HomePage/HomePage.Page';
import AboutPage from './pages/AboutPage/AboutPage.Page';
import ContactUs from './pages/ContactUsPage/ContactUs.Page';
import ErrorPage from './pages/ErrorPage/ErrorPage.Page';
import Gallery from './pages/GalleryPage/Gallery.page';
import './App.css';
import Volunteer from './pages/VolunteerPage/Volunteer.Page';
import Donate from './pages/DonatePage/Donate.Page';
import Train from './pages/TrainPage/Train.Page';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/train" element={<Train />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
