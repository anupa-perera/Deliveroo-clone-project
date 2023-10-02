<<<<<<< Updated upstream
import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <h1>TEST PHASE</h1>
    </>
  )
=======
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import NotFound from './Pages/LogIn/NotFound';
import Registration from './Pages/LogIn/Registration';
import LoginContainer from './Pages/LogIn/LoginContainer';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route index element={<HomePage />} path="/" />
      </Route>
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
>>>>>>> Stashed changes
}

export default App
