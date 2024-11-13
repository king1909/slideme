import React, { useState } from 'react';
import './Banner.css';

function Banner() {
  const [showPopup, setShowPopup] = useState(false);
  const [isActive, setIsActive] = useState(false);  // สถานะเปิด/ปิด

  // ฟังก์ชันแสดงป๊อปอัป
  const handleSaveClick = () => {
    setShowPopup(true);
  };

  // ฟังก์ชันยืนยันการบันทึก
  const handleConfirmSave = () => {
    setShowPopup(false);
    alert('บันทึกข้อมูลสำเร็จ!'); // สามารถเปลี่ยนเป็น API Call ได้
  };

  // ฟังก์ชันยกเลิกการบันทึก
  const handleCancelSave = () => {
    setShowPopup(false);
  };
  // ฟังก์ชันสำหรับสลับสถานะเปิด/ปิด
  const toggleStatus = () => {
    setIsActive(!isActive);  // เปลี่ยนสถานะจากเปิด/ปิด
  };

  return (
    <div className="banner-container">
      {/* Banner Section */}
      <div className="banner-card">
        <div className="banner-content">
          <h3>September 12-22</h3>
          <h1>Enjoy free Banner delivery in this summer</h1>
          <p>Designer Dresses - Pick from trendy Designer Dress.</p>
          <button className="btn-get-started">Get Started</button>
        </div>
        <div className="banner-arrows">
          <button className="btn rounded-pill bg-secondary">{'<'}</button>
          <button className="btn rounded-pill bg-secondary">{'>'}</button>
        </div>
        <div className="upload-photo">
          <button className="btn bg-light">Upload Photo</button>
        </div>
      </div>

      {/* Form Section */}
      <div className="form-section">
        <div className="form-group">
          <label>หัวข้อ</label>
          <input type="text" placeholder="Enter" />
        </div>
        <div className="form-group">
          <label>หัวข้อย่อย</label>
          <input type="text" placeholder="Enter" />
        </div>
        <div className="form-group">
          <label>วันที่</label>
          <select>
            <option>วันที่</option>
          </select>
        </div>
        <div className="form-group">
          <label>รายละเอียด</label>
          <textarea placeholder="Enter"></textarea>
        </div>

 
        {/* สถานะเปิด/ปิด */}
        <div className="status-toggle">
          <label>สถานะ</label>
          <button 
            className={`status-btn ${isActive ? 'active' : ''}`} 
            onClick={toggleStatus}
          >
            {isActive ? 'เปิด' : 'ปิด'}
          </button>
        </div>

        <div className="form-actions">
          <button className="btn-save" onClick={handleSaveClick}>
            บันทึก
          </button>
          <button className="btn-cancel">ยกเลิก</button>
        </div>
      </div>

      {/* Popup Confirmation */}
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <h3>ยืนยันการบันทึก</h3>
            <p>คุณต้องการบันทึกข้อมูลนี้ใช่หรือไม่?</p>
            <div className="popup-actions">
              <button className="btn-confirm" onClick={handleConfirmSave}>
                ยืนยัน
              </button>
              <button className="btn-cancel" onClick={handleCancelSave}>
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Banner;
