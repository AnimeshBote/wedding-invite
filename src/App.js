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

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Invitation from './pages/Invitation';
// import RSVP from './pages/RSVP';
// import Gallery from './pages/Gallery';
// import Itinerary from './pages/Itinerary';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/invitation" element={<Invitation />} />
//         <Route path="/rsvp" element={<RSVP />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/itinerary" element={<Itinerary />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Events from './pages/Events';
import RSVPForm from './components/RSVPForm';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/rsvp" element={<RSVPForm />} />
      </Routes>
    </Router>
  );
}

export default App;
