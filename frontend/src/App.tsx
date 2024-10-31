import Layout from './components/Layout';
import Home from './pages/Home'
import Document from './pages/Document'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StudyGroup from './pages/StudyGroup';
import Setting from './pages/Setting';
import Help from './pages/Help';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home/>} />
    <Route path='document' element={<Document/>} />
    <Route path='studygroup' element={<StudyGroup/>} />
    <Route path='myaccount' element={<Document/>} />
    <Route path='setting' element={<Setting/>} />
    <Route path='help' element={<Help/>} />
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App
