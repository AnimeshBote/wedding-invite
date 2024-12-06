import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add custom styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">💍 Wedding Invite</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/rsvp">RSVP</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
