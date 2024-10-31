import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Home'
import Account from '../pages/Account';
import StudyGroup from '../pages/StudyGroup';
import Document from '../pages/Document';
import Setting from '../pages/Setting';
import Help from '../pages/Help';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/account' element={<Account />} />
                <Route path='/study-group' element={<StudyGroup />} />
                <Route path='/document' element={<Document />} />
                <Route path='/setting' element={<Setting />} />
                <Route path='/help' element={<Help />} />              
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes
