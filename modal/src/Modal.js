import React, { useState } from "react";
import "./Modal.css";

function Modal({ show, handleClose, handleSubmit, formData, setFormData }) {
  const initialFormData = {
    username: "",
    email: "",
    phone: "",
    dob: "",
  };

  const [localFormData, setLocalFormData] = useState(initialFormData);

  return (
    <div className={show ? "modal display-block" : "modal display-none"} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Fill Details</h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e, localFormData, setLocalFormData);
            // Reset the form data to initial state
            setLocalFormData(initialFormData);
          }}
        >
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={localFormData.username}
            onChange={(e) => setLocalFormData({ ...localFormData, username: e.target.value })}
            required
          />
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={localFormData.email}
            onChange={(e) => setLocalFormData({ ...localFormData, email: e.target.value })}
          />
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={localFormData.phone}
            onChange={(e) => setLocalFormData({ ...localFormData, phone: e.target.value })}
          />
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={localFormData.dob}
            onChange={(e) => setLocalFormData({ ...localFormData, dob: e.target.value })}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        {/* <button onClick={handleClose}>Close</button> */}
      </div>
    </div>
  );
}

export default Modal;