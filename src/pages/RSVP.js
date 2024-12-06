import { useForm } from 'react-hook-form';
import './Rsvp.css';
const RSVP = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="rsvp-container">
      <h2 className="rsvp-title">RSVP to Our Wedding</h2>
      <form name="rsvp" method="post" data-netlify="true" className="rsvp-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input
            id="name"
            type="text"
            {...register('name')}
            placeholder="Enter your name"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Your Email</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            placeholder="Enter your email"
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="rsvp-submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default RSVP;
