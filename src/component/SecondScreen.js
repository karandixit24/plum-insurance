import React from "react";
import PlanSlider from "./PlanSlider";

function SecondScreen({backArrowHandle, BackBtn , planSliderType, secondCheckVal,nextClickHandler, secondCheckValTwo }) {
    console.log(backArrowHandle);
  return (
    <div className="deductible-container">
      <div className="deductible-container-head">
        <div className="deductible-back-arrow" onClick={backArrowHandle}>
          <img src={BackBtn}></img> 
        </div>
        <div className="main-deductible-content">
          <div className="deductible-main-heading">Select Your Deductible Amount</div>
          <div className="deductible-main-info" >
            Select the deductible amount for the policy (or policies) below.
            <br></br>
            <a className="link-info" href="#" title="blank">
              (What is deductible?)
            </a>
          </div>
        </div>
      </div>
      <PlanSlider
      secondCheckVal={secondCheckVal}
      planSliderType={planSliderType}
      nextClickHandler={nextClickHandler}
      secondCheckValTwo={secondCheckValTwo}
      />
    </div>
  );
}

export default SecondScreen;
