import Home from './pages/Home';
import SignIn from './pages/SignIn';

import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        {/* Add more routes as needed */}
        {/* <Route path="/another-page" element={<AnotherPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
