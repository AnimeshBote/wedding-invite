import { useForm } from 'react-hook-form';
import './Rsvp.css';
const RSVP = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  // return (
  //   <div className="rsvp-container">
  //     <h2 className="rsvp-title">RSVP to Our Wedding</h2>
  //     <form name="rsvp" method="post" data-netlify="true" className="rsvp-form">
  //     <input type="hidden" name="form-name" value="rsvp" />
  //       <div className="form-group">
  //         <label htmlFor="name" className="form-label">Your Name</label>
  //         <input
  //           id="name"
  //           type="text"
  //           {...register('name')}
  //           placeholder="Enter your name"
  //           required
  //           className="form-input"
  //         />
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="email" className="form-label">Your Email</label>
  //         <input
  //           id="email"
  //           type="email"
  //           {...register('email')}
  //           placeholder="Enter your email"
  //           required
  //           className="form-input"
  //         />
  //       </div>
  //       <button type="submit" className="rsvp-submit-btn">Submit</button>
  //     </form>
  //   </div>
  // );

  return (
    <div>
      <form 
        name="rsvp" 
        method="POST" 
        data-netlify="true"
        onSubmit={(e) => e.preventDefault()} // Optional: Prevent default form submission if using custom actions
      >
        <input type="hidden" name="form-name" value="rsvp" />
        
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" required />
        
        <button type="submit">RSVP</button>
      </form>
    </div>
  );
};

export default RSVP;
