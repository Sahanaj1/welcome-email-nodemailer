
import { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert('Welcome email sent successfully!');
      } else {
        throw new Error('Failed to send welcome email');
      }
    } catch (error) {
      console.error('Failed to send welcome email:', error);
      alert('Failed to send welcome email');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
        required
        className='text-black'
      />
      <button type="submit">Get Early Access</button>
    </form>
  );
};

export default EmailForm;
