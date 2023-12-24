// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// src/App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import OrderForm from './components/OrderForm';
import Orders from './components/Orders';
import Portfolio from './components/Portfolio';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const loginUser = (username, password) => {
    // Simulate authentication (replace with actual authentication logic)
    if (username === 'user' && password === 'password') {
      setLoggedInUser(username);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login onLogin={loginUser} />
          </Route>
          <Route path="/order-form">
            <OrderForm />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
