import React, { useState } from 'react';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('RSVP Data:', formData);
    // Add your backend integration or email handling here
    alert('Thank you for RSVPing!');
  };

  return (
    <div className="rsvp-form">
      <h2>RSVP</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Will you be attending?
          <input
            type="checkbox"
            name="attending"
            checked={formData.attending}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RSVPForm;
