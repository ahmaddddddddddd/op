import LoginPage from './pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/RegisterUser';
import RegisterCandidate from './pages/RegisterCandidate';
import Dashboard from './pages/Dashboard';
import CompanyProfile from './pages/CompanyProfile';
import ListCandidate from './pages/ListCandidate';
import EditCand from './pages/EditCand';
import EditCp from './pages/EditCp';
function App() {  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/registerUser' element={<Register/>}></Route>
          <Route path='/registercandidate' element={<RegisterCandidate/>}></Route>
          <Route path='/login/dashboard' element={<Dashboard/>}></Route>
          <Route path='/companyprofile' element={<CompanyProfile/>}></Route>
          <Route path='/listcandidate' element={<ListCandidate/>}></Route>
          <Route path='/editcand/:id' element={<EditCand/>}></Route>
          <Route path='/editusr/:id' element={<EditCp/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
