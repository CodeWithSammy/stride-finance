import React, { useState } from 'react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission (e.g., sending data to backend)
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    });
  };

  return (
    <div className="contact-us-container">
      <h2 style={styles.heading}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div className="form-group" style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={styles.input} required />
        </div>
        <div className="form-group" style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} required />
        </div>
        <div className="form-group" style={styles.formGroup}>
          <label htmlFor="phoneNumber" style={styles.label}>Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} style={styles.input} />
        </div>
        <div className="form-group" style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} style={styles.textarea} required />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  heading: {
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    maxWidth: '500px',
    margin: '0 auto',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '150px',
  },
  button: {
    backgroundColor: '#005c8f',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#003d5c',
  },
};

export default ContactUsPage;
