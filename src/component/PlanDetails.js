import React from "react";

function PlanDetails({
  Arrowup,
  ArrowDown,
  openPlanOptions,
  viewPlan,
  selectPlan,
  onSelectHandler,
  planTypeData,
}) {
  return (
    <div className="plan-details-wrapper">
      <div className="plan-details-head-wrapper">
        <div className="plan-details-head">Plan details</div>
        <img className="plan-details-img" src={Arrowup}></img>
      </div>
      <div className="plan-details-option">
        <label for="plan">Your Plan Type</label>
        <div className="plan-box">
          <div className="plan-box-container" onClick={openPlanOptions}>
            <div>{selectPlan}</div>
            <img className="plan-details-img" src={ArrowDown}></img>
          </div>

          {viewPlan ? (
            <div className="view-plan-types">
              {planTypeData.map((atom) => {
                return (
                  <div className="plan-dropdown-option-container">
                    <div className="option-label">
                     <div className="atom-type" >{atom.type}</div> <div className="atom-typeplan" >({atom.typePlan} )</div> {" "}
                    </div>
                    <div className="option-detail" onClick={onSelectHandler} >
                      <div className="option-plan-name-wrapper">
                        <img className="option-img" src={atom.icon}></img>
                        <div className="option-plan-name">
                          {atom.nameOfPlan}
                        </div>
                      </div>
                      <div className="option-plan-price">{atom.price}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default PlanDetails;
