import React from 'react'
import PlanDetails from './PlanDetails';
import BasicDetails from './BasicDetails';

function FirstScreen({
  pincodeInput,
  addInput,
  stateInput,
  addInputFunc,
  pincodeInputFunc,
  stateInputFunc,
    emailInput,
    Arrowup,
    mobileInputFunc,
    ArrowDown,
    emailInputFunc,
    openPlanOptions,
    viewPlan,
    mobileInput,
    onSelectHandler,
    planTypeData,
    selectPlan

}) {
  return (
    <div className="choose-your-plan-wrapper">
            <div className="heading">Choose your plan</div>
            <div className="para-wrapper">
              <div className="para-i">Hello Anisha,</div>
              <div className="para-ii">
                Increase yours and your family's health insurance cover by{" "}
                <span className="para-ii-bold">₹20 lakhs</span> with
              </div>
              <div className="para-iii">Super top-up!</div>
            </div>

            <PlanDetails
              Arrowup={Arrowup}
              ArrowDown={ArrowDown}
              openPlanOptions={openPlanOptions}
              viewPlan={viewPlan}
              onSelectHandler={onSelectHandler}
              planTypeData={planTypeData}
              selectPlan={selectPlan}
            />

            <BasicDetails 
            stateInputFunc={stateInputFunc}
            pincodeInputFunc={pincodeInputFunc}
            addInputFunc={addInputFunc}
            stateInput={stateInput}
            addInput={addInput}
            pincodeInput={pincodeInput}
            emailInput={emailInput}
            emailInputFunc={emailInputFunc}
            mobileInput={mobileInput}
            mobileInputFunc={mobileInputFunc}
            Arrowup={Arrowup} />
          </div>
  )
}

export default FirstScreen