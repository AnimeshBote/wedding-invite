import { useForm } from 'react-hook-form';

const RSVP = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Your Name" required />
      <input type="email" {...register('email')} placeholder="Your Email" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RSVP;
