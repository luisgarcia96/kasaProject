import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages imports
import Home from '../pages/Home';
import About from '../pages/About';
import HousingDetails from '../pages/HousingDetails';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/housing/:id" element={<HousingDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
    );
};

export default AppRouter;
