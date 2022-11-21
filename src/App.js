import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout.component';
import HomePage from './pages/HomePage/HomePage.Page';
import ErrorPage from './pages/ErrorPage/ErrorPage.Page';
import './App.css';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
