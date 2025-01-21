import { useState } from 'react';
import './CSS/mine.css';

const CollegeEnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date_of_birth: '',
    course: '',
    email: '',
    phone_number: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://kalven-bgh9h4btgaggbsdd.southeastasia-01.azurewebsites.net/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      console.log(result.msg);
      setSubmitted(true);
    } catch {
      alert('An error occurred while submitting the form. Please try again later.');
    }
  };
  

  return (
    <div>
      <h1>College Enrollment Form</h1>
      <h2>By: Kalvin 40k. Montero</h2>
      {submitted ? (
        <div>
          <h3>Thank you for enrolling!</h3>
          <p>We have received your application.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Course Applying For:</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select Course</option>
              <option value="Computer Engineering">Computer Engineering</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Education">Education</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Psychology">Psychology</option>
              <option value="Industrial Engineering">Industrial Engineering</option>
            </select>
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
};

export default CollegeEnrollmentForm;
