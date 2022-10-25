import React from 'react'

function FormPreview() {
  return (
    <div className="form-preview-wrapper">
    <div className="form-preview-head">Form preview</div>
    <div className="form-preview-body">
      <div className="form-preview-body-text-container">
        <div className="form-preview-body-text">
          Personal email address
        </div>
        {/* <div className="form-preview-body-text-rt">-</div> */}
      </div>
      <div className="form-preview-body-text-container">
        <div className="form-preview-body-text">Mobile number</div>
        <div className="form-preview-body-text-rt">-</div>
      </div>

      <div className="form-preview-body-text-container">
        <div className="form-preview-body-text">Address line 01</div>
        <div className="form-preview-body-text-rt">-</div>
      </div>

      <div className="form-preview-body-text-container">
        <div className="form-preview-body-text">Address line 02</div>
        <div className="form-preview-body-text-rt">-</div>
      </div>

      <div className="form-preview-body-text-container">
        <div className="form-preview-body-text">Pincode</div>
        <div className="form-preview-body-text-rt">-</div>
      </div>

      <div className="form-preview-body-text-container">
        <div className="form-preview-body-text">State</div>
        <div className="form-preview-body-text-rt">-</div>
      </div>
    </div>
  </div>
  )
}

export default FormPreview