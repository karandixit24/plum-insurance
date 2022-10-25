import React, { useState } from "react";

function BasicDetails({
  Arrowup,
  pincodeInput,
  addInput,
  stateInput,
  addInputFunc,
  pincodeInputFunc,
  stateInputFunc,
  emailInput,
  emailInputFunc,
  mobileInput,
  mobileInputFunc,
}) {
  return (
    <div className="basic-details-wrapper">
      <div className="basic-details-head-wrapper">
        <div className="plan-details-head">
          Basic details{" "}
          <span className="basic-details-required">(required)</span>{" "}
        </div>
        <img className="plan-details-img" src={Arrowup}></img>
      </div>

      <div className="col-parent">
        <div className="col">
          <div className="inner-col">
            <label for="email">Personal Email Address</label>
            <input
              type="email"
              id="email"
              defaultValue={emailInput}
              onChange={emailInputFunc}
              className="input-form"
              placeholder="Enter"
            ></input>
          </div>

          <div className="inner-col">
            <label for="number">Mobile Number</label>
            <input
              type="number"
              id="number"
              defaultValue={mobileInput}
              onChange={mobileInputFunc}
              className="input-form"
              placeholder="Enter"
            ></input>
          </div>
        </div>

        <div className="col">
          <div className="inner-col">
            <label for="address-one">Address one</label>
            <input
              type="text"
              id="address-one"
              className="input-form"
              placeholder="Enter"
            ></input>
          </div>

          <div className="inner-col">
            <label for="address-two">Address two</label>
            <input
              type="text"
              defaultValue={addInput}
              onChange={addInputFunc}
              id="address-two"
              className="input-form"
              placeholder="Enter"
            ></input>
          </div>
        </div>

        <div className="col">
          <div className="inner-col">
            <label for="pincode">Pincode</label>
            <input
              type="number"
              defaultValue={pincodeInput}
              onChange={pincodeInputFunc}
              id="pincode"
              className="input-form"
              placeholder="Enter"
            ></input>
          </div>

          <div className="inner-col">
            <label for="state">State</label>
            <input
              type="text"
              defaultValue={stateInput}
              onChange={stateInputFunc}
              id="state"
              className="input-form"
              placeholder="Enter"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicDetails;
