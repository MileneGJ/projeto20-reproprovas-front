import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import HomePage from './components/HomePage/HomePage';
import HomePageTeachers from './components/HomePage/HomePageTeachers';
import TestCreation from './components/TestCreation/TestCreation';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/by-teacher" element={<HomePageTeachers />} />
      <Route path="/create-test" element={<TestCreation />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
