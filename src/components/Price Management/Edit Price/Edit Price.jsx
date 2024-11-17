import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import'./Edit Price.css'

const EditPrice = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample state for form inputs
  const [formData, setFormData] = useState({
    serviceOrder: id,
    serviceName: 'rorem', // Replace with actual data fetch if necessary
    servicePrice: '1500', // Replace with actual data fetch if necessary
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save data goes here (e.g., API call)
    console.log('Form submitted:', formData);
    navigate('/'); // Redirect to the main page after submission
  };

  // Handle cancel button
  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="edit-price-container">
      <h1>Price Edit</h1>
      <div className="edit-price-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>ลำดับ</label>
            <input
              type="text"
              name="serviceOrder"
              value={formData.serviceOrder}
              onChange={handleChange}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>ชื่อค่าบริการ</label>
            <input
              type="text"
              name="serviceName"
              value={formData.serviceName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>ราคาบริการ</label>
            <input
              type="text"
              name="servicePrice"
              value={formData.servicePrice}
              onChange={handleChange}
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="save-button">บันทึก</button>
            <button type="button" className="cancel-button" onClick={handleCancel}>ยกเลิก</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPrice;
