import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from 'renderer/Pages/Dashboard';
import User from 'renderer/Pages/User';
import Trainer from 'renderer/Pages/Trainer';
import Message from 'renderer/Pages/Message';
import Maintenance from 'renderer/Pages/Maintenance';
import Login from 'renderer/Auth/Login';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/member" element={<User />} />
        <Route exact path="/trainer" element={<Trainer />} />
        <Route exact path="/message" element={<Message />} />
        <Route exact path="/maintenance" element={<Maintenance />} />
      </Routes>
    </Router> 
  );
};

export default AppRouter;
