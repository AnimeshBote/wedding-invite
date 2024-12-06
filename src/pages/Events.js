import React from 'react';
import './Events.css';

const Events = () => {
  const events = [
    { time: '10:00 AM', title: 'Haldi Ceremony', location: 'The Grand Palace Courtyard' },
    { time: '2:00 PM', title: 'Mehendi Ceremony', location: 'The Grand Palace Lawn' },
    { time: '6:00 PM', title: 'Sangeet', location: 'The Grand Palace Ballroom' },
    { time: '7:30 PM', title: 'Wedding Ceremony', location: 'The Grand Palace Mandap' },
  ];

  return (
    <div className="events">
      <h2>Wedding Schedule</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index} className="event-item">
            <strong>{event.title}</strong>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
