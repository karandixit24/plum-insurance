import React from "react";

function FourthScreen({ BackBtn, planSliderType, emailInput, congratsFinal, mobileInput, fourthScreenBack, stateInput, addInput, pincodeInput }) {
  // console.log(planSliderType);
  return (
    <div className="fourth-screen-container">
      <div className="four-screen-head-wrapper" >
      <div className="four-screen-head">
        <div className="deductible-back-arrow-4">
          <img onClick={ fourthScreenBack} src={BackBtn}></img>
        </div>

        <div className="third-screen-head-txt-4">
         {congratsFinal}
        </div>
      </div>
      </div>

      <div className="four-screen-body-container" >
       <div className="four-screen-body" >
         <div className="four-col" >
          <div className="key-selected" >Plan selected</div>
          <div className="key-selected-out" >{planSliderType}</div>
         </div>
         <div className="four-col" >
         <div className="key-selected" >Mobile number</div>
          <div className="key-selected-out" >{mobileInput}</div>
         </div>
         <div className="four-col" >
         <div className="key-selected" >Address line 01</div>
          <div className="key-selected-out" > {addInput} </div>
         </div>
         <div className="four-col" >
         <div className="key-selected" >Pincode</div>
          <div className="key-selected-out" > {pincodeInput} </div>
         </div>

         <div className="four-col" >
         <div className="key-selected" >State</div>
          <div className="key-selected-out" > {stateInput} </div>
         </div>
       </div>
      </div>
      
    </div>
  );
}

export default FourthScreen;
