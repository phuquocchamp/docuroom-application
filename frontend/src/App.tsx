import Layout from './components/Layout';
import Home from './pages/Home'
import Document from './pages/Document'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StudyGroup from './pages/StudyGroup';
import Setting from './pages/Setting';
import Help from './pages/Help';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import DocDetails from './pages/DocDetails';
import DocumentDetail from './pages/DocDetails';
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/'>
          <Route path='' element={<Login />} />
          <Route path='signup' element={<Register />} />
          <Route path='forgotpassword' element={<ForgotPassword />} />
        </Route>

        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='document' element={<Document />} />
          <Route path='studygroup' element={<StudyGroup />} />
          <Route path='myaccount' element={<Document />} />
          <Route path='setting' element={<Setting />} />
          <Route path='help' element={<Help />} />
        </Route>

        <Route path="/item-details/:id" element={<DocDetails/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App
