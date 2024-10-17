import React from 'react';
import { Link } from 'react-router-dom';

function FormPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted on separate page!');
  };

  return (
    <div className="form-page">
      <h2>Separate Form Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <button type="submit">Submit</button>
        <Link to="/">Go Back</Link>
      </form>
    </div>
  );
}

export default FormPage;
