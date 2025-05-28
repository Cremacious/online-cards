import Home from './app/routes/app/Home';
import SignIn from './app/routes/auth/SignIn';
import SignUp from './app/routes/auth/SignUp';

import './assets/styles/App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
