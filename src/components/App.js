import React from 'react';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import Signup from './Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';

function App() {
  return (
    <AuthProvider>
      <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
        <div className='w-100' style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
                <Routes>
                  <Route exact path="/" element={< Dashboard />} />
                  <Route path="/signup" element={< Signup />} />
                  <Route path="/login" element={< Login />} />
                  <Route path="/forgot-password" element={< ForgotPassword />} />
                  <Route path="/update-profile" element={< UpdateProfile />} />
                </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </AuthProvider>

  );
}

export default App;

/**
 * 
 * <Router>
          <AuthProvider>
            <Routes>
              <Route exact='/' element={Dashboard} />
              <Route path='/signup' element={Signup} />
            </Routes>
          </AuthProvider>
        </Router>
 */
