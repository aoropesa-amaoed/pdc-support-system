import React from 'react';

function AddFormModal({ toggleModal, goToFormPage }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted in modal!');
    toggleModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Outlet</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="branchCode">Branch Code:</label>
          <input type="text" id="branchCode" name="branchCode" required />
          <label htmlFor="outletCode">Outlet Code:</label>
          <input type="text" id="outletCode" name="outletCode" required />
          <label htmlFor="outletName">Outlet Name:</label>
          <input type="text" id="outletName" name="outletName" required />
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />
          <button type="submit">Submit</button>
          <button type="button" onClick={toggleModal}>Cancel</button>
          <button type="button" onClick={goToFormPage}>Add (Go to separate page)</button>
        </form>
      </div>
    </div>
  );
}

export default AddFormModal;
