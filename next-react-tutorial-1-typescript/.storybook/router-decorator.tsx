import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

export default (story) => (
    <Router>
        <Routes>
            <Route path="*">{story()}</Route>
        </Routes>
    </Router>
);