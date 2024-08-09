import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Protected from './pages/Protected';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/protected" element={<ProtectedRoute element={Protected} />}
    />
    </Routes>
  );
}

export default App;
