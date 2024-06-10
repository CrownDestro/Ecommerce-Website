import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';


// App
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          {/* <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} /> */}
        </Routes>
      </div>
    </Router>
    
  );
}

// Exporting
export default App;
