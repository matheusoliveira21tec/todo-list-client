import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Tasks from './pages/tasks';
import Form from './pages/form';

const Rotas: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path='/' element={<Home />} />
                <Route  path='/tasks' element={<Tasks />} />
                <Route  path='/new' element={<Form />} />
            </Routes>
        </BrowserRouter>

    );
}
export default Rotas;