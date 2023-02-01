import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout.component';
import HomePage from './pages/HomePage/HomePage.Page';
import AboutPage from './pages/AboutPage/AboutPage.Page';
import ContactUs from './pages/ContactUsPage/ContactUs.Page';
import ErrorPage from './pages/ErrorPage/ErrorPage.Page';
import Gallery from './pages/GalleryPage/Gallery.page';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.component';
import './App.css';
import Volunteer from './pages/VolunteerPage/Volunteer.Page';
import Donate from './pages/DonatePage/Donate.Page';
import Train from './pages/TrainPage/Train.Page';

import { SubscribeContext } from './context/SubscribeContext';
import { ContactFormContext } from './context/ContactFormContext';
import { VolunteerContext } from './context/VolunteerContext';
import { traineeContext } from './context/TraineeContext';

function App() {
  const [ data, setData ] = useState({});

  const handleInput = (e) => {
    let newInput = { [e.target.name]: e.target.value };

    setData({ ...data, ...newInput});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({});
  };

  return (
    <BrowserRouter>
    <ScrollToTop />
    <SubscribeContext.Provider value={{ setData, handleInput, handleSubmit }}>
      <ContactFormContext.Provider value={{ setData, handleInput, handleSubmit }}>
        <VolunteerContext.Provider value={{ setData, handleInput, handleSubmit }}>
          <traineeContext.Provider value={{ setData, handleInput, handleSubmit }}>
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
          </traineeContext.Provider>
        </VolunteerContext.Provider>
      </ContactFormContext.Provider>
      </SubscribeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
